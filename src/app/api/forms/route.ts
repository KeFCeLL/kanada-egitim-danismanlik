import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { forms, formFields } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// GET /api/forms
export async function GET() {
  try {
    const allForms = await db.select().from(forms);
    return NextResponse.json(allForms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch forms' }, { status: 500 });
  }
}

// POST /api/forms
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, isActive, submitButtonText, fields } = body;

    const formId = uuidv4();

    // Create form
    const newForm = await db.insert(forms).values({
      id: formId,
      title,
      description,
      isActive: isActive ? 1 : 0,
      submitButtonText,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }).returning();

    // Create form fields
    if (fields && fields.length > 0) {
      await db.insert(formFields).values(
        fields.map((field: any, index: number) => ({
          id: uuidv4(),
          formId,
          label: field.label,
          type: field.type,
          required: field.required ? 1 : 0,
          options: field.options ? JSON.stringify(field.options) : null,
          placeholder: field.placeholder,
          order: index + 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }))
      );
    }

    return NextResponse.json(newForm[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create form' }, { status: 500 });
  }
}

// PUT /api/forms/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, isActive, submitButtonText, fields } = body;

    // Update form
    const updatedForm = await db.update(forms)
      .set({
        title,
        description,
        isActive: isActive ? 1 : 0,
        submitButtonText,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(forms.id, id))
      .returning();

    if (!updatedForm.length) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    // Update form fields
    if (fields && fields.length > 0) {
      // Delete existing fields
      await db.delete(formFields).where(eq(formFields.formId, id));

      // Insert new fields
      await db.insert(formFields).values(
        fields.map((field: any, index: number) => ({
          id: uuidv4(),
          formId: id,
          label: field.label,
          type: field.type,
          required: field.required ? 1 : 0,
          options: field.options ? JSON.stringify(field.options) : null,
          placeholder: field.placeholder,
          order: index + 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }))
      );
    }

    return NextResponse.json(updatedForm[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update form' }, { status: 500 });
  }
}

// DELETE /api/forms/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Delete form fields first
    await db.delete(formFields).where(eq(formFields.formId, id));

    // Delete form
    await db.delete(forms).where(eq(forms.id, id));

    return NextResponse.json({ message: 'Form deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete form' }, { status: 500 });
  }
} 
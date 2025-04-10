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
      is_active: isActive ? 1 : 0,
      submit_button_text: submitButtonText,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }).returning();

    // Create form fields
    if (fields && fields.length > 0) {
      await db.insert(formFields).values(
        fields.map((field: any, index: number) => ({
          id: uuidv4(),
          form_id: formId,
          label: field.label,
          type: field.type,
          required: field.required ? 1 : 0,
          options: field.options ? JSON.stringify(field.options) : null,
          placeholder: field.placeholder,
          order: index + 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
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
        is_active: isActive ? 1 : 0,
        submit_button_text: submitButtonText,
        updated_at: new Date().toISOString(),
      })
      .where(eq(forms.id, id))
      .returning();

    if (!updatedForm.length) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    // Delete existing fields
    await db.delete(formFields).where(eq(formFields.form_id, id));

    // Create new fields
    if (fields && fields.length > 0) {
      await db.insert(formFields).values(
        fields.map((field: any, index: number) => ({
          id: uuidv4(),
          form_id: id,
          label: field.label,
          type: field.type,
          required: field.required ? 1 : 0,
          options: field.options ? JSON.stringify(field.options) : null,
          placeholder: field.placeholder,
          order: index + 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
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
      return NextResponse.json({ error: 'Form ID is required' }, { status: 400 });
    }

    // Delete form fields first (due to foreign key constraint)
    await db.delete(formFields).where(eq(formFields.form_id, id));

    // Delete form
    const deletedForm = await db.delete(forms)
      .where(eq(forms.id, id))
      .returning();

    if (!deletedForm.length) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Form deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete form' }, { status: 500 });
  }
} 
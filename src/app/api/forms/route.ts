import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';

// GET /api/forms
export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM forms
      ORDER BY createdAt DESC
    `;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/forms
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, isActive, submitButtonText, fields } = body;

    // Validate required fields
    if (!title || !description || !submitButtonText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const formId = uuidv4();

    // Create form
    const result = await sql`
      INSERT INTO forms (
        id,
        title,
        description,
        isActive,
        submitButtonText,
        createdAt,
        updatedAt
      ) VALUES (
        ${formId},
        ${title},
        ${description},
        ${isActive || true},
        ${submitButtonText},
        NOW(),
        NOW()
      )
      RETURNING *
    `;

    // Create form fields
    if (fields && fields.length > 0) {
      await sql`
        INSERT INTO formFields (
          id,
          formId,
          label,
          type,
          required,
          options,
          placeholder,
          "order",
          createdAt,
          updatedAt
        ) VALUES ${sql.join(
          fields.map((field: any, index: number) => sql`(
            ${uuidv4()},
            ${formId},
            ${field.label},
            ${field.type},
            ${field.required || false},
            ${field.options ? JSON.stringify(field.options) : null},
            ${field.placeholder},
            ${index + 1},
            NOW(),
            NOW()
          )`),
          sql`,`
        )}
      `;
    }

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/forms/:id
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, isActive, submitButtonText, fields } = body;

    // Validate required fields
    if (!id || !title || !description || !submitButtonText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update form
    const result = await sql`
      UPDATE forms
      SET 
        title = ${title},
        description = ${description},
        isActive = ${isActive},
        submitButtonText = ${submitButtonText},
        updatedAt = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      );
    }

    // Update form fields
    if (fields && fields.length > 0) {
      // Delete existing fields
      await sql`
        DELETE FROM formFields
        WHERE formId = ${id}
      `;

      // Insert new fields
      await sql`
        INSERT INTO formFields (
          id,
          formId,
          label,
          type,
          required,
          options,
          placeholder,
          "order",
          createdAt,
          updatedAt
        ) VALUES ${sql.join(
          fields.map((field: any, index: number) => sql`(
            ${uuidv4()},
            ${id},
            ${field.label},
            ${field.type},
            ${field.required || false},
            ${field.options ? JSON.stringify(field.options) : null},
            ${field.placeholder},
            ${index + 1},
            NOW(),
            NOW()
          )`),
          sql`,`
        )}
      `;
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/forms/:id
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing form ID' },
        { status: 400 }
      );
    }

    // Delete form fields first
    await sql`
      DELETE FROM formFields
      WHERE formId = ${id}
    `;

    // Delete form
    const result = await sql`
      DELETE FROM forms
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Error deleting form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
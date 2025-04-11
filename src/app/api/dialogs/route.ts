import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';

// GET /api/dialogs
export async function GET(request: NextRequest) {
  try {
    const result = await sql`
      SELECT * FROM dialogs
      ORDER BY createdAt DESC
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching dialogs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/dialogs
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, type, isActive, startDate, endDate, targetPage } = body;

    // Validate required fields
    if (!title || !content || !type || !startDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO dialogs (
        id,
        title,
        content,
        type,
        isActive,
        startDate,
        endDate,
        targetPage,
        createdAt,
        updatedAt
      ) VALUES (
        ${uuidv4()},
        ${title},
        ${content},
        ${type},
        ${isActive || true},
        ${startDate},
        ${endDate},
        ${targetPage},
        NOW(),
        NOW()
      )
      RETURNING *
    `;

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating dialog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/dialogs/:id
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, content, type, isActive, startDate, endDate, targetPage } = body;

    // Validate required fields
    if (!id || !title || !content || !type || !startDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sql`
      UPDATE dialogs
      SET 
        title = ${title},
        content = ${content},
        type = ${type},
        isActive = ${isActive},
        startDate = ${startDate},
        endDate = ${endDate},
        targetPage = ${targetPage},
        updatedAt = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Dialog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating dialog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/dialogs/:id
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing dialog ID' },
        { status: 400 }
      );
    }

    const result = await sql`
      DELETE FROM dialogs
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Dialog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Dialog deleted successfully' });
  } catch (error) {
    console.error('Error deleting dialog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';

// GET /api/content
export async function GET(request: NextRequest) {
  try {
    const result = await sql`
      SELECT * FROM content_sections
      ORDER BY createdAt DESC
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/content
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, page, content, isActive } = body;

    // Validate required fields
    if (!title || !page || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO content_sections (
        id,
        title,
        page,
        content,
        isActive,
        createdAt,
        updatedAt
      ) VALUES (
        ${uuidv4()},
        ${title},
        ${page},
        ${content},
        ${isActive || true},
        NOW(),
        NOW()
      )
      RETURNING *
    `;

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/content/:id
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, page, content, isActive } = body;

    // Validate required fields
    if (!id || !title || !page || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sql`
      UPDATE content_sections
      SET 
        title = ${title},
        page = ${page},
        content = ${content},
        isActive = ${isActive},
        updatedAt = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Content section not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/content/:id
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing content section ID' },
        { status: 400 }
      );
    }

    const result = await sql`
      DELETE FROM content_sections
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Content section not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Content section deleted successfully' });
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
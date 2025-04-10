import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contentSections } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// GET /api/content
export async function GET() {
  try {
    const allContent = await db.select().from(contentSections);
    return NextResponse.json(allContent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content sections' }, { status: 500 });
  }
}

// POST /api/content
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, page, content, isActive } = body;

    const newContent = await db.insert(contentSections).values({
      id: uuidv4(),
      title,
      page,
      content,
      isActive: isActive ? 1 : 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }).returning();

    return NextResponse.json(newContent[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create content section' }, { status: 500 });
  }
}

// PUT /api/content/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, page, content, isActive } = body;

    const updatedContent = await db.update(contentSections)
      .set({
        title,
        page,
        content,
        isActive: isActive ? 1 : 0,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(contentSections.id, id))
      .returning();

    if (!updatedContent.length) {
      return NextResponse.json({ error: 'Content section not found' }, { status: 404 });
    }

    return NextResponse.json(updatedContent[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content section' }, { status: 500 });
  }
}

// DELETE /api/content/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await db.delete(contentSections).where(eq(contentSections.id, id));
    return NextResponse.json({ message: 'Content section deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete content section' }, { status: 500 });
  }
} 
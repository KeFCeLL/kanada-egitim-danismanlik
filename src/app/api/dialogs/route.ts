import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { dialogs } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// GET /api/dialogs
export async function GET() {
  try {
    const allDialogs = await db.select().from(dialogs);
    return NextResponse.json(allDialogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch dialogs' }, { status: 500 });
  }
}

// POST /api/dialogs
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, type, isActive, startDate, endDate, targetPage } = body;

    const newDialog = await db.insert(dialogs).values({
      id: uuidv4(),
      title,
      content,
      type,
      is_active: isActive ? 1 : 0,
      start_date: startDate,
      end_date: endDate,
      target_page: targetPage,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }).returning();

    return NextResponse.json(newDialog[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create dialog' }, { status: 500 });
  }
}

// PUT /api/dialogs/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, content, type, isActive, startDate, endDate, targetPage } = body;

    const updatedDialog = await db.update(dialogs)
      .set({
        title,
        content,
        type,
        is_active: isActive ? 1 : 0,
        start_date: startDate,
        end_date: endDate,
        target_page: targetPage,
        updated_at: new Date().toISOString(),
      })
      .where(eq(dialogs.id, id))
      .returning();

    if (!updatedDialog.length) {
      return NextResponse.json({ error: 'Dialog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedDialog[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update dialog' }, { status: 500 });
  }
}

// DELETE /api/dialogs/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Dialog ID is required' }, { status: 400 });
    }

    const deletedDialog = await db.delete(dialogs)
      .where(eq(dialogs.id, id))
      .returning();

    if (!deletedDialog.length) {
      return NextResponse.json({ error: 'Dialog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Dialog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete dialog' }, { status: 500 });
  }
} 
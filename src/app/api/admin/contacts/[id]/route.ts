import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const contact = await db.query.contacts.findFirst({
      where: eq(contacts.id, params.id),
    });

    if (!contact) {
      return NextResponse.json(
        { error: 'İletişim formu bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Contact fetch error:', error);
    return NextResponse.json(
      { error: 'İletişim formu yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();

    const [updatedContact] = await db
      .update(contacts)
      .set({ status })
      .where(eq(contacts.id, params.id))
      .returning();

    if (!updatedContact) {
      return NextResponse.json(
        { error: 'İletişim formu bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error('Contact update error:', error);
    return NextResponse.json(
      { error: 'İletişim formu güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
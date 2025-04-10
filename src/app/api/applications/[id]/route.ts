import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, context.params.id))
      .limit(1);

    if (!application.length) {
      return NextResponse.json(
        { error: 'Başvuru bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(application[0]);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json(
      { error: 'Başvuru alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Durum alanı gereklidir' },
        { status: 400 }
      );
    }

    const updatedApplication = await db
      .update(applications)
      .set({ status, updatedAt: new Date() })
      .where(eq(applications.id, context.params.id))
      .returning();

    if (!updatedApplication.length) {
      return NextResponse.json(
        { error: 'Başvuru bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedApplication[0]);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Başvuru güncellenirken bir hata oluştu' },
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
    
    const updatedApplication = await db
      .update(applications)
      .set({ status })
      .where(eq(applications.id, params.id))
      .returning();

    if (!updatedApplication.length) {
      return NextResponse.json(
        { error: 'Başvuru bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedApplication[0]);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Başvuru güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
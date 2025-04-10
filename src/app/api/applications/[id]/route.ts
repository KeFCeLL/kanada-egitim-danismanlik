import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, params.id))
      .get();

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json(
      { error: 'Failed to fetch application' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    
    const result = await db
      .update(applications)
      .set({
        ...data,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(applications.id, params.id))
      .returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Failed to update application' },
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
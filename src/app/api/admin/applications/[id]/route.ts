import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const application = await db.query.applications.findFirst({
      where: (applications, { eq }) => eq(applications.id, params.id),
    });

    if (!application) {
      return NextResponse.json(
        { error: 'Başvuru bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json(
      { error: 'Başvuru yüklenirken bir hata oluştu' },
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

    const application = await db.query.applications.findFirst({
      where: (applications, { eq }) => eq(applications.id, params.id),
    });

    if (!application) {
      return NextResponse.json(
        { error: 'Başvuru bulunamadı' },
        { status: 404 }
      );
    }

    await db
      .update(applications)
      .set({ status })
      .where(eq(applications.id, params.id));

    return NextResponse.json({ ...application, status });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Başvuru güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
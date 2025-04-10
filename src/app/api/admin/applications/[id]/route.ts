import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

type RouteHandlerContext = {
  params: {
    id: string;
  };
};

export async function GET(
  request: NextRequest,
  context: RouteHandlerContext
) {
  try {
    const application = await db.query.applications.findFirst({
      where: eq(applications.id, context.params.id),
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteHandlerContext
) {
  try {
    const body = await request.json();
    const { status } = body;

    const updatedApplication = await db
      .update(applications)
      .set({ status })
      .where(eq(applications.id, context.params.id))
      .returning();

    if (!updatedApplication.length) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json(updatedApplication[0]);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const application = await db.query.applications.findFirst({
      where: eq(applications.id, params.id),
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Format the application data
    const formattedApplication = {
      id: application.id,
      firstName: application.firstName,
      lastName: application.lastName,
      email: application.email,
      phone: application.phone,
      birthDate: application.birthDate,
      address: application.address,
      city: application.city,
      country: application.country,
      postalCode: application.postalCode,
      educationLevel: application.educationLevel,
      workExperience: application.workExperience || '',
      englishLevel: application.englishLevel || '',
      frenchLevel: application.frenchLevel || '',
      program: application.program,
      startDate: application.startDate,
      budget: Number(application.budget),
      status: (application.status as ApplicationStatus) || 'pending',
      createdAt: application.createdAt || new Date().toISOString(),
      updatedAt: application.updatedAt || new Date().toISOString()
    };

    return NextResponse.json(formattedApplication);
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
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    const updatedApplication = await db
      .update(applications)
      .set({ 
        status,
        updatedAt: new Date().toISOString()
      })
      .where(eq(applications.id, params.id))
      .returning();

    if (!updatedApplication.length) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Format the updated application data
    const formattedApplication = {
      id: updatedApplication[0].id,
      firstName: updatedApplication[0].firstName,
      lastName: updatedApplication[0].lastName,
      email: updatedApplication[0].email,
      phone: updatedApplication[0].phone,
      birthDate: updatedApplication[0].birthDate,
      address: updatedApplication[0].address,
      city: updatedApplication[0].city,
      country: updatedApplication[0].country,
      postalCode: updatedApplication[0].postalCode,
      educationLevel: updatedApplication[0].educationLevel,
      workExperience: updatedApplication[0].workExperience || '',
      englishLevel: updatedApplication[0].englishLevel || '',
      frenchLevel: updatedApplication[0].frenchLevel || '',
      program: updatedApplication[0].program,
      startDate: updatedApplication[0].startDate,
      budget: Number(updatedApplication[0].budget),
      status: (updatedApplication[0].status as ApplicationStatus) || 'pending',
      createdAt: updatedApplication[0].createdAt || new Date().toISOString(),
      updatedAt: updatedApplication[0].updatedAt || new Date().toISOString()
    };

    return NextResponse.json(formattedApplication);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
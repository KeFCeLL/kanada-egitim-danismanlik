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
      firstName: application.first_name,
      lastName: application.last_name,
      email: application.email,
      phone: application.phone,
      birthDate: application.birth_date,
      address: application.address,
      city: application.city,
      country: application.country,
      postalCode: application.postal_code,
      educationLevel: application.education_level,
      workExperience: application.work_experience || '',
      englishLevel: application.english_level || '',
      frenchLevel: application.french_level || '',
      program: application.program,
      startDate: application.start_date,
      budget: Number(application.budget),
      status: (application.status as ApplicationStatus) || 'pending',
      createdAt: application.created_at || new Date().toISOString(),
      updatedAt: application.updated_at || new Date().toISOString()
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
        updated_at: new Date().toISOString()
      })
      .where(eq(applications.id, params.id))
      .returning();

    if (!updatedApplication.length) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Format the updated application data
    const formattedApplication = {
      id: updatedApplication[0].id,
      firstName: updatedApplication[0].first_name,
      lastName: updatedApplication[0].last_name,
      email: updatedApplication[0].email,
      phone: updatedApplication[0].phone,
      birthDate: updatedApplication[0].birth_date,
      address: updatedApplication[0].address,
      city: updatedApplication[0].city,
      country: updatedApplication[0].country,
      postalCode: updatedApplication[0].postal_code,
      educationLevel: updatedApplication[0].education_level,
      workExperience: updatedApplication[0].work_experience || '',
      englishLevel: updatedApplication[0].english_level || '',
      frenchLevel: updatedApplication[0].french_level || '',
      program: updatedApplication[0].program,
      startDate: updatedApplication[0].start_date,
      budget: Number(updatedApplication[0].budget),
      status: (updatedApplication[0].status as ApplicationStatus) || 'pending',
      createdAt: updatedApplication[0].created_at || new Date().toISOString(),
      updatedAt: updatedApplication[0].updated_at || new Date().toISOString()
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
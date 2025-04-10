import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

export async function GET() {
  try {
    const results = await db.select().from(applications).orderBy(desc(applications.created_at));
    
    const formattedApplications = results.map(app => ({
      id: app.id,
      firstName: app.first_name,
      lastName: app.last_name,
      email: app.email,
      phone: app.phone,
      birthDate: app.birth_date,
      address: app.address,
      city: app.city,
      country: app.country,
      postalCode: app.postal_code,
      educationLevel: app.education_level,
      workExperience: app.work_experience || '',
      englishLevel: app.english_level || '',
      frenchLevel: app.french_level || '',
      program: app.program,
      startDate: app.start_date,
      budget: Number(app.budget),
      status: app.status,
      createdAt: app.created_at,
      updatedAt: app.updated_at
    }));

    return NextResponse.json(formattedApplications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
} 
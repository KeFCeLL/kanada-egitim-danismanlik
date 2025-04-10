import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

export async function GET() {
  try {
    const results = await db.select().from(applications).orderBy(desc(applications.createdAt));
    
    const formattedApplications = results.map(app => ({
      id: app.id,
      firstName: app.firstName,
      lastName: app.lastName,
      email: app.email,
      phone: app.phone,
      birthDate: app.birthDate,
      address: app.address,
      city: app.city,
      country: app.country,
      postalCode: app.postalCode,
      educationLevel: app.educationLevel,
      workExperience: app.workExperience || '',
      englishLevel: app.englishLevel || '',
      frenchLevel: app.frenchLevel || '',
      program: app.program,
      startDate: app.startDate,
      budget: app.budget,
      status: app.status,
      createdAt: app.createdAt,
      updatedAt: app.updatedAt
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
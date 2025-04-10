import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

export async function GET() {
  try {
    const allApplications = await db
      .select()
      .from(applications)
      .orderBy(desc(applications.createdAt));
    
    // Format the applications data
    const formattedApplications = allApplications.map(app => ({
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
      status: app.status as ApplicationStatus,
      createdAt: app.createdAt,
      updatedAt: app.updatedAt
    }));

    return NextResponse.json(formattedApplications);
  } catch (error: any) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { 
        error: 'Başvurular alınırken bir hata oluştu',
        details: process.env.NODE_ENV === 'development' ? {
          message: error?.message,
          stack: error?.stack,
          code: error?.code
        } : undefined
      },
      { status: 500 }
    );
  }
} 
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
      .orderBy(desc(applications.created_at));
    
    // Convert database fields to camelCase for frontend and handle optional fields
    const formattedApplications = allApplications.map(app => ({
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
      status: (app.status as ApplicationStatus) || 'pending',
      createdAt: app.created_at || new Date().toISOString(),
      updatedAt: app.updated_at || new Date().toISOString()
    }));

    console.log('Fetched applications:', formattedApplications);
    
    return NextResponse.json(formattedApplications);
  } catch (error: any) {
    console.error('Error fetching applications:', error);
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack,
      code: error?.code
    });
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
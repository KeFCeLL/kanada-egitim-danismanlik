import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { sql } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

async function testDatabaseConnection() {
  try {
    await db.execute(sql`SELECT 1`);
    return true;
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
    return false;
  }
}

export async function GET() {
  try {
    const isConnected = await testDatabaseConnection();
    if (!isConnected) {
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const allApplications = await db
      .select()
      .from(applications)
      .orderBy(desc(applications.createdAt));
    
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
      budget: Number(app.budget),
      status: app.status,
      createdAt: app.createdAt,
      updatedAt: app.updatedAt
    }));

    return NextResponse.json(formattedApplications);
  } catch (error: any) {
    console.error('Başvurular alınırken hata:', error);
    return NextResponse.json(
      { 
        error: 'Başvurular alınırken bir hata oluştu',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    );
  }
} 
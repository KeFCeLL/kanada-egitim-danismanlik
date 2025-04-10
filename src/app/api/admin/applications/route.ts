import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { sql } from 'drizzle-orm';

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

// Veritabanı bağlantısını test et
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
      console.error('Database connection failed');
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const allApplications = await db
      .select()
      .from(applications)
      .orderBy(desc(applications.createdAt));
    
    // Convert null values to empty strings for optional fields
    const formattedApplications = allApplications.map(app => ({
      ...app,
      workExperience: app.workExperience || '',
      englishLevel: app.englishLevel || '',
      frenchLevel: app.frenchLevel || '',
      budget: Number(app.budget), // Convert budget to number
      status: (app.status as ApplicationStatus) || 'pending'
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
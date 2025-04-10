import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { sql } from 'drizzle-orm';

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
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const allApplications = await db
      .select()
      .from(applications)
      .orderBy(desc(applications.createdAt));
    
    return NextResponse.json(allApplications);
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

export async function POST(request: Request) {
  try {
    const isConnected = await testDatabaseConnection();
    if (!isConnected) {
      console.error('Database connection failed');
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const data = await request.json();
    console.log('Received data:', data);
    
    // Veri doğrulama
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'birthDate',
      'address',
      'city',
      'country',
      'postalCode',
      'educationLevel',
      'program',
      'startDate',
      'budget'
    ];

    const missingFields = requiredFields.filter(field => !data[field]);
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          error: 'Eksik alanlar mevcut',
          fields: missingFields 
        },
        { status: 400 }
      );
    }

    // E-posta formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      console.error('Invalid email format:', data.email);
      return NextResponse.json(
        { error: 'Geçersiz e-posta adresi' },
        { status: 400 }
      );
    }

    // Telefon formatı kontrolü
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      console.error('Invalid phone format:', data.phone);
      return NextResponse.json(
        { error: 'Geçersiz telefon numarası' },
        { status: 400 }
      );
    }

    // Bütçe kontrolü
    if (isNaN(Number(data.budget)) || Number(data.budget) <= 0) {
      console.error('Invalid budget value:', data.budget);
      return NextResponse.json(
        { error: 'Geçersiz bütçe değeri' },
        { status: 400 }
      );
    }

    // Başvuru verilerini hazırla
    const applicationData = {
      id: nanoid(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      birthDate: data.birthDate,
      address: data.address,
      city: data.city,
      country: data.country,
      postalCode: data.postalCode,
      educationLevel: data.educationLevel,
      workExperience: data.workExperience || '',
      englishLevel: data.englishLevel || '',
      frenchLevel: data.frenchLevel || '',
      program: data.program,
      startDate: data.startDate,
      budget: String(data.budget), // Convert to string as per schema
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    console.log('Prepared application data:', applicationData);

    // Veritabanına kaydet
    try {
      const result = await db.insert(applications).values(applicationData).returning();
      console.log('Database insertion result:', result);
      
      if (!result || result.length === 0) {
        throw new Error('Başvuru kaydedilemedi');
      }

      return NextResponse.json(
        { 
          message: 'Başvuru başarıyla kaydedildi',
          application: result[0]
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error('Database insertion error:', dbError);
      throw dbError;
    }
  } catch (error: any) {
    console.error('Application submission error:', error);
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack,
      code: error?.code
    });
    return NextResponse.json(
      { 
        error: 'Başvuru kaydedilirken bir hata oluştu',
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
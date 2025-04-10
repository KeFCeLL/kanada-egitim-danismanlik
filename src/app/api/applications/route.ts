import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export async function GET() {
  try {
    const allApplications = await db
      .select()
      .from(applications)
      .orderBy(desc(applications.createdAt));
    
    return NextResponse.json(allApplications);
  } catch (error) {
    console.error('Başvurular alınırken hata:', error);
    return NextResponse.json(
      { error: 'Başvurular alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
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
      return NextResponse.json(
        { error: 'Geçersiz e-posta adresi' },
        { status: 400 }
      );
    }

    // Telefon formatı kontrolü
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Geçersiz telefon numarası' },
        { status: 400 }
      );
    }

    // Bütçe kontrolü
    if (isNaN(Number(data.budget)) || Number(data.budget) <= 0) {
      return NextResponse.json(
        { error: 'Geçersiz bütçe değeri' },
        { status: 400 }
      );
    }

    // Veritabanı şemasına uygun veri formatı
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
      budget: String(data.budget),
      status: 'pending'
    };

    console.log('Yeni başvuru oluşturuluyor:', applicationData);

    const newApplication = await db.insert(applications).values(applicationData).returning();

    console.log('Başvuru başarıyla oluşturuldu:', newApplication[0]);

    return NextResponse.json(newApplication[0]);
  } catch (error) {
    console.error('Başvuru oluşturulurken hata:', error);
    return NextResponse.json(
      { 
        error: 'Başvuru oluşturulurken bir hata oluştu',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 
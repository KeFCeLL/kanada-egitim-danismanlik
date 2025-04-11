import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { eq } from 'drizzle-orm';
import { testConnection } from '@/lib/db';

// Helper function to retry database operations
async function retryOperation<T>(
  operation: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      console.error(`Operation attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Operation failed after all retries');
}

export async function GET() {
  try {
    // Test database connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const results = await retryOperation(async () => {
      return await db.select().from(applications);
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Başvurular yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Test database connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      return NextResponse.json(
        { error: 'Veritabanı bağlantısı kurulamadı' },
        { status: 500 }
      );
    }

    const data = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'birthDate',
      'nationality',
      'currentCountry',
      'educationLevel',
      'englishLevel',
      'frenchLevel',
      'programType',
      'programDuration',
      'startDate',
      'budget'
    ];
    
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Eksik alanlar: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Geçersiz e-posta formatı' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[0-9+\-\s()]{10,20}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Geçersiz telefon numarası formatı' },
        { status: 400 }
      );
    }

    // Validate dates
    const birthDate = new Date(data.birthDate);
    const startDate = new Date(data.startDate);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      return NextResponse.json(
        { error: 'Geçersiz doğum tarihi' },
        { status: 400 }
      );
    }

    if (isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: 'Geçersiz başlangıç tarihi' },
        { status: 400 }
      );
    }

    if (birthDate > today) {
      return NextResponse.json(
        { error: 'Doğum tarihi gelecekte olamaz' },
        { status: 400 }
      );
    }

    if (startDate < today) {
      return NextResponse.json(
        { error: 'Başlangıç tarihi geçmişte olamaz' },
        { status: 400 }
      );
    }

    // Validate budget
    const budget = parseFloat(data.budget);
    if (isNaN(budget) || budget <= 0) {
      return NextResponse.json(
        { error: 'Geçersiz bütçe değeri' },
        { status: 400 }
      );
    }

    // Insert application with retry mechanism
    const result = await retryOperation(async () => {
      return await db.insert(applications).values({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        birthDate: new Date(data.birthDate),
        nationality: data.nationality,
        currentCountry: data.currentCountry,
        educationLevel: data.educationLevel,
        englishLevel: data.englishLevel,
        frenchLevel: data.frenchLevel,
        programType: data.programType,
        programDuration: data.programDuration,
        startDate: new Date(data.startDate),
        budget: data.budget,
        notes: data.notes || null,
        createdAt: new Date(),
        updatedAt: new Date()
      }).returning();
    });

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating application:', error);
    return NextResponse.json(
      { error: 'Başvuru oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
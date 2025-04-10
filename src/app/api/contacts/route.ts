import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Veri doğrulama
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
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

    const newContact = await db.insert(contacts).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      status: 'pending'
    }).returning();

    return NextResponse.json(newContact[0]);
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { error: 'İletişim formu gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
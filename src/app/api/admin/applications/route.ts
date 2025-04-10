import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
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
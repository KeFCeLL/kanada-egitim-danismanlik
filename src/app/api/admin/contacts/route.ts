import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await sql`
      SELECT 
        id::text,
        name,
        email,
        phone,
        subject,
        message,
        status,
        created_at as "createdAt"
      FROM contacts
      ORDER BY created_at DESC
    `;
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'İletişim formları alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
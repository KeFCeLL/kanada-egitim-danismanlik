import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allContacts = await sql`
      SELECT * FROM ${contacts}
      ORDER BY ${contacts.createdAt} DESC
    `;
    
    return NextResponse.json(allContacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'İletişim formları alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format if provided
    if (phone) {
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { error: 'Invalid phone format' },
          { status: 400 }
        );
      }
    }

    // First check if the contacts table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contacts'
      )
    `;

    if (!tableExists[0].exists) {
      return NextResponse.json(
        { error: 'Contacts table does not exist' },
        { status: 500 }
      );
    }

    const result = await sql`
      INSERT INTO contacts (
        name,
        email,
        phone,
        subject,
        message,
        status,
        created_at,
        updated_at
      ) VALUES (
        ${name},
        ${email},
        ${phone || null},
        ${subject},
        ${message},
        'pending',
        NOW(),
        NOW()
      )
      RETURNING *
    `;

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 
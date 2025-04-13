import { NextRequest, NextResponse } from 'next/server';
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
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
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
      RETURNING 
        id::text,
        name,
        email,
        phone,
        subject,
        message,
        status,
        created_at as "createdAt"
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
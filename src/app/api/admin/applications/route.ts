import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

// Test database connection
async function testConnection() {
  try {
    await sql`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}

export async function GET() {
  try {
    const result = await sql`
      SELECT 
        id,
        first_name,
        last_name,
        email,
        phone,
        status,
        created_at,
        updated_at
      FROM applications
      ORDER BY created_at DESC
    `;

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in GET /api/admin/applications:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch applications',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      nationality,
      currentCountry,
      educationLevel,
      englishLevel,
      frenchLevel,
      programType,
      programDuration,
      startDate,
      budget,
      notes
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !birthDate || !nationality || !currentCountry || !educationLevel || !programType || !programDuration || !startDate || !budget) {
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

    // Validate phone format (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO applications (
        first_name,
        last_name,
        email,
        phone,
        birth_date,
        nationality,
        current_country,
        education_level,
        english_level,
        french_level,
        program_type,
        program_duration,
        start_date,
        budget,
        notes,
        status,
        created_at,
        updated_at
      ) VALUES (
        ${firstName},
        ${lastName},
        ${email},
        ${phone},
        ${birthDate},
        ${nationality},
        ${currentCountry},
        ${educationLevel},
        ${englishLevel},
        ${frenchLevel},
        ${programType},
        ${programDuration},
        ${startDate},
        ${budget},
        ${notes},
        'pending',
        NOW(),
        NOW()
      )
      RETURNING *
    `;

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/admin/applications:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate status
    if (!['pending', 'accepted', 'rejected'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      );
    }

    const result = await sql`
      UPDATE applications
      SET 
        status = ${status},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating application:', error);
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
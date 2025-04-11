import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // First check if the applications table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'applications'
      )
    `;

    if (!tableExists.rows[0].exists) {
      return NextResponse.json(
        { error: 'Applications table does not exist' },
        { status: 500 }
      );
    }

    // Get column names and types
    const columns = await sql`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'applications'
    `;

    console.log('Table columns:', columns.rows);

    // Get applications with proper column mapping
    const result = await sql`
      SELECT 
        id,
        first_name as "firstName",
        last_name as "lastName",
        email,
        phone,
        birth_date as "birthDate",
        nationality,
        current_country as "currentCountry",
        education_level as "educationLevel",
        english_level as "englishLevel",
        french_level as "frenchLevel",
        program_type as "programType",
        program_duration as "programDuration",
        start_date as "startDate",
        budget,
        notes,
        status,
        created_at as "createdAt",
        updated_at as "updatedAt"
      FROM applications
      ORDER BY created_at DESC
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching applications:', error);
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

    // Log the data being inserted
    console.log('Inserting application:', {
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
    });

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

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating application:', error);
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
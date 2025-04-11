import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
  try {
    const result = await sql`
      SELECT * FROM applications
      ORDER BY createdAt DESC
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.birthDate || !data.nationality || !data.currentCountry || !data.educationLevel || !data.programType || !data.programDuration || !data.startDate || !data.budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO applications (
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
        notes,
        status,
        createdAt,
        updatedAt
      ) VALUES (
        ${data.firstName},
        ${data.lastName},
        ${data.email},
        ${data.phone},
        ${data.birthDate},
        ${data.nationality},
        ${data.currentCountry},
        ${data.educationLevel},
        ${data.englishLevel},
        ${data.frenchLevel},
        ${data.programType},
        ${data.programDuration},
        ${data.startDate},
        ${data.budget},
        ${data.notes},
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
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
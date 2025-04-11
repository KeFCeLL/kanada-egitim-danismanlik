import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Test database connection
    const result = await sql`SELECT current_database(), current_user, version()`;
    
    return NextResponse.json({
      status: 'ok',
      database: {
        connected: true,
        name: result.rows[0].current_database,
        user: result.rows[0].current_user,
        version: result.rows[0].version
      },
      environment: process.env.NODE_ENV,
      postgresUrl: process.env.kanada_POSTGRES_URL ? 'configured' : 'not configured'
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        database: {
          connected: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        },
        environment: process.env.NODE_ENV,
        postgresUrl: process.env.kanada_POSTGRES_URL ? 'configured' : 'not configured'
      },
      { status: 500 }
    );
  }
} 
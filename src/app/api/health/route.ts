import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Test database connection
    await sql`SELECT 1`;
    
    return NextResponse.json({
      status: 'ok',
      database: 'connected',
      environment: process.env.NODE_ENV,
      postgresUrl: process.env.kanada_POSTGRES_URL ? 'configured' : 'not configured'
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        database: 'disconnected',
        environment: process.env.NODE_ENV,
        postgresUrl: process.env.kanada_POSTGRES_URL ? 'configured' : 'not configured',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Test database connection and table structure
    const dbInfo = await sql`
      SELECT 
        current_database(),
        current_user,
        version(),
        (SELECT COUNT(*) FROM applications) as application_count,
        (SELECT string_agg(column_name, ', ') 
         FROM information_schema.columns 
         WHERE table_name = 'applications') as table_columns,
        (SELECT string_agg(data_type, ', ') 
         FROM information_schema.columns 
         WHERE table_name = 'applications') as column_types
    `;
    
    return NextResponse.json({
      status: 'ok',
      database: {
        connected: true,
        name: dbInfo.rows[0].current_database,
        user: dbInfo.rows[0].current_user,
        version: dbInfo.rows[0].version,
        applications: {
          count: dbInfo.rows[0].application_count,
          columns: dbInfo.rows[0].table_columns,
          types: dbInfo.rows[0].column_types
        }
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
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        },
        environment: process.env.NODE_ENV,
        postgresUrl: process.env.kanada_POSTGRES_URL ? 'configured' : 'not configured'
      },
      { status: 500 }
    );
  }
} 
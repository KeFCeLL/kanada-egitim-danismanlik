import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Starting health check');
    console.log('Database URL:', process.env.POSTGRES_URL ? 'configured' : 'missing');
    
    // Test database connection
    const result = await sql`
      SELECT 
        current_database() as db_name,
        current_user as db_user,
        version() as db_version,
        (SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'applications'
        )) as applications_table_exists
    `;

    console.log('Database check result:', result[0]);

    return NextResponse.json({
      status: 'healthy',
      database: {
        connected: true,
        name: result[0].db_name,
        user: result[0].db_user,
        version: result[0].db_version,
        applications_table_exists: result[0].applications_table_exists
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : typeof error
    });

    return NextResponse.json({
      status: 'unhealthy',
      database: {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        type: error instanceof Error ? error.constructor.name : typeof error
      },
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 
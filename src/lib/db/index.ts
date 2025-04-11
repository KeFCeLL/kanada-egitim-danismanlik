import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

if (!process.env.kanada_POSTGRES_URL) {
  throw new Error('Missing kanada_POSTGRES_URL environment variable');
}

// Create a single postgres client for the application
export const sql = postgres(process.env.kanada_POSTGRES_URL, {
  ssl: 'require',
  max: 1
});

// Create drizzle instance with connection pool
export const db = drizzle(sql, { schema });

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    await sql`SELECT 1`;
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Closing database connections...');
  await sql.end();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('Closing database connections...');
  await sql.end();
  process.exit(0);
});

export { sql }; 
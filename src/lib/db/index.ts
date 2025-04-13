import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL environment variable');
}

// Create a single postgres client for the application
const sql = postgres(process.env.POSTGRES_URL, {
  ssl: 'require',
  max: 1,
  idle_timeout: 20,
  connect_timeout: 20,
  max_lifetime: 60 * 30,
  connection: {
    application_name: 'kanada_egitim_app',
  },
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
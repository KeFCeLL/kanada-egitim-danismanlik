import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

// Create a connection pool
const connectionString = process.env.kanada_POSTGRES_URL;
if (!connectionString) {
  throw new Error('kanada_POSTGRES_URL is not defined');
}

// Configure connection pool with Neon.tech specific settings
const pool = postgres(connectionString, {
  max: 1,
  ssl: 'require',
  idle_timeout: 20,
  connect_timeout: 20,
  max_lifetime: 60 * 30,
  connection: {
    application_name: 'kanada_egitim_app',
  },
});

// Create drizzle instance with connection pool
export const db = drizzle(pool, { schema });

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    await pool`SELECT 1`;
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
  await pool.end();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('Closing database connections...');
  await pool.end();
  process.exit(0);
}); 
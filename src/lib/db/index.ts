import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NILEDB_URL;

if (!connectionString) {
  throw new Error('Database connection URL is not set. Please set DATABASE_URL, POSTGRES_URL, or NILEDB_URL environment variable.');
}

const client = postgres(connectionString, {
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export const db = drizzle(client, { schema }); 
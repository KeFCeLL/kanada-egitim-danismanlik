import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { sql } from '@/lib/db';
import { readFileSync } from 'fs';
import { join } from 'path';

const connectionString = process.env.kanada_POSTGRES_URL;
if (!connectionString) {
  throw new Error('kanada_POSTGRES_URL is not defined');
}

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

const db = drizzle(pool, { schema });

async function migrate() {
  try {
    // Test database connection
    await sql`SELECT 1`;
    console.log('Database connection successful');

    // Drop existing tables if they exist
    await sql`DROP TABLE IF EXISTS applications CASCADE`;
    console.log('Applications table dropped');

    await sql`DROP TABLE IF EXISTS contacts CASCADE`;
    console.log('Contacts table dropped');

    // Read and execute migrations
    const applicationsSQL = readFileSync(
      join(process.cwd(), 'src', 'lib', 'db', 'migrations', '0001_create_applications_table.sql'),
      'utf-8'
    );
    await sql.unsafe(applicationsSQL);
    console.log('Applications table created successfully');

    const contactsSQL = readFileSync(
      join(process.cwd(), 'src', 'lib', 'db', 'migrations', '0002_create_contacts_table.sql'),
      'utf-8'
    );
    await sql.unsafe(contactsSQL);
    console.log('Contacts table created successfully');

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

migrate().catch((error) => {
  console.error('Migration failed:', error);
  process.exit(1);
});

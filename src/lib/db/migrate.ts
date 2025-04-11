import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

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

async function main() {
  try {
    // Test database connection
    await pool`SELECT 1`;
    console.log('Database connection successful');

    // Drop applications table if exists
    await pool`
      DROP TABLE IF EXISTS applications;
    `;
    console.log('Applications table dropped');

    // Create applications table
    await pool`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        nationality VARCHAR(255) NOT NULL,
        current_country VARCHAR(255) NOT NULL,
        education_level VARCHAR(255) NOT NULL,
        english_level VARCHAR(255) NOT NULL,
        french_level VARCHAR(255) NOT NULL,
        program_type VARCHAR(255) NOT NULL,
        program_duration VARCHAR(255) NOT NULL,
        start_date DATE NOT NULL,
        budget VARCHAR(255) NOT NULL,
        notes TEXT,
        status VARCHAR(255) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Applications table created successfully');

    // Close the connection
    await pool.end();
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main(); 
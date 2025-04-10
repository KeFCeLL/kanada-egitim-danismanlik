import { db } from './index';
import * as schema from './schema';

async function migrate() {
  try {
    // Create dialogs table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS dialogs (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        type TEXT NOT NULL,
        is_active INTEGER NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,
        target_page TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create forms table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS forms (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        is_active INTEGER NOT NULL,
        submit_button_text TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create form_fields table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS form_fields (
        id TEXT PRIMARY KEY,
        form_id TEXT NOT NULL,
        label TEXT NOT NULL,
        type TEXT NOT NULL,
        required INTEGER NOT NULL,
        options TEXT,
        placeholder TEXT,
        "order" INTEGER NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (form_id) REFERENCES forms(id)
      )
    `);

    // Create content_sections table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS content_sections (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        page TEXT NOT NULL,
        content TEXT NOT NULL,
        is_active INTEGER NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create applications table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS applications (
        id TEXT PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        birth_date TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        country TEXT NOT NULL,
        postal_code TEXT NOT NULL,
        education_level TEXT NOT NULL,
        work_experience TEXT,
        english_level TEXT,
        french_level TEXT,
        program TEXT NOT NULL,
        start_date TEXT NOT NULL,
        budget TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create contacts table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}

export default migrate; 
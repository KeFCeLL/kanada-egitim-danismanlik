import { sql } from 'drizzle-orm';
import { text, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const dialogs = pgTable('dialogs', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  type: text('type', { enum: ['popup', 'notification'] }).notNull(),
  isActive: integer('is_active').notNull(),
  startDate: text('start_date').notNull(),
  endDate: text('end_date').notNull(),
  targetPage: text('target_page'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const forms = pgTable('forms', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  isActive: integer('is_active').notNull(),
  submitButtonText: text('submit_button_text').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const formFields = pgTable('form_fields', {
  id: text('id').primaryKey(),
  formId: text('form_id').notNull().references(() => forms.id),
  label: text('label').notNull(),
  type: text('type', { enum: ['text', 'email', 'tel', 'select', 'textarea'] }).notNull(),
  required: integer('required').notNull(),
  options: text('options'),
  placeholder: text('placeholder'),
  order: integer('order').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const contentSections = pgTable('content_sections', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  page: text('page').notNull(),
  content: text('content').notNull(),
  isActive: integer('is_active').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const applications = pgTable('applications', {
  id: text('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  birthDate: text('birth_date').notNull(),
  nationality: text('nationality').notNull(),
  currentCountry: text('current_country').notNull(),
  educationLevel: text('education_level').notNull(),
  englishLevel: text('english_level').notNull(),
  frenchLevel: text('french_level').notNull(),
  programType: text('program_type').notNull(),
  programDuration: text('program_duration').notNull(),
  startDate: text('start_date').notNull(),
  budget: text('budget').notNull(),
  notes: text('notes'),
  status: text('status').notNull().default('pending'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  status: varchar('status', { length: 20 }).default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
}); 
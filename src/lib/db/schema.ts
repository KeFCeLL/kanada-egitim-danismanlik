import { sql } from 'drizzle-orm';
import { text, integer, pgTable } from 'drizzle-orm/pg-core';

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
  address: text('address').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  postalCode: text('postal_code').notNull(),
  educationLevel: text('education_level').notNull(),
  workExperience: text('work_experience'),
  englishLevel: text('english_level'),
  frenchLevel: text('french_level'),
  program: text('program').notNull(),
  startDate: text('start_date').notNull(),
  budget: text('budget').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const contacts = pgTable('contacts', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
}); 
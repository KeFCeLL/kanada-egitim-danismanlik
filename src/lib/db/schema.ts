import { sql } from 'drizzle-orm';
import { text, integer, pgTable } from 'drizzle-orm/pg-core';

export const dialogs = pgTable('dialogs', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  type: text('type', { enum: ['popup', 'notification'] }).notNull(),
  isActive: text('isActive').notNull(),
  startDate: text('startDate').notNull(),
  endDate: text('endDate').notNull(),
  targetPage: text('targetPage'),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});

export const forms = pgTable('forms', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  isActive: text('isActive').notNull(),
  submitButtonText: text('submitButtonText').notNull(),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});

export const formFields = pgTable('form_fields', {
  id: text('id').primaryKey(),
  formId: text('formId').notNull().references(() => forms.id),
  label: text('label').notNull(),
  type: text('type', { enum: ['text', 'email', 'tel', 'select', 'textarea'] }).notNull(),
  required: integer('required').notNull(),
  options: text('options'),
  placeholder: text('placeholder'),
  order: integer('order').notNull(),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});

export const contentSections = pgTable('content_sections', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  page: text('page').notNull(),
  content: text('content').notNull(),
  isActive: text('isActive').notNull(),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});

export const applications = pgTable('applications', {
  id: text('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  birthDate: text('birthDate').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  postalCode: text('postalCode').notNull(),
  educationLevel: text('educationLevel').notNull(),
  workExperience: text('workExperience'),
  englishLevel: text('englishLevel'),
  frenchLevel: text('frenchLevel'),
  program: text('program').notNull(),
  startDate: text('startDate').notNull(),
  budget: text('budget').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});

export const contacts = pgTable('contacts', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
}); 
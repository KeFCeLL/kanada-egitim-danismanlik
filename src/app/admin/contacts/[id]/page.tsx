import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ContactDetail from './ContactDetail';
import { use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ContactDetailPage({ params }: PageProps) {
  const { id } = use(params);
  
  const contact = await db.query.contacts.findFirst({
    where: eq(contacts.id, id),
  });

  if (!contact) {
    notFound();
  }

  return <ContactDetail contact={contact} />;
} 
import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ContactDetail from './ContactDetail';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ContactPage({ params }: PageProps) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    notFound();
  }

  const contact = await db.query.contacts.findFirst({
    where: eq(contacts.id, id),
  });

  if (!contact) {
    notFound();
  }

  return <ContactDetail contact={contact} />;
} 
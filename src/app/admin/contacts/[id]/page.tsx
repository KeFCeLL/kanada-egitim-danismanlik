import { sql } from '@/lib/db';
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

  const result = await sql`
    SELECT 
      id::text,
      name,
      email,
      phone,
      subject,
      message,
      status,
      created_at as "createdAt"
    FROM contacts
    WHERE id = ${id}
  `;

  const contact = result[0];

  if (!contact) {
    notFound();
  }

  // Ensure status is one of the allowed values
  const validStatus = contact.status as 'pending' | 'reviewed' | 'completed';
  const contactWithValidStatus: Contact = {
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone || null,
    subject: contact.subject,
    message: contact.message,
    status: validStatus,
    createdAt: contact.createdAt
  };

  return <ContactDetail contact={contactWithValidStatus} />;
} 
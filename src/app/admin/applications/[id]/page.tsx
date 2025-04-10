import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import ApplicationDetail from './ApplicationDetail';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ApplicationDetailPage({ params }: PageProps) {
  const application = await db
    .select()
    .from(applications)
    .where(eq(applications.id, params.id))
    .limit(1);

  if (!application.length) {
    notFound();
  }

  return <ApplicationDetail application={application[0]} />;
} 
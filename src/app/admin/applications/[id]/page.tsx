import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ApplicationDetail from '@/components/admin/ApplicationDetail';
import { use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicationDetailPage({ params }: PageProps) {
  const { id } = use(params);
  
  const application = await db.query.applications.findFirst({
    where: eq(applications.id, id),
  });

  if (!application) {
    notFound();
  }

  return <ApplicationDetail application={application} />;
} 
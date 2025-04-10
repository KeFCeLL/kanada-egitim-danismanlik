import { db } from '@/lib/db';
import { applications } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ApplicationDetail from './ApplicationDetail';

interface PageProps {
  params: {
    id: string;
  };
}

type ApplicationStatus = 'pending' | 'reviewed' | 'completed';

export default async function ApplicationDetailPage({ params }: PageProps) {
  try {
    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, params.id));

    if (!application || application.length === 0) {
      notFound();
    }

    // Format the application data
    const formattedApplication = {
      ...application[0],
      workExperience: application[0].workExperience || '',
      englishLevel: application[0].englishLevel || '',
      frenchLevel: application[0].frenchLevel || '',
      budget: Number(application[0].budget),
      status: (application[0].status as ApplicationStatus) || 'pending',
      createdAt: application[0].createdAt || new Date().toISOString(),
      updatedAt: application[0].updatedAt || new Date().toISOString()
    };

    return <ApplicationDetail application={formattedApplication} />;
  } catch (error) {
    console.error('Error fetching application:', error);
    notFound();
  }
} 
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

type ApplicationStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';

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
      firstName: application[0].firstName || '',
      lastName: application[0].lastName || '',
      email: application[0].email || '',
      phone: application[0].phone || '',
      birthDate: application[0].birthDate || '',
      nationality: application[0].nationality || '',
      currentCountry: application[0].currentCountry || '',
      educationLevel: application[0].educationLevel || '',
      englishLevel: application[0].englishLevel || '',
      frenchLevel: application[0].frenchLevel || '',
      programType: application[0].programType || '',
      programDuration: application[0].programDuration || '',
      startDate: application[0].startDate || '',
      budget: Number(application[0].budget) || 0,
      notes: application[0].notes || '',
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
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  educationLevel: string;
  program: string;
  startDate: string;
  budget: number;
  workExperience?: string;
  englishLevel?: string;
  frenchLevel?: string;
  status: 'pending' | 'reviewed' | 'completed';
  createdAt: string;
  updatedAt: string;
}

interface ApplicationDetailProps {
  application: Application;
}

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Beklemede' },
  { value: 'reviewed', label: 'İncelendi' },
  { value: 'completed', label: 'Tamamlandı' },
];

export default function ApplicationDetail({ application }: ApplicationDetailProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateStatus = async (status: string) => {
    try {
      setIsUpdating(true);
      const response = await fetch(`/api/applications/${application.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenirken bir hata oluştu');
      }

      toast.success('Başvuru durumu güncellendi');
      router.refresh();
    } catch (error) {
      toast.error('Başvuru durumu güncellenirken bir hata oluştu');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/admin/applications"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Başvurulara Dön
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg bg-white p-6 shadow-sm"
      >
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {application.firstName} {application.lastName}
          </h1>
          <div className="flex items-center gap-4">
            <select
              value={application.status}
              onChange={(e) => updateStatus(e.target.value)}
              disabled={isUpdating}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Kişisel Bilgiler
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">E-posta</p>
                <p className="text-gray-900">{application.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="text-gray-900">{application.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Doğum Tarihi</p>
                <p className="text-gray-900">
                  {new Date(application.birthDate).toLocaleDateString('tr-TR')}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Adres Bilgileri
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Adres</p>
                <p className="text-gray-900">{application.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Şehir</p>
                <p className="text-gray-900">{application.city}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ülke</p>
                <p className="text-gray-900">{application.country}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Posta Kodu</p>
                <p className="text-gray-900">{application.postalCode}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Eğitim Bilgileri
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Eğitim Seviyesi</p>
                <p className="text-gray-900">{application.educationLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Program</p>
                <p className="text-gray-900">{application.program}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Başlangıç Tarihi</p>
                <p className="text-gray-900">
                  {new Date(application.startDate).toLocaleDateString('tr-TR')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Bütçe</p>
                <p className="text-gray-900">
                  {application.budget.toLocaleString('tr-TR', {
                    style: 'currency',
                    currency: 'TRY',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Diğer Bilgiler
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">İş Deneyimi</p>
                <p className="text-gray-900">
                  {application.workExperience || 'Belirtilmemiş'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">İngilizce Seviyesi</p>
                <p className="text-gray-900">
                  {application.englishLevel || 'Belirtilmemiş'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fransızca Seviyesi</p>
                <p className="text-gray-900">
                  {application.frenchLevel || 'Belirtilmemiş'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>
              Oluşturulma:{' '}
              {new Date(application.createdAt).toLocaleString('tr-TR')}
            </p>
            <p>
              Son Güncelleme:{' '}
              {new Date(application.updatedAt).toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
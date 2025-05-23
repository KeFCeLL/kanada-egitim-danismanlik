'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Link from 'next/link';

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  nationality: string;
  currentCountry: string;
  educationLevel: string;
  englishLevel: string | null;
  frenchLevel: string | null;
  programType: string;
  programDuration: string;
  startDate: string;
  budget: number;
  notes: string | null;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

interface ApplicationDetailProps {
  application: Application;
}

export default function ApplicationDetail({ application }: ApplicationDetailProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateStatus = async (newStatus: 'pending' | 'reviewed' | 'accepted' | 'rejected') => {
    try {
      setIsUpdating(true);
      const response = await fetch(`/api/admin/applications/${application.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenirken bir hata oluştu');
      }

      toast.success('Başvuru durumu güncellendi');
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Başvuru Detayları</h1>
          <Link
            href="/admin/applications"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            Geri Dön
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Kişisel Bilgiler</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Ad Soyad:</span> {application.firstName} {application.lastName}</p>
                <p><span className="font-medium">E-posta:</span> {application.email}</p>
                <p><span className="font-medium">Telefon:</span> {application.phone}</p>
                <p><span className="font-medium">Doğum Tarihi:</span> {new Date(application.birthDate).toLocaleDateString('tr-TR')}</p>
                <p><span className="font-medium">Uyruk:</span> {application.nationality}</p>
                <p><span className="font-medium">Mevcut Ülke:</span> {application.currentCountry}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Eğitim Bilgileri</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Eğitim Seviyesi:</span> {application.educationLevel}</p>
                <p><span className="font-medium">Program Türü:</span> {application.programType}</p>
                <p><span className="font-medium">Program Süresi:</span> {application.programDuration}</p>
                <p><span className="font-medium">Başlangıç Tarihi:</span> {new Date(application.startDate).toLocaleDateString('tr-TR')}</p>
                <p><span className="font-medium">Bütçe:</span> {formatCurrency(application.budget)}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Dil Seviyeleri</h2>
              <div className="space-y-2">
                <p><span className="font-medium">İngilizce Seviyesi:</span> {application.englishLevel || 'Belirtilmemiş'}</p>
                <p><span className="font-medium">Fransızca Seviyesi:</span> {application.frenchLevel || 'Belirtilmemiş'}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Notlar</h2>
              <div className="space-y-2">
                <p className="whitespace-pre-wrap">{application.notes || 'Not bulunmuyor'}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Oluşturulma Tarihi: {formatDate(application.createdAt)}</p>
                <p className="text-sm text-gray-500">Son Güncelleme: {formatDate(application.updatedAt)}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus('pending')}
                  disabled={isUpdating || application.status === 'pending'}
                  className={`px-4 py-2 rounded-md ${
                    application.status === 'pending'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Beklemede
                </button>
                <button
                  onClick={() => updateStatus('reviewed')}
                  disabled={isUpdating || application.status === 'reviewed'}
                  className={`px-4 py-2 rounded-md ${
                    application.status === 'reviewed'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                  }`}
                >
                  İncelendi
                </button>
                <button
                  onClick={() => updateStatus('accepted')}
                  disabled={isUpdating || application.status === 'accepted'}
                  className={`px-4 py-2 rounded-md ${
                    application.status === 'accepted'
                      ? 'bg-green-500 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  Kabul Edildi
                </button>
                <button
                  onClick={() => updateStatus('rejected')}
                  disabled={isUpdating || application.status === 'rejected'}
                  className={`px-4 py-2 rounded-md ${
                    application.status === 'rejected'
                      ? 'bg-red-500 text-white'
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  Reddedildi
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
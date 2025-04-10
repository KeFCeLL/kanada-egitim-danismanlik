'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  workExperience: string;
  englishLevel: string;
  frenchLevel: string;
  program: string;
  startDate: string;
  budget: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ApplicationDetailProps {
  application: Application;
}

export default function ApplicationDetail({ application }: ApplicationDetailProps) {
  const router = useRouter();
  const [status, setStatus] = useState<Application['status']>(application.status);

  const updateStatus = async (newStatus: Application['status']) => {
    try {
      const response = await fetch(`/api/admin/applications/${application.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      setStatus(newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Başvuru Detayları</h1>
            <Link
              href="/admin/applications"
              className="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
            >
              Geri Dön
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Kişisel Bilgiler</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400">Ad Soyad</label>
                  <p className="mt-1 text-white">{application.firstName} {application.lastName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">E-posta</label>
                  <p className="mt-1 text-white">{application.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Telefon</label>
                  <p className="mt-1 text-white">{application.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Doğum Tarihi</label>
                  <p className="mt-1 text-white">{application.birthDate}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Adres Bilgileri</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400">Adres</label>
                  <p className="mt-1 text-white">{application.address}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Şehir</label>
                  <p className="mt-1 text-white">{application.city}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Ülke</label>
                  <p className="mt-1 text-white">{application.country}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Posta Kodu</label>
                  <p className="mt-1 text-white">{application.postalCode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Eğitim ve Deneyim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-400">Eğitim Seviyesi</label>
                <p className="mt-1 text-white">{application.educationLevel}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">İş Deneyimi</label>
                <p className="mt-1 text-white">{application.workExperience}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">İngilizce Seviyesi</label>
                <p className="mt-1 text-white">{application.englishLevel}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Fransızca Seviyesi</label>
                <p className="mt-1 text-white">{application.frenchLevel}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Program ve Başlangıç Tarihi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-400">Program</label>
                <p className="mt-1 text-white">{application.program}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Başlangıç Tarihi</label>
                <p className="mt-1 text-white">{application.startDate}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Bütçe</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400">Bütçe</label>
              <p className="mt-1 text-white">{application.budget}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Başvuru Durumu</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => updateStatus('pending')}
                className={`px-4 py-2 rounded-xl ${
                  status === 'pending'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                İncele
              </button>
              <button
                onClick={() => updateStatus('reviewed')}
                className={`px-4 py-2 rounded-xl ${
                  status === 'reviewed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Kabul Et
              </button>
              <button
                onClick={() => updateStatus('completed')}
                className={`px-4 py-2 rounded-xl ${
                  status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Reddet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
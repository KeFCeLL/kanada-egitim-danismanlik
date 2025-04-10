'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Application } from '@/lib/db/schema';

interface ApplicationDetailProps {
  application: Application;
}

export function ApplicationDetail({ application }: ApplicationDetailProps) {
  const [currentApplication, setCurrentApplication] = useState(application);
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (newStatus: Application['status']) => {
    try {
      const response = await fetch(`/api/admin/applications/${currentApplication.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenirken bir hata oluştu');
      }

      setCurrentApplication(prev => ({ ...prev, status: newStatus }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'reviewed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'accepted':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'rejected':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusText = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return 'Beklemede';
      case 'reviewed':
        return 'İncelendi';
      case 'accepted':
        return 'Kabul Edildi';
      case 'rejected':
        return 'Reddedildi';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-10"
        >
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">BAŞVURU DETAYI</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{currentApplication.first_name} {currentApplication.last_name}</h1>
                <p className="text-xl text-gray-300">
                  Başvuru Tarihi: {new Date(currentApplication.created_at).toLocaleDateString('tr-TR')}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateStatus('reviewed')}
                  className="px-4 py-2 text-blue-400 hover:text-blue-300 border border-blue-400/20 hover:border-blue-300/20 rounded-xl transition-colors"
                >
                  İncele
                </button>
                <button
                  onClick={() => updateStatus('accepted')}
                  className="px-4 py-2 text-green-400 hover:text-green-300 border border-green-400/20 hover:border-green-300/20 rounded-xl transition-colors"
                >
                  Kabul Et
                </button>
                <button
                  onClick={() => updateStatus('rejected')}
                  className="px-4 py-2 text-red-400 hover:text-red-300 border border-red-400/20 hover:border-red-300/20 rounded-xl transition-colors"
                >
                  Reddet
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Kişisel Bilgiler</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">E-posta</label>
                    <div className="mt-1 text-white">{currentApplication.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Telefon</label>
                    <div className="mt-1 text-white">{currentApplication.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Doğum Tarihi</label>
                    <div className="mt-1 text-white">{currentApplication.birth_date}</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Adres Bilgileri</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Adres</label>
                    <div className="mt-1 text-white">{currentApplication.address}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Şehir</label>
                    <div className="mt-1 text-white">{currentApplication.city}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">İlçe</label>
                    <div className="mt-1 text-white">{currentApplication.province}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Posta Kodu</label>
                    <div className="mt-1 text-white">{currentApplication.postal_code}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Eğitim Bilgileri</h2>
                <div className="bg-white/5 rounded-xl p-4 text-white">
                  {currentApplication.education}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">İş Deneyimi</h2>
                <div className="bg-white/5 rounded-xl p-4 text-white">
                  {currentApplication.work_experience}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Yetenekler</h2>
                <div className="bg-white/5 rounded-xl p-4 text-white">
                  {currentApplication.skills}
                </div>
              </div>

              {currentApplication.additional_info && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Ek Bilgiler</h2>
                  <div className="bg-white/5 rounded-xl p-4 text-white">
                    {currentApplication.additional_info}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
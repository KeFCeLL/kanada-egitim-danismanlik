'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ContactDetailProps {
  contact: Contact;
}

export default function ContactDetail({ contact }: ContactDetailProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (newStatus: Contact['status']) => {
    try {
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenemedi');
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">İletişim Formu Detayı</h1>
            <Link
              href="/admin/contacts"
              className="text-white hover:text-cyan-500 transition-colors"
            >
              Geri Dön
            </Link>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300">Ad Soyad</label>
              <div className="mt-1 text-white">{contact.name}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">E-posta</label>
              <div className="mt-1 text-white">{contact.email}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Telefon</label>
              <div className="mt-1 text-white">{contact.phone}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Konu</label>
              <div className="mt-1 text-white">{contact.subject}</div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300">Mesaj</label>
            <div className="mt-1 p-4 bg-white/5 rounded-xl text-white whitespace-pre-wrap">
              {contact.message}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300">Gönderim Tarihi</label>
            <div className="mt-1 text-white">
              {new Date(contact.createdAt).toLocaleString('tr-TR')}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Durum</label>
            <div className="flex space-x-4">
              <button
                onClick={() => updateStatus('pending')}
                className={`px-4 py-2 rounded-xl ${
                  contact.status === 'pending'
                    ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Beklemede
              </button>
              <button
                onClick={() => updateStatus('reviewed')}
                className={`px-4 py-2 rounded-xl ${
                  contact.status === 'reviewed'
                    ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                İncelendi
              </button>
              <button
                onClick={() => updateStatus('completed')}
                className={`px-4 py-2 rounded-xl ${
                  contact.status === 'completed'
                    ? 'bg-green-500/20 text-green-500 border border-green-500/30'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Tamamlandı
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
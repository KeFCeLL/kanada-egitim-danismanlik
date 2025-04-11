'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

interface ContactDetailProps {
  contact: Contact;
}

export default function ContactDetail({ contact }: ContactDetailProps) {
  const router = useRouter();
  const [status, setStatus] = useState<Contact['status']>(contact.status);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: Contact['status']) => {
    try {
      setIsUpdating(true);
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
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
      router.refresh();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setIsUpdating(false);
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">Kişisel Bilgiler</h2>
              <div className="space-y-2">
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
                  <div className="mt-1 text-white">{contact.phone || 'Belirtilmedi'}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">İletişim Bilgileri</h2>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Konu</label>
                  <div className="mt-1 text-white">{contact.subject}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Durum</label>
                  <div className="mt-1 text-white">
                    {status === 'pending' ? 'Beklemede' :
                     status === 'read' ? 'Okundu' :
                     'Yanıtlandı'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Gönderilme Tarihi</label>
                  <div className="mt-1 text-white">
                    {format(new Date(contact.createdAt), 'dd MMMM yyyy HH:mm', { locale: tr })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Mesaj</h2>
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-white whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Durum</label>
            <div className="flex space-x-4">
              <select
                value={status}
                onChange={(e) => handleStatusChange(e.target.value as Contact['status'])}
                disabled={isUpdating}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Beklemede</option>
                <option value="read">Okundu</option>
                <option value="replied">Yanıtlandı</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
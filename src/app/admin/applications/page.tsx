'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  englishLevel: string;
  frenchLevel: string;
  programType: string;
  programDuration: string;
  startDate: string;
  budget: string;
  notes: string | null;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/admin/applications');
      if (!response.ok) {
        throw new Error('Başvurular yüklenirken bir hata oluştu');
      }
      const data = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Application['status']) => {
    try {
      const response = await fetch(`/api/admin/applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenirken bir hata oluştu');
      }

      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: newStatus } : app
      ));
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-red-400 text-center">{error}</div>
        </div>
      </div>
    );
  }

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
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">BAŞVURULAR</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Başvuru Yönetimi</h1>
            <p className="text-xl mb-10 text-gray-300">
              Başvuruları görüntüleyin ve durumlarını güncelleyin.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ad Soyad</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">E-posta</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Telefon</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Program</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tarih</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Durum</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{application.firstName} {application.lastName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{application.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{application.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">
                          {application.programType} ({application.programDuration})
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">
                          {formatDate(application.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                          {getStatusText(application.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedApplication(application)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            Detayları Görüntüle
                          </button>
                          <button
                            onClick={() => updateStatus(application.id, 'reviewed')}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            İncele
                          </button>
                          <button
                            onClick={() => updateStatus(application.id, 'accepted')}
                            className="text-green-400 hover:text-green-300"
                          >
                            Kabul Et
                          </button>
                          <button
                            onClick={() => updateStatus(application.id, 'rejected')}
                            className="text-red-400 hover:text-red-300"
                          >
                            Reddet
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedApplication && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 rounded-3xl p-8 max-w-2xl w-full mx-4 border border-white/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Başvuru Detayları</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400 text-sm">Ad Soyad</h3>
                  <p className="text-white">{selectedApplication.firstName} {selectedApplication.lastName}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">E-posta</h3>
                  <p className="text-white">{selectedApplication.email}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Telefon</h3>
                  <p className="text-white">{selectedApplication.phone}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Doğum Tarihi</h3>
                  <p className="text-white">{formatDate(selectedApplication.birthDate)}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Uyruk</h3>
                  <p className="text-white">{selectedApplication.nationality}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Yaşadığı Ülke</h3>
                  <p className="text-white">{selectedApplication.currentCountry}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Eğitim Seviyesi</h3>
                  <p className="text-white">{selectedApplication.educationLevel}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">İngilizce Seviyesi</h3>
                  <p className="text-white">{selectedApplication.englishLevel}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Fransızca Seviyesi</h3>
                  <p className="text-white">{selectedApplication.frenchLevel}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Program Türü</h3>
                  <p className="text-white">{selectedApplication.programType}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Program Süresi</h3>
                  <p className="text-white">{selectedApplication.programDuration}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Başlangıç Tarihi</h3>
                  <p className="text-white">{formatDate(selectedApplication.startDate)}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Bütçe</h3>
                  <p className="text-white">{selectedApplication.budget} CAD</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-gray-400 text-sm">Notlar</h3>
                  <p className="text-white">{selectedApplication.notes || '-'}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-gray-400 text-sm">Durum</h3>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedApplication.status)}`}>
                    {getStatusText(selectedApplication.status)}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => {
                    updateStatus(selectedApplication.id, 'reviewed');
                    setSelectedApplication(null);
                  }}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30"
                >
                  İncele
                </button>
                <button
                  onClick={() => {
                    updateStatus(selectedApplication.id, 'accepted');
                    setSelectedApplication(null);
                  }}
                  className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30"
                >
                  Kabul Et
                </button>
                <button
                  onClick={() => {
                    updateStatus(selectedApplication.id, 'rejected');
                    setSelectedApplication(null);
                  }}
                  className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                >
                  Reddet
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
} 
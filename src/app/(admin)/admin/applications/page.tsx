'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';

const educationLevels = [
  { value: 'high_school', label: 'Lise' },
  { value: 'associate', label: 'Ön Lisans' },
  { value: 'bachelor', label: 'Lisans' },
  { value: 'master', label: 'Yüksek Lisans' },
  { value: 'phd', label: 'Doktora' }
];

const programs = [
  { value: 'language_school', label: 'Dil Okulu' },
  { value: 'university', label: 'Üniversite' },
  { value: 'college', label: 'Kolej' },
  { value: 'vocational', label: 'Meslek Okulu' }
];

const languageLevels = [
  { value: 'beginner', label: 'Başlangıç' },
  { value: 'intermediate', label: 'Orta' },
  { value: 'advanced', label: 'İleri' },
  { value: 'fluent', label: 'Akıcı' }
];

const statusOptions = [
  { value: 'pending', label: 'Beklemede' },
  { value: 'reviewing', label: 'İnceleniyor' },
  { value: 'approved', label: 'Onaylandı' },
  { value: 'rejected', label: 'Reddedildi' }
];

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

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications');
      if (!response.ok) {
        throw new Error('Başvurular alınırken bir hata oluştu');
      }
      const data = await response.json();
      setApplications(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncellenirken bir hata oluştu');
      }

      await fetchApplications();
      toast.success('Başvuru durumu güncellendi');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Başvurular</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ad Soyad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durum
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarih
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr
                      key={application.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedApplication(application)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {application.firstName} {application.lastName}
                        </div>
                        <div className="text-sm text-gray-500">{application.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {programs.find(p => p.value === application.program)?.label}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            application.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : application.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : application.status === 'reviewing'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {statusOptions.find(s => s.value === application.status)?.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(application.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Select
                          value={application.status}
                          onChange={(e) => handleStatusChange(application.id, e.target.value)}
                          disabled={isUpdating}
                          className="w-32"
                        >
                          {statusOptions.map((status) => (
                            <option key={status.value} value={status.value}>
                              {status.label}
                            </option>
                          ))}
                        </Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {selectedApplication && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Başvuru Detayları</h2>
              
              <div className="space-y-4">
                <div>
                  <Label>Ad Soyad</Label>
                  <div className="text-gray-900">
                    {selectedApplication.firstName} {selectedApplication.lastName}
                  </div>
                </div>

                <div>
                  <Label>E-posta</Label>
                  <div className="text-gray-900">{selectedApplication.email}</div>
                </div>

                <div>
                  <Label>Telefon</Label>
                  <div className="text-gray-900">{selectedApplication.phone}</div>
                </div>

                <div>
                  <Label>Doğum Tarihi</Label>
                  <div className="text-gray-900">{formatDate(selectedApplication.birthDate)}</div>
                </div>

                <div>
                  <Label>Adres</Label>
                  <div className="text-gray-900">{selectedApplication.address}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Şehir</Label>
                    <div className="text-gray-900">{selectedApplication.city}</div>
                  </div>
                  <div>
                    <Label>Ülke</Label>
                    <div className="text-gray-900">{selectedApplication.country}</div>
                  </div>
                </div>

                <div>
                  <Label>Posta Kodu</Label>
                  <div className="text-gray-900">{selectedApplication.postalCode}</div>
                </div>

                <div>
                  <Label>Eğitim Seviyesi</Label>
                  <div className="text-gray-900">
                    {educationLevels.find(e => e.value === selectedApplication.educationLevel)?.label}
                  </div>
                </div>

                <div>
                  <Label>İş Deneyimi</Label>
                  <div className="text-gray-900">{selectedApplication.workExperience}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>İngilizce Seviyesi</Label>
                    <div className="text-gray-900">
                      {languageLevels.find(l => l.value === selectedApplication.englishLevel)?.label}
                    </div>
                  </div>
                  <div>
                    <Label>Fransızca Seviyesi</Label>
                    <div className="text-gray-900">
                      {languageLevels.find(l => l.value === selectedApplication.frenchLevel)?.label}
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Program</Label>
                  <div className="text-gray-900">
                    {programs.find(p => p.value === selectedApplication.program)?.label}
                  </div>
                </div>

                <div>
                  <Label>Başlangıç Tarihi</Label>
                  <div className="text-gray-900">{formatDate(selectedApplication.startDate)}</div>
                </div>

                <div>
                  <Label>Bütçe (CAD)</Label>
                  <div className="text-gray-900">{selectedApplication.budget}</div>
                </div>

                <div>
                  <Label>Başvuru Tarihi</Label>
                  <div className="text-gray-900">{formatDate(selectedApplication.createdAt)}</div>
                </div>

                <div>
                  <Label>Son Güncelleme</Label>
                  <div className="text-gray-900">{formatDate(selectedApplication.updatedAt)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
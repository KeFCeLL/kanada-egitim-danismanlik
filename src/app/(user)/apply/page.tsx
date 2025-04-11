'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const educationLevels = [
  { value: 'high_school', label: 'Lise' },
  { value: 'associate', label: 'Ön Lisans' },
  { value: 'bachelor', label: 'Lisans' },
  { value: 'master', label: 'Yüksek Lisans' },
  { value: 'phd', label: 'Doktora' }
];

const programTypes = [
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

const programDurations = [
  { value: '3_months', label: '3 Ay' },
  { value: '6_months', label: '6 Ay' },
  { value: '1_year', label: '1 Yıl' },
  { value: '2_years', label: '2 Yıl' },
  { value: '4_years', label: '4 Yıl' }
];

export default function ApplyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    nationality: '',
    currentCountry: '',
    educationLevel: '',
    englishLevel: '',
    frenchLevel: '',
    programType: '',
    programDuration: '',
    startDate: '',
    budget: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Başvuru gönderilirken bir hata oluştu');
      }

      setSuccess(true);
      toast.success('Başvurunuz başarıyla gönderildi!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        nationality: '',
        currentCountry: '',
        educationLevel: '',
        englishLevel: '',
        frenchLevel: '',
        programType: '',
        programDuration: '',
        startDate: '',
        budget: '',
        notes: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Başvuru gönderilirken bir hata oluştu');
      toast.error('Başvuru gönderilirken bir hata oluştu');
    } finally {
      setIsSubmitting(false);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Başvuru Formu</h1>
            <p className="text-xl mb-10 text-gray-300">
              Lütfen aşağıdaki formu doldurun.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500">
                Başvurunuz başarıyla gönderildi!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">Ad</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Soyad</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="E-posta adresiniz"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">Doğum Tarihi</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="nationality" className="block text-sm font-medium text-gray-300 mb-2">Uyruk</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Uyruğunuz"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="currentCountry" className="block text-sm font-medium text-gray-300 mb-2">Yaşadığınız Ülke</Label>
                <Input
                  id="currentCountry"
                  name="currentCountry"
                  value={formData.currentCountry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Şu anda yaşadığınız ülke"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="educationLevel" className="block text-sm font-medium text-gray-300 mb-2">Eğitim Seviyesi</Label>
                  <Select
                    id="educationLevel"
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-900 text-white">Seçiniz</option>
                    {educationLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-gray-900 text-white">
                        {level.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="englishLevel" className="block text-sm font-medium text-gray-300 mb-2">İngilizce Seviyesi</Label>
                  <Select
                    id="englishLevel"
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-900 text-white">Seçiniz</option>
                    {languageLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-gray-900 text-white">
                        {level.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="frenchLevel" className="block text-sm font-medium text-gray-300 mb-2">Fransızca Seviyesi</Label>
                  <Select
                    id="frenchLevel"
                    name="frenchLevel"
                    value={formData.frenchLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-900 text-white">Seçiniz</option>
                    {languageLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-gray-900 text-white">
                        {level.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="programType" className="block text-sm font-medium text-gray-300 mb-2">Program Türü</Label>
                  <Select
                    id="programType"
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-900 text-white">Seçiniz</option>
                    {programTypes.map(type => (
                      <option key={type.value} value={type.value} className="bg-gray-900 text-white">
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="programDuration" className="block text-sm font-medium text-gray-300 mb-2">Program Süresi</Label>
                  <Select
                    id="programDuration"
                    name="programDuration"
                    value={formData.programDuration}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-900 text-white">Seçiniz</option>
                    {programDurations.map(duration => (
                      <option key={duration.value} value={duration.value} className="bg-gray-900 text-white">
                        {duration.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2">Başlangıç Tarihi</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">Bütçe (CAD)</Label>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    min="0"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Bütçeniz"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">Notlar</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Eklemek istediğiniz notlar"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-6 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 transition duration-300"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Başvur'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
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

export default function ApplyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    educationLevel: '',
    workExperience: '',
    englishLevel: '',
    frenchLevel: '',
    program: '',
    startDate: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      toast.success('Başvurunuz başarıyla alındı!');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">Doğum Tarihi</Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <Label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">Adres</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Adresiniz"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">Şehir</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Şehir"
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">Ülke</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Ülke"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode" className="block text-sm font-medium text-gray-300 mb-2">Posta Kodu</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Posta Kodu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="educationLevel" className="block text-sm font-medium text-gray-300 mb-2">Eğitim Seviyesi</Label>
                  <Select
                    id="educationLevel"
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Seçiniz</option>
                    {educationLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-gray-900 text-white">
                        {level.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="workExperience" className="block text-sm font-medium text-gray-300 mb-2">İş Deneyimi</Label>
                  <Textarea
                    id="workExperience"
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="İş deneyiminiz"
                  />
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Bütçeniz"
                  />
                </div>
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
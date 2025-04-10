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
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Kanada Eğitim Başvuru Formu</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="firstName" className="text-lg font-semibold">Ad</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-lg font-semibold">Soyad</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="email" className="text-lg font-semibold">E-posta</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-lg font-semibold">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="birthDate" className="text-lg font-semibold">Doğum Tarihi</Label>
            <Input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-lg font-semibold">Adres</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Label htmlFor="city" className="text-lg font-semibold">Şehir</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-lg font-semibold">Ülke</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <Label htmlFor="postalCode" className="text-lg font-semibold">Posta Kodu</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="educationLevel">Eğitim Seviyesi</Label>
            <Select
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            >
              <option value="">Seçiniz</option>
              {educationLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="workExperience">İş Deneyimi</Label>
            <Textarea
              id="workExperience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="englishLevel">İngilizce Seviyesi</Label>
              <Select
                id="englishLevel"
                name="englishLevel"
                value={formData.englishLevel}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                {languageLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="frenchLevel">Fransızca Seviyesi</Label>
              <Select
                id="frenchLevel"
                name="frenchLevel"
                value={formData.frenchLevel}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                {languageLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="program">Program</Label>
            <Select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Seçiniz</option>
              {programs.map(program => (
                <option key={program.value} value={program.value}>
                  {program.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="startDate">Başlangıç Tarihi</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="budget">Bütçe (CAD)</Label>
              <Input
                id="budget"
                name="budget"
                type="number"
                min="0"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 mt-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Başvur'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 
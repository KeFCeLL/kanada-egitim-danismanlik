'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ApplyPage() {
  const router = useRouter();
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'birthDate',
      'address',
      'city',
      'country',
      'postalCode',
      'educationLevel',
      'program',
      'startDate',
      'budget'
    ];

    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'Bu alan zorunludur';
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    // Phone validation
    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Başvuru gönderilirken bir hata oluştu');
      }

      router.push('/apply/success');
    } catch (error) {
      console.error('Başvuru hatası:', error);
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Başvuru gönderilirken bir hata oluştu'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Başvuru Formu</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  Ad
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.firstName ? 'border-red-500' : ''
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Soyad
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300">
                  Doğum Tarihi
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.birthDate ? 'border-red-500' : ''
                  }`}
                />
                {errors.birthDate && (
                  <p className="mt-1 text-sm text-red-400">{errors.birthDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                  Adres
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.address ? 'border-red-500' : ''
                  }`}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-400">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                  Şehir
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.city ? 'border-red-500' : ''
                  }`}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-400">{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-300">
                  Ülke
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.country ? 'border-red-500' : ''
                  }`}
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-400">{errors.country}</p>
                )}
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-300">
                  Posta Kodu
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.postalCode ? 'border-red-500' : ''
                  }`}
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-400">{errors.postalCode}</p>
                )}
              </div>

              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-300">
                  Eğitim Seviyesi
                </label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.educationLevel ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Seçiniz</option>
                  <option value="lise">Lise</option>
                  <option value="onlisans">Ön Lisans</option>
                  <option value="lisans">Lisans</option>
                  <option value="yukseklisans">Yüksek Lisans</option>
                  <option value="doktora">Doktora</option>
                </select>
                {errors.educationLevel && (
                  <p className="mt-1 text-sm text-red-400">{errors.educationLevel}</p>
                )}
              </div>

              <div>
                <label htmlFor="workExperience" className="block text-sm font-medium text-gray-300">
                  İş Deneyimi
                </label>
                <textarea
                  id="workExperience"
                  name="workExperience"
                  rows={3}
                  value={formData.workExperience}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.workExperience ? 'border-red-500' : ''
                  }`}
                />
                {errors.workExperience && (
                  <p className="mt-1 text-sm text-red-400">{errors.workExperience}</p>
                )}
              </div>

              <div>
                <label htmlFor="englishLevel" className="block text-sm font-medium text-gray-300">
                  İngilizce Seviyesi
                </label>
                <select
                  id="englishLevel"
                  name="englishLevel"
                  value={formData.englishLevel}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.englishLevel ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Seçiniz</option>
                  <option value="A1">A1 - Başlangıç</option>
                  <option value="A2">A2 - Temel</option>
                  <option value="B1">B1 - Orta</option>
                  <option value="B2">B2 - Orta Üstü</option>
                  <option value="C1">C1 - İleri</option>
                  <option value="C2">C2 - Uzman</option>
                </select>
                {errors.englishLevel && (
                  <p className="mt-1 text-sm text-red-400">{errors.englishLevel}</p>
                )}
              </div>

              <div>
                <label htmlFor="frenchLevel" className="block text-sm font-medium text-gray-300">
                  Fransızca Seviyesi
                </label>
                <select
                  id="frenchLevel"
                  name="frenchLevel"
                  value={formData.frenchLevel}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.frenchLevel ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Seçiniz</option>
                  <option value="A1">A1 - Başlangıç</option>
                  <option value="A2">A2 - Temel</option>
                  <option value="B1">B1 - Orta</option>
                  <option value="B2">B2 - Orta Üstü</option>
                  <option value="C1">C1 - İleri</option>
                  <option value="C2">C2 - Uzman</option>
                </select>
                {errors.frenchLevel && (
                  <p className="mt-1 text-sm text-red-400">{errors.frenchLevel}</p>
                )}
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-300">
                  Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.program ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Seçiniz</option>
                  <option value="dil-egitimi">Dil Eğitimi</option>
                  <option value="universite">Üniversite</option>
                  <option value="yukseklisans">Yüksek Lisans</option>
                  <option value="doktora">Doktora</option>
                  <option value="staj">Staj</option>
                </select>
                {errors.program && (
                  <p className="mt-1 text-sm text-red-400">{errors.program}</p>
                )}
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-300">
                  Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.startDate ? 'border-red-500' : ''
                  }`}
                />
                {errors.startDate && (
                  <p className="mt-1 text-sm text-red-400">{errors.startDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                  Bütçe (CAD)
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.budget ? 'border-red-500' : ''
                  }`}
                />
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                )}
              </div>
            </div>

            {errors.submit && (
              <div className="rounded-md bg-red-500/10 p-4">
                <p className="text-sm text-red-400">{errors.submit}</p>
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 
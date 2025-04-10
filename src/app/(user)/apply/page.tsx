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
    province: '',
    postalCode: '',
    education: '',
    workExperience: '',
    skills: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      'province',
      'postalCode',
      'education',
      'workExperience',
      'skills'
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
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
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
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">BAŞVURU</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Başvuru Formu</h1>
            <p className="text-xl mb-10 text-gray-300">
              Lütfen başvuru formunu eksiksiz ve doğru bir şekilde doldurunuz.
            </p>

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

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                  <label htmlFor="province" className="block text-sm font-medium text-gray-300">
                    İlçe
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                      errors.province ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.province && (
                    <p className="mt-1 text-sm text-red-400">{errors.province}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-300">
                  Eğitim Bilgileri
                </label>
                <textarea
                  id="education"
                  name="education"
                  rows={3}
                  value={formData.education}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.education ? 'border-red-500' : ''
                  }`}
                />
                {errors.education && (
                  <p className="mt-1 text-sm text-red-400">{errors.education}</p>
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
                <label htmlFor="skills" className="block text-sm font-medium text-gray-300">
                  Yetenekler
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  value={formData.skills}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3 ${
                    errors.skills ? 'border-red-500' : ''
                  }`}
                />
                {errors.skills && (
                  <p className="mt-1 text-sm text-red-400">{errors.skills}</p>
                )}
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300">
                  Ek Bilgiler
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl bg-white/5 border border-white/10 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-base p-3"
                />
              </div>

              {errors.submit && (
                <div className="rounded-xl bg-red-500/10 p-4 border border-red-500/20">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-400">
                        {errors.submit}
                      </h3>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="inline-flex items-center px-6 py-3 border border-white/10 text-sm font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
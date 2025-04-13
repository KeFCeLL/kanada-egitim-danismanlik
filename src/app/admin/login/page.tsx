'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Admin credentials
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'kanada2024';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Store authentication state in cookie
      setCookie('adminAuth', 'true', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      router.push('/admin/dashboard');
    } else {
      setError('Geçersiz kullanıcı adı veya şifre');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-gray-50 relative overflow-hidden">
      {/* Kanada Akçaağaç Yaprağı (Transparan) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          className="w-[600px] h-[600px] text-red-600 fill-current"
        >
          <path d="M256,0c-16.4,0-26.9,9.9-39.2,19.8C205.1,29.9,194.5,48,169.6,48H110.4c-13.5,0-20.8,10.6-20.8,26.3v39.2l-8.5,8.5
          c-8.5,8.5-12.7,16.9-12.7,26.9c0,15.5,11.3,28.3,26.3,28.3h39.2l34.1,34.1v26.9l-59.8,59.8c-8.5,8.5-12.7,16.9-12.7,26.9
          c0,15.5,11.3,28.3,26.3,28.3h12.7c25.5,0,48-14.1,59.8-34.1l14.1-28.3l14.1,28.3c11.8,20,34.3,34.1,59.8,34.1h12.7
          c15,0,26.3-12.8,26.3-28.3c0-10-4.2-18.4-12.7-26.9l-59.8-59.8v-26.9l34.1-34.1h39.2c15,0,26.3-12.8,26.3-28.3
          c0-10-4.2-18.4-12.7-26.9l-8.5-8.5V74.3c0-15.7-7.3-26.3-20.8-26.3h-59.2c-24.9,0-35.5-18.1-47.2-28.2C282.9,9.9,272.4,0,256,0z" />
        </svg>
      </div>
      
      <div className="max-w-md w-full space-y-8 p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg relative z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Paneli Girişi
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Kullanıcı Adı
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-base"
                placeholder="Kullanıcı Adı"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-base"
                placeholder="Şifre"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication on mount and route changes
    const auth = getCookie('adminAuth') === 'true';
    if (!auth && pathname !== '/admin/login') {
      router.push('/admin/login');
    } else if (auth && pathname === '/admin/login') {
      router.push('/admin/dashboard');
    } else {
      setIsAuthenticated(auth);
    }
  }, [pathname, router]);

  if (pathname === '/admin/login') {
    return children;
  }

  if (!isAuthenticated) {
    return null;
  }

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/users', label: 'Kullanıcılar', icon: '👥' },
    { href: '/admin/sliders', label: 'Slider Yönetimi', icon: '🖼️' },
    { href: '/admin/applications', label: 'Başvurular', icon: '📋' },
    { href: '/admin/contacts', label: 'İletişim Formları', icon: '✉️' },
  ];

  const handleLogout = () => {
    deleteCookie('adminAuth');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-xl font-bold text-red-600">Admin Panel</h1>
          </div>
          <nav className="mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  pathname === item.href ? 'bg-gray-100 border-r-4 border-red-500' : ''
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              <span className="mr-2">🚪</span>
              Çıkış Yap
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
} 
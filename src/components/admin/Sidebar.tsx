'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/users', label: 'Kullanıcılar', icon: '👥' },
    { href: '/admin/sliders', label: 'Slider Yönetimi', icon: '🖼️' },
    { href: '/admin/dialogs', label: 'Diyalog Yönetimi', icon: '💬' },
    { href: '/admin/forms', label: 'Form Yönetimi', icon: '📝' },
    { href: '/admin/content', label: 'İçerik Yönetimi', icon: '📄' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="w-64 bg-gray-800 shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 ${
              pathname === item.href ? 'bg-gray-700 border-r-4 border-cyan-500' : ''
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
  );
} 
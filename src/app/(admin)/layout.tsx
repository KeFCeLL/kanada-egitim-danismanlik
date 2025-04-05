import { ReactNode } from 'react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 border-b border-gray-700">
          <Link href="/dashboard" className="text-xl font-bold">
            CanadaEdu Admin
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">📊</span>
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href="/applications" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">📝</span>
                  Başvurular
                </div>
              </Link>
            </li>
            <li>
              <Link href="/users" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">👥</span>
                  Kullanıcılar
                </div>
              </Link>
            </li>
            <li>
              <Link href="/institutions" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">🏫</span>
                  Kurumlar
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">📰</span>
                  Blog
                </div>
              </Link>
            </li>
            <li>
              <Link href="/messages" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">💬</span>
                  Mesajlar
                </div>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">⚙️</span>
                  Ayarlar
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <span className="text-xl">🔔</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  A
                </div>
                <span className="font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 
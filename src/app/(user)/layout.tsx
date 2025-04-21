'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#8B0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-xl font-bold">
                Kanada Kolay Vize
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-white hover:text-gray-200 ${
                  isActive('/') ? 'font-bold' : ''
                }`}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/about"
                className={`text-white hover:text-gray-200 ${
                  isActive('/about') ? 'font-bold' : ''
                }`}
              >
                Hakkımızda
              </Link>
              <Link
                href="/services"
                className={`text-white hover:text-gray-200 ${
                  isActive('/services') ? 'font-bold' : ''
                }`}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/contact"
                className={`text-white hover:text-gray-200 ${
                  isActive('/contact') ? 'font-bold' : ''
                }`}
              >
                İletişim
              </Link>
              <Link
                href="/login"
                className={`text-white hover:text-gray-200 ${
                  isActive('/login') ? 'font-bold' : ''
                }`}
              >
                Giriş Yap
              </Link>
              <Link
                href="/apply"
                className="bg-white text-[#8B0000] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Başvur
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-200 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#6B0000] ${
                  isActive('/') ? 'bg-[#6B0000]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#6B0000] ${
                  isActive('/about') ? 'bg-[#6B0000]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#6B0000] ${
                  isActive('/services') ? 'bg-[#6B0000]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#6B0000] ${
                  isActive('/contact') ? 'bg-[#6B0000]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link
                href="/login"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#6B0000] ${
                  isActive('/login') ? 'bg-[#6B0000]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Giriş Yap
              </Link>
              <Link
                href="/apply"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#8B0000] bg-white hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Başvur
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kanada Kolay Vize</h3>
              <p className="text-gray-300">
                Kanada'da eğitim ve vize danışmanlığı hizmetleri sunan güvenilir partneriniz.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Anasayfa</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">Hakkımızda</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Hizmetler</Link></li>
                <li><Link href="/apply" className="text-gray-300 hover:text-white">Başvuru</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2">
                <li><Link href="/services/language-education" className="text-gray-300 hover:text-white">Dil Eğitimi</Link></li>
                <li><Link href="/services/university-education" className="text-gray-300 hover:text-white">Üniversite Eğitimi</Link></li>
                <li><Link href="/services/visa-consultancy" className="text-gray-300 hover:text-white">Vize Danışmanlığı</Link></li>
                <li><Link href="/services/accommodation-transportation" className="text-gray-300 hover:text-white">Konaklama ve Ulaşım</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span>📱</span>
                  <a href="tel:+905059866107" className="text-gray-300 hover:text-white">
                    +90 505 986 61 07
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✉️</span>
                  <a href="mailto:info@kanadakolayvize.com" className="text-gray-300 hover:text-white">
                    info@kanadakolayvize.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span className="text-gray-300">Toronto, ON, Kanada</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Kanada Kolay Vize. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
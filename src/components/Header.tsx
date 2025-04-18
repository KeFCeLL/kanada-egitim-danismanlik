import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kanada Kolay Vize Logo"
              width={120}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600">
              Hakkımızda
            </Link>
            <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600">
              Hizmetler
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600">
              İletişim
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Giriş Yap
            </Link>
          </nav>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/hizmetler"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link
              href="/iletisim"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/login"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Giriş Yap
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 
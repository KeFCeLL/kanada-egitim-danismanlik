import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
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
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              İletişim
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              href="/apply"
              className="text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md transition-colors"
            >
              Başvur
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-cyan-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-cyan-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') ? 'text-cyan-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') ? 'text-cyan-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              İletişim
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700"
            >
              Giriş Yap
            </Link>
            <Link
              href="/apply"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700"
            >
              Başvur
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
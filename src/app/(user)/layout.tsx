import { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

interface UserLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Kanada Kolay Vize',
  description: 'Kanada vize ve eğitim danışmanlığı',
};

export default function UserLayout({ children }: UserLayoutProps) {
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

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gray-200">
                Ana Sayfa
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200">
                Hakkımızda
              </Link>
              <Link href="/services" className="text-white hover:text-gray-200">
                Hizmetlerimiz
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200">
                İletişim
              </Link>
              <Link href="/login" className="text-white hover:text-gray-200">
                Giriş Yap
              </Link>
              <Link href="/apply" className="text-white hover:text-gray-200">
                Başvur
              </Link>
            </nav>
          </div>
        </div>
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
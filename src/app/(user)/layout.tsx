import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#DC2626]">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="relative w-[300px] h-[50px]">
                <Image
                  src="/logo.svg"
                  alt="Kanada Kolay Vize"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-200 font-medium">
                Anasayfa
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200 font-medium">
                Hakkımızda
              </Link>
              <div className="relative group">
                <Link href="/services" className="text-white hover:text-gray-200 font-medium">
                  Hizmetler
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                  <Link href="/services/language-education" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Dil Eğitimi
                  </Link>
                  <Link href="/services/university-education" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Üniversite Eğitimi
                  </Link>
                  <Link href="/services/visa-consultancy" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Vize Danışmanlığı
                  </Link>
                  <Link href="/services/accommodation-transportation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Konaklama ve Ulaşım
                  </Link>
                </div>
              </div>
              <Link href="/apply" className="text-white hover:text-gray-200 font-medium">
                Başvuru
              </Link>
              <Link href="/faq" className="text-white hover:text-gray-200 font-medium">
                SSS
              </Link>
              <Link href="/blog" className="text-white hover:text-gray-200 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 font-medium">
                İletişim
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-gray-200 font-medium">
                Giriş Yap
              </Link>
              <Link 
                href="/apply" 
                className="bg-white text-[#DC2626] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Hemen Başvur
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CanadaEdu</h3>
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
                <li className="flex items-center"><span className="mr-2">📱</span> +1 (123) 456-7890</li>
                <li className="flex items-center"><span className="mr-2">✉️</span> info@canadaedu.com</li>
                <li className="flex items-center"><span className="mr-2">📍</span> Toronto, ON, Kanada</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} CanadaEdu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
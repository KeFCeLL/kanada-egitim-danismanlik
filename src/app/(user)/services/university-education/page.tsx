import Link from 'next/link';

export default function UniversityEducation() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Hizmetlere Dön
          </Link>
          <div className="inline-block bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text font-bold text-xl mb-2">ÜNİVERSİTE EĞİTİMİ DANIŞMANLIĞI</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanada'da Üniversite Eğitimi</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dünyanın en iyi üniversitelerinin bulunduğu Kanada'da lisans, yüksek lisans ve doktora eğitimi alın.
            Kaliteli eğitim ve mezuniyet sonrası çalışma ve göçmenlik fırsatlarından yararlanın.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Undergraduate Studies */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Lisans Eğitimi</h3>
              <p className="text-gray-400 mb-4">
                Dünya sıralamasında üst sıralarda yer alan Kanada üniversitelerinde 3-4 yıllık lisans programları.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Süre: 3-4 yıl</li>
                <li>Derece: Bachelor's Degree</li>
                <li>Yıllık Ücret: $15,000-$35,000 CAD</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-blue-400 font-medium">
                Program Detayları
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Graduate Studies */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Yüksek Lisans</h3>
              <p className="text-gray-400 mb-4">
                Akademik veya profesyonel odaklı yüksek lisans programları ile kariyerinizde uzmanlaşın.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Süre: 1-2 yıl</li>
                <li>Derece: Master's Degree</li>
                <li>Yıllık Ücret: $15,000-$40,000 CAD</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-indigo-400 font-medium">
                Program Detayları
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Doctorate Studies */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Doktora</h3>
              <p className="text-gray-400 mb-4">
                Akademik araştırma ve uzmanlık gerektiren alanlarda en üst düzey eğitim programları.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Süre: 4-6 yıl</li>
                <li>Derece: PhD / Doctorate</li>
                <li>Yıllık Ücret: $10,000-$20,000 CAD</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-purple-400 font-medium">
                Program Detayları
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Study in Canada */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text relative z-10 text-center">Neden Kanada'da Üniversite Eğitimi?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Dünya Sıralamasında Üst Düzey</h3>
                <p className="text-gray-400">
                  Toronto, McGill, UBC gibi dünya çapında tanınan ve üst sıralarda yer alan üniversiteler.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Kalite/Fiyat Oranı</h3>
                <p className="text-gray-400">
                  ABD ve İngiltere'ye kıyasla daha uygun fiyatlarla dünya standartlarında eğitim imkanı.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Çalışma İmkanları</h3>
                <p className="text-gray-400">
                  Eğitim sırasında kampüs içi/dışı çalışma ve mezuniyet sonrası 1-3 yıl çalışma izni.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 text-pink-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Göçmenlik Fırsatları</h3>
                <p className="text-gray-400">
                  Kanada'da eğitim, kalıcı oturum ve vatandaşlık için önemli bir avantaj sağlar.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Güvenli ve Çok Kültürlü Ortam</h3>
                <p className="text-gray-400">
                  Dünya'nın en yaşanabilir ülkelerinden birinde çok kültürlü ve kabul edici bir ortam.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4 text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Kampüsler ve Altyapı</h3>
                <p className="text-gray-400">
                  İleri teknoloji ile donatılmış laboratuvarlar, kütüphaneler ve modern eğitim imkanları.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Kanada'nın En İyi Üniversiteleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-white flex items-center justify-center font-bold mr-4">
                    UofT
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">University of Toronto</h4>
                    <p className="text-sm text-gray-400">Toronto, Ontario</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Kanada'nın en prestijli üniversitesi ve dünya sıralamasında ilk 30'da yer alan bir araştırma üniversitesi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs">Tıp</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs">Mühendislik</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs">İşletme</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs">Hukuk</span>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-white flex items-center justify-center font-bold mr-4">
                    McGill
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">McGill University</h4>
                    <p className="text-sm text-gray-400">Montreal, Quebec</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  200 yılı aşkın bir geçmişe sahip, dünya sıralamasında ilk 50'de yer alan ve uluslararası tanınırlığı yüksek bir üniversite.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md text-xs">Tıp</span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md text-xs">Hukuk</span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md text-xs">Müzik</span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md text-xs">Beşeri Bilimler</span>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white flex items-center justify-center font-bold mr-4">
                    UBC
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">University of British Columbia</h4>
                    <p className="text-sm text-gray-400">Vancouver, British Columbia</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Pasifik Okyanusu kıyısında Kanada'nın en güzel kampüslerinden birine sahip, araştırma odaklı bir üniversite.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs">Bilgisayar Bilimi</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs">Ormancılık</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs">Sürdürülebilirlik</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs">İşletme</span>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 text-white flex items-center justify-center font-bold mr-4">
                    UW
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">University of Waterloo</h4>
                    <p className="text-sm text-gray-400">Waterloo, Ontario</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Bilgisayar bilimi, mühendislik ve teknoloji alanlarında dünya lideri, Kanada'nın en yenilikçi üniversitesi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded-md text-xs">Bilgisayar Mühendisliği</span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded-md text-xs">Matematik</span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded-md text-xs">AI</span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded-md text-xs">Co-op Programları</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              Tüm Üniversiteler Hakkında Bilgi Alın
            </Link>
          </div>
        </div>

        {/* Admission Process */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text relative z-10 text-center">Başvuru Süreci</h2>
            
            <div className="relative z-10 space-y-8">
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 mr-6">1</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-indigo-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Üniversite ve Program Seçimi</h3>
                  <p className="text-gray-400 mb-4">
                    Danışmanlarımız, akademik geçmişiniz, ilgi alanlarınız ve kariyer hedeflerinize uygun üniversite ve programları belirlemenize yardımcı olur.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 mr-6">2</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Gerekli Belgelerin Hazırlanması</h3>
                  <p className="text-gray-400 mb-4">
                    Transkript, diploma, dil yeterlilik belgesi (IELTS/TOEFL), niyet mektubu, CV ve referans mektupları gibi belgelerin hazırlanması.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 mr-6">3</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-pink-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Başvuruların Yapılması</h3>
                  <p className="text-gray-400 mb-4">
                    Üniversitelerin online başvuru sistemleri üzerinden başvuruların yapılması ve takibi. Genellikle 3-5 üniversiteye başvuru yapılması önerilir.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/20 mr-6">4</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Kabul Mektuplarının Alınması</h3>
                  <p className="text-gray-400 mb-4">
                    Başvuru sonuçlarının takibi, şartlı veya şartsız kabul mektuplarının alınması ve en uygun teklifin değerlendirilmesi.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/20 mr-6">5</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-orange-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Öğrenci Vizesi Başvurusu</h3>
                  <p className="text-gray-400 mb-4">
                    Kabul mektubu alındıktan sonra gerekli vize belgelerinin hazırlanması ve başvurunun yapılması. Danışmanlarımız tüm süreçte size destek olur.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 mr-6">6</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Kanada'ya Yolculuk ve Adaptasyon</h3>
                  <p className="text-gray-400 mb-4">
                    Konaklama, sağlık sigortası, banka hesabı açılması ve diğer adaptasyon süreçlerinde destek. Kanada'ya varışınızdan itibaren yanınızdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Sık Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da üniversite eğitimi için hangi dil yeterlilik belgeleri gerekiyor?</h3>
                  <span className="text-blue-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    İngilizce eğitim veren üniversiteler için IELTS (genellikle minimum 6.5) veya TOEFL (genellikle minimum 90) skorları istenir. Fransızca eğitim veren üniversiteler için DELF/DALF veya TEF/TCF belgeleri gereklidir. Bazı üniversiteler kendi dil testlerini de uygulayabilir.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Üniversite eğitimi sırasında çalışabilir miyim?</h3>
                  <span className="text-blue-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Evet, öğrenci vizesi (study permit) sahibi olarak kampüs içinde sınırsız, kampüs dışında ise dönem boyunca haftada 20 saate kadar çalışabilirsiniz. Tatil dönemlerinde tam zamanlı çalışma hakkınız vardır. Ayrıca Co-op veya staj programlarına katılarak eğitiminizle ilgili alanlarda deneyim kazanabilirsiniz.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Mezuniyet sonrası Kanada'da kalabilir miyim?</h3>
                  <span className="text-blue-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Evet, Kanada'da eğitiminizi tamamladıktan sonra Post-Graduation Work Permit (PGWP) alarak eğitim süreniz kadar (1-3 yıl) Kanada'da çalışabilirsiniz. Bu süre içinde iş deneyimi kazanarak Express Entry veya Provincial Nominee Program gibi göçmenlik programlarına başvurarak kalıcı oturum (PR) alabilirsiniz.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Apply Now CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="relative z-10 p-12">
              <h3 className="text-2xl font-bold mb-4">Üniversite Eğitimi için Danışmanlık Alın</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Size en uygun üniversite ve programı seçmek, başvuru sürecini yönetmek ve vize işlemlerinizde profesyonel destek almak için hemen başvurun.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/apply"
                  className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Hemen Başvurun
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Ücretsiz Danışmanlık Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">Kanada Kolay Vize</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kanada'da eğitim almak isteyen öğrencilere kapsamlı danışmanlık ve destek hizmetleri sunuyoruz.
            Her adımda yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Service Card: Language Education */}
          <Link href="/services/language-education" className="group">
            <div className="h-full rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(0,124,255,0.12)] group-hover:border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">Dil Eğitimi</h3>
                <p className="text-gray-400 mb-6">
                  Kanada'nın en prestijli dil okullarında İngilizce ve Fransızca eğitimi için danışmanlık.
                </p>
                <span className="inline-flex items-center text-cyan-400 font-medium">
                  Detayları Görüntüle
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        
          {/* Service Card: University Education */}
          <Link href="/services/university-education" className="group">
            <div className="h-full rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(93,79,240,0.12)] group-hover:border-indigo-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">Üniversite Eğitimi</h3>
                <p className="text-gray-400 mb-6">
                  Lisans, yüksek lisans ve doktora programları için doğru üniversite ve bölüm seçimi danışmanlığı.
                </p>
                <span className="inline-flex items-center text-blue-400 font-medium">
                  Detayları Görüntüle
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        
          {/* Service Card: Visa Consultancy */}
          <Link href="/services/visa-consultancy" className="group">
            <div className="h-full rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] group-hover:border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors duration-300">Vize Danışmanlığı</h3>
                <p className="text-gray-400 mb-6">
                  Öğrenci vizesi, çalışma izni ve göçmenlik konularında profesyonel destek.
                </p>
                <span className="inline-flex items-center text-indigo-400 font-medium">
                  Detayları Görüntüle
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Service Card: Accommodation & Transportation */}
          <Link href="/services/accommodation-transportation" className="group">
            <div className="h-full rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] group-hover:border-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">Konaklama ve Ulaşım</h3>
                <p className="text-gray-400 mb-6">
                  Kanada'da güvenli ve konforlu konaklama seçenekleri ile ulaşım çözümleri.
                </p>
                <span className="inline-flex items-center text-emerald-400 font-medium">
                  Detayları Görüntüle
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text relative z-10 text-center">Neden Bizi Seçmelisiniz?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Güvenilir Deneyim</h3>
                <p className="text-gray-400">
                  15+ yıllık sektör deneyimi ile 5000'den fazla öğrenciye başarıyla danışmanlık hizmeti sağladık.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Kişiselleştirilmiş Planlar</h3>
                <p className="text-gray-400">
                  Her öğrencinin bireysel hedeflerine, bütçesine ve akademik geçmişine göre özelleştirilmiş çözümler.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Uçtan Uca Destek</h3>
                <p className="text-gray-400">
                  İlk danışmanlıktan Kanada'ya varışınıza kadar her aşamada kesintisiz destek ve rehberlik.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="relative z-10 p-12">
              <h3 className="text-2xl font-bold mb-4">Kanada Eğitim Yolculuğunuza Hemen Başlayın</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Uzman danışmanlarımızla ücretsiz bir görüşme yaparak, size özel eğitim planınızı oluşturun.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Bizimle İletişime Geçin
                </Link>
                <Link 
                  href="/apply"
                  className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Hemen Başvurun
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import Link from 'next/link';

export default function VisaConsultancy() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/services" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Hizmetlere Dön
          </Link>
          <div className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">VİZE DANIŞMANLIĞI HİZMETLERİ</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanada Vize Danışmanlığı</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Uzman ekibimizle Kanada'ya seyahat, eğitim, çalışma ve göçmenlik vizeleri için başvuru sürecinizi kolaylaştırın.
            Yüksek başarı oranı ve profesyonel destek garantisiyle vize yolculuğunuzda yanınızdayız.
          </p>
        </div>

        {/* Visa Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Student Visa */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Öğrenci Vizesi</h3>
              <p className="text-gray-400 mb-4">
                Kanada'da 6 aydan uzun sürecek eğitim programları için Study Permit başvurusu.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Dil okulları için vize</li>
                <li>Üniversite ve kolej vizesi</li>
                <li>Co-op/staj izinleri</li>
                <li>Refakatçi vizesi</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-indigo-400 font-medium">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Work Visa */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Çalışma Vizesi</h3>
              <p className="text-gray-400 mb-4">
                Kanada'da çalışma imkanı sağlayan vize ve izinler için danışmanlık.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>PGWP (Mezuniyet sonrası izni)</li>
                <li>LMIA bazlı çalışma izni</li>
                <li>IEC - Working Holiday</li>
                <li>Eş çalışma izni</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-purple-400 font-medium">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Tourist Visa */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Turistik Vize</h3>
              <p className="text-gray-400 mb-4">
                Kanada'ya turistik amaçlı seyahatler için ziyaretçi vizesi ve eTA başvuruları.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Ziyaretçi vizesi (Visitor Visa)</li>
                <li>eTA (elektronik seyahat izni)</li>
                <li>Aile ziyareti vizesi</li>
                <li>İş seyahati vizesi</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-blue-400 font-medium">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Immigration */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Göçmenlik</h3>
              <p className="text-gray-400 mb-4">
                Kanada'da kalıcı oturum (PR) ve vatandaşlık başvuruları için destek.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                <li>Express Entry</li>
                <li>Provincial Nominee Program</li>
                <li>Aile sponsorluğu</li>
                <li>Kanada vatandaşlığı</li>
              </ul>
              <Link href="/apply" className="inline-flex items-center text-pink-400 font-medium">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Our Visa Services */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text relative z-10 text-center">Vize Danışmanlık Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-indigo-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vize Değerlendirmesi</h3>
                    <p className="text-gray-400">
                      Kişisel durumunuza göre en uygun vize türünün belirlenmesi ve başarı şansınızın değerlendirilmesi.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-purple-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Belge Hazırlama</h3>
                    <p className="text-gray-400">
                      Başvuru için gerekli tüm belgelerin hazırlanması, çeviri ve noter onayı süreçleri için destek.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-pink-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Başvuru Formları</h3>
                    <p className="text-gray-400">
                      Karmaşık başvuru formlarının doğru ve eksiksiz doldurulması, hataların önlenmesi.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center text-red-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Niyet Mektubu</h3>
                    <p className="text-gray-400">
                      İkna edici ve başarı şansınızı artıracak niyet/açıklama mektuplarının hazırlanması.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Neden Bizimle Çalışmalısınız?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">%95+ Başarı Oranı</h3>
                <p className="text-gray-300">
                  15 yılı aşkın deneyimimiz ve uzman ekibimizle vize başvurularında %95'in üzerinde başarı oranı sağlıyoruz.
                </p>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Zaman Tasarrufu</h3>
                <p className="text-gray-300">
                  Karmaşık vize süreçlerini sizin için yönetiyor, zaman kaybını önlüyor ve süreci hızlandırıyoruz.
                </p>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Uzman Ekip</h3>
                <p className="text-gray-300">
                  Kanada göçmenlik mevzuatı ve politikalarında sürekli eğitim alan uzman danışmanlarımızla çalışırsınız.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Application Process */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Vize Başvuru Süreci</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-3 text-white">Ücretsiz Danışma</h3>
                <p className="text-gray-400">Hedeflerinizi ve durumunuzu değerlendirmek için ücretsiz ön görüşme.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-3 text-white">Strateji Planı</h3>
                <p className="text-gray-400">Kişisel durumunuza uygun vize stratejisi ve yol haritası oluşturma.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-pink-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-3 text-white">Belge Hazırlığı</h3>
                <p className="text-gray-400">Gerekli tüm belgelerin eksiksiz hazırlanması ve kontrolü.</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold mb-4">4</div>
                <h3 className="text-xl font-bold mb-3 text-white">Başvuru Sunumu</h3>
                <p className="text-gray-400">Başvurunun ilgili makama eksiksiz ve doğru şekilde sunulması.</p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 text-white font-bold mb-4">5</div>
                <h3 className="text-xl font-bold mb-3 text-white">Takip ve İletişim</h3>
                <p className="text-gray-400">Başvurunun düzenli takibi ve gerekli durumlarda ek bilgi sağlanması.</p>
              </div>
            </div>
            
            {/* Step 6 */}
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-600/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 text-white font-bold mb-4">6</div>
                <h3 className="text-xl font-bold mb-3 text-white">Onay ve Hazırlık</h3>
                <p className="text-gray-400">Vize onayı sonrası seyahat ve yerleşme için gereken hazırlıklar.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Sık Sorulan Sorular</h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-medium text-white">
                Kanada vizesi başvuru süreci ne kadar sürer?
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-400">
                Vize türüne bağlı olarak değişir. Öğrenci vizesi genellikle 6-8 hafta, ziyaretçi vizesi 3-4 hafta, çalışma vizesi 4-16 hafta ve göçmenlik başvuruları 6-12 ay sürebilir. Ülkenize ve başvuru dönemindeki yoğunluğa göre bu süreler değişiklik gösterebilir.
              </div>
            </details>
            
            {/* FAQ 2 */}
            <details className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-medium text-white">
                Vize başvurum reddedilirse ne yapabilirim?
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-400">
                Ret gerekçesine bağlı olarak yeniden başvuru yapabilir veya itiraz edebilirsiniz. Danışmanlarımız ret nedenlerini analiz ederek, eksiklikleri gidermek ve başvurunuzu güçlendirmek için stratejiler geliştirir. Bazı durumlarda farklı bir vize kategorisine başvurmak daha uygun olabilir.
              </div>
            </details>
            
            {/* FAQ 3 */}
            <details className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-medium text-white">
                Hangi belgeler vize başvurusu için gereklidir?
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-400">
                Genel olarak pasaport, fotoğraf, başvuru formları, finansal belgeler, seyahat sigortası, konaklama bilgileri, seyahat planı ve niyet mektubu gereklidir. Vize türüne göre ek belgeler (kabul mektubu, iş teklifi, sponsor mektubu vb.) istenebilir. Güncel ve eksiksiz belge listesi için danışmanlarımızla görüşmelisiniz.
              </div>
            </details>
            
            {/* FAQ 4 */}
            <details className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-medium text-white">
                Kanada'da çalışmak için hangi vize seçenekleri vardır?
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-400">
                Temel çalışma vizesi seçenekleri: LMIA destekli çalışma izni, PGWP (Mezuniyet Sonrası Çalışma İzni), IEC programları (Working Holiday dahil), CUSMA/NAFTA bazlı çalışma izinleri, eş çalışma izni ve açık çalışma izinleri. Her birinin farklı şartları ve avantajları vardır.
              </div>
            </details>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-b from-indigo-900/30 to-purple-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-indigo-500/20 p-8 relative overflow-hidden">
            <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-indigo-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Kanada'daki Geleceğiniz İçin İlk Adımı Atın</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Vize danışmanlığı hizmetlerimizle Kanada'ya giden yolculuğunuzu kolaylaştırıyoruz. Uzman ekibimiz, kişiselleştirilmiş çözümlerle her adımda yanınızda.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/apply" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Hemen Başvur
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Ücretsiz Danışmanlık
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
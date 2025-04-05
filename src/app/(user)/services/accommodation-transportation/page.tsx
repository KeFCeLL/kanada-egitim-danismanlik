import Link from 'next/link';

export default function AccommodationTransportation() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/services" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Hizmetlere Dön
          </Link>
          <div className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text font-bold text-xl mb-2">KONAKLAMA VE ULAŞIM HİZMETLERİ</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanada'da Konaklama ve Ulaşım</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kanada'da eğitim süreniz boyunca güvenli ve konforlu bir yaşam için konaklama ve ulaşım çözümleri sunuyoruz.
            Her bütçeye uygun seçeneklerle yanınızdayız.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Column: Accommodation Options */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-emerald-600/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -right-32 -top-32 w-64 h-64 bg-teal-600/20 rounded-full filter blur-3xl"></div>
              
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text relative z-10">Konaklama Seçenekleri</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Aile Yanı Konaklama</h3>
                  <p className="text-gray-400 mb-4">
                    Kanada kültürünü yakından tanıma fırsatı sunan, güvenli ve ekonomik konaklama seçeneği.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Yemek dahil veya yemeksiz seçenekler</li>
                    <li>Özel oda ve ortak alanlar</li>
                    <li>Kültürel etkileşim imkanı</li>
                    <li>Güvenli ve aile ortamı</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Öğrenci Yurtları</h3>
                  <p className="text-gray-400 mb-4">
                    Kampüs içi veya yakınında, sosyal etkileşimin yoğun olduğu konaklama seçeneği.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Kampüs içi ulaşım kolaylığı</li>
                    <li>Ortak yaşam alanları</li>
                    <li>Sosyal aktiviteler</li>
                    <li>7/24 güvenlik</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Paylaşımlı Daireler</h3>
                  <p className="text-gray-400 mb-4">
                    Bağımsız yaşam isteyenler için ekonomik ve esnek konaklama seçeneği.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Farklı bütçelere uygun seçenekler</li>
                    <li>Ortak mutfak ve banyo</li>
                    <li>Özel oda seçeneği</li>
                    <li>Şehir merkezine yakın lokasyonlar</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Stüdyo ve Tek Odalı Daireler</h3>
                  <p className="text-gray-400 mb-4">
                    Özel alan isteyenler için tam donanımlı konaklama seçeneği.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Özel mutfak ve banyo</li>
                    <li>Mobilyalı seçenekler</li>
                    <li>Güvenli binalar</li>
                    <li>Fitness ve sosyal alanlar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Transportation & Info */}
          <div className="space-y-8">
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-emerald-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text relative z-10">Ulaşım Seçenekleri</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Toplu taşıma sistemleri (metro, otobüs, tramvay)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Öğrenci indirimli ulaşım kartları</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Bisiklet yolları ve paylaşımlı bisiklet sistemleri</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Havaalanı transfer hizmetleri</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-teal-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text relative z-10">Neden Bizimle Çalışmalısınız?</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Güvenilir ve deneyimli konaklama partnerleri</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Bütçenize uygun seçenekler</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">7/24 destek ve danışmanlık</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Kolay ulaşım çözümleri</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ücretsiz Danışmanlık Alın</h3>
                <p className="text-emerald-100 mb-6">
                  Size en uygun konaklama ve ulaşım seçeneklerini belirlemek için uzman danışmanlarımızla görüşün.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 rounded-lg bg-white text-emerald-600 font-medium hover:bg-gray-100 transition-colors"
                >
                  Hemen İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">Sık Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Konaklama seçeneklerinin fiyatları ne kadar?</h3>
                  <span className="text-emerald-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Konaklama fiyatları şehre, bölgeye ve konaklama tipine göre değişiklik gösterir. Aile yanı konaklama aylık 800-1200 CAD, öğrenci yurtları 1000-1500 CAD, paylaşımlı daireler 600-1000 CAD, stüdyo daireler ise 1200-2000 CAD arasında değişmektedir. Detaylı fiyat bilgisi için danışmanlarımızla görüşebilirsiniz.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Ulaşım kartı nasıl alabilirim?</h3>
                  <span className="text-emerald-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Öğrenci kimliğinizle birlikte şehirdeki toplu taşıma merkezlerinden öğrenci indirimli ulaşım kartı alabilirsiniz. Aylık, haftalık veya günlük seçenekler mevcuttur. Danışmanlarımız size en uygun ulaşım kartını seçmenizde yardımcı olacaktır.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Konaklama yerimi değiştirebilir miyim?</h3>
                  <span className="text-emerald-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Evet, konaklama yerinizi değiştirebilirsiniz. Genellikle 1-2 ay önceden bildirim yapmanız yeterlidir. Danışmanlarımız yeni konaklama seçeneklerini değerlendirmenizde ve taşınma sürecinde size yardımcı olacaktır.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="relative z-10 p-12">
              <h3 className="text-2xl font-bold mb-4">Kanada'da Konforlu Bir Yaşam İçin Hazır mısınız?</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Hemen başvurun ve size özel konaklama ve ulaşım planınızı oluşturalım. İlk adımı atmak için yanınızdayız.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/apply"
                  className="px-8 py-3 rounded-lg bg-white text-emerald-600 font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Hemen Başvurun
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Diğer Hizmetleri İnceleyin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
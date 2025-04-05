import Link from 'next/link';

export default function LanguageEducation() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Hizmetlere Dön
          </Link>
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold text-xl mb-2">DİL EĞİTİMİ DANIŞMANLIĞI</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanada'da Dil Eğitimi</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kanada'nın prestijli dil okullarında İngilizce ve Fransızca eğitimi alarak dil becerilerinizi geliştirin.
            Akademik veya genel dil programlarıyla kariyer hedeflerinize ulaşın.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Column: Programs */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
              
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text relative z-10">Dil Programları</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Genel İngilizce</h3>
                  <p className="text-gray-400 mb-4">
                    Günlük yaşamda iletişim kurabilmeniz için gereken İngilizce becerileri geliştirmeye yönelik programlar. Konuşma, dinleme, okuma ve yazma becerilerinizi geliştirir.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Süre: 2-52 hafta</li>
                    <li>Seviyeler: Başlangıç, orta, ileri</li>
                    <li>Yoğunluk: Haftada 15-30 saat</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Akademik İngilizce</h3>
                  <p className="text-gray-400 mb-4">
                    Üniversite veya kolej eğitimi için gerekli akademik İngilizce becerilerini kazandıran programlar. Sunum, araştırma ve akademik yazım teknikleri öğretilir.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Süre: 8-24 hafta</li>
                    <li>Seviyeler: Orta-üstü, ileri</li>
                    <li>Özellik: Üniversite hazırlık bileşenleri</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">İş İngilizcesi</h3>
                  <p className="text-gray-400 mb-4">
                    Profesyonel iş ortamlarında iletişim kurabilmeniz için gerekli becerileri geliştiren programlar. İş görüşmeleri, toplantılar ve e-posta yazışmaları üzerine odaklanır.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Süre: 4-12 hafta</li>
                    <li>Seviyeler: Orta, ileri</li>
                    <li>Özellik: Sektöre özel terminoloji</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Fransızca Eğitimi</h3>
                  <p className="text-gray-400 mb-4">
                    Kanada'nın resmi dillerinden biri olan Fransızca'yı öğrenmek için çeşitli programlar. Quebec'te eğitim veya çalışma hedefleyenler için idealdir.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Süre: 2-48 hafta</li>
                    <li>Seviyeler: Başlangıç, orta, ileri</li>
                    <li>Lokasyon: Montreal, Quebec City</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Sınav Hazırlık</h3>
                  <p className="text-gray-400 mb-4">
                    IELTS, TOEFL, CELPIP veya TEF gibi sınavlara hazırlık kursları. Göçmenlik ve üniversite başvuruları için gerekli sınavlara odaklanır.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                    <li>Süre: 4-12 hafta</li>
                    <li>Özellik: Pratik sınav stratejileri</li>
                    <li>Hedef: Yüksek puan garantisi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Info & CTA */}
          <div className="space-y-8">
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-cyan-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text relative z-10">Neden Kanada'da Dil Eğitimi?</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Çift resmi dil: İngilizce ve Fransızca öğrenme fırsatı</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Yüksek kaliteli eğitim standartları ve akredite okullar</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Part-time çalışma izni ile eğitim masraflarınıza katkı</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Güvenli ve yüksek yaşam kalitesine sahip şehirler</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Çok kültürlü ortamda dil pratiği yapma imkanı</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text relative z-10">Popüler Dil Okulları</h3>
              
              <div className="space-y-3 relative z-10">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-medium text-white">ILAC - International Language Academy of Canada</p>
                  <p className="text-sm text-gray-400">Toronto, Vancouver</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-medium text-white">EC English Language Centres</p>
                  <p className="text-sm text-gray-400">Montreal, Vancouver, Toronto</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-medium text-white">Kaplan International English</p>
                  <p className="text-sm text-gray-400">Toronto, Vancouver</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-medium text-white">LSI - Language Studies International</p>
                  <p className="text-sm text-gray-400">Vancouver, Toronto</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-medium text-white">ILSC Language Schools</p>
                  <p className="text-sm text-gray-400">Montreal, Toronto, Vancouver</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ücretsiz Danışmanlık Alın</h3>
                <p className="text-blue-100 mb-6">
                  Size en uygun dil okulunu ve programı belirlemek için uzman danışmanlarımızla görüşün.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
                >
                  Hemen İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Öğrencilerimizin Deneyimleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-white flex items-center justify-center font-bold mr-4">
                    BK
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Burak Kaya</h4>
                    <p className="text-sm text-gray-400">ILAC Toronto, 2022</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "6 aylık yoğun İngilizce programı için Toronto'ya gittim. CanadaEdu'nun desteğiyle doğru okulu seçtim ve harika bir deneyim yaşadım. Şimdi Kanada'da bir üniversitede eğitimime devam ediyorum."
                </p>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-white flex items-center justify-center font-bold mr-4">
                    SY
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Selin Yılmaz</h4>
                    <p className="text-sm text-gray-400">EC Montreal, 2023</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Montreal'de Fransızca öğrenmek için harika bir deneyimdi. Danışmanlarım hem vize sürecimde hem de okul seçimimde çok yardımcı oldular. Şimdi hem İngilizce hem de Fransızca konuşabiliyorum!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Sık Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da dil eğitimi için hangi vizeye ihtiyacım var?</h3>
                  <span className="text-cyan-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    6 aydan kısa programlar için genellikle Visitor Visa veya eTA (elektronik seyahat izni) yeterlidir. 6 aydan uzun programlar için Study Permit (öğrenci vizesi) almanız gerekir. Danışmanlarımız doğru vize başvurusu yapmanızda size yardımcı olacaktır.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Dil eğitimi sırasında çalışabilir miyim?</h3>
                  <span className="text-cyan-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Study Permit sahibiyseniz ve programınız haftada en az 20 saat ders içeriyorsa, kampüs içinde sınırsız, kampüs dışında ise haftada 20 saate kadar çalışma hakkınız vardır. Tatil dönemlerinde tam zamanlı çalışabilirsiniz.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Dil eğitimi sırasında nerede konaklayabilirim?</h3>
                  <span className="text-cyan-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p>
                    Dil okulları genellikle aile yanı konaklama (homestay), öğrenci yurtları veya paylaşımlı daire seçenekleri sunar. Aile yanı konaklama, hem dil pratiği yapma imkanı sunar hem de Kanada kültürünü yakından tanımanızı sağlar.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Apply Now CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="relative z-10 p-12">
              <h3 className="text-2xl font-bold mb-4">Kanada'da Dil Eğitimi Almaya Hazır mısınız?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Hemen başvurun ve size özel dil eğitim planınızı oluşturalım. İlk adımı atmak için yanınızdayız.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/apply"
                  className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors shadow-lg"
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
import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">SORULARINIZ</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sık Sorulan Sorular</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kanada eğitim sürecine dair merak ettiğiniz tüm soruların cevaplarını bu sayfada bulabilirsiniz.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Category Navigation */}
          <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-4 mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">
                Tüm Sorular
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-gray-300 font-medium transition-colors">
                Dil Eğitimi
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-gray-300 font-medium transition-colors">
                Üniversite
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-gray-300 font-medium transition-colors">
                Vize
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-gray-300 font-medium transition-colors">
                Konaklama
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-gray-300 font-medium transition-colors">
                Maliyetler
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da eğitim almak için hangi vize türlerine ihtiyacım var?</h3>
                  <span className="text-cyan-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Kanada'da eğitim almak için ihtiyacınız olan vize türü, programınızın süresine bağlıdır:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>6 aydan kısa süreli programlar için: Ziyaretçi Vizesi veya eTA (Elektronik Seyahat İzni)</li>
                    <li>6 aydan uzun süreli programlar için: Öğrenci Vizesi (Study Permit)</li>
                    <li>Co-op veya staj programları için: Öğrenci Vizesi + Çalışma İzni</li>
                  </ul>
                  <p className="mt-3">
                    Danışmanlarımız, ihtiyacınız olan vize türüne karar vermenize ve başvuru sürecinizde size destek olmaya hazırdır.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da eğitim masrafları ne kadardır?</h3>
                  <span className="text-blue-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Kanada'da eğitim masrafları, program türüne, eğitim kurumuna ve şehre göre değişiklik göstermektedir:
                  </p>
                  <div className="rounded-lg bg-white/5 p-4 my-4">
                    <h4 className="font-medium text-cyan-400 mb-2">Dil Okulları:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Haftalık ortalama $350-$500 CAD</li>
                      <li>12 haftalık program: $4,000-$6,000 CAD</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white/5 p-4 my-4">
                    <h4 className="font-medium text-blue-400 mb-2">Üniversite Eğitimi (Lisans):</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Yıllık eğitim ücreti: $20,000-$40,000 CAD</li>
                      <li>Yaşam giderleri (yıllık): $10,000-$20,000 CAD</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white/5 p-4 my-4">
                    <h4 className="font-medium text-indigo-400 mb-2">Yüksek Lisans:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Yıllık eğitim ücreti: $15,000-$35,000 CAD</li>
                      <li>Yaşam giderleri (yıllık): $10,000-$20,000 CAD</li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    Size özel bir bütçe planı oluşturmak ve burs imkanlarını değerlendirmek için danışmanlarımızla görüşebilirsiniz.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da öğrenciyken çalışabilir miyim?</h3>
                  <span className="text-indigo-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Evet, Kanada'da öğrenci vizeniz (Study Permit) varsa, belirli koşullar altında çalışabilirsiniz:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kampüs içinde: Sınırsız çalışma hakkı</li>
                    <li>Kampüs dışında: Eğitim döneminde haftada 20 saat, tatil dönemlerinde tam zamanlı</li>
                    <li>Co-op veya staj programları: Çalışma izni alarak</li>
                  </ul>
                  <div className="rounded-lg bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 p-4 mt-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 mt-1">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <p>
                        Ayrıca, Kanada'da eğitiminizi tamamladıktan sonra, program sürenize bağlı olarak 1-3 yıl arasında Post-Graduation Work Permit (PGWP) alma hakkına da sahip olabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Başvuru için hangi belgelere ihtiyacım var?</h3>
                  <span className="text-purple-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Başvuru için gereken belgeler, başvurduğunuz program türüne göre değişiklik gösterebilir, ancak genel olarak şunları içerir:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="rounded-lg bg-white/5 p-4">
                      <h4 className="font-medium text-purple-400 mb-2">Eğitim Kurumu Başvurusu:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Diploma ve transkript (tercümeli ve noter onaylı)</li>
                        <li>İngilizce/Fransızca yeterlilik belgesi (IELTS, TOEFL, DELF, DALF vb.)</li>
                        <li>Motivasyon mektubu veya niyet mektubu</li>
                        <li>Referans mektupları</li>
                        <li>CV/Özgeçmiş (üniversite ve lisansüstü başvurular için)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white/5 p-4">
                      <h4 className="font-medium text-pink-400 mb-2">Öğrenci Vizesi Başvurusu:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Geçerli pasaport</li>
                        <li>Kabul mektubu (Letter of Acceptance)</li>
                        <li>Finansal yeterlilik belgesi</li>
                        <li>Biyometrik bilgiler</li>
                        <li>Adli sicil kaydı (bazı durumlarda)</li>
                        <li>Sağlık raporu (bazı durumlarda)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-3">
                    Danışmanlarımız, başvuru sürecinizde tüm belgelerin eksiksiz ve doğru bir şekilde hazırlanmasında size destek olacaktır.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'da hangi konaklama seçenekleri mevcuttur?</h3>
                  <span className="text-red-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Kanada'da öğrenciler için başlıca konaklama seçenekleri şunlardır:
                  </p>
                  <div className="rounded-lg bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/10 p-4 mb-4">
                    <h4 className="font-medium text-red-400 mb-2">Aile Yanı Konaklama (Homestay):</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Aylik ücret: $800-$1,000 CAD (genellikle günlük yemekler dahil)</li>
                      <li>Yerel bir aile ile birlikte yaşama ve kültürü daha yakından tanıma imkanı</li>
                      <li>Dil pratiği yapma fırsatı</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/10 p-4 mb-4">
                    <h4 className="font-medium text-orange-400 mb-2">Öğrenci Yurtları:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Aylık ücret: $800-$1,500 CAD</li>
                      <li>Kampüse yakınlık ve sosyal ortam</li>
                      <li>Genellikle yemek planları seçeneği mevcuttur</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/10 p-4 mb-4">
                    <h4 className="font-medium text-amber-400 mb-2">Kiralık Daire veya Oda:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Aylık ücret: $600-$2,000 CAD (şehre ve konuma göre değişir)</li>
                      <li>Daha fazla bağımsızlık</li>
                      <li>Ev arkadaşı ile paylaşım seçeneği</li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    Danışmanlarımız, bütçenize ve tercihlerinize en uygun konaklama seçeneğini bulmanızda ve rezervasyon sürecinizde size destek olacaktır.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 6 */}
            <div className="rounded-xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-semibold relative z-10">Kanada'daki hangi üniversiteler/kolejler burs imkanı sunuyor?</h3>
                  <span className="text-green-400 relative z-10 transition-transform duration-300 transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                  <p className="mb-3">
                    Kanada'da birçok üniversite ve kolej, uluslararası öğrencilere burs imkanı sunmaktadır.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="rounded-lg bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/10 p-4">
                      <h4 className="font-medium text-green-400 mb-2">Üniversiteler:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>University of Toronto: Lester B. Pearson International Scholarship</li>
                        <li>University of British Columbia: International Scholars Program</li>
                        <li>McGill University: McGill Entrance Scholarships</li>
                        <li>University of Waterloo: International Student Scholarship</li>
                        <li>York University: Global Leader of Tomorrow Award</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/10 p-4">
                      <h4 className="font-medium text-emerald-400 mb-2">Kolejler:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Seneca College: International Student Scholarships</li>
                        <li>Humber College: International Entrance Scholarships</li>
                        <li>Centennial College: International Student Scholarships</li>
                        <li>George Brown College: International Entrance Scholarships</li>
                        <li>Fanshawe College: International Student Bursaries</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-white/5 p-4 my-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 mt-1">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <p>
                        Danışmanlarımız, akademik geçmişinize ve hedeflerinize uygun burs fırsatlarını belirlemenizde ve başvuru sürecinde size rehberlik edecektir. Burs başvuruları genellikle erken dönemde yapıldığı için, planlama aşamasını erkenden başlatmanızı öneririz.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          
          {/* More Questions Banner */}
          <div className="mt-12 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="relative z-10 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Daha Fazla Sorunuz mu Var?</h3>
              <p className="text-blue-100 mb-6">
                Burada cevabını bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
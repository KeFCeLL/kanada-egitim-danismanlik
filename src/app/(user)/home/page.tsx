import Link from 'next/link';
import Image from 'next/image';
import ImageSlider from '@/components/ui/image-slider';

export default function Home() {
  const sliderImages = [
    {
      src: '/images/slider/slide1.jpg',
      alt: 'Kanada Üniversite Kampüsü'
    },
    {
      src: '/images/slider/slide2.jpg',
      alt: 'Kanada Şehir Manzarası'
    },
    {
      src: '/images/slider/slide3.jpg',
      alt: 'Kanada Eğitim'
    },
    {
      src: '/images/slider/slide4.jpg',
      alt: 'Kanada Öğrenciler'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Futuristic Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl top-1/3 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl bottom-0 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 7}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-white/10 backdrop-blur-lg px-4 py-1 rounded-full text-sm font-medium border border-white/20">
                Geleceğinizi Kanada'da Şekillendirin
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Kanada Eğitim
                </span>
                <span className="block mt-2">Fırsatlarını Keşfedin</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Yapay zeka destekli eğitim danışmanlık platformumuzla, Kanada'da eğitim yolculuğunuzu kişiselleştirilmiş çözümlerle planlamak artık çok kolay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/apply"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-medium overflow-hidden rounded-lg"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white font-bold">Hemen Başvur</span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 backdrop-blur-sm font-medium overflow-hidden rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <span className="relative text-white">Danışmanla Görüş</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-900 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-gray-300">+5.000 öğrenci</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-300">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)]"></div>
              <div className="relative p-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-800 shadow-2xl border border-white/10">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/cOMB15Y8f9U?autoplay=0&controls=1&rel=0"
                    title="Kanada Kolay Vize"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-70 blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-300 mb-2">Keşfetmeye başla</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-4">HİZMETLERİMİZ</div>
            <h2 className="text-4xl font-bold mb-4">Kanada'da Eğitim Yolculuğunuz</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              En yenilikçi ve kişiselleştirilmiş eğitim danışmanlık hizmetleriyle, hedeflerinize ulaşmanız için yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="group relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 transition-transform hover:-translate-y-2 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="p-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl mb-6 -mt-12 shadow-lg">
                  🏫
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Dil Eğitimi</h3>
                <p className="text-gray-400 mb-6">
                  İngilizce ve Fransızca programları ile dil becerilerinizi geliştirin ve uluslararası sertifikalar edinin.
                </p>
                <Link
                  href="/services/language-education"
                  className="text-cyan-400 flex items-center font-medium"
                >
                  <span>Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="group relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 transition-transform hover:-translate-y-2 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-3xl mb-6 -mt-12 shadow-lg">
                  🎓
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Üniversite Eğitimi</h3>
                <p className="text-gray-400 mb-6">
                  Prestijli Kanada üniversitelerinde lisans, yüksek lisans ve doktora programlarına kabul imkanları.
                </p>
                <Link
                  href="/services/university-education"
                  className="text-blue-400 flex items-center font-medium"
                >
                  <span>Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="group relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 transition-transform hover:-translate-y-2 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div className="p-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-3xl mb-6 -mt-12 shadow-lg">
                  🛂
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">Vize Danışmanlığı</h3>
                <p className="text-gray-400 mb-6">
                  Öğrenci, ziyaretçi ve çalışma vizesi süreçlerinde uçtan uca profesyonel destek.
                </p>
                <Link
                  href="/services/visa-consultancy"
                  className="text-indigo-400 flex items-center font-medium"
                >
                  <span>Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="group relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 transition-transform hover:-translate-y-2 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-3xl mb-6 -mt-12 shadow-lg">
                  🏠
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Konaklama Hizmetleri</h3>
                <p className="text-gray-400 mb-6">
                  Ev sahipleri yanında konaklama, yurt ve daire kiralama konularında destek.
                </p>
                <Link
                  href="/services/accommodation-transportation"
                  className="text-purple-400 flex items-center font-medium"
                >
                  <span>Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">5000+</div>
              <p className="text-gray-400">Öğrenci</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text mb-2">15+</div>
              <p className="text-gray-400">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-2">50+</div>
              <p className="text-gray-400">Partner Üniversite</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">%97</div>
              <p className="text-gray-400">Kabul Oranı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-4">BAŞARILARIMIZ</div>
            <h2 className="text-4xl font-bold mb-4">Eğitim Süreçlerinde Mükemmellik</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Öğrencilerimizin Kanada'daki başarı hikayeleri ve eğitim yolculuklarından kesitler.
            </p>
          </div>

          <div className="relative h-80 md:h-96 lg:h-[500px] mx-auto max-w-5xl my-10 shadow-2xl">
            <ImageSlider slides={sliderImages} autoSlideInterval={6000} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kanada'da Eğitim Hayallerinize Adım Atın</h2>
            <p className="text-xl text-gray-300 mb-8">
              Teknoloji destekli danışmanlık hizmetimizle, size özel eğitim planınızı bugün oluşturun.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <span>Başvuru Formu</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add a few more sections as needed */}
    </div>
  );
} 
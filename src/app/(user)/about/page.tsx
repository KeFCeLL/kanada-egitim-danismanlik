import Link from 'next/link';
import { FaUser, FaUserAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-10 mb-16">
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">ŞİRKETİMİZ</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl mb-6 text-gray-300">
              2008 yılından bu yana binlerce öğrencinin Kanada eğitim yolculuğunda güvenilir danışmanı olduk.
              Profesyonel ekibimiz ve kişiselleştirilmiş hizmetlerimizle yanınızdayız.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text relative z-10">Biz Kimiz?</h2>
          
          <div className="space-y-6 relative z-10">
            <p className="text-gray-300">
              Kanada Kolay Vize, 2008 yılında Kanada eğitim fırsatlarını Türk öğrencilere sunmak amacıyla kurulmuş bir eğitim danışmanlık şirketidir. 
              Toronto ve İstanbul'daki ofislerimizle, Kanada'da eğitim almak isteyen öğrencilere en doğru ve güncel bilgileri sunmakta, 
              başvuru süreçlerinde profesyonel destek sağlamaktayız.
            </p>
            <p className="text-gray-300">
              Kurulduğumuz günden bu yana, <span className="text-cyan-400 font-semibold">5000+ öğrencinin</span> Kanada'daki eğitim hayallerini gerçekleştirmesine yardımcı olduk. 
              <span className="text-cyan-400 font-semibold"> 50'den fazla üniversite ve kolej</span>, <span className="text-cyan-400 font-semibold">30'dan fazla dil okulu</span> ile resmi işbirliği içindeyiz. 
              Deneyimli danışmanlarımız, Kanada eğitim sistemi hakkında derin bilgi ve tecrübeye sahiptir.
            </p>
            <p className="text-gray-300">
              Misyonumuz, her öğrencinin bireysel ihtiyaç ve hedeflerine uygun eğitim programlarını belirleyerek, 
              bu hedefe ulaşmalarında en etkili desteği sunmaktır. Şeffaflık, güvenilirlik ve profesyonellik ilkelerimiz 
              doğrultusunda hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyan-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-xl mb-4 border border-cyan-500/20">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Güvenilirlik</h3>
              <p className="text-gray-400">
                Doğru ve eksiksiz bilgi sağlayarak, öğrencilerimizin güvenini kazanırız. Her adımda dürüstlük ve şeffaflık ilkelerimizi koruruz.
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center text-xl mb-4 border border-blue-500/20">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kişiselleştirme</h3>
              <p className="text-gray-400">
                Her öğrencinin benzersiz olduğuna inanır, kişiselleştirilmiş çözümler sunarız. Bireysel ihtiyaçlara özel danışmanlık hizmeti veririz.
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-xl mb-4 border border-indigo-500/20">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Mükemmellik</h3>
              <p className="text-gray-400">
                Hizmet kalitemizi sürekli geliştirmeye odaklanır, en iyi sonuçları elde etmek için çalışırız. Sektördeki gelişmeleri yakından takip ederiz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Profesyonel Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyan-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-4xl mb-4 border border-cyan-500/20 mx-auto">
                <FaUserAlt className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">Ahmet Yılmaz</h3>
              <p className="text-cyan-400 text-center mb-4">Kurucu & CEO</p>
              <p className="text-gray-400 text-center">
                15+ yıllık Kanada eğitim danışmanlığı deneyimi ile öğrencilerin yanında.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-4xl mb-4 border border-indigo-500/20 mx-auto">
                <FaUserAlt className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">Ayşe Kaya</h3>
              <p className="text-purple-400 text-center mb-4">Eğitim Danışmanı</p>
              <p className="text-gray-400 text-center">
                Kanada'daki eğitim fırsatları konusunda uzman danışmanlık sağlıyor.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-pink-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center text-4xl mb-4 border border-pink-500/20 mx-auto">
                <FaUser className="text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">Zeynep Şahin</h3>
              <p className="text-pink-400 text-center mb-4">Öğrenci İlişkileri</p>
              <p className="text-gray-400 text-center">
                Öğrencilerin Kanada'daki eğitim süreçlerinde destek sağlıyor.
              </p>
            </div>
          </div>
          
          {/* Team Member 4 */}
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center text-4xl mb-4 border border-blue-500/20 mx-auto">
                <FaUser className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">Mehmet Demir</h3>
              <p className="text-blue-400 text-center mb-4">Vize Danışmanı</p>
              <p className="text-gray-400 text-center">
                Kanada vize süreçlerinde uzman danışmanlık hizmeti sunuyor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mb-20">
        <div className="rounded-2xl backdrop-blur-lg border border-white/10 overflow-hidden">
          <div className="relative p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
              <div className="text-center p-4">
                <div className="inline-block mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">5000+</div>
                <p className="text-gray-300">Öğrenci</p>
              </div>
              
              <div className="text-center p-4">
                <div className="inline-block mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">15+</div>
                <p className="text-gray-300">Yıllık Deneyim</p>
              </div>
              
              <div className="text-center p-4">
                <div className="inline-block mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">50+</div>
                <p className="text-gray-300">Partner Üniversite</p>
              </div>
              
              <div className="text-center p-4">
                <div className="inline-block mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">98%</div>
                <p className="text-gray-300">Başarı Oranı</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Yolculuğumuz</h2>
        
        <div className="max-w-3xl mx-auto rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="flex">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 mr-6">1</div>
                <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-transparent -ml-0.5 h-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">2008: Kuruluş</h3>
                <p className="text-gray-400 mb-4">
                  Kanada Kolay Vize, Ahmet Yılmaz tarafından İstanbul'da kuruldu. İlk ofisimiz Şişli'de açıldı.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 mr-6">2</div>
                <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-indigo-500 to-transparent -ml-0.5 h-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">2012: Kanada Ofisi</h3>
                <p className="text-gray-400 mb-4">
                  Toronto'da ilk yurtdışı ofisimizi açtık ve Kanada eğitim kurumlarıyla partnerlikler kurduk.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 mr-6">3</div>
                <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-transparent -ml-0.5 h-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">2015: Genişleme</h3>
                <p className="text-gray-400 mb-4">
                  Vancouver'da ikinci Kanada ofisimizi açtık ve hizmet alanımızı genişlettik.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 mr-6">4</div>
                <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-pink-500 to-transparent -ml-0.5 h-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">2018: 10. Yıl Dönümü</h3>
                <p className="text-gray-400 mb-4">
                  10. yılımızda 3000+ öğrenciye hizmet vermiş olmanın gururunu yaşadık ve kutladık.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/20 mr-6">5</div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">2023: Dijital Dönüşüm</h3>
                <p className="text-gray-400 mb-4">
                  Online danışmanlık platformumuzu hayata geçirdik ve hizmetlerimizi dijitalleştirdik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners/Colleges */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">İş Ortaklarımız</h2>
        
        <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto relative z-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 h-24 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors duration-300">
                <div className="text-gray-400 text-xl font-bold">Logo {i}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 relative z-10">
            <Link
              href="/partners"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
            >
              Tüm İş Ortaklarımızı Görüntüle →
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Öğrencilerimizden</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-white flex items-center justify-center font-bold mr-4">
                  AY
                </div>
                <div>
                  <h4 className="font-bold text-white">Ayşe Yılmaz</h4>
                  <p className="text-sm text-gray-400">Toronto Üniversitesi, 2022</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Kanada Kolay Vize'nun desteği olmasaydı Toronto Üniversitesi'ne kabul almam çok daha zor olurdu. Başvuru sürecimde gösterdikleri titizlik ve profesyonellik sayesinde hayalimi gerçekleştirdim."
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-white flex items-center justify-center font-bold mr-4">
                  CK
                </div>
                <div>
                  <h4 className="font-bold text-white">Can Kaya</h4>
                  <p className="text-sm text-gray-400">McGill Üniversitesi, 2021</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Vize başvurum reddedildikten sonra Kanada Kolay Vize ile çalışmaya başladım. Yeniden yapılandırdığımız başvurum kabul edildi ve şu an McGill'de hayalini kurduğum bölümde okuyorum."
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-white flex items-center justify-center font-bold mr-4">
                  EA
                </div>
                <div>
                  <h4 className="font-bold text-white">Elif Arslan</h4>
                  <p className="text-sm text-gray-400">Vancouver Dil Okulu, 2023</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Kanada'ya dil eğitimi için gelmek istediğimde nereden başlayacağımı bilmiyordum. Kanada Kolay Vize'nun rehberliğiyle kısa sürede tüm işlemlerimi tamamladım ve şimdi Vancouver'dayım."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="container mx-auto px-4 mb-20">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Kanada Eğitim Yolculuğunuza Başlayın</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Profesyonel danışmanlarımızla ücretsiz bir görüşme yaparak, Kanada'daki eğitim fırsatlarını keşfedin ve hayallerinize bir adım daha yaklaşın.
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
  );
} 
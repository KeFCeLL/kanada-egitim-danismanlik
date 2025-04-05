import Link from 'next/link';

export default function ApplicationForm() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">KANADA EĞİTİM FIRSATLARI</div>
          <h1 className="text-4xl font-bold mb-4">Başvuru Formu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Geleceğinizi şekillendirmek için ilk adımı atın. Aşağıdaki formu doldurarak Kanada eğitim programlarına başvurun.
          </p>
        </div>
        
        {/* Form Container */}
        <div className="max-w-3xl mx-auto rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden">
          {/* Progress Steps */}
          <div className="p-6 border-b border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">1</div>
                  <span className="text-sm mt-2 text-gray-300">Kişisel Bilgiler</span>
                </div>
                <div className="flex-1 h-1 bg-gray-700 mx-2 relative">
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-800 text-gray-400 border border-gray-700 rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="text-sm mt-2 text-gray-500">Eğitim Bilgileri</span>
                </div>
                <div className="flex-1 h-1 bg-gray-700 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-800 text-gray-400 border border-gray-700 rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="text-sm mt-2 text-gray-500">Program Seçimi</span>
                </div>
                <div className="flex-1 h-1 bg-gray-700 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-800 text-gray-400 border border-gray-700 rounded-full flex items-center justify-center font-bold">4</div>
                  <span className="text-sm mt-2 text-gray-500">Doğrulama</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="p-8 relative">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <form className="relative z-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Kişisel Bilgiler</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 font-medium mb-2">Ad</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 font-medium mb-2">Soyad</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">E-posta Adresi</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Telefon Numarası</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="birthdate" className="block text-gray-300 font-medium mb-2">Doğum Tarihi</label>
                  <input 
                    type="date" 
                    id="birthdate" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="nationality" className="block text-gray-300 font-medium mb-2">Vatandaşlık</label>
                  <select 
                    id="nationality" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  >
                    <option value="">Seçiniz</option>
                    <option value="TR">Türkiye</option>
                    <option value="AZ">Azerbaycan</option>
                    <option value="CY">Kıbrıs</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Bilgileriniz gizlilik politikamız kapsamında korunmaktadır. Kişisel verileriniz yalnızca başvuru sürecinizde kullanılacaktır.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative px-8 py-3 text-white font-medium transition-all group-hover:shadow-xl">
                    Devam Et
                    <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Process Section */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 overflow-hidden">
          <div className="relative p-8">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Başvuru Süreci</h2>
            
            <div className="relative z-10 space-y-8">
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 mr-6">1</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Başvuru Formunu Doldurun</h3>
                  <p className="text-gray-400">Yukarıdaki başvuru formunu eksiksiz doldurun. Formdaki tüm alanlar değerlendirme için önemlidir.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 mr-6">2</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-indigo-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Danışmanlarımız İnceliyor</h3>
                  <p className="text-gray-400">Başvurunuz uzman danışmanlarımız tarafından detaylı olarak incelenir ve profilinize uygun değerlendirmeler yapılır.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 mr-6">3</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Size Özel Program Önerileri</h3>
                  <p className="text-gray-400">Profil ve hedeflerinize uygun eğitim programları belirlenir ve size sunulur. Kanada'daki en uygun okulları keşfedersiniz.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 mr-6">4</div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-pink-500 to-transparent -ml-0.5 h-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Başvuru Süreçleri</h3>
                  <p className="text-gray-400">Okul ve vize başvuru işlemleriniz profesyonel ekibimiz tarafından yürütülür. Her adımda yanınızda oluruz.</p>
                </div>
              </div>
              
              <div className="flex">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/20 mr-6">5</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Kanada'ya Yolculuk!</h3>
                  <p className="text-gray-400">Kabul ve vize süreçleri tamamlandıktan sonra Kanada'ya gidiş hazırlıklarınız için destek sağlarız. Yeni hayatınız başlıyor!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Sorularınız mı var? <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Bizimle iletişime geçin</Link> veya <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">SSS sayfamızı</Link> ziyaret edin.
          </p>
        </div>
      </div>
    </div>
  );
} 
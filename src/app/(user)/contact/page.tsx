import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-xl mb-2">BİZİMLE İLETİŞİME GEÇİN</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kanada eğitim yolculuğunuza başlamak için sorularınızı iletin veya danışmanlık randevusu alın.
            Uzman ekibimiz size özel çözümler sunmak için hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text relative z-10">Bize Ulaşın</h2>
            
            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 font-medium mb-2">
                    Adınız
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                    placeholder="Adınız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 font-medium mb-2">
                    Soyadınız
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                    placeholder="Soyadınız"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  E-posta Adresiniz
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                  Telefon Numaranız
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Konu
                </label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="language">Dil Eğitimi</option>
                  <option value="university">Üniversite Eğitimi</option>
                  <option value="visa">Vize İşlemleri</option>
                  <option value="accommodation">Konaklama</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                  placeholder="Mesajınızı buraya yazın..."
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-700 rounded bg-gray-800"
                    required
                  />
                  <span className="ml-2 text-gray-300 text-sm">
                    Kişisel verilerimin işlenmesine ilişkin {' '}
                    <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      aydınlatma metnini
                    </Link> okudum ve onaylıyorum.
                  </span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center group w-full"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative py-3 px-4 text-white font-medium transition-all group-hover:shadow-xl">
                    Mesajı Gönder
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-cyan-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text relative z-10">İletişim Bilgilerimiz</h3>
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Telefon</p>
                    <p className="text-gray-400">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">E-posta</p>
                    <p className="text-gray-400">info@canadaedu.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mr-4">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Çalışma Saatleri</p>
                    <p className="text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-400">Cumartesi: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text relative z-10">Ofislerimiz</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-900/10 to-blue-900/10 border border-cyan-500/10">
                  <p className="font-medium text-white border-b border-white/10 pb-2 mb-2">Türkiye Ofisi</p>
                  <p className="text-gray-400 mb-1">İstanbul, Şişli</p>
                  <p className="text-gray-400">Büyükdere Cad. No:123, Kat:4</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/10">
                  <p className="font-medium text-white border-b border-white/10 pb-2 mb-2">Kanada Ofisi (Toronto)</p>
                  <p className="text-gray-400 mb-1">Toronto, ON</p>
                  <p className="text-gray-400">123 Yonge Street, Suite 456</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-900/10 to-purple-900/10 border border-indigo-500/10">
                  <p className="font-medium text-white border-b border-white/10 pb-2 mb-2">Kanada Ofisi (Vancouver)</p>
                  <p className="text-gray-400 mb-1">Vancouver, BC</p>
                  <p className="text-gray-400">789 Granville St, Suite 210</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text relative z-10">Bizi Ziyaret Edin</h2>
            
            <div className="h-80 bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden relative z-10">
              {/* Embed Google Maps iframe here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Google Maps Haritası
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Bizi Arayın</h3>
                  <p className="mb-6 text-blue-100">Hemen telefon ile bilgi alın</p>
                </div>
                <Link
                  href="tel:+12345678901"
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Hemen Ara
                </Link>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Online Danışmanlık</h3>
                  <p className="mb-6 text-indigo-100">Video görüşme ile bilgi alın</p>
                </div>
                <Link
                  href="/appointment"
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Randevu Al
                </Link>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
                  <p className="mb-6 text-purple-100">Hızlı mesajlaşma ile destek</p>
                </div>
                <Link
                  href="https://wa.me/12345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Mesaj Gönder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/toronto-skyline.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kanada'da Eğitim ve Yaşam Fırsatları
            </h1>
            <p className="text-xl mb-8">
              Dil okulları, üniversiteler, vize danışmanlığı ve daha fazlası için yanınızdayız.
              Hayalinizdeki Kanada eğitimine güvenli adımlarla başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-center"
              >
                Hemen Başvur
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-white hover:text-blue-600 transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kanada eğitim ve yaşam yolculuğunuzun her adımında size destek oluyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center text-5xl">
                🏫
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Dil Eğitimi</h3>
                <p className="text-gray-600 mb-4">
                  İngilizce ve Fransızca dil okulları ile dil becerilerinizi geliştirin.
                </p>
                <Link
                  href="/services/language-education"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 flex items-center justify-center text-5xl">
                🎓
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Üniversite Eğitimi</h3>
                <p className="text-gray-600 mb-4">
                  En prestijli Kanada üniversitelerinde eğitim fırsatları ve kabul imkanları.
                </p>
                <Link
                  href="/services/university-education"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-red-100 flex items-center justify-center text-5xl">
                🛂
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Vize Danışmanlığı</h3>
                <p className="text-gray-600 mb-4">
                  Öğrenci, ziyaretçi ve çalışma vizesi konularında profesyonel destek.
                </p>
                <Link
                  href="/services/visa-consultancy"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-yellow-100 flex items-center justify-center text-5xl">
                🏠
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Konaklama ve Ulaşım</h3>
                <p className="text-gray-600 mb-4">
                  Kanada'da ev sahipleri yanında konaklama ve şehir içi ulaşım desteği.
                </p>
                <Link
                  href="/services/accommodation-transportation"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15 yılı aşkın deneyimimiz ve binlerce başarılı başvuru ile fark yaratıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-3">Uzman Danışmanlar</h3>
              <p className="text-gray-600">
                Kanada eğitim sistemi konusunda uzmanlaşmış, deneyimli danışmanlarımız sizinle.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">Güvenilir Partnerlik</h3>
              <p className="text-gray-600">
                Kanada'nın önde gelen eğitim kurumları ile resmi işbirliklerimiz bulunmaktadır.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl">
                🔄
              </div>
              <h3 className="text-xl font-bold mb-3">Uçtan Uca Destek</h3>
              <p className="text-gray-600">
                Başvuru sürecinizden varışınıza ve yerleşmenize kadar her adımda yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Öğrencilerimizden</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Başarı hikayelerini ve deneyimlerini paylaşan öğrencilerimiz...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                  AY
                </div>
                <div>
                  <h4 className="font-bold">Ayşe Yılmaz</h4>
                  <p className="text-sm text-gray-500">Toronto Üniversitesi, Bilgisayar Mühendisliği</p>
                </div>
              </div>
              <p className="text-gray-600">
                "CanadaEdu sayesinde hayalim olan Toronto Üniversitesi'ne kabul aldım. Vize sürecinde gösterdikleri profesyonel destek olmasaydı bu kadar kolay olmazdı."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-bold">Mehmet Kaya</h4>
                  <p className="text-sm text-gray-500">Vancouver Dil Okulu, İngilizce Programı</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Dil okulu seçiminden ev bulma sürecine kadar her aşamada yanımda oldular. Vancouver'da harika bir deneyim yaşıyorum!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-4">
                  SD
                </div>
                <div>
                  <h4 className="font-bold">Selin Demir</h4>
                  <p className="text-sm text-gray-500">McGill Üniversitesi, İşletme Yüksek Lisans</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Başvuru sürecinde yanımdaydılar, burs imkanları konusunda bilgilendirdiler ve şimdi McGill'de burslu okuyorum. Teşekkürler CanadaEdu!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Kanada Eğitim Yolculuğunuza Hemen Başlayın</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ücretsiz danışmanlık hizmetimizden faydalanarak, size en uygun eğitim programları hakkında bilgi alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
            >
              Başvuru Formu
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Blog & Haberler</h2>
            <Link
              href="/blog"
              className="text-blue-600 font-medium hover:underline"
            >
              Tüm Yazıları Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">Eğitim</span>
                <h3 className="text-xl font-bold mb-3">Kanada'da Öğrenci Olmak</h3>
                <p className="text-gray-600 mb-4">
                  Kanada üniversitelerinde eğitim almanın avantajları ve öğrenci yaşamına dair bilmeniz gerekenler...
                </p>
                <Link
                  href="/blog/student-life-in-canada"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">Vize</span>
                <h3 className="text-xl font-bold mb-3">2025 Kanada Vize Süreçleri Rehberi</h3>
                <p className="text-gray-600 mb-4">
                  Güncel vize süreçleri, gerekli belgeler ve başvuru adımları hakkında kapsamlı bilgiler...
                </p>
                <Link
                  href="/blog/canada-visa-guide-2025"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-3">Yaşam</span>
                <h3 className="text-xl font-bold mb-3">Kanada'da Konaklama Alternatifleri</h3>
                <p className="text-gray-600 mb-4">
                  Şehirlere göre konaklama seçenekleri, fiyatlar ve dikkat edilmesi gereken hususlar...
                </p>
                <Link
                  href="/blog/accommodation-in-canada"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
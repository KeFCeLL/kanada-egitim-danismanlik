# CanadaEdu - Kanada Eğitim Danışmanlık Platformu

Bu proje, Kanada'da dil eğitimi, üniversite eğitimi, vize başvuruları ve danışmanlık hizmetlerini dijital bir platform üzerinden yönetmek ve sunmak amacıyla geliştirilmiştir.

## Proje Özellikleri

- **Kullanıcı Tarafı**: Anasayfa, hizmetler, başvuru formu, blog, SSS, iletişim sayfaları
- **Admin Paneli**: Kullanıcı yönetimi, başvuru takibi, içerik yönetimi, iletişim takibi
- **Responsive Tasarım**: Tüm cihazlarda optimum görüntüleme
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri

## Teknolojiler

Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenli JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - ORM
- [PostgreSQL](https://www.postgresql.org/) - Veritabanı
- [Supabase](https://supabase.io/) - Backend as a Service

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/username/canadaedu.git
cd canadaedu
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyasını oluşturun ve gerekli değişkenleri tanımlayın:
```
DATABASE_URL="postgresql://username:password@localhost:5432/canadaedu"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

4. Veritabanı şemasını oluşturun:
```bash
npx prisma migrate dev --name init
```

5. Uygulamayı geliştirme modunda başlatın:
```bash
npm run dev
```

## Proje Yapısı

```
src/
├── app/                   # Next.js uygulama yönlendirmeleri
│   ├── (admin)/           # Admin panel sayfaları
│   └── (user)/            # Kullanıcı tarafı sayfaları
├── components/            # Yeniden kullanılabilir UI bileşenleri
│   ├── admin/             # Admin panel bileşenleri
│   ├── forms/             # Form bileşenleri
│   ├── layout/            # Layout bileşenleri
│   ├── ui/                # UI bileşenleri
│   └── user/              # Kullanıcı tarafı bileşenleri
├── lib/                   # Yardımcı fonksiyonlar, hooks, vb.
└── prisma/                # Prisma şeması ve migration'lar
```

## Sayfalar

### Kullanıcı Tarafı
- **Anasayfa**: Platform tanıtımı, hizmet özetleri
- **Hakkımızda**: Şirket bilgileri, vizyon, misyon
- **Hizmetler**: Detaylı hizmet açıklamaları
  - Dil Eğitimi
  - Üniversite Eğitimi
  - Vize Danışmanlığı
  - Konaklama ve Ulaşım Yardımı
- **Başvuru Formu**: Çok adımlı başvuru süreci
- **SSS**: Sık sorulan sorular
- **Blog**: Eğitim, vize, yaşam ile ilgili içerikler
- **İletişim**: İletişim formu, ofis bilgileri

### Admin Paneli
- **Dashboard**: Özet istatistikler
- **Kullanıcı Yönetimi**: Kullanıcı listeleme, düzenleme
- **Başvuru Yönetimi**: Başvuruları görüntüleme, durum güncelleme
- **Blog Yönetimi**: İçerik oluşturma ve düzenleme
- **Mesaj Yönetimi**: İletişim formundan gelen mesajlar
- **Kurum Yönetimi**: Eğitim kurumları listesi ve düzenleme
- **Ayarlar**: Sistem ayarları

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Proje ile ilgili sorularınız için: info@canadaedu.com

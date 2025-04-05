import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Hoş geldiniz! Başvuruları, kullanıcıları ve içerikleri buradan yönetebilirsiniz.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <span className="text-2xl">📝</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Aktif Başvurular</p>
              <h3 className="text-2xl font-bold">156</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-green-600">+12% ↑</span>
              <span className="text-gray-500">Son 30 gün</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <span className="text-2xl">✓</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tamamlanan Başvurular</p>
              <h3 className="text-2xl font-bold">89</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-green-600">+5% ↑</span>
              <span className="text-gray-500">Son 30 gün</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Toplam Kullanıcı</p>
              <h3 className="text-2xl font-bold">732</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-green-600">+8% ↑</span>
              <span className="text-gray-500">Son 30 gün</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Yeni Mesajlar</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-red-600">+18% ↑</span>
              <span className="text-gray-500">Son 7 gün</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="font-semibold text-lg">Son Başvurular</h2>
              <Link href="/applications" className="text-blue-600 text-sm hover:underline">
                Tümünü Gör
              </Link>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Öğrenci
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Program
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarih
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Durum
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            AY
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Ahmet Yıldız</div>
                            <div className="text-sm text-gray-500">ahmet@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Toronto Üniversitesi</div>
                        <div className="text-sm text-gray-500">Bilgisayar Mühendisliği</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        23 Mart 2024
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          İnceleniyor
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                            ZK
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Zeynep Kaya</div>
                            <div className="text-sm text-gray-500">zeynep@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Vancouver Dil Okulu</div>
                        <div className="text-sm text-gray-500">İngilizce Programı</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        20 Mart 2024
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Onaylandı
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                            MO
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Mehmet Öztürk</div>
                            <div className="text-sm text-gray-500">mehmet@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">McGill Üniversitesi</div>
                        <div className="text-sm text-gray-500">İşletme Yüksek Lisans</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        18 Mart 2024
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Evrak Eksik
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center">
                            EY
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Elif Yılmaz</div>
                            <div className="text-sm text-gray-500">elif@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">University of British Columbia</div>
                        <div className="text-sm text-gray-500">Moleküler Biyoloji</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        15 Mart 2024
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Başvuru Gönderildi
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h2 className="font-semibold text-lg">Son Aktiviteler</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <span className="text-sm">AK</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Ali Koç</div>
                    <div className="text-sm text-gray-500">Yeni bir başvuru gönderdi</div>
                    <div className="text-xs text-gray-400 mt-1">20 dakika önce</div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                      <span className="text-sm">SD</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Selim Demir</div>
                    <div className="text-sm text-gray-500">Vize onayı aldı</div>
                    <div className="text-xs text-gray-400 mt-1">1 saat önce</div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
                      <span className="text-sm">CN</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Canan Naz</div>
                    <div className="text-sm text-gray-500">Dil sınavı sonucu yükledi</div>
                    <div className="text-xs text-gray-400 mt-1">2 saat önce</div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                      <span className="text-sm">MK</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Mustafa Kara</div>
                    <div className="text-sm text-gray-500">Öğrenci sayfasına giriş yaptı</div>
                    <div className="text-xs text-gray-400 mt-1">3 saat önce</div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <span className="text-sm">BT</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Burak Türk</div>
                    <div className="text-sm text-gray-500">Yeni mesaj gönderdi</div>
                    <div className="text-xs text-gray-400 mt-1">5 saat önce</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
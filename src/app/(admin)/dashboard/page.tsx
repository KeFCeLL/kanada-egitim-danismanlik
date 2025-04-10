import Link from 'next/link';

export default function Dashboard() {
  const stats = [
    { title: 'Toplam Kullanıcı', value: '1,234', icon: '👥', color: 'bg-blue-500' },
    { title: 'Aktif Sliderlar', value: '5', icon: '🖼️', color: 'bg-green-500' },
    { title: 'Aktif Diyaloglar', value: '3', icon: '💬', color: 'bg-purple-500' },
    { title: 'Form Başvuruları', value: '89', icon: '📝', color: 'bg-yellow-500' },
  ];

  const quickActions = [
    { title: 'Yeni Slider Ekle', href: '/admin/sliders/new', icon: '➕' },
    { title: 'Diyalog Oluştur', href: '/admin/dialogs/new', icon: '💬' },
    { title: 'Form Düzenle', href: '/admin/forms/edit', icon: '📝' },
    { title: 'İçerik Güncelle', href: '/admin/content/edit', icon: '📄' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl mr-3">{action.icon}</span>
              <span className="font-medium">{action.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h2>
        <div className="space-y-4">
          {[
            { action: 'Yeni slider eklendi', time: '2 saat önce', user: 'Admin' },
            { action: 'Form güncellendi', time: '4 saat önce', user: 'Admin' },
            { action: 'Yeni kullanıcı kaydı', time: '1 gün önce', user: 'Kullanıcı' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
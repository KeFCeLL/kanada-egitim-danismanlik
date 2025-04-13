'use client';

import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { title: 'Toplam Kullanıcı', value: '1,234', icon: '👥', color: 'bg-blue-500' },
    { title: 'Aktif Sliderlar', value: '5', icon: '🖼️', color: 'bg-green-500' },
    { title: 'Aktif Diyaloglar', value: '3', icon: '💬', color: 'bg-yellow-500' },
    { title: 'Form Başvuruları', value: '89', icon: '📝', color: 'bg-purple-500' },
  ];

  const quickActions = [
    { title: 'Yeni Slider Ekle', link: '/admin/sliders', icon: '➕' },
    { title: 'Diyalog Oluştur', link: '/admin/dialogs', icon: '💬' },
    { title: 'Form Düzenle', link: '/admin/forms', icon: '📝' },
    { title: 'İçerik Güncelle', link: '/admin/content', icon: '📄' },
  ];

  const recentActivity = [
    { id: 1, action: 'Yeni kullanıcı kaydı', user: 'Ahmet Yılmaz', time: '5 dakika önce' },
    { id: 2, action: 'Form başvurusu', user: 'Mehmet Demir', time: '15 dakika önce' },
    { id: 3, action: 'Slider güncellendi', user: 'Admin', time: '1 saat önce' },
    { id: 4, action: 'Diyalog oluşturuldu', user: 'Admin', time: '2 saat önce' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500">Son güncelleme: {new Date().toLocaleString('tr-TR')}</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Hızlı İşlemler</h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.link}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl mr-3">{action.icon}</span>
              <span className="font-medium">{action.title}</span>
            </Link>
          ))}
          <Link
            href="/admin/applications"
            className="flex items-center p-4 text-gray-300 hover:bg-white/5 rounded-xl transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Başvurular
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Son Aktiviteler</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
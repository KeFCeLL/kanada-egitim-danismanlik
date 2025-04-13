'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Dialog {
  id: string;
  title: string;
  content: string;
  type: 'popup' | 'notification';
  isActive: boolean;
  startDate: string;
  endDate: string;
  targetPage?: string;
}

export default function DialogsPage() {
  const [dialogs, setDialogs] = useState<Dialog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchDialogs();
  }, []);

  const fetchDialogs = async () => {
    try {
      const response = await fetch('/api/dialogs');
      const data = await response.json();
      setDialogs(data);
    } catch (error) {
      console.error('Failed to fetch dialogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string) => {
    try {
      const dialog = dialogs.find(d => d.id === id);
      if (!dialog) return;

      const response = await fetch('/api/dialogs', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          isActive: !dialog.isActive,
        }),
      });

      if (response.ok) {
        setDialogs(dialogs.map(d => 
          d.id === id ? { ...d, isActive: !d.isActive } : d
        ));
      }
    } catch (error) {
      console.error('Failed to toggle dialog:', error);
    }
  };

  const deleteDialog = async (id: string) => {
    if (!confirm('Bu diyaloğu silmek istediğinizden emin misiniz?')) return;

    try {
      const response = await fetch(`/api/dialogs?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDialogs(dialogs.filter(d => d.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete dialog:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Diyalog Yönetimi</h1>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => router.push('/admin/dialogs/new')}
        >
          Yeni Diyalog Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {dialogs.map((dialog) => (
          <div key={dialog.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{dialog.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{dialog.content}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      dialog.type === 'popup' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {dialog.type === 'popup' ? 'Popup' : 'Bildirim'}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {new Date(dialog.startDate).toLocaleDateString('tr-TR')} - {new Date(dialog.endDate).toLocaleDateString('tr-TR')}
                    </span>
                    {dialog.targetPage && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        Sayfa: {dialog.targetPage}
                      </span>
                    )}
                    <button
                      onClick={() => toggleActive(dialog.id)}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dialog.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {dialog.isActive ? 'Aktif' : 'Pasif'}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => router.push(`/admin/dialogs/${dialog.id}`)}
                  >
                    Düzenle
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => deleteDialog(dialog.id)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
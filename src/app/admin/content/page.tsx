'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ContentSection {
  id: string;
  title: string;
  page: string;
  content: string;
  isActive: boolean;
  lastUpdated: string;
}

export default function ContentPage() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      const data = await response.json();
      setSections(data);
    } catch (error) {
      console.error('Failed to fetch content:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string) => {
    try {
      const section = sections.find(s => s.id === id);
      if (!section) return;

      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          isActive: !section.isActive,
        }),
      });

      if (response.ok) {
        setSections(sections.map(s => 
          s.id === id ? { ...s, isActive: !s.isActive } : s
        ));
      }
    } catch (error) {
      console.error('Failed to toggle content:', error);
    }
  };

  const deleteSection = async (id: string) => {
    if (!confirm('Bu içeriği silmek istediğinizden emin misiniz?')) return;

    try {
      const response = await fetch(`/api/content?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSections(sections.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete content:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">İçerik Yönetimi</h1>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => router.push('/admin/content/new')}
        >
          Yeni İçerik Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{section.content}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      Sayfa: {section.page}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      Son Güncelleme: {new Date(section.lastUpdated).toLocaleDateString('tr-TR')}
                    </span>
                    <button
                      onClick={() => toggleActive(section.id)}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        section.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {section.isActive ? 'Aktif' : 'Pasif'}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => router.push(`/admin/content/${section.id}`)}
                  >
                    Düzenle
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => deleteSection(section.id)}
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
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Slider {
  id: number;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  order: number;
}

export default function SlidersPage() {
  const [sliders, setSliders] = useState<Slider[]>([
    {
      id: 1,
      title: 'Kanada Eğitim Fırsatları',
      description: 'En iyi üniversiteler ve dil okulları',
      image: '/images/slider1.jpg',
      isActive: true,
      order: 1,
    },
    {
      id: 2,
      title: 'Vize Danışmanlığı',
      description: 'Profesyonel vize desteği',
      image: '/images/slider2.jpg',
      isActive: true,
      order: 2,
    },
  ]);

  const toggleActive = (id: number) => {
    setSliders(sliders.map(slider => 
      slider.id === id ? { ...slider, isActive: !slider.isActive } : slider
    ));
  };

  const moveUp = (id: number) => {
    const index = sliders.findIndex(s => s.id === id);
    if (index > 0) {
      const newSliders = [...sliders];
      [newSliders[index], newSliders[index - 1]] = [newSliders[index - 1], newSliders[index]];
      setSliders(newSliders.map((s, i) => ({ ...s, order: i + 1 })));
    }
  };

  const moveDown = (id: number) => {
    const index = sliders.findIndex(s => s.id === id);
    if (index < sliders.length - 1) {
      const newSliders = [...sliders];
      [newSliders[index], newSliders[index + 1]] = [newSliders[index + 1], newSliders[index]];
      setSliders(newSliders.map((s, i) => ({ ...s, order: i + 1 })));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Slider Yönetimi</h1>
        <Link
          href="/admin/sliders/new"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Yeni Slider Ekle
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sıra
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Görsel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Başlık
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Açıklama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sliders.map((slider) => (
                <tr key={slider.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => moveUp(slider.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ↑
                      </button>
                      <span>{slider.order}</span>
                      <button
                        onClick={() => moveDown(slider.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ↓
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-16 w-24 rounded-lg overflow-hidden">
                      <img
                        src={slider.image}
                        alt={slider.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{slider.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{slider.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleActive(slider.id)}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        slider.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {slider.isActive ? 'Aktif' : 'Pasif'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      Düzenle
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 
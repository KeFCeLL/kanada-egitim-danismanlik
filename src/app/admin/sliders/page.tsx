'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Slider {
  id: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  order: number;
}

export default function SlidersPage() {
  const [sliders, setSliders] = useState<Slider[]>([
    {
      id: '1',
      title: 'Kanada Eğitim Fırsatları',
      description: 'Kanada\'da eğitim almanın avantajlarını keşfedin',
      image: '/images/slider1.jpg',
      isActive: true,
      order: 1,
    },
    {
      id: '2',
      title: 'Vize Başvuru Rehberi',
      description: 'Vize başvuru sürecinizi kolaylaştırın',
      image: '/images/slider2.jpg',
      isActive: true,
      order: 2,
    },
  ]);

  const toggleActive = (id: string) => {
    setSliders(sliders.map(slider => 
      slider.id === id ? { ...slider, isActive: !slider.isActive } : slider
    ));
  };

  const moveUp = (id: string) => {
    const index = sliders.findIndex(s => s.id === id);
    if (index > 0) {
      const newSliders = [...sliders];
      [newSliders[index], newSliders[index - 1]] = [newSliders[index - 1], newSliders[index]];
      setSliders(newSliders.map((s, i) => ({ ...s, order: i + 1 })));
    }
  };

  const moveDown = (id: string) => {
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
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Yeni Slider Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sliders.map((slider) => (
          <div key={slider.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="relative w-32 h-20">
                  <Image
                    src={slider.image}
                    alt={slider.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{slider.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{slider.description}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      Sıra: {slider.order}
                    </span>
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
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => moveUp(slider.id)}
                  disabled={slider.order === 1}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(slider.id)}
                  disabled={slider.order === sliders.length}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  ↓
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Düzenle
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
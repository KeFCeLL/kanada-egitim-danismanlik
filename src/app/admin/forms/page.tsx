'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

interface Form {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  isActive: boolean;
  submitButtonText: string;
}

export default function FormsPage() {
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await fetch('/api/forms');
      const data = await response.json();
      setForms(data);
    } catch (error) {
      console.error('Failed to fetch forms:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string) => {
    try {
      const form = forms.find(f => f.id === id);
      if (!form) return;

      const response = await fetch('/api/forms', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          isActive: !form.isActive,
        }),
      });

      if (response.ok) {
        setForms(forms.map(f => 
          f.id === id ? { ...f, isActive: !f.isActive } : f
        ));
      }
    } catch (error) {
      console.error('Failed to toggle form:', error);
    }
  };

  const deleteForm = async (id: string) => {
    if (!confirm('Bu formu silmek istediğinizden emin misiniz?')) return;

    try {
      const response = await fetch(`/api/forms?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setForms(forms.filter(f => f.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete form:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Form Yönetimi</h1>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => router.push('/admin/forms/new')}
        >
          Yeni Form Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {forms.map((form) => (
          <div key={form.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{form.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{form.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Form Alanları</h4>
                    <div className="space-y-2">
                      {form.fields.map((field) => (
                        <div key={field.id} className="flex items-center space-x-2">
                          <span className="text-sm">{field.label}</span>
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                            {field.type}
                          </span>
                          {field.required && (
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">
                              Zorunlu
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleActive(form.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      form.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {form.isActive ? 'Aktif' : 'Pasif'}
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => router.push(`/admin/forms/${form.id}`)}
                  >
                    Düzenle
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => deleteForm(form.id)}
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
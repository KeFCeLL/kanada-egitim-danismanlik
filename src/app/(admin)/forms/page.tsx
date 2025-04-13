'use client';

import { useState } from 'react';

interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  options?: string[];
}

interface Form {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  isActive: boolean;
}

export default function FormsPage() {
  const [forms, setForms] = useState<Form[]>([
    {
      id: '1',
      title: 'Vize Başvuru Formu',
      description: 'Kanada vizesi için başvuru formu',
      isActive: true,
      fields: [
        {
          id: 'name',
          type: 'text',
          label: 'Ad Soyad',
          required: true,
        },
        {
          id: 'email',
          type: 'email',
          label: 'E-posta',
          required: true,
        },
        {
          id: 'phone',
          type: 'tel',
          label: 'Telefon',
          required: true,
        },
        {
          id: 'program',
          type: 'select',
          label: 'Program Seçimi',
          required: true,
          options: ['Dil Eğitimi', 'Üniversite', 'Yüksek Lisans', 'Diğer'],
        },
      ],
    },
  ]);

  const [selectedForm, setSelectedForm] = useState<Form | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleFormActive = (id: string) => {
    setForms(forms.map(form => 
      form.id === id ? { ...form, isActive: !form.isActive } : form
    ));
  };

  const addField = (formId: string) => {
    const newField: FormField = {
      id: `field-${Date.now()}`,
      type: 'text',
      label: 'Yeni Alan',
      required: false,
    };

    setForms(forms.map(form => 
      form.id === formId 
        ? { ...form, fields: [...form.fields, newField] }
        : form
    ));
  };

  const updateField = (formId: string, fieldId: string, updates: Partial<FormField>) => {
    setForms(forms.map(form => 
      form.id === formId
        ? {
            ...form,
            fields: form.fields.map(field =>
              field.id === fieldId ? { ...field, ...updates } : field
            ),
          }
        : form
    ));
  };

  const deleteField = (formId: string, fieldId: string) => {
    setForms(forms.map(form => 
      form.id === formId
        ? {
            ...form,
            fields: form.fields.filter(field => field.id !== fieldId),
          }
        : form
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Form Yönetimi</h1>
        <button
          onClick={() => {
            setSelectedForm(null);
            setIsEditing(true);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Yeni Form Oluştur
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forms List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Formlar</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {forms.map((form) => (
              <div
                key={form.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedForm(form)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{form.title}</h3>
                    <p className="text-sm text-gray-500">{form.description}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFormActive(form.id);
                    }}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      form.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {form.isActive ? 'Aktif' : 'Pasif'}
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {form.fields.length} alan
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Editor */}
        {selectedForm && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Form Düzenle</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'Kaydet' : 'Düzenle'}
              </button>
            </div>
            <div className="p-4 space-y-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Form Başlığı
                    </label>
                    <input
                      type="text"
                      value={selectedForm.title}
                      onChange={(e) =>
                        setSelectedForm({ ...selectedForm, title: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Açıklama
                    </label>
                    <textarea
                      value={selectedForm.description}
                      onChange={(e) =>
                        setSelectedForm({ ...selectedForm, description: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-700">Form Alanları</h3>
                      <button
                        onClick={() => addField(selectedForm.id)}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Alan Ekle
                      </button>
                    </div>
                    {selectedForm.fields.map((field) => (
                      <div
                        key={field.id}
                        className="p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex justify-between">
                          <input
                            type="text"
                            value={field.label}
                            onChange={(e) =>
                              updateField(selectedForm.id, field.id, {
                                label: e.target.value,
                              })
                            }
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                          />
                          <button
                            onClick={() => deleteField(selectedForm.id, field.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Sil
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <select
                            value={field.type}
                            onChange={(e) =>
                              updateField(selectedForm.id, field.id, {
                                type: e.target.value,
                              })
                            }
                            className="block rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                          >
                            <option value="text">Metin</option>
                            <option value="email">E-posta</option>
                            <option value="tel">Telefon</option>
                            <option value="select">Seçim</option>
                            <option value="textarea">Çok Satırlı Metin</option>
                          </select>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={field.required}
                              onChange={(e) =>
                                updateField(selectedForm.id, field.id, {
                                  required: e.target.checked,
                                })
                              }
                              className="rounded border-gray-300 text-red-600 shadow-sm focus:border-red-500 focus:ring-red-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Zorunlu
                            </span>
                          </label>
                        </div>
                        {field.type === 'select' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Seçenekler
                            </label>
                            <textarea
                              value={field.options?.join('\n')}
                              onChange={(e) =>
                                updateField(selectedForm.id, field.id, {
                                  options: e.target.value.split('\n'),
                                })
                              }
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                              placeholder="Her satıra bir seçenek yazın"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{selectedForm.title}</h3>
                    <p className="text-sm text-gray-500">{selectedForm.description}</p>
                  </div>
                  <div className="space-y-2">
                    {selectedForm.fields.map((field) => (
                      <div key={field.id} className="p-2 border rounded">
                        <div className="flex justify-between">
                          <span className="font-medium">{field.label}</span>
                          <span className="text-sm text-gray-500">
                            {field.type} {field.required && '(Zorunlu)'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
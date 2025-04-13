'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormField = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  options: string[];
  placeholder: string;
};

export default function NewFormPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = () => {
    setFields([
      ...fields,
      {
        id: Math.random().toString(36).substr(2, 9),
        label: '',
        type: 'text',
        required: false,
        options: [],
        placeholder: '',
      },
    ]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      isActive: formData.get('isActive') === 'true',
      submitButtonText: formData.get('submitButtonText'),
      fields: fields.map((field) => ({
        label: field.label,
        type: field.type,
        required: field.required,
        options: field.type === 'select' ? field.options : undefined,
        placeholder: field.placeholder,
      })),
    };

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create form');
      }

      router.push('/admin/forms');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Create New Form</h1>
        <p className="text-gray-600">Build a custom form for your website</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 mb-6 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-700">
            Form Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="submitButtonText" className="block text-sm font-medium mb-2 text-gray-700">
            Submit Button Text
          </label>
          <input
            type="text"
            id="submitButtonText"
            name="submitButtonText"
            required
            defaultValue="Submit"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="isActive"
                value="true"
                defaultChecked
                className="mr-2 text-blue-500"
              />
              Active
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="isActive"
                value="false"
                className="mr-2 text-blue-500"
              />
              Inactive
            </label>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Form Fields</h2>
            <button
              type="button"
              onClick={addField}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Field
            </button>
          </div>

          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="border border-gray-200 p-4 rounded-lg bg-gray-50">
                <div className="flex justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Field #{fields.indexOf(field) + 1}</h3>
                  <button
                    type="button"
                    onClick={() => removeField(field.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) =>
                        updateField(field.id, { label: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Type</label>
                    <select
                      value={field.type}
                      onChange={(e) =>
                        updateField(field.id, { type: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="tel">Phone</option>
                      <option value="number">Number</option>
                      <option value="textarea">Text Area</option>
                      <option value="select">Select</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="radio">Radio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Placeholder
                    </label>
                    <input
                      type="text"
                      value={field.placeholder}
                      onChange={(e) =>
                        updateField(field.id, { placeholder: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) =>
                          updateField(field.id, { required: e.target.checked })
                        }
                        className="mr-2 text-blue-500"
                      />
                      Required Field
                    </label>
                  </div>

                  {(field.type === 'select' || field.type === 'radio') && (
                    <div className="col-span-2">
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Options (one per line)
                      </label>
                      <textarea
                        value={field.options.join('\n')}
                        onChange={(e) =>
                          updateField(field.id, {
                            options: e.target.value.split('\n').filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                        rows={3}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Form'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewContentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      page: formData.get('page'),
      content: formData.get('content'),
      isActive: formData.get('isActive') === 'true',
    };

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create content section');
      }

      router.push('/admin/content');
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
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Create New Content Section</h1>
        <p className="text-gray-600">Add a new content section to your website</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 mb-6 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-700">
            Title
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
          <label htmlFor="page" className="block text-sm font-medium mb-2 text-gray-700">
            Page
          </label>
          <select
            id="page"
            name="page"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          >
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="contact">Contact</option>
            <option value="services">Services</option>
            <option value="products">Products</option>
            <option value="blog">Blog</option>
            <option value="faq">FAQ</option>
            <option value="terms">Terms</option>
            <option value="privacy">Privacy</option>
          </select>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2 text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
            placeholder="Enter your content here... HTML tags are supported"
          />
          <p className="mt-2 text-sm text-gray-500">
            You can use HTML tags to format your content. For example: &lt;h1&gt;,
            &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
          </p>
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

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Content Section'}
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
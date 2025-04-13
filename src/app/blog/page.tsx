import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Kanada Eğitim Danışmanlığı',
  description: 'Kanada eğitimi, vize işlemleri ve göçmenlik hakkında güncel bilgiler ve makaleler.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog yazıları buraya eklenecek */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Yakında...</h2>
          <p className="text-gray-600">
            Blog yazılarımız yakında burada olacak. Lütfen daha sonra tekrar ziyaret edin.
          </p>
        </div>
      </div>
    </div>
  );
} 
'use client';

import useDeleteCategory from '@/hooks/category/useDeleteCategory';
import useGetCategory from '@/hooks/category/useGetCategory';
import { Category } from '@/types/category/category.type';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesPage() {
  const { mutate } = useDeleteCategory();
  const { data, isLoading } = useGetCategory();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const categories: Category[] = data;

  const handleDeleteCategory = (id: number) => {
    mutate(id);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Categories</h1>

        <Link
          href="/admin/add-category"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Category
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{category.id}</td>

                <td className="p-3">
                  <Image
                    src={category.image}
                    width={48}
                    height={48}
                    alt="product1"
                    className="object-cover rounded"
                  />
                </td>

                <td className="p-3 font-medium">{category.name}</td>

                <td className="p-3 flex gap-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

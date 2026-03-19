'use client';

import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-8">Admin</h1>

      {/* Menu */}
      <div className="flex flex-col gap-4">
        <Link href="/admin/dashboard" className="p-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>

        <Link href="/admin/list-category" className="p-2 rounded hover:bg-gray-700">
          Categories
        </Link>

        <Link href="/admin/add-category" className="p-2 rounded hover:bg-gray-700">
          Add Category
        </Link>

        <Link href="/admin/list-product" className="p-2 rounded hover:bg-gray-700">
          Products
        </Link>

        <Link href="/admin/add-product" className="p-2 rounded hover:bg-gray-700">
          Add Product
        </Link>
      </div>

      {/* Logout */}
      <div className="mt-10">
        <button className="w-full bg-red-500 p-2 rounded hover:bg-red-600">Logout</button>
      </div>
    </div>
  );
}

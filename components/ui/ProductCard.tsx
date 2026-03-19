'use client';

import useProducts from '@/hooks/product/useProducts';
import { Product } from '@/types/product/product.type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProductCard() {
  const router = useRouter();
  const { data, isLoading } = useProducts();

  const products: Product[] = data?.products ?? [];

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 bg-white shadow-sm">
          <div className="relative w-full h-48">
            <Image
              src={product.images[0]?.url}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>

          <h3 className="font-semibold mt-3 line-clamp-2">{product.name}</h3>

          <p className="text-red-500 font-bold mt-1">{Number(product.price).toLocaleString()} đ</p>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => router.push(`/product/${product.id}`)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              View
            </button>

            <button className="bg-pink-500 text-white px-3 py-1 rounded">Favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
}

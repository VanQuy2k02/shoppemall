'use client';
import { useParams } from 'next/navigation';
import useDetailProduct from '@/hooks/product/useDetailProduct';
import Image from 'next/image';

export default function DetailProduct() {
  const params = useParams();
  const id = params?.id as string;

  const { data, isLoading, error } = useDetailProduct(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Product not found</div>;

  return (
    <div className="grid grid-cols-2 gap-10">
      <Image
        src={data.images[0]?.url}
        alt={data.name}
        width={400}
        height={400}
        className="w-full rounded"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

        <p className="text-red-500 text-xl font-bold mb-4">${data.price}</p>

        <p className="text-gray-600 mb-6">{data.description}</p>

        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>

          <button className="bg-pink-500 text-white px-4 py-2 rounded">Favorite</button>
        </div>
      </div>
    </div>
  );
}

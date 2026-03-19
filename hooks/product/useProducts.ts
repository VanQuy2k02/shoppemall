'use client';
import { handleProducts } from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function useProducts() {
  const searchParams = useSearchParams();
  const params = {
    offset: 0,
    limit: 10,
    search: searchParams.get('search') || undefined,
    isNewArrival: Number(searchParams.get('isNewArrival')) || undefined,
    isBestseller: Number(searchParams.get('isBestseller')) || undefined,
    categoryId: Number(searchParams.get('categoryId')) || undefined,
    sort: searchParams.get('sort') || undefined,
  };
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => handleProducts.getProducts(params),
    staleTime: 1000 * 60 * 1, // 5 minutes
    gcTime: 1000 * 60 * 1,
    retry: 2,
    select: (data) => data.data,
  });
}

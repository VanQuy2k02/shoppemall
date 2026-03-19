'use client';

import { handleCategory } from '@/services/category/category.service';
import { useQuery } from '@tanstack/react-query';

export default function useGetCategory() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => handleCategory.getCategory(),
    select: (data) => data.data.categories,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 5,
  });
}

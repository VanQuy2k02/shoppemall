'use client';

import { handleCategory } from '@/services/category/category.service';
import { CreateCategory } from '@/types/category/category.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useCreateCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: CreateCategory) => handleCategory.createCategory(data),
    onSuccess: () => {
      alert('Category created successfully');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      router.push('/admin/list-category');
    },
    onError: () => {
      alert('Category creation failed');
    },
  });
}

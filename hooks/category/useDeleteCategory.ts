'use client';
import { handleCategory } from '@/services/category/category.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => handleCategory.deleteCategory(id),
    onSuccess: () => {
      alert('Category deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: () => {
      alert('Category deletion failed');
    },
  });
}

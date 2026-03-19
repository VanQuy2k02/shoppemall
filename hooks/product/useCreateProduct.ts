import { handleProducts } from '@/services/products/products.service';
import { ProductRequest } from '@/types/product/product.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useCreateProduct() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ProductRequest) => handleProducts.postProducts(data),
    onSuccess: () => {
      alert('Product created successfully');
      router.push('/admin/list-product');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => alert('Product creation failed'),
  });
}

import { handleProducts } from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';

export default function useDetailProduct(id: number) {
  return useQuery({
    queryKey: ['detail-product', id],
    queryFn: () => handleProducts.getDetailProducts(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 5,
  });
}

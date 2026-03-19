import { ProductRequest } from '@/types/product/product.type';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface ParamsProps {
  offset: number;
  limit: number;
  search?: string;
  isNewArrival?: number;
  isBestseller?: number;
  categoryId?: number;
  sort?: string;
}
export const handleProducts = {
  getProducts: async (params: ParamsProps) => {
    const res = await axios.get(`${API_URL}/product`, {
      params,
    });
    return res;
  },
  getDetailProducts: async (id: number) => {
    const res = await axios.get(`${API_URL}/product/${id}`);
    return res.data;
  },
  postProducts: async (data: ProductRequest) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.post(`${API_URL}/product/`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

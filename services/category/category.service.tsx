import { CreateCategory } from '@/types/category/category.type';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const handleCategory = {
  createCategory: async (data: CreateCategory) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.post(`${API_URL}/product/categories`, data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  getCategory: async () => {
    return await axios.get(`${API_URL}/product/categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  deleteCategory: async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.delete(`${API_URL}/product/${id}/categories`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ProductImage {
  id: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount: number;
  quantity: number;
  star: number;
  totalSold: number;
  viewerCount: number;

  isNewArrival: boolean;
  isBestseller: boolean;

  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  category: Category;
  images: ProductImage[];
}

export type ProductRequest = {
  name: string;
  categoryId: number;
  description: string;
  price: number;
  quantity: number;
  discount: number;
  star: number;
  isBestseller?: number;
  isNewArrival?: number;
  images: string[];
};

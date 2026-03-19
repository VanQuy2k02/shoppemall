export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type CreateCategory = Pick<Category, 'name' | 'image'>;

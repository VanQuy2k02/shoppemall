'use client';

import useGetCategory from '@/hooks/category/useGetCategory';
import useCreateProduct from '@/hooks/product/useCreateProduct';
import { handleImages } from '@/services/images/image.service';
import { Category } from '@/types/category/category.type';
import { ProductRequest } from '@/types/product/product.type';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export default function CreateProductPage() {
  const { data } = useGetCategory();
  const categories: Category[] = data;
  const [product, setProduct] = useState<ProductRequest>({
    name: '',
    categoryId: 0,
    description: '',
    price: 0,
    quantity: 0,
    discount: 0,
    star: 5,
    isBestseller: 0,
    isNewArrival: 0,
    images: [],
  });
  const [categoryId, setCategoryId] = useState<string>();
  const [images, setImages] = useState<string[]>([]);
  const { mutate: createProduct } = useCreateProduct();
  const { mutate } = useMutation({
    mutationFn: (formData: FormData) => handleImages.postImages(formData),
    onSuccess: (data) => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const urlImages: string[] = [];
      const setUrlImage = `${API_URL}/${data.data.data.path}`;
      urlImages.push(setUrlImage);
      setImages(urlImages);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,

      [name]:
        type === 'checkbox'
          ? checked
            ? 1
            : 0
          : name === 'price' || name === 'quantity'
            ? Number(value)
            : value,

      categoryId: Number(categoryId),
      discount: 0,
      star: 5,
    });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);
        mutate(formData);
      }
    } catch (error) {
      console.log('lỗi upload file');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: ProductRequest = {
      ...product,
      images,
    };

    createProduct(payload);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>

      <form className="grid gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Product name"
          className="border p-2 rounded-lg"
        />

        {/* Category */}
        <select
          onChange={(e) => setCategoryId(e.target.value)}
          name="categoryId"
          className="border p-2 rounded-lg"
        >
          {categories?.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Description */}
        <input
          onChange={handleChange}
          name="description"
          placeholder="Product description"
          className="border p-2 rounded-lg"
        />

        {/* Price */}
        <input
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Price"
          className="border p-2 rounded-lg"
        />

        {/* Quantity */}
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-2 rounded-lg"
        />

        {/* Bestseller */}
        <label className="flex items-center gap-2">
          <input type="checkbox" value={1} name="isBestseller" onChange={handleChange} />
          Bestseller
        </label>

        {/* New Arrival */}
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isNewArrival" onChange={handleChange} value={1} />
          New Arrival
        </label>

        {/* Images */}
        <input
          onChange={handleChangeImage}
          type="file"
          multiple
          placeholder="Image URL"
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

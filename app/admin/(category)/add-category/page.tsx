'use client';

import useCreateCategory from '@/hooks/category/useCreateCategory';
import { handleImages } from '@/services/images/image.service';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export default function CreateCategoryPage() {
  const [name, setName] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const { mutate: createCategory, isPending } = useCreateCategory();
  const { mutate } = useMutation({
    mutationFn: (formData: FormData) => handleImages.postImages(formData),
    onSuccess: (data) => {
      const url = data.data.data.path;
      setUrlImage(`${API_URL}/${url}`);
    },
  });
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    mutate(formData);
  };

  const handleCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      image: urlImage,
    };
    createCategory(payload);
    setName('');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-6">Create Product Category</h1>

      <form onSubmit={handleCategory} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="file"
            onChange={handleChangeImage}
            placeholder="Enter image url"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!urlImage || isPending}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isPending ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}

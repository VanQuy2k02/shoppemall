'use client';
import { handleImages } from '@/services/images/image.service';
import { useMutation } from '@tanstack/react-query';

export default function useImage() {
  return useMutation({
    mutationFn: (formData: FormData) => handleImages.postImages(formData),
  });
}

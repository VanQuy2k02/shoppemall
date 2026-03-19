'use client';
import { handleAuth } from '@/services/auth/auth.service';
import { RegisterForm } from '@/types/auth/auth.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useRegister() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: RegisterForm) => handleAuth.signup(data),
    onSuccess: () => {
      alert('Register successful');
      router.push('/login');
    },
    onError: () => {
      alert('Register failed');
    },
  });
}

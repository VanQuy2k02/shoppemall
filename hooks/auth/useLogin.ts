'use client';
import { handleAuth } from '@/services/auth/auth.service';
import { useAuthStore } from '@/stores/auth.store';
import { LoginForm } from '@/types/auth/auth.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useLogin() {
  const { setAccessToken, setUser } = useAuthStore();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginForm) => handleAuth.login(data),
    onSuccess: (data) => {
      alert('Login successful');
      if (data?.user?.role === 'USER') {
        setAccessToken(data.accessToken);
        setUser(data.user);
        router.push('/');
      } else {
        router.push('/admin/dashboard');
        localStorage.setItem('accessToken', data.accessToken);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });
}

'use client';
import { handleAuth } from '@/services/authen/auth.service';
import { useAuthStore } from '@/stores/auth.store';
import { LoginForm } from '@/types/authen/auth.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useLogin() {
  const { setAccessToken, setUser } = useAuthStore();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginForm) => handleAuth.login(data),
    onSuccess: (data) => {
      alert('Login successful');
      setAccessToken(data.accessToken);
      setUser(data.user);
      router.push('/');
    },
    onError: (error) => {
      alert(error);
    },
  });
}

import { LoginForm, RegisterForm } from '@/types/authen/auth.type';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export const handleAuth = {
  signup: async (data: RegisterForm) => {
    const res = await fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  login: async (data: LoginForm) => {
    const res = await fetch(`${API_URL}/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};

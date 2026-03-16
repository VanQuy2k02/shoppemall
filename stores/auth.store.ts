import { create } from 'zustand';

export interface User {
  id: number;
  email: string;
  userName: string;
  name: string;
  phone: string;
  role: string;
  hasAddress: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  resetCode: string | null;
  resetCodeExpiry: string | null;
}
interface AuthState {
  user: User | null;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  setUser: (user) => set({ user }),
  setAccessToken: (token) => set({ accessToken: token }),
}));

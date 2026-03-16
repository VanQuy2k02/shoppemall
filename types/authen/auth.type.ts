export interface RegisterForm {
  email: string;
  userName: string;
  password: string;
  name: string;
  phone: string;
}

export interface LoginForm {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

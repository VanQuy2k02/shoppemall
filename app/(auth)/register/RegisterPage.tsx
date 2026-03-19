'use client';

import useRegister from '@/hooks/auth/useRegister';
import { RegisterForm } from '@/types/auth/auth.type';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            {...register('email', {
              required: 'Email không được để trống',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email không hợp lệ',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
            {...register('userName', {
              required: 'Username không được để trống',
              minLength: {
                value: 4,
                message: 'Username tối thiểu 4 ký tự',
              },
            })}
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            {...register('password', {
              required: 'Password không được để trống',
              minLength: {
                value: 6,
                message: 'Password tối thiểu 6 ký tự',
              },
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            {...register('name', {
              required: 'Tên không được để trống',
            })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full border p-2 rounded"
            {...register('phone', {
              required: 'Số điện thoại không được để trống',
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: 'Số điện thoại không hợp lệ',
              },
            })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isPending ? 'Registering...' : 'Register'}
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?{' '}
          <Link
            href="/login"
            className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition"
          >
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  );
}

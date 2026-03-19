import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-commerce-rd5w.onrender.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}

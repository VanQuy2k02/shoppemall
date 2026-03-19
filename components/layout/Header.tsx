import { menu } from '@/constants/menu';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">ShopMall</h1>

        <nav className="flex gap-6 text-gray-700">
          {menu.length > 0 &&
            menu.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}

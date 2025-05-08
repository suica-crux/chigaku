'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname(); // 例: "/manual/dome/1prepare"
  const segments = pathname.split('/').filter(Boolean); // ['', 'manual', 'dome', '1prepare'] → ['manual', 'dome', '1prepare']

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    return {
      label: decodeURIComponent(segment),
      href,
    };
  });

  // ホーム追加
  const fullCrumbs = [{ label: 'ホーム', href: '/' }, ...crumbs];

  if (segments.length === 0) return null;

  return (
    <nav className="text-sm text-gray-600 my-4" aria-label="パンくずリスト">
      <ol className="list-reset flex space-x-2">
        {fullCrumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-1">›</span>}
            {i < fullCrumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:underline text-blue-600">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

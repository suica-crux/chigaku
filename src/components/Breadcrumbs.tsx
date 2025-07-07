'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SlashIcon } from '@heroicons/react/16/solid';
import { titleLoader } from '@/lib/titleLoader';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0 || segments.includes('schedule')) {
    return null;
  }

  const crumbs = segments.map((segment, index) => {
    const decoded = decodeURIComponent(segment);
    const label = titleLoader(decoded) || titleLoader('_not-found');
    return {
      label,
      href: '/' + segments.slice(0, index + 1).join('/'),
    };
  });

  const fullCrumbs = [{ label: 'ホーム', href: '/' }, ...crumbs];

  if (fullCrumbs.at(-1)?.label === 'エラー') {
    return null;
  }

  return (
    <nav className="text-sm text-fgfade my-4" aria-label="Breadcrumbs">
      <ol className="list-reset flex space-x-2">
        {fullCrumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <SlashIcon className="h-4 w-4 text-fglight" />}
            {i < fullCrumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:underline text-blue-500">
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

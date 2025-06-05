'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function BackToTop() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <Link
      href={`/`}
      className="inline-flex items-center gap-2 px-4 py-2 text-foreground bg-subbg hover:bg-bghover rounded transition"
    >
      <ChevronLeft className="w-5 h-5" />
      トップページに戻る
    </Link>
  );
}

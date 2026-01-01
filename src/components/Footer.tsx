'use client';

import Text from './Text';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-subbg text-fgfade mt-16 py-8 flex flex-col items-center">
      <Text size="xl">各種リンク</Text>
      <div className="flex space-x-6">
        <Link href="https://instagram.com/dhs_chigakubu" target="_blank">
          Instagram&nbsp;
          <ExternalLink className="w-5 h-5 text-current inline" />
        </Link>
      </div>
      <div className="text-center mt-4 text-sm">
        <Text color="fade">&copy; 2025-2026 同志社高校地学部. All Rights Reserved.</Text>
      </div>
    </footer>
  );
}

'use client';

import Text from './Text';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-subbg text-fgfade mt-16 py-8 flex flex-col items-center">
      <Text size="xl">各種リンク</Text>
      <div className="flex space-x-6">
        <Link href="https://instagram.com/dhs_chigakubu" target="_blank">
          Instagram&nbsp;
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-current inline" />
        </Link>
      </div>
      <div className="text-center mt-4 text-sm">
        <Text colour="fade">&copy; 2025 同志社高校地学部. All Rights Reserved.</Text>
      </div>
    </footer>
  );
}

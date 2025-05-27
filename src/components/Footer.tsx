'use client';

import Text from './Text';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-16 py-8 flex flex-col items-center">
      <Text size="xl">各種リンク</Text>
      <div className="flex space-x-6">
        <Link
          href="https://instagram.com/dhs_chigakubu"
          target='_blank'
        >
          Instagram
        </Link>
      </div>
      <div className="text-center mt-4 text-sm">
        <Text colour="gray">
          &copy; 2025 同志社高校地学部. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
}

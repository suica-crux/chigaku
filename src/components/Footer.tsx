'use client';

// import { forwardRef } from 'react';
import Text from './Text';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-16 py-8 flex flex-col items-center">
      <Text size="xl">各種リンク</Text>
      <div className="flex space-x-6">
        {/* <ExternalLink
          href="https://instagram.com/doshisha_chigaku"
          customClass="hover:text-blue-500"
        >
          Instagram
        </ExternalLink> */}
        <Text>リンク置こうね^^</Text>
      </div>
      <div className="text-center mt-4 text-sm">
        <Text colour="gray">
          &copy; 2025 同志社高校地学部. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
}

'use client';

// import { forwardRef } from 'react';
import Text from './Text';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-16 py-8 flex flex-col items-center">
      <Text text="各種リンク" type="semi-large" />
      <div className="flex space-x-6">
        <ExternalLink
          href="https://instagram.com/doshisha_chigaku"
          customClass="hover:text-blue-500"
        >
          Instagram
        </ExternalLink>
      </div>
      <div className="text-center mt-4 text-sm">
        <Text
          text="&copy; 2025 同志社高校地学部. All Rights Reserved."
          color="gray"
        />
      </div>
    </footer>
  );
}

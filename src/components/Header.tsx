'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold">
          同志社高校地学部
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link href="/manual" className="hover:text-blue-700">
            Manual
          </Link>
          <Link href="/contact" className="hover:text-blue-700">
            Contact
          </Link>
        </nav>

        {/* for desktop */}
        <button
          className="md:hidden p-4 -m-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* for mobile */}
      <nav
        ref={menuRef}
        className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full py-2 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <Link
          href="/about"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/manual"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          Manual
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

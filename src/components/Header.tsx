'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';
import Image from 'next/image';

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
    <header className="fixed top-0 left-0 w-full bg-subbg shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Image src="/favicon.ico" width={40} height={40} alt="logo" className="rounded" />
        <Link href="/" className="text-xl font-bold">
          <span className="text-xl font-bold">同志社高校地学部</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-500 inline-flex items-center">
            紹介
          </Link>
          <Link href="/manual" className="hover:text-blue-500 inline-flex items-center">
            マニュアル
          </Link>
          <Link href="/caution" className="hover:text-blue-500 inline-flex items-center">
            注意事項
          </Link>
          <Link href="/contact" className="hover:text-blue-500 inline-flex items-center">
            お問い合わせ
          </Link>
          <ThemeToggleButton />
        </nav>

        {/* for desktop */}

        <button
          className="md:hidden p-4 -m-2 border rounded-md border-border"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {
            isOpen ? <X size={24} /> : <Menu size={24} />
            // <p>Menu</p>
          }
        </button>
      </div>

      {/* for mobile */}
      <nav
        ref={menuRef}
        className={`md:hidden bg-background shadow-md absolute top-16 left-0 w-full py-2 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <Link href="/about" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
          紹介
        </Link>
        <Link href="/manual" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
          マニュアル
        </Link>
        <Link href="/caution" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
          注意事項
        </Link>
        <Link href="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
          お問い合わせ
        </Link>
        <div className="block px-4 py-2">
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}

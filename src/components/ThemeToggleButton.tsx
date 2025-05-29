'use client';

import { useTheme } from '@/components/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 border border-border rounded-md hover:bg-bghover transition-colors flex items-center justify-center"
    >
      {theme === 'light' ? (
        <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}

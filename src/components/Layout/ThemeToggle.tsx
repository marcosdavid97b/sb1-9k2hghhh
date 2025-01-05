import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}
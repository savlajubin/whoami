'use client';

import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-lg ${theme === 'light' ? 'bg-white shadow-sm' : ''}`}
        aria-label="Light mode"
      >
        <SunIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 shadow-sm' : ''}`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-lg ${theme === 'system' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''}`}
        aria-label="System theme"
      >
        <ComputerDesktopIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
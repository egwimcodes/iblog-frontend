'use client'

import { useTheme } from '@/lib/contexts';
import { useEffect, useState } from 'react'

export default function ThemeToggleButton() {
  const { state, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('Current theme:', state.theme);
    console.log('Resolved theme:', state.resolvedTheme);
  }, [state.theme, state.resolvedTheme]);

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(state.resolvedTheme);
    //Save to localStorage
    localStorage.setItem('theme', state.theme);
  }, [state.resolvedTheme, state.theme]); 

  if (!mounted) return null

  const isDark = state.resolvedTheme === 'dark'
  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed right-2 top-1/2 -translate-y-1/2 z-50 w-7 h-16 flex items-start justify-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-500"
    >
      <span
        className={`h-7 w-10 bg-white dark:bg-black text-xl flex items-center justify-center rounded-full shadow-md transform transition-all duration-500 ${isDark ? 'translate-y-7' : 'translate-y-0'
          }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import styles from './Resume.module.css';

// theme: null = follow the visitor's system setting (handled purely in CSS,
// so there is no flash or hydration mismatch). Clicking the toggle pins
// light or dark for the rest of the visit.
const ThemeContext = createContext<() => void>(() => undefined);

export function ThemeRoot({ className = '', children }: { className?: string; children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  const toggle = () => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = theme ?? (systemDark ? 'dark' : 'light');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  const rootClass = [
    styles.root,
    className,
    theme === 'dark' && styles.dark,
    theme === 'light' && styles.light,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ThemeContext.Provider value={toggle}>
      <div className={rootClass}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ children }: { children: ReactNode }) {
  const toggle = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggle}
      aria-label="Toggle light or dark theme"
    >
      {children}
    </button>
  );
}

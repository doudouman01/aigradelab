'use client';

import { usePathname } from 'next/navigation';
import { locales, localeNames } from '../lib/i18n';
import type { Locale } from '../lib/i18n';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Replace the current locale prefix with the new one
    const segments = pathname.split('/');
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    window.location.href = segments.join('/');
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLocale(e.target.value)}
      aria-label="Language"
      style={{
        background: 'var(--bg-card)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '0.85rem',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeNames[l]}
        </option>
      ))}
    </select>
  );
}

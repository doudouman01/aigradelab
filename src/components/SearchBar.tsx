'use client';
import { useState, useRef, useEffect } from 'react';

type SearchItem = { slug: string; title: string; category: string; grade: string | null };
type Props = { items: SearchItem[]; locale: string; placeholder: string };

export default function SearchBar({ items, locale, placeholder }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = query.length >= 2
    ? items.filter(i => i.title.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      {!open ? (
        <button className="search-toggle" onClick={() => setOpen(true)} aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      ) : (
        <div className="search-active">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="search-input"
          />
          {filtered.length > 0 && (
            <div className="search-results">
              {filtered.map(item => (
                <a key={item.slug} href={`/${locale}/blog/${item.slug}`} className="search-result-item">
                  <span className="search-result-title">{item.title}</span>
                  {item.grade && <span className="search-result-grade">{item.grade}</span>}
                </a>
              ))}
            </div>
          )}
          {query.length >= 2 && filtered.length === 0 && (
            <div className="search-results">
              <div className="search-no-results">No results</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

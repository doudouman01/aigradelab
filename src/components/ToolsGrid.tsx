'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools, toolCategories } from '../data/tools';
import type { ToolCategory } from '../data/tools';
import { getTranslations } from '../lib/i18n';
import { getGradeColor } from '../lib/grades';
import { getToolI18n } from '../data/tool-i18n';

export default function ToolsGrid({ locale }: { locale: string }) {
  const t = getTranslations(locale as any);
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all');
  const [filterGraded, setFilterGraded] = useState<'all' | 'graded' | 'ungraded'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = tools.filter(tool => {
    if (activeCategory !== 'all' && tool.category !== activeCategory) return false;
    if (filterGraded === 'graded' && !tool.grade) return false;
    if (filterGraded === 'ungraded' && tool.grade) return false;
    if (searchQuery && !tool.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (a.grade && !b.grade) return -1;
    if (!a.grade && b.grade) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container tools-page">
      <div className="tools-hero">
        <h1>{t.tools.title}</h1>
        <p>{t.tools.subtitle}</p>
      </div>

      <div className="tools-filters">
        <input
          type="text"
          className="tools-search"
          placeholder={t.nav.search}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        <div className="tools-filter-row">
          <button
            className={`tools-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.tools.allTools} ({tools.length})
          </button>
          {toolCategories.map(cat => {
            const count = tools.filter(tl => tl.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                className={`tools-filter-btn ${activeCategory === cat.slug ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {t.tools.categories[cat.slug] || cat.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="tools-grade-filter">
          <button className={`tools-filter-btn ${filterGraded === 'all' ? 'active' : ''}`} onClick={() => setFilterGraded('all')}>{t.tools.allTools}</button>
          <button className={`tools-filter-btn ${filterGraded === 'graded' ? 'active' : ''}`} onClick={() => setFilterGraded('graded')}>{t.tools.graded}</button>
          <button className={`tools-filter-btn ${filterGraded === 'ungraded' ? 'active' : ''}`} onClick={() => setFilterGraded('ungraded')}>{t.tools.notYetGraded}</button>
        </div>
      </div>

      <div className="tools-count">{sorted.length} {t.tools.allTools.toLowerCase()}</div>

      <div className="tools-grid">
        {sorted.map(tool => (
          <Link key={tool.slug} href={`/${locale}/tools/${tool.slug}`} className="tool-card">
            <div className="tool-card-header">
              <div>
                <h3 className="tool-card-name">{tool.name}</h3>
                <span className="tool-card-category">{t.tools.categories[tool.category] || tool.category}</span>
              </div>
              {tool.grade ? (
                <span className="tool-card-grade" style={{ background: getGradeColor(tool.grade) }}>
                  {tool.grade}
                </span>
              ) : (
                <span className="tool-card-grade tool-card-grade-pending">?</span>
              )}
            </div>
            <p className="tool-card-desc">{getToolI18n(tool.slug, locale)?.h || tool.highlight}</p>
            <div className="tool-card-footer">
              <span className="tool-card-pricing">{tool.pricing}</span>
              <span className="tool-card-view">{t.tools.viewTool} →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

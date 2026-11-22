'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools } from '../data/tools';
import type { Tool, ToolCategory } from '../data/tools';
import { getTranslations } from '../lib/i18n';
import { getGradeColor } from '../lib/grades';
import { getToolI18n } from '../data/tool-i18n';

type Step = 0 | 1 | 2 | 3 | 4; // 0-3 = questions, 4 = results

const categoryMap: Record<number, ToolCategory[]> = {
  0: ['writing'],
  1: ['image', 'design'],
  2: ['video'],
  3: ['coding'],
  4: ['research', 'data'],
  5: ['productivity'],
  6: ['chatbot'],
  7: ['audio'],
  8: ['seo', 'marketing'],
};

const budgetMap: Record<number, (p: string) => boolean> = {
  0: (p) => p === 'Free' || p === 'Freemium',
  1: (p) => p === 'Free' || p === 'Freemium' || p.includes('$10') || p.includes('$12') || p.includes('$14') || p.includes('$15') || p.includes('$19') || p.includes('$4'),
  2: (p) => !p.includes('$75') && !p.includes('$89') && !p.includes('$99') && !p.includes('$129') && !p.includes('$170') && p !== 'Enterprise',
  3: () => true,
};

const priorityMap: Record<number, keyof Tool['scores'] extends never ? string : string> = {
  0: 'ux',
  1: 'quality',
  2: 'value',
  3: 'integration',
  4: 'support',
};

function scoreMatch(tool: Tool, answers: number[]): number {
  let score = 0;

  // Q1: Category match (40 points)
  const targetCats = categoryMap[answers[0]] || [];
  if (targetCats.includes(tool.category)) score += 40;

  // Q2: Budget match (20 points)
  const budgetFilter = budgetMap[answers[1]];
  if (budgetFilter && budgetFilter(tool.pricing)) score += 20;

  // Q3: Experience level (15 points)
  if (answers[2] === 0 && tool.scores && tool.scores.ux >= 8) score += 15;
  else if (answers[2] === 1) score += 10;
  else if (answers[2] === 2 && tool.scores && tool.scores.quality >= 8) score += 15;

  // Q4: Priority match (25 points)
  const priorityKey = priorityMap[answers[3]];
  if (tool.scores && priorityKey) {
    const val = (tool.scores as any)[priorityKey] as number;
    if (val >= 9) score += 25;
    else if (val >= 8) score += 20;
    else if (val >= 7) score += 15;
  }

  // Bonus for graded tools
  if (tool.grade) score += 10;

  return score;
}

export default function ToolFinderQuiz({ locale }: { locale: string }) {
  const t = getTranslations(locale as any);
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<{ tool: Tool; score: number }[]>([]);

  const questions = [
    { question: t.finder.q1, options: t.finder.q1opts },
    { question: t.finder.q2, options: t.finder.q2opts },
    { question: t.finder.q3, options: t.finder.q3opts },
    { question: t.finder.q4, options: t.finder.q4opts },
  ];

  function handleAnswer(optionIndex: number) {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (step < 3) {
      setStep((step + 1) as Step);
    } else {
      // Calculate results
      const scored = tools.map(tool => ({
        tool,
        score: scoreMatch(tool, newAnswers),
      }));
      scored.sort((a, b) => b.score - a.score);
      setResults(scored.slice(0, 3));
      setStep(4);
    }
  }

  function retake() {
    setStep(0);
    setAnswers([]);
    setResults([]);
  }

  function getMatchLabel(index: number): string {
    if (index === 0) return t.finder.perfect;
    if (index === 1) return t.finder.great;
    return t.finder.good;
  }

  function getMatchPercent(score: number, maxScore: number): number {
    return Math.min(99, Math.round((score / maxScore) * 100));
  }

  if (step === 4) {
    const maxScore = results[0]?.score || 1;
    return (
      <div className="container finder-page">
        <div className="finder-results">
          <h1>{t.finder.results}</h1>
          <p className="finder-results-sub">{t.finder.resultsSub}</p>

          <div className="finder-results-grid">
            {results.map((r, i) => {
              const i18n = getToolI18n(r.tool.slug, locale);
              const pct = getMatchPercent(r.score, maxScore);
              return (
                <div key={r.tool.slug} className={`finder-result-card ${i === 0 ? 'finder-result-top' : ''}`}>
                  <div className="finder-result-badge">{getMatchLabel(i)}</div>
                  <div className="finder-result-header">
                    <div>
                      <h2>{r.tool.name}</h2>
                      <span className="finder-result-category">
                        {t.tools.categories[r.tool.category] || r.tool.category}
                      </span>
                    </div>
                    {r.tool.grade && (
                      <span className="finder-result-grade" style={{ background: getGradeColor(r.tool.grade) }}>
                        {r.tool.grade}
                      </span>
                    )}
                  </div>
                  <p className="finder-result-desc">{i18n?.d || r.tool.description}</p>
                  <div className="finder-result-match">
                    <div className="finder-match-bar">
                      <div className="finder-match-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="finder-match-pct">{pct}% {t.finder.yourMatch}</span>
                  </div>
                  <div className="finder-result-meta">
                    <span>{r.tool.pricing}</span>
                    <span>{i18n?.h || r.tool.highlight}</span>
                  </div>
                  <Link href={`/${locale}/tools/${r.tool.slug}`} className="finder-result-cta">
                    {t.finder.viewTool} →
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="finder-actions">
            <button onClick={retake} className="finder-retake">{t.finder.retake}</button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[step];
  const progress = ((step) / 4) * 100;

  return (
    <div className="container finder-page">
      <div className="finder-quiz">
        {step === 0 && (
          <div className="finder-intro">
            <h1>{t.finder.title}</h1>
            <p>{t.finder.subtitle}</p>
          </div>
        )}

        <div className="finder-progress">
          <div className="finder-progress-bar">
            <div className="finder-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="finder-progress-text">{step + 1} / 4</span>
        </div>

        <div className="finder-question">
          <h2>{q.question}</h2>
          <div className="finder-options">
            {q.options.map((opt, i) => (
              <button key={i} className="finder-option" onClick={() => handleAnswer(i)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

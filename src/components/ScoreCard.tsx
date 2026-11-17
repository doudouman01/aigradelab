import { Scores, getGradeColor, computeGrade } from '../content/posts';
import { getTranslations, isValidLocale } from '../lib/i18n';

type Props = { scores: Scores | null; locale?: string };

export default function ScoreCard({ scores, locale = 'en' }: Props) {
  if (!scores) return null;
  const grade = computeGrade(scores);
  const color = getGradeColor(grade);
  const lang = isValidLocale(locale) ? locale : 'en';
  const t = getTranslations(lang);

  const labels: { key: keyof Scores; label: string }[] = [
    { key: 'ux', label: t.scoreLabels.ux },
    { key: 'quality', label: t.scoreLabels.quality },
    { key: 'value', label: t.scoreLabels.value },
    { key: 'integration', label: t.scoreLabels.integration },
    { key: 'support', label: t.scoreLabels.support },
  ];

  return (
    <div className="score-card">
      <h3>{t.article.testScores}</h3>
      {labels.map(({ key, label }) => (
        <div className="score-row" key={key}>
          <span className="score-label">{label}</span>
          <div className="score-bar-bg">
            <div
              className="score-bar-fill"
              style={{ width: `${scores[key] * 10}%`, background: color }}
            />
          </div>
          <span className="score-value" style={{ color }}>{scores[key]}</span>
        </div>
      ))}
    </div>
  );
}

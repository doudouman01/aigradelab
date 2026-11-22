import { ComparisonTool, Scores, getGradeColor } from '../content/posts';
import { getTranslations, isValidLocale } from '../lib/i18n';

type Props = {
  toolA: ComparisonTool;
  toolB: ComparisonTool;
  locale?: string;
};

export default function ComparisonTable({ toolA, toolB, locale = 'en' }: Props) {
  const lang = isValidLocale(locale) ? locale : 'en';
  const t = getTranslations(lang);
  const colorA = getGradeColor(toolA.grade);
  const colorB = getGradeColor(toolB.grade);

  const criteria: { key: keyof Scores; label: string }[] = [
    { key: 'ux', label: t.scoreLabels.ux },
    { key: 'quality', label: t.scoreLabels.quality },
    { key: 'value', label: t.scoreLabels.value },
    { key: 'integration', label: t.scoreLabels.integration },
    { key: 'support', label: t.scoreLabels.support },
  ];

  const avgA = (toolA.scores.ux + toolA.scores.quality + toolA.scores.value + toolA.scores.integration + toolA.scores.support) / 5;
  const avgB = (toolB.scores.ux + toolB.scores.quality + toolB.scores.value + toolB.scores.integration + toolB.scores.support) / 5;

  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="comparison-criteria-col">{t.article.testScores}</th>
            <th className="comparison-tool-col">
              <span className="comparison-grade-badge" style={{ background: colorA }}>{toolA.grade}</span>
              <span className="comparison-tool-name">{toolA.name}</span>
            </th>
            <th className="comparison-tool-col">
              <span className="comparison-grade-badge" style={{ background: colorB }}>{toolB.grade}</span>
              <span className="comparison-tool-name">{toolB.name}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {criteria.map(({ key, label }) => {
            const valA = toolA.scores[key];
            const valB = toolB.scores[key];
            const winnerA = valA > valB;
            const winnerB = valB > valA;
            return (
              <tr key={key}>
                <td className="comparison-criteria-cell">{label}</td>
                <td className={`comparison-score-cell ${winnerA ? 'comparison-winner' : ''}`}>
                  <div className="comparison-bar-row">
                    <div className="comparison-bar-bg">
                      <div className="comparison-bar-fill" style={{ width: `${valA * 10}%`, background: colorA }} />
                    </div>
                    <span className="comparison-score-val" style={{ color: winnerA ? colorA : 'var(--text-secondary)' }}>{valA}</span>
                  </div>
                </td>
                <td className={`comparison-score-cell ${winnerB ? 'comparison-winner' : ''}`}>
                  <div className="comparison-bar-row">
                    <div className="comparison-bar-bg">
                      <div className="comparison-bar-fill" style={{ width: `${valB * 10}%`, background: colorB }} />
                    </div>
                    <span className="comparison-score-val" style={{ color: winnerB ? colorB : 'var(--text-secondary)' }}>{valB}</span>
                  </div>
                </td>
              </tr>
            );
          })}
          <tr className="comparison-total-row">
            <td className="comparison-criteria-cell"><strong>Average</strong></td>
            <td className="comparison-score-cell">
              <span className="comparison-avg" style={{ color: colorA }}>{avgA.toFixed(1)}</span>
            </td>
            <td className="comparison-score-cell">
              <span className="comparison-avg" style={{ color: colorB }}>{avgB.toFixed(1)}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="comparison-cta-row">
        {toolA.affiliateUrl && (
          <a href={toolA.affiliateUrl} target="_blank" rel="noopener sponsored" className="comparison-cta-btn" style={{ borderColor: colorA, color: colorA }}>
            Try {toolA.name} &rarr;
          </a>
        )}
        {toolB.affiliateUrl && (
          <a href={toolB.affiliateUrl} target="_blank" rel="noopener sponsored" className="comparison-cta-btn" style={{ borderColor: colorB, color: colorB }}>
            Try {toolB.name} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

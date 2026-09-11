import { Scores, getGradeColor, computeGrade } from '../content/posts';

type Props = { scores: Scores | null };

const labels: { key: keyof Scores; label: string }[] = [
  { key: 'ux', label: 'Ease of Use' },
  { key: 'quality', label: 'Output Quality' },
  { key: 'value', label: 'Value for Money' },
  { key: 'integration', label: 'Integration' },
  { key: 'support', label: 'Support & Updates' },
];

export default function ScoreCard({ scores }: Props) {
  if (!scores) return null;
  const grade = computeGrade(scores);
  const color = getGradeColor(grade);

  return (
    <div className="score-card">
      <h3>Test Scores</h3>
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

export type Grade = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';

export type Scores = {
  ux: number;
  quality: number;
  value: number;
  integration: number;
  support: number;
};

export function computeGrade(scores: Scores): Grade {
  const avg = (scores.ux + scores.quality + scores.value + scores.integration + scores.support) / 5;
  if (avg >= 9) return 'A+';
  if (avg >= 8) return 'A';
  if (avg >= 7) return 'B+';
  if (avg >= 6) return 'B';
  if (avg >= 5) return 'C';
  if (avg >= 4) return 'D';
  return 'F';
}

export function getGradeClass(grade: Grade | null): string {
  if (!grade) return '';
  const map: Record<string, string> = {
    'A+': 'grade-aplus', 'A': 'grade-a', 'B+': 'grade-bplus',
    'B': 'grade-b', 'C': 'grade-c', 'D': 'grade-d', 'F': 'grade-f',
  };
  return map[grade] || '';
}

export function getGradeColor(grade: Grade | null): string {
  if (!grade) return '#A0A0B8';
  const map: Record<string, string> = {
    'A+': '#10B981', 'A': '#34D399', 'B+': '#60A5FA',
    'B': '#93C5FD', 'C': '#FBBF24', 'D': '#F97316', 'F': '#EF4444',
  };
  return map[grade] || '#A0A0B8';
}

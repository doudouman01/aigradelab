import { Grade, getGradeClass } from '../content/posts';

type Props = {
  grade: Grade | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function GradeBadge({ grade, size = 'md' }: Props) {
  if (!grade) return null;
  return (
    <span className={`grade-badge size-${size} ${getGradeClass(grade)}`}>
      {grade}
    </span>
  );
}

import fs from 'fs';
import path from 'path';

export type Grade = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';

export type Scores = {
  ux: number;
  quality: number;
  value: number;
  integration: number;
  support: number;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  lastTested: string;
  readTime: string;
  grade: Grade | null;
  scores: Scores | null;
  toolName: string | null;
  affiliateUrl: string | null;
  content: string;
};

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

export const categories = [
  { name: 'Graded Reviews', slug: 'graded-reviews' },
  { name: 'Head-to-Head', slug: 'head-to-head' },
  { name: 'Best Picks', slug: 'best-picks' },
  { name: 'Lab Notes', slug: 'lab-notes' },
  { name: 'Workflow Guides', slug: 'workflow-guides' },
];

function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const lines = fileContent.split('\n');
  if (lines[0].trim() !== '---') {
    return { data: {}, content: fileContent };
  }
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      endIndex = i;
      break;
    }
  }
  if (endIndex === -1) {
    return { data: {}, content: fileContent };
  }
  const frontmatterLines = lines.slice(1, endIndex);
  const data: Record<string, string> = {};
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  const content = lines.slice(endIndex + 1).join('\n').trim();
  return { data, content };
}

function loadPostFromFile(filePath: string): Post {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = parseFrontmatter(fileContent);
  const slug = path.basename(filePath, '.md');
  const validGrades: Grade[] = ['A+', 'A', 'B+', 'B', 'C', 'D', 'F'];
  const gradeValue = data.grade || null;
  const grade: Grade | null = gradeValue && validGrades.includes(gradeValue as Grade) ? (gradeValue as Grade) : null;
  let scores: Scores | null = null;
  if (data.scores_ux && data.scores_quality && data.scores_value && data.scores_integration && data.scores_support) {
    scores = {
      ux: parseFloat(data.scores_ux),
      quality: parseFloat(data.scores_quality),
      value: parseFloat(data.scores_value),
      integration: parseFloat(data.scores_integration),
      support: parseFloat(data.scores_support),
    };
  }
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    category: data.category || '',
    categorySlug: data.categorySlug || '',
    date: data.date || '',
    lastTested: data.lastTested || '',
    readTime: data.readTime || '',
    grade,
    scores,
    toolName: data.toolName || null,
    affiliateUrl: data.affiliateUrl || null,
    content,
  };
}

let cachedPosts: Post[] | null = null;

export function getPosts(): Post[] {
  if (cachedPosts) return cachedPosts;
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  const posts = files.map(f => loadPostFromFile(path.join(blogDir, f)));
  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  cachedPosts = posts;
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find(p => p.slug === slug);
}

// Keep backward compatibility
export const posts: Post[] = getPosts();

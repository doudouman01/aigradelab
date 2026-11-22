import fs from 'fs';
import path from 'path';

// Re-export from shared module for backward compat
export { type Grade, type Scores, computeGrade, getGradeClass, getGradeColor } from '../lib/grades';
import type { Grade, Scores } from '../lib/grades';
import { computeGrade } from '../lib/grades';

export type ComparisonTool = {
  name: string;
  grade: Grade;
  scores: Scores;
  affiliateUrl: string | null;
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
  comparison: { toolA: ComparisonTool; toolB: ComparisonTool } | null;
  content: string;
};

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
  // Parse comparison data for head-to-head articles
  let comparison: { toolA: ComparisonTool; toolB: ComparisonTool } | null = null;
  if (data.toolA_name && data.toolB_name &&
      data.toolA_ux && data.toolA_quality && data.toolA_value && data.toolA_integration && data.toolA_support &&
      data.toolB_ux && data.toolB_quality && data.toolB_value && data.toolB_integration && data.toolB_support) {
    const toolAScores: Scores = {
      ux: parseFloat(data.toolA_ux), quality: parseFloat(data.toolA_quality),
      value: parseFloat(data.toolA_value), integration: parseFloat(data.toolA_integration),
      support: parseFloat(data.toolA_support),
    };
    const toolBScores: Scores = {
      ux: parseFloat(data.toolB_ux), quality: parseFloat(data.toolB_quality),
      value: parseFloat(data.toolB_value), integration: parseFloat(data.toolB_integration),
      support: parseFloat(data.toolB_support),
    };
    comparison = {
      toolA: { name: data.toolA_name, grade: computeGrade(toolAScores), scores: toolAScores, affiliateUrl: data.toolA_affiliateUrl || null },
      toolB: { name: data.toolB_name, grade: computeGrade(toolBScores), scores: toolBScores, affiliateUrl: data.toolB_affiliateUrl || null },
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
    comparison,
    content,
  };
}

const postCache: Record<string, Post[]> = {};

export function getPosts(locale: string = 'en'): Post[] {
  if (postCache[locale]) return postCache[locale];
  const blogDir = path.join(process.cwd(), 'content', 'blog', locale);
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  const posts = files.map(f => loadPostFromFile(path.join(blogDir, f)));
  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  postCache[locale] = posts;
  return posts;
}

export function getPostBySlug(slug: string, locale: string = 'en'): Post | undefined {
  return getPosts(locale).find(p => p.slug === slug);
}

// Backward compatibility
export const posts: Post[] = getPosts('en');

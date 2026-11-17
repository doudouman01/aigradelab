import Link from 'next/link';
import GradeBadge from './GradeBadge';
import { Post } from '../content/posts';

export default function ArticleCard({ post, locale = 'en' }: { post: Post; locale?: string }) {
  return (
    <article className="article-card">
      <div className="article-card-top">
        <span className="article-card-category">{post.category}</span>
        <GradeBadge grade={post.grade} size="sm" />
      </div>
      <h2><Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link></h2>
      <p>{post.description}</p>
      <div className="article-card-meta">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </article>
  );
}

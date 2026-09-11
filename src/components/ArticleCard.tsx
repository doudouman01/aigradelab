import Link from 'next/link';
import GradeBadge from './GradeBadge';
import { Post } from '@/content/posts';

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="article-card">
      <div className="article-card-top">
        <span className="article-card-category">{post.category}</span>
        <GradeBadge grade={post.grade} size="sm" />
      </div>
      <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
      <p>{post.description}</p>
      <div className="article-card-meta">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
        {post.lastTested && <span className="last-tested">Tested {post.lastTested}</span>}
      </div>
    </article>
  );
}

import { posts, categories } from '@/content/posts';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Graded AI Tool Reviews',
  description: 'Browse all AI tool reviews with transparent grades from A+ to F. Every tool tested across 5 criteria.',
};

export default function BlogPage() {
  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>All Graded Reviews</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.02rem' }}>
        Every tool tested, scored, and graded. No sponsored rankings.
      </p>

      {posts.length > 0 ? (
        <div className="articles-grid">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem' }}>Reviews are being prepared in the lab.</p>
        </div>
      )}
    </div>
  );
}

import Link from 'next/link';
import { posts } from '../content/posts';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Every AI Tool, <span className="highlight">Tested and Graded</span></h1>
          <p>
            Independent reviews with transparent scores from A+ to F.
            We test every tool so you know which ones are worth your money.
          </p>
          <Link href="/methodology" style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '1rem',
          }}>
            See Our Grading System
          </Link>
        </div>
      </section>

      <section className="container">
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>Latest Graded Reviews</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.95rem' }}>
          Honest grades backed by hands-on testing.
        </p>

        {latestPosts.length > 0 ? (
          <div className="articles-grid">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '12px' }}>First graded reviews coming soon.</p>
            <p>Every tool will be tested across 5 criteria and scored transparently.</p>
          </div>
        )}

        {latestPosts.length > 0 && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Link href="/blog" style={{
              color: 'var(--accent)',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              View all reviews →
            </Link>
          </div>
        )}
      </section>

      <section className="container">
        <div className="newsletter-cta">
          <h3>Get graded reviews in your inbox</h3>
          <p>New AI tool grades every week. No spam, no fluff — just honest scores.</p>
          <a href="#" className="cta-btn">Subscribe Free</a>
        </div>
      </section>
    </>
  );
}

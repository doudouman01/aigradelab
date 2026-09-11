import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';
import GradeBadge from '@/components/GradeBadge';
import ScoreCard from '@/components/ScoreCard';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const gradeText = post.grade ? ` [Grade: ${post.grade}]` : '';
  return {
    title: `${post.title}${gradeText}`,
    description: post.description,
    openGraph: {
      title: `${post.title}${gradeText}`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.lastTested || post.date,
    author: { '@type': 'Organization', name: 'AIGradeLab', url: 'https://aigradelab.com' },
    publisher: { '@type': 'Organization', name: 'AIGradeLab', url: 'https://aigradelab.com' },
    ...(post.grade && post.scores ? {
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: ((post.scores.ux + post.scores.quality + post.scores.value + post.scores.integration + post.scores.support) / 5).toFixed(1),
          bestRating: '10',
          worstRating: '0',
        },
        itemReviewed: { '@type': 'SoftwareApplication', name: post.toolName || post.title },
      },
    } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="article-header">
          <span className="article-card-category">{post.category}</span>
          <h1>{post.title}</h1>

          <div className="article-card-meta" style={{ marginTop: '12px' }}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            {post.lastTested && <span className="last-tested">Tested {post.lastTested}</span>}
          </div>

          {post.grade && (
            <div className="article-verdict">
              <GradeBadge grade={post.grade} size="xl" />
              <div className="article-verdict-text">
                <strong>Our Grade: {post.grade}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Based on hands-on testing across 5 criteria
                </p>
              </div>
            </div>
          )}

          <ScoreCard scores={post.scores} />
        </div>

        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.affiliateUrl && (
          <div style={{ textAlign: 'center', padding: '20px 0 40px', maxWidth: '760px', margin: '0 auto' }}>
            <a href={post.affiliateUrl} target="_blank" rel="noopener sponsored" style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
            }}>
              Try {post.toolName || 'this tool'} →
            </a>
          </div>
        )}

        <div className="tck-promo" style={{ maxWidth: '760px', margin: '0 auto 40px' }}>
          <div className="tck-promo-text">
            <strong>Need free tools?</strong>
            <p>ToolCraftKit has 49+ free web tools for productivity, text, images, and more.</p>
          </div>
          <a href="https://toolcraftkit.com" target="_blank" rel="noopener">Try Free Tools</a>
        </div>

        <div className="newsletter-cta" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h3>Get graded reviews in your inbox</h3>
          <p>New AI tool grades every week. No spam, no fluff — just honest scores.</p>
          <a href="#" className="cta-btn">Subscribe Free</a>
        </div>
      </div>
    </>
  );
}

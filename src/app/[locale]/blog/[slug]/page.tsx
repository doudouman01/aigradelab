import { notFound } from 'next/navigation';
import { getPosts, getPostBySlug } from '../../../../content/posts';
import GradeBadge from '../../../../components/GradeBadge';
import ScoreCard from '../../../../components/ScoreCard';
import ComparisonTable from '../../../../components/ComparisonTable';
import { getTranslations, isValidLocale, defaultLocale, locales } from '../../../../lib/i18n';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getPosts(locale);
    for (const p of posts) {
      params.push({ locale, slug: p.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const post = getPostBySlug(slug, lang);
  if (!post) return {};
  const gradeText = post.grade ? ` [Grade: ${post.grade}]` : '';
  // Noindex thin translated articles (non-EN, under 800 words) to avoid low-value content flag
  const wordCount = post.content.split(/\s+/).length;
  const isThinTranslation = lang !== 'en' && wordCount < 800;
  const base = 'https://aigradelab.com';
  const langAlternates: Record<string, string> = {};
  for (const l of locales) {
    langAlternates[l] = `${base}/${l}/blog/${slug}`;
  }
  return {
    title: `${post.title}${gradeText}`,
    description: post.description,
    alternates: {
      canonical: `${base}/${lang}/blog/${slug}`,
      languages: langAlternates,
    },
    ...(isThinTranslation && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      title: `${post.title}${gradeText}`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.lastTested || post.date,
    inLanguage: lang,
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
            {post.lastTested && <span className="last-tested">{t.article.tested} {post.lastTested}</span>}
          </div>

          {post.grade && (
            <div className="article-verdict">
              <GradeBadge grade={post.grade} size="xl" />
              <div className="article-verdict-text">
                <strong>{t.article.gradeLabel}: {post.grade}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {t.article.gradeSub}
                </p>
              </div>
            </div>
          )}

          <ScoreCard scores={post.scores} locale={lang} />

          {post.comparison && (
            <ComparisonTable toolA={post.comparison.toolA} toolB={post.comparison.toolB} locale={lang} />
          )}
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
              {t.article.tryCta} {post.toolName || 'this tool'} →
            </a>
          </div>
        )}

        <div className="tck-promo" style={{ maxWidth: '760px', margin: '0 auto 40px' }}>
          <div className="tck-promo-text">
            <strong>{t.article.needFree}</strong>
            <p>{t.article.freeDesc}</p>
          </div>
          <a href="https://toolcraftkit.com" target="_blank" rel="noopener">{t.article.freeCta}</a>
        </div>

        <div className="newsletter-cta" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h3>{t.newsletter.title}</h3>
          <p>{t.newsletter.desc}</p>
          <a href="#" className="cta-btn">{t.newsletter.cta}</a>
        </div>
      </div>
    </>
  );
}

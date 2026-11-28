import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tools, getToolBySlug, toolCategories } from '../../../../data/tools';
import { getPosts } from '../../../../content/posts';
import GradeBadge from '../../../../components/GradeBadge';
import ScoreCard from '../../../../components/ScoreCard';
import { getTranslations, isValidLocale, defaultLocale, locales } from '../../../../lib/i18n';
import { getToolI18n } from '../../../../data/tool-i18n';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const t of tools) {
      params.push({ locale, slug: t.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const i18nMeta = getToolI18n(slug, lang);
  const desc = i18nMeta?.d || tool.description;
  const gradeText = tool.grade ? ` [${t.tools.grade}: ${tool.grade}]` : '';
  // Noindex ungraded tools — thin content hurts AdSense approval
  const isGraded = tool.grade !== null && tool.scores !== null;
  const base = 'https://aigradelab.com';
  const langAlternates: Record<string, string> = {};
  for (const l of locales) {
    langAlternates[l] = `${base}/${l}/tools/${slug}`;
  }
  return {
    title: `${tool.name}${gradeText} — AIGradeLab`,
    description: desc,
    alternates: {
      canonical: `${base}/${lang}/tools/${slug}`,
      languages: langAlternates,
    },
    ...(!isGraded && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      title: `${tool.name}${gradeText}`,
      description: tool.description,
      type: 'website',
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const catLabel = t.tools.categories[tool.category] || tool.category;
  const i18n = getToolI18n(tool.slug, lang);
  const description = i18n?.d || tool.description;
  const highlight = i18n?.h || tool.highlight;
  const allPosts = getPosts(lang);
  const related = allPosts.filter(p =>
    (p.toolName && tool.name.toLowerCase().includes(p.toolName.toLowerCase())) ||
    (p.toolName && p.toolName.toLowerCase().includes(tool.name.toLowerCase())) ||
    (tool.reviewSlug && p.slug === tool.reviewSlug)
  ).slice(0, 5);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.website,
    applicationCategory: catLabel,
    ...(tool.grade && tool.scores ? {
      review: {
        '@type': 'Review',
        author: { '@type': 'Organization', name: 'AIGradeLab', url: 'https://aigradelab.com' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: ((tool.scores.ux + tool.scores.quality + tool.scores.value + tool.scores.integration + tool.scores.support) / 5).toFixed(1),
          bestRating: '10',
          worstRating: '0',
        },
      },
    } : {}),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: tool.pricing },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container tool-page">
        <div style={{ marginBottom: '16px' }}>
          <Link href={`/${lang}/tools`} className="tool-back-link">{t.tools.backToTools}</Link>
        </div>

        <div className="tool-header">
          <div className="tool-header-info">
            <span className="tool-category-badge">{catLabel}</span>
            <h1>{tool.name}</h1>
            <p className="tool-description">{description}</p>
            <p className="tool-highlight"><strong>{t.tools.highlight}:</strong> {highlight}</p>
          </div>

          <div className="tool-header-grade">
            {tool.grade ? (
              <GradeBadge grade={tool.grade} size="xl" />
            ) : (
              <div className="tool-not-graded-badge">{t.tools.notGradedYet}</div>
            )}
          </div>
        </div>

        <div className="tool-details-grid">
          <div className="tool-detail-card">
            <span className="tool-detail-label">{t.tools.grade}</span>
            <span className="tool-detail-value">{tool.grade || t.tools.notGradedYet}</span>
          </div>
          <div className="tool-detail-card">
            <span className="tool-detail-label">{t.tools.pricing}</span>
            <span className="tool-detail-value">{tool.pricing}</span>
          </div>
          <div className="tool-detail-card">
            <span className="tool-detail-label">{t.tools.category}</span>
            <span className="tool-detail-value">{catLabel}</span>
          </div>
        </div>

        {tool.scores ? (
          <div className="tool-scores-section">
            <h2>{t.tools.scores}</h2>
            <ScoreCard scores={tool.scores} locale={lang} />
          </div>
        ) : (
          <div className="tool-not-graded-section">
            <h2>{t.tools.notGradedYet}</h2>
            <p>{t.tools.notGradedDesc}</p>
          </div>
        )}

        <div className="tool-cta-row">
          <a href={tool.affiliateUrl || tool.website} target="_blank" rel={tool.affiliateUrl ? 'noopener sponsored' : 'noopener'} className="tool-cta-primary">
            {t.tools.visitSite} →
          </a>
          {tool.reviewSlug && (
            <Link href={`/${lang}/blog/${tool.reviewSlug}`} className="tool-cta-secondary">
              {t.tools.readReview} →
            </Link>
          )}
        </div>

        {related.length > 0 && (
          <div className="tool-related">
            <h2>{t.tools.relatedArticles}</h2>
            <div className="tool-related-grid">
              {related.map(post => (
                <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="tool-related-card">
                  <span className="tool-related-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  {post.grade && <span className="tool-related-grade">{post.grade}</span>}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import { getPosts } from '../../../content/posts';
import ArticleCard from '../../../components/ArticleCard';
import { getTranslations, isValidLocale, defaultLocale } from '../../../lib/i18n';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  return { title: t.blog.metaTitle, description: t.blog.metaDesc };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const allPosts = getPosts(lang);
  // Fallback to EN if locale has no posts yet
  const displayPosts = allPosts.length > 0 ? allPosts : getPosts('en');

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>{t.blog.title}</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.02rem' }}>
        {t.blog.subtitle}
      </p>

      {displayPosts.length > 0 ? (
        <div className="articles-grid">
          {displayPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} locale={lang} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem' }}>{t.blog.empty}</p>
        </div>
      )}
    </div>
  );
}

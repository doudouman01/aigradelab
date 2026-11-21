import { Metadata } from 'next';
import { getPosts, categories } from '../../../../content/posts';
import ArticleCard from '../../../../components/ArticleCard';
import { locales, isValidLocale, defaultLocale, getTranslations } from '../../../../lib/i18n';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const cat of categories) {
      params.push({ locale, slug: cat.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  const catName = cat?.name || slug;
  return {
    title: `${catName} | AIGradeLab`,
    description: `Browse all ${catName} on AIGradeLab — independent AI tool reviews with transparent grades from A+ to F.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const cat = categories.find(c => c.slug === slug);
  const catName = cat?.name || slug;

  const allPosts = getPosts(lang);
  const posts = allPosts.filter(p => p.categorySlug === slug);
  const displayPosts = posts.length > 0 ? posts : getPosts('en').filter(p => p.categorySlug === slug);

  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '60px' }}>
      <div className="section-label">{t.reviews.label}</div>
      <h1 className="section-title" style={{ marginBottom: '12px' }}>{catName}</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.05rem' }}>
        {displayPosts.length} {displayPosts.length === 1 ? 'review' : 'reviews'}
      </p>
      {displayPosts.length > 0 ? (
        <div className="articles-grid">
          {displayPosts.map(post => (
            <ArticleCard key={post.slug} post={post} locale={lang} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">&#128300;</div>
          <p className="empty-title">{t.blog.empty}</p>
        </div>
      )}
    </div>
  );
}

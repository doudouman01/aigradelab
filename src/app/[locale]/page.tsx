import Link from 'next/link';
import { getPosts } from '../../content/posts';
import ArticleCard from '../../components/ArticleCard';
import { getTranslations, isValidLocale, defaultLocale } from '../../lib/i18n';

const gradeShowcase = [
  { grade: 'A+', color: '#10B981' },
  { grade: 'A', color: '#34D399' },
  { grade: 'B+', color: '#60A5FA' },
  { grade: 'B', color: '#93C5FD' },
  { grade: 'C', color: '#FBBF24' },
  { grade: 'F', color: '#EF4444' },
];

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const latestPosts = getPosts(lang).slice(0, 6);
  // Fallback to EN posts if locale has none yet
  const displayPosts = latestPosts.length > 0 ? latestPosts : getPosts('en').slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="hero-pill">{t.hero.pill}</div>
            <h1>{t.hero.title}<br/><span className="highlight">{t.hero.titleHighlight}</span></h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-actions">
              <Link href={`/${lang}/methodology`} className="btn-primary">{t.hero.cta1}</Link>
              <Link href={`/${lang}/blog`} className="btn-secondary">{t.hero.cta2}</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hero-card-dot" />
                <span className="hero-card-dot" />
                <span className="hero-card-dot" />
              </div>
              <div className="hero-grade-display">
                <span className="hero-grade-letter">A+</span>
              </div>
              <div className="hero-card-bars">
                <div className="hero-bar"><span className="hero-bar-label">UX</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'92%'}} /></div><span className="hero-bar-val">9.2</span></div>
                <div className="hero-bar"><span className="hero-bar-label">{t.scoreLabels.quality}</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'88%'}} /></div><span className="hero-bar-val">8.8</span></div>
                <div className="hero-bar"><span className="hero-bar-label">{t.scoreLabels.value}</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'85%'}} /></div><span className="hero-bar-val">8.5</span></div>
                <div className="hero-bar"><span className="hero-bar-label">{t.scoreLabels.integration}</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'90%'}} /></div><span className="hero-bar-val">9.0</span></div>
                <div className="hero-bar"><span className="hero-bar-label">{t.scoreLabels.support}</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'82%'}} /></div><span className="hero-bar-val">8.2</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-how">
        <div className="section-label">{t.how.label}</div>
        <h2 className="section-title">{t.how.title}</h2>
        <div className="steps-grid">
          {t.how.steps.map((s) => (
            <div key={s.num} className="step-card">
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-criteria">
        <div className="section-label">{t.criteria.label}</div>
        <h2 className="section-title">{t.criteria.title}</h2>
        <div className="criteria-grid">
          {t.criteria.items.map((c) => (
            <div key={c.name} className="criteria-item">
              <span className="criteria-icon">{c.icon}</span>
              <div>
                <strong>{c.name}</strong>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-grades">
        <div className="section-label">{t.grades.label}</div>
        <h2 className="section-title">{t.grades.title}</h2>
        <div className="grade-strip">
          {gradeShowcase.map((g) => (
            <div key={g.grade} className="grade-chip" style={{ '--chip-color': g.color } as React.CSSProperties}>
              <span className="grade-chip-letter">{g.grade}</span>
            </div>
          ))}
        </div>
        <p className="grade-strip-sub">{t.grades.sub} <Link href={`/${lang}/methodology`}>{t.nav.methodology} &rarr;</Link></p>
      </section>

      <section className="container section-reviews">
        <div className="section-label">{t.reviews.label}</div>
        <h2 className="section-title">{t.reviews.title}</h2>
        {displayPosts.length > 0 ? (
          <div className="articles-grid">
            {displayPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} locale={lang} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">&#128300;</div>
            <p className="empty-title">{t.blog.empty}</p>
          </div>
        )}
      </section>

      <section className="container">
        <div className="newsletter-cta">
          <div className="newsletter-badge">{t.newsletter.badge}</div>
          <h3>{t.newsletter.title}</h3>
          <p>{t.newsletter.desc}</p>
          <a href="#" className="cta-btn">{t.newsletter.cta} &rarr;</a>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '60px' }}>
        <div className="tck-promo">
          <div className="tck-promo-text">
            <strong>{t.tck.title}</strong>
            <p>{t.tck.desc}</p>
          </div>
          <a href="https://toolcraftkit.com" target="_blank" rel="noopener">{t.tck.cta} &rarr;</a>
        </div>
      </section>
    </>
  );
}

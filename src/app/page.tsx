import Link from 'next/link';
import { posts } from '../content/posts';
import ArticleCard from '../components/ArticleCard';

const gradeShowcase = [
  { grade: 'A+', color: '#10B981' },
  { grade: 'A', color: '#34D399' },
  { grade: 'B+', color: '#60A5FA' },
  { grade: 'B', color: '#93C5FD' },
  { grade: 'C', color: '#FBBF24' },
  { grade: 'F', color: '#EF4444' },
];

const steps = [
  { num: '01', title: 'We sign up', desc: 'Real account, real money. No press kits or demo modes.' },
  { num: '02', title: 'We test', desc: 'Hands-on testing across 5 criteria with original screenshots.' },
  { num: '03', title: 'We grade', desc: 'Transparent scores from A+ to F. No paid placements.' },
];

const criteria = [
  { icon: '\u26A1', name: 'Ease of Use', desc: 'Interface & onboarding' },
  { icon: '\u2726', name: 'Output Quality', desc: 'Results vs promises' },
  { icon: '\uD83D\uDCB0', name: 'Value for Money', desc: 'Price vs what you get' },
  { icon: '\uD83D\uDD17', name: 'Integration', desc: 'API & workflow fit' },
  { icon: '\uD83D\uDEDF', name: 'Support', desc: 'Docs & responsiveness' },
];

export default function Home() {
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="hero-pill">Independent AI tool reviews</div>
            <h1>Every AI Tool,<br/><span className="highlight">Tested and Graded</span></h1>
            <p>
              We test AI tools with real accounts, score them across 5 criteria,
              and give each one a transparent grade from A+ to F.
            </p>
            <div className="hero-actions">
              <Link href="/methodology" className="btn-primary">See Our Grading System</Link>
              <Link href="/blog" className="btn-secondary">Browse Reviews</Link>
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
                <div className="hero-bar"><span className="hero-bar-label">Quality</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'88%'}} /></div><span className="hero-bar-val">8.8</span></div>
                <div className="hero-bar"><span className="hero-bar-label">Value</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'85%'}} /></div><span className="hero-bar-val">8.5</span></div>
                <div className="hero-bar"><span className="hero-bar-label">Integr.</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'90%'}} /></div><span className="hero-bar-val">9.0</span></div>
                <div className="hero-bar"><span className="hero-bar-label">Support</span><div className="hero-bar-track"><div className="hero-bar-fill" style={{width:'82%'}} /></div><span className="hero-bar-val">8.2</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-how">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Three steps. Zero bias.</h2>
        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.num} className="step-card">
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-criteria">
        <div className="section-label">Our methodology</div>
        <h2 className="section-title">Scored on 5 criteria</h2>
        <div className="criteria-grid">
          {criteria.map((c) => (
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
        <div className="section-label">The scale</div>
        <h2 className="section-title">From A+ to F — no gray areas</h2>
        <div className="grade-strip">
          {gradeShowcase.map((g) => (
            <div key={g.grade} className="grade-chip" style={{ '--chip-color': g.color } as React.CSSProperties}>
              <span className="grade-chip-letter">{g.grade}</span>
            </div>
          ))}
        </div>
        <p className="grade-strip-sub">Every tool earns its grade. <Link href="/methodology">See the full methodology &rarr;</Link></p>
      </section>

      <section className="container section-reviews">
        <div className="section-label">Reviews</div>
        <h2 className="section-title">Latest graded reviews</h2>
        {latestPosts.length > 0 ? (
          <div className="articles-grid">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">&#128300;</div>
            <p className="empty-title">Tools are in the lab right now</p>
            <p className="empty-sub">First graded reviews drop soon. Every tool will be tested across 5 criteria and scored transparently.</p>
          </div>
        )}
      </section>

      <section className="container">
        <div className="newsletter-cta">
          <div className="newsletter-badge">Free</div>
          <h3>Get graded reviews in your inbox</h3>
          <p>New AI tool grades every week. No spam, no fluff — just honest scores.</p>
          <a href="#" className="cta-btn">Subscribe Free &rarr;</a>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '60px' }}>
        <div className="tck-promo">
          <div className="tck-promo-text">
            <strong>Need free tools right now?</strong>
            <p>ToolCraftKit has 49+ free web tools for productivity, text, images, and more.</p>
          </div>
          <a href="https://toolcraftkit.com" target="_blank" rel="noopener">Try Free Tools &rarr;</a>
        </div>
      </section>
    </>
  );
}

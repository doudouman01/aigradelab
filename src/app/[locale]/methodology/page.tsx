import type { Metadata } from 'next';
import GradeBadge from '../../../components/GradeBadge';
import type { Grade } from '../../../content/posts';
import { getTranslations, isValidLocale, defaultLocale } from '../../../lib/i18n';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(isValidLocale(locale) ? locale : defaultLocale);
  return { title: t.methodology.metaTitle, description: t.methodology.metaDesc };
}

export default async function MethodologyPage({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);

  return (
    <div className="container">
      <div className="methodology">
        <h1>{t.methodology.title}</h1>
        <p>{t.methodology.intro1}</p>
        <p>{t.methodology.intro2}</p>

        <h2>{t.methodology.scaleTitle}</h2>
        <p>{t.methodology.scaleSub}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {t.methodology.gradeLabels.map(({ grade, label, range }) => (
            <div key={grade} style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '14px 18px',
            }}>
              <GradeBadge grade={grade as Grade} size="md" />
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '0.95rem' }}>{label}</strong>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {range} / 10
              </span>
            </div>
          ))}
        </div>

        <h2>{t.methodology.criteriaTitle}</h2>
        <p>{t.methodology.criteriaSub}</p>

        {t.methodology.criteriaItems.map(({ name, desc }, i) => (
          <div key={name} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '20px 22px', margin: '16px 0',
          }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
              {i + 1}. {name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
          </div>
        ))}

        <h2>{t.methodology.processTitle}</h2>
        <p>{t.methodology.process1}</p>
        <p>{t.methodology.process2}</p>
        <p>{t.methodology.process3}</p>
      </div>
    </div>
  );
}

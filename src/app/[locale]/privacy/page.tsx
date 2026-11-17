import type { Metadata } from 'next';
import { getTranslations, isValidLocale, defaultLocale } from '../../../lib/i18n';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(isValidLocale(locale) ? locale : defaultLocale);
  return { title: t.privacy.metaTitle };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);

  return (
    <div className="container">
      <div className="methodology">
        <h1>{t.privacy.title}</h1>
        <p><em>{t.privacy.updated}</em></p>
        <p>{t.privacy.intro}</p>
        {t.privacy.sections.map((s) => (
          <div key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

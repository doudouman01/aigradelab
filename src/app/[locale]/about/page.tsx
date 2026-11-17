import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, isValidLocale, defaultLocale } from '../../../lib/i18n';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(isValidLocale(locale) ? locale : defaultLocale);
  return { title: t.about.metaTitle, description: t.about.metaDesc };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);

  return (
    <div className="container">
      <div className="methodology">
        <h1>{t.about.title}</h1>
        <p>{t.about.intro1}</p>
        <p>{t.about.intro2}</p>

        <h2>{t.about.diffTitle}</h2>
        <p>{t.about.diff1} <Link href={`/${lang}/methodology`}>{t.nav.methodology}</Link></p>
        <p>{t.about.diff2}</p>

        <h2>{t.about.moneyTitle}</h2>
        <p>{t.about.moneyDesc}</p>

        <h2>{t.about.ecoTitle}</h2>
        <p>{t.about.ecoDesc}</p>

        <p>{t.about.contact} <strong>hello@aigradelab.com</strong></p>
      </div>
    </div>
  );
}

import { getTranslations, isValidLocale, defaultLocale, locales } from '../../../../lib/i18n';
import type { Metadata } from 'next';
import ToolFinderQuiz from '../../../../components/ToolFinderQuiz';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  return {
    title: t.finder.metaTitle,
    description: t.finder.metaDesc,
  };
}

export default async function FinderPage({ params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  return <ToolFinderQuiz locale={lang} />;
}

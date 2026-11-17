import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { locales, defaultLocale, rtlLocales, getTranslations, isValidLocale } from '../../lib/i18n';
import type { Locale } from '../../lib/i18n';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);
  const base = 'https://aigradelab.com';
  const alternates: Record<string, string> = {};
  for (const l of locales) {
    alternates[l] = `${base}/${l}`;
  }
  return {
    title: { default: 'AIGradeLab — ' + t.hero.titleHighlight, template: '%s | AIGradeLab' },
    description: t.hero.subtitle,
    metadataBase: new URL(base),
    alternates: { languages: alternates },
    openGraph: {
      type: 'website',
      locale: lang === 'en' ? 'en_US' : lang,
      siteName: 'AIGradeLab',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const isRtl = rtlLocales.includes(lang as Locale);
  const t = getTranslations(lang);

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <head>
        <meta name="impact-site-verification" content="f9e39c37-3689-4d98-8be8-1f93e289a062" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225007611886114"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`https://aigradelab.com/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://aigradelab.com/en" />
      </head>
      <body>
        <GoogleAnalytics />
        <header className="site-header">
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href={`/${lang}`} className="logo">
              <span className="logo-mark">A+</span>
              AIGradeLab
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <nav className="nav-links">
                <Link href={`/${lang}/blog`}>{t.nav.reviews}</Link>
                <Link href={`/${lang}/methodology`}>{t.nav.methodology}</Link>
                <Link href={`/${lang}/about`}>{t.nav.about}</Link>
              </nav>
              <LanguageSwitcher currentLocale={lang} />
            </div>
          </div>
        </header>

        <main>{children}</main>
        <Analytics />

        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <p>&copy; {new Date().getFullYear()} AIGradeLab. {t.footer.copy}</p>
              <div className="footer-links">
                <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
                <Link href={`/${lang}/terms`}>{t.footer.terms}</Link>
                <Link href={`/${lang}/methodology`}>{t.footer.methodology}</Link>
                <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

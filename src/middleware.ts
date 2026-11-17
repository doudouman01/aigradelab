import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'pt', 'nl', 'it', 'ar'];
const defaultLocale = 'en';

function getPreferredLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language');
  if (!acceptLang) return defaultLocale;
  const preferred = acceptLang
    .split(',')
    .map((part) => {
      const [lang, q] = part.trim().split(';q=');
      return { lang: lang.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { lang } of preferred) {
    if (locales.includes(lang)) return lang;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API, _next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like .css, .js, .ico, .xml
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0])) {
    return NextResponse.next();
  }

  // Backward compat: /blog/* → /en/blog/*
  if (pathname.startsWith('/blog')) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  // Backward compat: /methodology, /about, /privacy, /terms → /en/...
  const staticPages = ['/methodology', '/about', '/privacy', '/terms'];
  for (const page of staticPages) {
    if (pathname === page) {
      const url = request.nextUrl.clone();
      url.pathname = `/en${pathname}`;
      return NextResponse.redirect(url, 308);
    }
  }

  // Root → detect locale and redirect
  if (pathname === '/') {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|sitemap.xml|robots.txt).*)'],
};

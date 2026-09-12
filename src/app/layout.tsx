import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: { default: 'AIGradeLab — Every AI Tool, Tested and Graded', template: '%s | AIGradeLab' },
  description: 'Independent AI tool reviews with transparent grades from A+ to F. We test every tool so you know which ones are worth your money.',
  metadataBase: new URL('https://aigradelab.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AIGradeLab',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="impact-site-verification" content="f9e39c37-3689-4d98-8be8-1f93e289a062" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225007611886114"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              <span className="logo-mark">A+</span>
              AIGradeLab
            </Link>
            <nav className="nav-links">
              <Link href="/blog">Reviews</Link>
              <Link href="/methodology">Our Grades</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
        <Analytics />

        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <p>&copy; {new Date().getFullYear()} AIGradeLab. Every AI tool, tested and graded.</p>
              <div className="footer-links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/methodology">Methodology</Link>
                <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

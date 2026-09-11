import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About AIGradeLab',
  description: 'Independent AI tool reviews with transparent grades. Learn about our mission and methodology.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <div className="methodology">
        <h1>About AIGradeLab</h1>
        <p>
          AIGradeLab is an independent review site dedicated to one mission: helping you
          pick the right AI tools without wasting time or money on the wrong ones.
        </p>
        <p>
          The AI tools market is exploding. Thousands of tools compete for your attention
          with polished landing pages and bold promises. But which ones actually deliver?
          That's where we come in.
        </p>

        <h2>What Makes Us Different</h2>
        <p>
          Every tool on AIGradeLab goes through the same hands-on testing process and
          receives a transparent grade from A+ to F across five clear criteria. No tool
          pays for a better score. Our <Link href="/methodology">grading methodology</Link> is
          public so you can see exactly how we arrive at every verdict.
        </p>
        <p>
          We don't publish hundreds of thin articles chasing SEO keywords. We publish fewer,
          deeper reviews with real tests, original screenshots, and honest opinions — including
          the things that don't work.
        </p>

        <h2>How We Make Money</h2>
        <p>
          AIGradeLab is supported by display advertising and affiliate links to the tools
          we review. When you click an affiliate link and sign up, we may earn a commission
          at no extra cost to you. This never affects our grades — tools are scored before
          any monetization is considered. Many tools we review don't even have affiliate
          programs.
        </p>

        <h2>Part of a Bigger Ecosystem</h2>
        <p>
          AIGradeLab works alongside <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit</a>,
          a collection of 49+ free web tools for productivity, text processing, and more.
          When a free alternative exists for a paid AI tool, we'll point you to it.
        </p>

        <p>
          Questions, feedback, or partnership inquiries: <strong>hello@aigradelab.com</strong>
        </p>
      </div>
    </div>
  );
}

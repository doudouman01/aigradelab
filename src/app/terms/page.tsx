import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <div className="container">
      <div className="methodology">
        <h1>Terms of Service</h1>
        <p><em>Last updated: September 2026</em></p>
        <p>By accessing aigradelab.com, you agree to the following terms.</p>

        <h2>Content</h2>
        <p>All reviews, grades, and opinions on AIGradeLab represent our independent assessment based on hands-on testing. Grades are subjective and may change over time as tools evolve. We strive for accuracy but make no warranty that all information is complete or up-to-date.</p>

        <h2>Affiliate Disclosure</h2>
        <p>AIGradeLab participates in affiliate programs. Some links on this site are affiliate links, meaning we may earn a commission if you make a purchase through them. This does not affect the price you pay or our editorial independence.</p>

        <h2>Intellectual Property</h2>
        <p>All content, grades, methodology, and design on AIGradeLab are owned by AIGradeLab. You may not reproduce, distribute, or republish our content without written permission. Tool names, logos, and trademarks belong to their respective owners.</p>

        <h2>Limitation of Liability</h2>
        <p>AIGradeLab provides information for general guidance. We are not liable for any decisions made based on our reviews. Always evaluate tools based on your own specific needs.</p>

        <h2>Contact</h2>
        <p>Questions about these terms: <strong>hello@aigradelab.com</strong></p>
      </div>
    </div>
  );
}

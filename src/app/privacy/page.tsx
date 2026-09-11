import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="methodology">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: September 2026</em></p>
        <p>AIGradeLab ("we", "us") respects your privacy. This policy explains how we collect, use, and protect your information when you visit aigradelab.com.</p>

        <h2>Information We Collect</h2>
        <p>We collect standard analytics data through cookies and third-party services (Google Analytics, Google AdSense) including pages visited, time spent, device type, and approximate location. We do not collect personally identifiable information unless you voluntarily submit it (e.g., newsletter signup).</p>

        <h2>Advertising</h2>
        <p>We use Google AdSense to display ads. Google may use cookies to serve ads based on your browsing history. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>.</p>

        <h2>Affiliate Links</h2>
        <p>Some articles contain affiliate links. When you click these links and make a purchase, we may earn a commission at no extra cost to you. Affiliate relationships never affect our grades or editorial content.</p>

        <h2>Newsletter</h2>
        <p>If you subscribe to our newsletter, we collect your email address. You can unsubscribe at any time using the link in every email. We never sell or share your email with third parties.</p>

        <h2>Contact</h2>
        <p>For privacy questions: <strong>hello@aigradelab.com</strong></p>
      </div>
    </div>
  );
}

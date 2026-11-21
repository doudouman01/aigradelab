import Link from 'next/link';

type FooterTranslations = {
  copy: string;
  privacy: string;
  terms: string;
  methodology: string;
};

type NavTranslations = {
  reviews: string;
  methodology: string;
  about: string;
};

type Props = {
  locale: string;
  footer: FooterTranslations;
  nav: NavTranslations;
};

const categories = [
  { name: 'Graded Reviews', slug: 'graded-reviews' },
  { name: 'Head-to-Head', slug: 'head-to-head' },
  { name: 'Best Picks', slug: 'best-picks' },
  { name: 'Lab Notes', slug: 'lab-notes' },
  { name: 'Workflow Guides', slug: 'workflow-guides' },
];

export default function RichFooter({ locale, footer, nav }: Props) {
  return (
    <footer className="rich-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link href={`/${locale}`} className="footer-logo">
              <span className="logo-mark">A+</span>
              AIGradeLab
            </Link>
            <p className="footer-tagline">{footer.copy}</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-list">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/${locale}/category/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Site</h4>
            <ul className="footer-list">
              <li><Link href={`/${locale}/blog`}>{nav.reviews}</Link></li>
              <li><Link href={`/${locale}/methodology`}>{nav.methodology}</Link></li>
              <li><Link href={`/${locale}/about`}>{nav.about}</Link></li>
              <li><Link href={`/${locale}/submit`}>Submit Tool</Link></li>
              <li><Link href={`/${locale}/privacy`}>{footer.privacy}</Link></li>
              <li><Link href={`/${locale}/terms`}>{footer.terms}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Our Sites</h4>
            <ul className="footer-list">
              <li><a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit</a></li>
              <li><a href="https://solutionsdirectespro.com" target="_blank" rel="noopener">SolutionsDirectesPro</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AIGradeLab. {footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}

import { MetadataRoute } from 'next';
import { getPosts } from '../content/posts';

const locales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'pt', 'nl', 'it', 'ar'];
const base = 'https://aigradelab.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages per locale
  const staticPages = ['', '/blog', '/methodology', '/about', '/privacy', '/terms'];
  for (const locale of locales) {
    for (const page of staticPages) {
      const priority = page === '' ? 1 : page === '/blog' ? 0.9 : page === '/methodology' ? 0.8 : 0.5;
      const changeFrequency = page === '' || page === '/blog' ? 'weekly' as const : 'monthly' as const;
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  // Blog posts per locale
  for (const locale of locales) {
    const posts = getPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${base}/${locale}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}

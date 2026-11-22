import { MetadataRoute } from 'next';
import { getPosts, categories } from '../content/posts';
import { tools } from '../data/tools';

const locales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'pt', 'nl', 'it', 'ar'];
const base = 'https://aigradelab.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages per locale
  const staticPages = ['', '/blog', '/methodology', '/about', '/privacy', '/terms', '/submit', '/tools', '/tools/finder'];
  for (const locale of locales) {
    for (const page of staticPages) {
      const priority = page === '' ? 1 : page === '/blog' || page === '/tools' ? 0.9 : page === '/tools/finder' ? 0.85 : page === '/methodology' ? 0.8 : 0.5;
      const changeFrequency = page === '' || page === '/blog' || page === '/tools' ? 'weekly' as const : 'monthly' as const;
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  // Category pages per locale
  for (const locale of locales) {
    for (const cat of categories) {
      entries.push({
        url: `${base}/${locale}/category/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  // Tool pages per locale
  for (const locale of locales) {
    for (const tool of tools) {
      entries.push({
        url: `${base}/${locale}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: tool.grade ? 0.8 : 0.6,
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

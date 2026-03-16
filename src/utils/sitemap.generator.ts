/**
 * Generates sitemap.xml for SEO
 * Helps search engines discover all portfolio pages
 */

import { PortfolioData } from '../types/portfolio';

export interface SitemapOptions {
  siteUrl: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (_data: PortfolioData, options: SitemapOptions): string => {
  const { siteUrl } = options;

  const urls = [
    {
      loc: siteUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${siteUrl}#about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: `${siteUrl}#projects`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${siteUrl}#experience`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${siteUrl}#skills`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${siteUrl}#education`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.6,
    },
    {
      loc: `${siteUrl}#certifications`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  const urlset = urls
    .map(
      url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
};

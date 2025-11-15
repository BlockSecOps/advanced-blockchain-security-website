import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advancedblockchainsecurity.com'

  // Static routes
  const routes = [
    '',
    '/consulting',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add wiki routes dynamically
  // You can fetch these from your CMS/database if needed
  const wikiRoutes = [
    '/wiki/access-control',
    '/wiki/flash-loan-attack',
    '/wiki/front-running-mev',
    '/wiki/reentrancy',
    '/wiki/integer-overflow',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...wikiRoutes]
}

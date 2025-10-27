import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, Badge } from '@/components/ui'
import { WikiSearch } from '@/components/WikiSearch'
import { BookOpen, Clock } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

// Revalidate every 60 seconds - allows updates without full rebuild
export const revalidate = 60

async function getWikiArticles() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'wiki',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: '-updatedAt',
      limit: 100,
    })

    return result.docs
  } catch (error) {
    console.error('Error fetching wiki articles:', error)
    return []
  }
}

const categories = [
  'All Articles',
  'Fundamentals',
  'Smart Contract Security',
  'Development Lifecycle',
  'Testing and Analysis',
  'Auditing',
  'DeFi Security',
  'Infrastructure Security',
  'Operations and Response',
  'Tools and Resources',
  'Standards and Compliance',
]

const difficultyColors: Record<string, string> = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'error',
  expert: 'default',
}

export default async function WikiIndex({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: selectedCategory } = await searchParams
  const wikiArticles = await getWikiArticles()

  // Filter articles by category if selected
  const filteredArticles = selectedCategory && selectedCategory !== 'All Articles'
    ? wikiArticles.filter((article: any) => {
        const categoryValue = categories.find(cat => cat === selectedCategory)?.toLowerCase().replace(/\s+/g, '-')
        return article.category === categoryValue || article.category === selectedCategory
      })
    : wikiArticles

  return (
    <main className="min-h-screen bg-dark-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Security <span className="text-primary-400">Wiki</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Your comprehensive resource for blockchain security knowledge, best practices, and vulnerability analysis.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WikiSearch />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => {
                    const isActive = !selectedCategory
                      ? category === 'All Articles'
                      : category === selectedCategory

                    return (
                      <li key={category}>
                        <Link
                          href={category === 'All Articles' ? '/wiki' : `/wiki?category=${encodeURIComponent(category)}`}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-primary-500/20 text-primary-400 font-medium'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {category}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Category Header */}
              {selectedCategory && selectedCategory !== 'All Articles' && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold font-display">
                    {selectedCategory}
                  </h2>
                  <p className="text-white/60 mt-2">
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
                  </p>
                </div>
              )}

              {filteredArticles.length === 0 ? (
                <Card className="text-center py-12">
                  <p className="text-white/70 mb-4">
                    {selectedCategory && selectedCategory !== 'All Articles'
                      ? `No articles found in "${selectedCategory}".`
                      : 'No articles published yet.'}
                  </p>
                  <p className="text-white/50 text-sm">
                    Check back soon for security articles and guides.
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {filteredArticles.map((article: any) => (
                    <Link key={article.slug} href={`/wiki/${article.slug}`}>
                      <Card className="hover:shadow-glow transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              {article.difficulty && (
                                <Badge variant={difficultyColors[article.difficulty] as any}>
                                  {article.difficulty}
                                </Badge>
                              )}
                              {article.category && (
                                <span className="text-sm text-white/50">{article.category}</span>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary-400 transition-colors">
                              {article.title}
                            </h3>
                            {article.excerpt && (
                              <p className="text-white/60 mb-4">{article.excerpt}</p>
                            )}
                            {article.readTime && (
                              <div className="flex items-center text-sm text-white/50">
                                <Clock className="w-4 h-4 mr-1" />
                                {article.readTime} min read
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui'
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Revalidate every 60 seconds - allows updates without full rebuild
export const revalidate = 60

const getArticle = async (slug: string) => {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'wiki',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    if (result.docs.length === 0) {
      return null
    }

    return result.docs[0]
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Advanced Blockchain Security Wiki`,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      type: 'article',
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: article.author ? [article.author] : undefined,
      tags: article.tags?.map((t: any) => t.tag).filter(Boolean) || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.title,
    },
  }
}

export default async function WikiArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const difficultyColors: Record<string, string> = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'error',
    expert: 'default',
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <Navigation />

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/wiki"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Wiki
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {article.difficulty && (
                <Badge variant={difficultyColors[article.difficulty] as any}>
                  {article.difficulty}
                </Badge>
              )}
              {article.category && (
                <span className="text-white/50">{article.category}</span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              {article.author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                </div>
              )}
              {article.updatedAt && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime} min read
                </div>
              )}
            </div>
          </header>

          {/* Article Content */}
          {article.content && (
            <div
              className="prose prose-invert prose-primary max-w-none
                         prose-headings:font-display prose-headings:font-bold
                         prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                         prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                         prose-p:text-white/70 prose-p:leading-relaxed
                         prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
                         prose-code:text-primary-300 prose-code:bg-dark-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                         prose-pre:bg-dark-800 prose-pre:border prose-pre:border-white/10
                         prose-strong:text-white prose-strong:font-semibold
                         prose-ul:text-white/70 prose-ol:text-white/70
                         prose-li:text-white/70"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          )}

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link
                href="/wiki"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Wiki
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  )
}

// Generate static params for published articles
export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'wiki',
      where: {
        status: {
          equals: 'published',
        },
      },
      limit: 1000,
    })

    return result.docs.map((doc: any) => ({
      slug: doc.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

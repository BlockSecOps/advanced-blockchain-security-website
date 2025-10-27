import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')

    if (!query || query.trim() === '') {
      return NextResponse.json({ results: [] })
    }

    const payload = await getPayload({ config })

    // Get all published articles
    const result = await payload.find({
      collection: 'wiki',
      where: {
        status: {
          equals: 'published',
        },
      },
      limit: 1000,
    })

    // Perform full-text search on client side
    const searchTerm = query.toLowerCase().trim()

    const searchResults = result.docs.filter((article: any) => {
      // Search in title
      if (article.title?.toLowerCase().includes(searchTerm)) return true

      // Search in excerpt
      if (article.excerpt?.toLowerCase().includes(searchTerm)) return true

      // Search in content (full-text)
      if (article.content?.toLowerCase().includes(searchTerm)) return true

      // Search in category
      if (article.category?.toLowerCase().includes(searchTerm)) return true

      // Search in subcategory
      if (article.subcategory?.toLowerCase().includes(searchTerm)) return true

      // Search in tags
      if (article.tags?.some((tag: any) =>
        tag.tag?.toLowerCase().includes(searchTerm)
      )) return true

      return false
    })

    // Sort by relevance (title matches first, then excerpt, then content)
    const sortedResults = searchResults.sort((a: any, b: any) => {
      const aTitle = a.title?.toLowerCase().includes(searchTerm) ? 1 : 0
      const bTitle = b.title?.toLowerCase().includes(searchTerm) ? 1 : 0
      if (aTitle !== bTitle) return bTitle - aTitle

      const aExcerpt = a.excerpt?.toLowerCase().includes(searchTerm) ? 1 : 0
      const bExcerpt = b.excerpt?.toLowerCase().includes(searchTerm) ? 1 : 0
      return bExcerpt - aExcerpt
    })

    // Return limited results with relevant fields
    const limitedResults = sortedResults.slice(0, 50).map((article: any) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      category: article.category,
      subcategory: article.subcategory,
      difficulty: article.difficulty,
      readTime: article.readTime,
      updatedAt: article.updatedAt,
    }))

    return NextResponse.json({ results: limitedResults })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Search failed', results: [] }, { status: 500 })
  }
}

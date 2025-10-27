'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { Search, X, Clock } from 'lucide-react'
import { Card, Badge } from './ui'

interface SearchResult {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  subcategory: string
  difficulty: string
  readTime: number
  updatedAt: string
}

const difficultyColors: Record<string, string> = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'error',
  expert: 'default',
}

export function WikiSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Debounce search
  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`/api/wiki/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data.results || [])
        setIsOpen(true)
      } catch (error) {
        console.error('Search failed:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300) // 300ms debounce

    return () => clearTimeout(timer)
  }, [query])

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search wiki articles..."
          className="w-full pl-12 pr-12 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-dark-800 border border-white/10 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-8 text-center text-white/60">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              <p className="mt-4">Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-white/60">
              <p>No articles found for "{query}"</p>
              <p className="text-sm mt-2">Try different keywords or browse by category</p>
            </div>
          ) : (
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-white/40 border-b border-white/10">
                Found {results.length} {results.length === 1 ? 'article' : 'articles'}
              </div>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={`/wiki/${result.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {result.difficulty && (
                          <Badge variant={difficultyColors[result.difficulty] as any} className="text-xs">
                            {result.difficulty}
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold text-white mb-1 truncate">
                        {result.title}
                      </h4>
                      <p className="text-sm text-white/60 line-clamp-2">
                        {result.excerpt}
                      </p>
                      {result.readTime && (
                        <div className="flex items-center text-xs text-white/40 mt-2">
                          <Clock className="w-3 h-3 mr-1" />
                          {result.readTime} min read
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

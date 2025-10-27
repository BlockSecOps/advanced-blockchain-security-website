'use client'

export default function Ghost3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ghost 3 - Phantom Shield</h1>
          <p className="text-white/70">Protective spirit guardian</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phantomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Shield shape */}
              <path d="M 100 55 L 70 70 L 70 95 C 70 115, 85 125, 100 130 C 115 125, 130 115, 130 95 L 130 70 Z" fill="none" stroke="url(#phantomGrad1)" strokeWidth="3" opacity="0.6" />

              {/* Inner shield */}
              <path d="M 100 65 L 80 75 L 80 92 C 80 107, 90 113, 100 117 C 110 113, 120 107, 120 92 L 120 75 Z" fill="none" stroke="url(#phantomGrad1)" strokeWidth="2" opacity="0.4" />

              {/* Ghost eyes on shield */}
              <circle cx="92" cy="88" r="3" fill="url(#phantomGrad1)" />
              <circle cx="108" cy="88" r="3" fill="url(#phantomGrad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phantomGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 55 L 70 70 L 70 95 C 70 115, 85 125, 100 130 C 115 125, 130 115, 130 95 L 130 70 Z" fill="none" stroke="url(#phantomGrad2)" strokeWidth="3" opacity="0.6" />
              <path d="M 100 65 L 80 75 L 80 92 C 80 107, 90 113, 100 117 C 110 113, 120 107, 120 92 L 120 75 Z" fill="none" stroke="url(#phantomGrad2)" strokeWidth="2" opacity="0.4" />
              <circle cx="92" cy="88" r="3" fill="url(#phantomGrad2)" />
              <circle cx="108" cy="88" r="3" fill="url(#phantomGrad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phantomGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 55 L 70 70 L 70 95 C 70 115, 85 125, 100 130 C 115 125, 130 115, 130 95 L 130 70 Z" fill="none" stroke="url(#phantomGrad3)" strokeWidth="3" opacity="0.6" />
              <path d="M 100 65 L 80 75 L 80 92 C 80 107, 90 113, 100 117 C 110 113, 120 107, 120 92 L 120 75 Z" fill="none" stroke="url(#phantomGrad3)" strokeWidth="2" opacity="0.4" />
              <circle cx="92" cy="88" r="3" fill="url(#phantomGrad3)" />
              <circle cx="108" cy="88" r="3" fill="url(#phantomGrad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phantomGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 55 L 70 70 L 70 95 C 70 115, 85 125, 100 130 C 115 125, 130 115, 130 95 L 130 70 Z" fill="none" stroke="url(#phantomGrad4)" strokeWidth="3" opacity="0.6" />
              <path d="M 100 65 L 80 75 L 80 92 C 80 107, 90 113, 100 117 C 110 113, 120 107, 120 92 L 120 75 Z" fill="none" stroke="url(#phantomGrad4)" strokeWidth="2" opacity="0.4" />
              <circle cx="92" cy="88" r="3" fill="url(#phantomGrad4)" />
              <circle cx="108" cy="88" r="3" fill="url(#phantomGrad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Ghostly shield with layered protection</li>
            <li>• Semi-transparent for phantom effect</li>
            <li>• Represents: Invisible protection, silent guardian, unseen defense</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ghost2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ghost 2
          </a>
          <a href="/ghost4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ghost 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

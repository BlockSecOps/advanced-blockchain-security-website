'use client'

export default function Wizard1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Wizard 1 - Spell Book</h1>
          <p className="text-white/70">Ancient knowledge tome</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Book cover */}
              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#wizard1Grad1)" strokeWidth="2.5" />

              {/* Book spine */}
              <line x1="60" y1="50" x2="60" y2="150" stroke="url(#wizard1Grad1)" strokeWidth="2.5" />

              {/* Mystical symbol - pentagram */}
              <path d="M 100 75 L 108 95 L 130 95 L 113 107 L 120 127 L 100 115 L 80 127 L 87 107 L 70 95 L 92 95 Z"
                    fill="none" stroke="url(#wizard1Grad1)" strokeWidth="1.5" opacity="0.8" />

              {/* Book clasp */}
              <circle cx="140" cy="100" r="4" fill="none" stroke="url(#wizard1Grad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#wizard1Grad2)" strokeWidth="2.5" />
              <line x1="60" y1="50" x2="60" y2="150" stroke="url(#wizard1Grad2)" strokeWidth="2.5" />
              <path d="M 100 75 L 108 95 L 130 95 L 113 107 L 120 127 L 100 115 L 80 127 L 87 107 L 70 95 L 92 95 Z"
                    fill="none" stroke="url(#wizard1Grad2)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="140" cy="100" r="4" fill="none" stroke="url(#wizard1Grad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#wizard1Grad3)" strokeWidth="2.5" />
              <line x1="60" y1="50" x2="60" y2="150" stroke="url(#wizard1Grad3)" strokeWidth="2.5" />
              <path d="M 100 75 L 108 95 L 130 95 L 113 107 L 120 127 L 100 115 L 80 127 L 87 107 L 70 95 L 92 95 Z"
                    fill="none" stroke="url(#wizard1Grad3)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="140" cy="100" r="4" fill="none" stroke="url(#wizard1Grad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#wizard1Grad4)" strokeWidth="2.5" />
              <line x1="60" y1="50" x2="60" y2="150" stroke="url(#wizard1Grad4)" strokeWidth="2.5" />
              <path d="M 100 75 L 108 95 L 130 95 L 113 107 L 120 127 L 100 115 L 80 127 L 87 107 L 70 95 L 92 95 Z"
                    fill="none" stroke="url(#wizard1Grad4)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="140" cy="100" r="4" fill="none" stroke="url(#wizard1Grad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Ancient spell book with mystical pentagram symbol</li>
            <li>• Represents: Knowledge, wisdom, magical learning</li>
            <li>• Book clasp showing secured ancient knowledge</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/blockchain5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Blockchain 5
          </a>
          <a href="/wizard2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Wizard 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

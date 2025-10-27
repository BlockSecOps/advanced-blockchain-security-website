'use client'

export default function Logo7Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 7 - Classic UFO</h1>
          <p className="text-white/70">Advanced alien technology and scanning capabilities</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ufoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ufoFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              {/* Simple dome */}
              <ellipse cx="100" cy="70" rx="25" ry="15" fill="url(#ufoFill1)" stroke="url(#ufoGrad1)" strokeWidth="3" />

              {/* Main saucer disk */}
              <ellipse cx="100" cy="85" rx="60" ry="18" fill="url(#ufoFill1)" stroke="url(#ufoGrad1)" strokeWidth="3" />

              {/* Just 3 simple lights */}
              <circle cx="70" cy="88" r="4" fill="url(#ufoGrad1)" />
              <circle cx="100" cy="90" r="4" fill="url(#ufoGrad1)" />
              <circle cx="130" cy="88" r="4" fill="url(#ufoGrad1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ufoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ufoFill2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="70" rx="25" ry="15" fill="url(#ufoFill2)" stroke="url(#ufoGrad2)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="60" ry="18" fill="url(#ufoFill2)" stroke="url(#ufoGrad2)" strokeWidth="3" />
              <circle cx="70" cy="88" r="4" fill="url(#ufoGrad2)" />
              <circle cx="100" cy="90" r="4" fill="url(#ufoGrad2)" />
              <circle cx="130" cy="88" r="4" fill="url(#ufoGrad2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ufoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ufoFill3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="70" rx="25" ry="15" fill="url(#ufoFill3)" stroke="url(#ufoGrad3)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="60" ry="18" fill="url(#ufoFill3)" stroke="url(#ufoGrad3)" strokeWidth="3" />
              <circle cx="70" cy="88" r="4" fill="url(#ufoGrad3)" />
              <circle cx="100" cy="90" r="4" fill="url(#ufoGrad3)" />
              <circle cx="130" cy="88" r="4" fill="url(#ufoGrad3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ufoGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ufoFill4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="70" rx="25" ry="15" fill="url(#ufoFill4)" stroke="url(#ufoGrad4)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="60" ry="18" fill="url(#ufoFill4)" stroke="url(#ufoGrad4)" strokeWidth="3" />
              <circle cx="70" cy="88" r="4" fill="url(#ufoGrad4)" />
              <circle cx="100" cy="90" r="4" fill="url(#ufoGrad4)" />
              <circle cx="130" cy="88" r="4" fill="url(#ufoGrad4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Clean, simple flying saucer - classic UFO silhouette</li>
            <li>• Dome cockpit with flat disk body</li>
            <li>• Just 3 lights - minimal, iconic look</li>
            <li>• Electric gradient throughout</li>
            <li>• Represents: Advanced technology, superior scanning, next-gen security</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo8" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            UFO Variation 2 →
          </a>
          <a href="/logo9" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            UFO Variation 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

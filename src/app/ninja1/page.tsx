'use client'

export default function Ninja1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ninja 1 - Classic Ninja Head</h1>
          <p className="text-white/70">Stealth security operator</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ninjaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Head/mask */}
              <circle cx="100" cy="90" r="45" fill="#1a1a2e" stroke="url(#ninjaGrad1)" strokeWidth="3" />

              {/* Eyes - narrow slits */}
              <rect x="75" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad1)" />
              <rect x="110" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad1)" />

              {/* Headband knot */}
              <rect x="88" y="50" width="24" height="8" rx="2" fill="url(#ninjaGrad1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ninjaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="#1a1a2e" stroke="url(#ninjaGrad2)" strokeWidth="3" />
              <rect x="75" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad2)" />
              <rect x="110" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad2)" />
              <rect x="88" y="50" width="24" height="8" rx="2" fill="url(#ninjaGrad2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ninjaGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="#2a2a3e" stroke="url(#ninjaGrad3)" strokeWidth="3" />
              <rect x="75" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad3)" />
              <rect x="110" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad3)" />
              <rect x="88" y="50" width="24" height="8" rx="2" fill="url(#ninjaGrad3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ninjaGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="#1a1a2e" stroke="url(#ninjaGrad4)" strokeWidth="3" />
              <rect x="75" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad4)" />
              <rect x="110" y="85" width="15" height="6" rx="3" fill="url(#ninjaGrad4)" />
              <rect x="88" y="50" width="24" height="8" rx="2" fill="url(#ninjaGrad4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic ninja head with mask</li>
            <li>• Narrow eye slits - focused vision</li>
            <li>• Headband knot detail</li>
            <li>• Dark silhouette for stealth</li>
            <li>• Represents: Stealth operations, silent monitoring, hidden protection</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 2 →
          </a>
          <a href="/ghost1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ghost Logos →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Satellite2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Satellite 2 - Radar Dish</h1>
          <p className="text-white/70">Ground tracking station</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Dish parabola */}
              <ellipse cx="100" cy="85" rx="40" ry="25" fill="none" stroke="url(#sat2Grad1)" strokeWidth="3" />

              {/* Inner dish rings */}
              <ellipse cx="100" cy="85" rx="30" ry="18" fill="none" stroke="url(#sat2Grad1)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="100" cy="85" rx="20" ry="12" fill="none" stroke="url(#sat2Grad1)" strokeWidth="2" opacity="0.4" />

              {/* Feed horn at center */}
              <circle cx="100" cy="85" r="5" fill="url(#sat2Grad1)" />

              {/* Support structure */}
              <line x1="100" y1="110" x2="100" y2="130" stroke="url(#sat2Grad1)" strokeWidth="3" />
              <line x1="90" y1="130" x2="110" y2="130" stroke="url(#sat2Grad1)" strokeWidth="3" />

              {/* Base */}
              <rect x="85" y="130" width="30" height="8" rx="2" fill="none" stroke="url(#sat2Grad1)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="40" ry="25" fill="none" stroke="url(#sat2Grad2)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="30" ry="18" fill="none" stroke="url(#sat2Grad2)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="100" cy="85" rx="20" ry="12" fill="none" stroke="url(#sat2Grad2)" strokeWidth="2" opacity="0.4" />
              <circle cx="100" cy="85" r="5" fill="url(#sat2Grad2)" />
              <line x1="100" y1="110" x2="100" y2="130" stroke="url(#sat2Grad2)" strokeWidth="3" />
              <line x1="90" y1="130" x2="110" y2="130" stroke="url(#sat2Grad2)" strokeWidth="3" />
              <rect x="85" y="130" width="30" height="8" rx="2" fill="none" stroke="url(#sat2Grad2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="40" ry="25" fill="none" stroke="url(#sat2Grad3)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="30" ry="18" fill="none" stroke="url(#sat2Grad3)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="100" cy="85" rx="20" ry="12" fill="none" stroke="url(#sat2Grad3)" strokeWidth="2" opacity="0.4" />
              <circle cx="100" cy="85" r="5" fill="url(#sat2Grad3)" />
              <line x1="100" y1="110" x2="100" y2="130" stroke="url(#sat2Grad3)" strokeWidth="3" />
              <line x1="90" y1="130" x2="110" y2="130" stroke="url(#sat2Grad3)" strokeWidth="3" />
              <rect x="85" y="130" width="30" height="8" rx="2" fill="none" stroke="url(#sat2Grad3)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat2Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="40" ry="25" fill="none" stroke="url(#sat2Grad4)" strokeWidth="3" />
              <ellipse cx="100" cy="85" rx="30" ry="18" fill="none" stroke="url(#sat2Grad4)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="100" cy="85" rx="20" ry="12" fill="none" stroke="url(#sat2Grad4)" strokeWidth="2" opacity="0.4" />
              <circle cx="100" cy="85" r="5" fill="url(#sat2Grad4)" />
              <line x1="100" y1="110" x2="100" y2="130" stroke="url(#sat2Grad4)" strokeWidth="3" />
              <line x1="90" y1="130" x2="110" y2="130" stroke="url(#sat2Grad4)" strokeWidth="3" />
              <rect x="85" y="130" width="30" height="8" rx="2" fill="none" stroke="url(#sat2Grad4)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Parabolic radar dish with support structure</li>
            <li>• Represents: Ground station, signal tracking, deep space communication</li>
            <li>• Concentric rings showing dish depth</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/satellite1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Satellite 1
          </a>
          <a href="/satellite3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Satellite 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

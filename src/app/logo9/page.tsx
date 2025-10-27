'use client'

export default function Logo9Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 9 - Sphere UFO</h1>
          <p className="text-white/70">Simple spherical craft</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sphereGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="sphereFill1" cx="40%" cy="40%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              {/* Main sphere */}
              <circle cx="100" cy="90" r="50" fill="url(#sphereFill1)" stroke="url(#sphereGrad1)" strokeWidth="3" />

              {/* Equator band */}
              <ellipse cx="100" cy="90" rx="50" ry="12" fill="none" stroke="url(#sphereGrad1)" strokeWidth="2" opacity="0.6" />

              {/* Simple lights at 4 points */}
              <circle cx="50" cy="90" r="4" fill="url(#sphereGrad1)" />
              <circle cx="150" cy="90" r="4" fill="url(#sphereGrad1)" />
              <circle cx="100" cy="40" r="4" fill="url(#sphereGrad1)" />
              <circle cx="100" cy="140" r="4" fill="url(#sphereGrad1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sphereGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="sphereFill2" cx="40%" cy="40%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="url(#sphereFill2)" stroke="url(#sphereGrad2)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="50" ry="12" fill="none" stroke="url(#sphereGrad2)" strokeWidth="2" opacity="0.6" />
              <circle cx="50" cy="90" r="4" fill="url(#sphereGrad2)" />
              <circle cx="150" cy="90" r="4" fill="url(#sphereGrad2)" />
              <circle cx="100" cy="40" r="4" fill="url(#sphereGrad2)" />
              <circle cx="100" cy="140" r="4" fill="url(#sphereGrad2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sphereGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="sphereFill3" cx="40%" cy="40%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.05 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="url(#sphereFill3)" stroke="url(#sphereGrad3)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="50" ry="12" fill="none" stroke="url(#sphereGrad3)" strokeWidth="2" opacity="0.6" />
              <circle cx="50" cy="90" r="4" fill="url(#sphereGrad3)" />
              <circle cx="150" cy="90" r="4" fill="url(#sphereGrad3)" />
              <circle cx="100" cy="40" r="4" fill="url(#sphereGrad3)" />
              <circle cx="100" cy="140" r="4" fill="url(#sphereGrad3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sphereGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="sphereFill4" cx="40%" cy="40%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="url(#sphereFill4)" stroke="url(#sphereGrad4)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="50" ry="12" fill="none" stroke="url(#sphereGrad4)" strokeWidth="2" opacity="0.6" />
              <circle cx="50" cy="90" r="4" fill="url(#sphereGrad4)" />
              <circle cx="150" cy="90" r="4" fill="url(#sphereGrad4)" />
              <circle cx="100" cy="40" r="4" fill="url(#sphereGrad4)" />
              <circle cx="100" cy="140" r="4" fill="url(#sphereGrad4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Spherical orb UFO - perfect symmetry</li>
            <li>• Simple sphere with equator band</li>
            <li>• 4 lights at north/south/east/west</li>
            <li>• Radial gradient for depth</li>
            <li>• Represents: Omnidirectional scanning, complete coverage, balanced security</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo7" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← UFO Variation 1
          </a>
          <a href="/logo8" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            ← UFO Variation 2
          </a>
        </div>
      </div>
    </div>
  )
}

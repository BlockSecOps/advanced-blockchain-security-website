'use client'

export default function Logo8Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 8 - Ring UFO</h1>
          <p className="text-white/70">Simple rotating ring craft</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ringFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              {/* Outer ring */}
              <ellipse cx="100" cy="90" rx="65" ry="20" fill="url(#ringFill1)" stroke="url(#ringGrad1)" strokeWidth="3" />

              {/* Inner ring cutout */}
              <ellipse cx="100" cy="90" rx="40" ry="12" fill="#1a1a2e" stroke="url(#ringGrad1)" strokeWidth="2" />

              {/* Center sphere/core */}
              <circle cx="100" cy="90" r="18" fill="url(#ringFill1)" stroke="url(#ringGrad1)" strokeWidth="3" />

              {/* 4 lights around ring */}
              <circle cx="35" cy="90" r="4" fill="url(#ringGrad1)" />
              <circle cx="100" cy="70" r="4" fill="url(#ringGrad1)" />
              <circle cx="165" cy="90" r="4" fill="url(#ringGrad1)" />
              <circle cx="100" cy="110" r="4" fill="url(#ringGrad1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ringFill2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="90" rx="65" ry="20" fill="url(#ringFill2)" stroke="url(#ringGrad2)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="40" ry="12" fill="#1a1a2e" stroke="url(#ringGrad2)" strokeWidth="2" />
              <circle cx="100" cy="90" r="18" fill="url(#ringFill2)" stroke="url(#ringGrad2)" strokeWidth="3" />
              <circle cx="35" cy="90" r="4" fill="url(#ringGrad2)" />
              <circle cx="100" cy="70" r="4" fill="url(#ringGrad2)" />
              <circle cx="165" cy="90" r="4" fill="url(#ringGrad2)" />
              <circle cx="100" cy="110" r="4" fill="url(#ringGrad2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ringFill3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="90" rx="65" ry="20" fill="url(#ringFill3)" stroke="url(#ringGrad3)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="40" ry="12" fill="white" stroke="url(#ringGrad3)" strokeWidth="2" />
              <circle cx="100" cy="90" r="18" fill="url(#ringFill3)" stroke="url(#ringGrad3)" strokeWidth="3" />
              <circle cx="35" cy="90" r="4" fill="url(#ringGrad3)" />
              <circle cx="100" cy="70" r="4" fill="url(#ringGrad3)" />
              <circle cx="165" cy="90" r="4" fill="url(#ringGrad3)" />
              <circle cx="100" cy="110" r="4" fill="url(#ringGrad3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="ringFill4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="90" rx="65" ry="20" fill="url(#ringFill4)" stroke="url(#ringGrad4)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="40" ry="12" fill="#1a1a2e" stroke="url(#ringGrad4)" strokeWidth="2" />
              <circle cx="100" cy="90" r="18" fill="url(#ringFill4)" stroke="url(#ringGrad4)" strokeWidth="3" />
              <circle cx="35" cy="90" r="4" fill="url(#ringGrad4)" />
              <circle cx="100" cy="70" r="4" fill="url(#ringGrad4)" />
              <circle cx="165" cy="90" r="4" fill="url(#ringGrad4)" />
              <circle cx="100" cy="110" r="4" fill="url(#ringGrad4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Ring/torus UFO - rotating craft design</li>
            <li>• Central sphere with outer ring</li>
            <li>• 4 lights at cardinal points</li>
            <li>• Clean, minimal geometry</li>
            <li>• Represents: Orbital security, 360-degree coverage, continuous rotation</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo7" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← UFO Variation 1
          </a>
          <a href="/logo9" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            UFO Variation 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

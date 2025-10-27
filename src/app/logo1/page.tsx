'use client'

export default function Logo1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 1 - Security Shield</h1>
          <p className="text-white/70">Fluid, symmetrical design focused on security</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shieldInner1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>

              {/* Outer shield shape */}
              <path
                d="M 100 20 C 120 20, 140 30, 150 45 L 165 80 C 170 100, 170 120, 165 140 C 155 165, 130 185, 100 190 C 70 185, 45 165, 35 140 C 30 120, 30 100, 35 80 L 50 45 C 60 30, 80 20, 100 20 Z"
                fill="url(#shieldInner1)"
                stroke="url(#shieldGradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Inner geometric pattern - symmetrical */}
              <path
                d="M 100 50 L 120 75 L 120 100 L 135 115 L 120 130 L 120 155 L 100 140 L 80 155 L 80 130 L 65 115 L 80 100 L 80 75 Z"
                fill="none"
                stroke="url(#shieldGradient1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Center lock symbol */}
              <circle
                cx="100"
                cy="105"
                r="12"
                fill="none"
                stroke="url(#shieldGradient1)"
                strokeWidth="2.5"
              />
              <rect
                x="94"
                y="105"
                width="12"
                height="15"
                rx="1"
                fill="none"
                stroke="url(#shieldGradient1)"
                strokeWidth="2.5"
              />

              {/* Symmetrical accent nodes */}
              <circle cx="100" cy="50" r="4" fill="url(#shieldGradient1)" />
              <circle cx="120" cy="75" r="4" fill="url(#shieldGradient1)" />
              <circle cx="80" cy="75" r="4" fill="url(#shieldGradient1)" />
              <circle cx="135" cy="115" r="4" fill="url(#shieldGradient1)" />
              <circle cx="65" cy="115" r="4" fill="url(#shieldGradient1)" />
              <circle cx="120" cy="155" r="4" fill="url(#shieldGradient1)" />
              <circle cx="80" cy="155" r="4" fill="url(#shieldGradient1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shieldInner2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>

              <path
                d="M 100 20 C 120 20, 140 30, 150 45 L 165 80 C 170 100, 170 120, 165 140 C 155 165, 130 185, 100 190 C 70 185, 45 165, 35 140 C 30 120, 30 100, 35 80 L 50 45 C 60 30, 80 20, 100 20 Z"
                fill="url(#shieldInner2)"
                stroke="url(#shieldGradient2)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 100 50 L 120 75 L 120 100 L 135 115 L 120 130 L 120 155 L 100 140 L 80 155 L 80 130 L 65 115 L 80 100 L 80 75 Z"
                fill="none"
                stroke="url(#shieldGradient2)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="100" cy="105" r="12" fill="none" stroke="url(#shieldGradient2)" strokeWidth="2.5" />
              <rect x="94" y="105" width="12" height="15" rx="1" fill="none" stroke="url(#shieldGradient2)" strokeWidth="2.5" />

              <circle cx="100" cy="50" r="4" fill="url(#shieldGradient2)" />
              <circle cx="120" cy="75" r="4" fill="url(#shieldGradient2)" />
              <circle cx="80" cy="75" r="4" fill="url(#shieldGradient2)" />
              <circle cx="135" cy="115" r="4" fill="url(#shieldGradient2)" />
              <circle cx="65" cy="115" r="4" fill="url(#shieldGradient2)" />
              <circle cx="120" cy="155" r="4" fill="url(#shieldGradient2)" />
              <circle cx="80" cy="155" r="4" fill="url(#shieldGradient2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shieldInner3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.15 }} />
                </linearGradient>
              </defs>

              <path
                d="M 100 20 C 120 20, 140 30, 150 45 L 165 80 C 170 100, 170 120, 165 140 C 155 165, 130 185, 100 190 C 70 185, 45 165, 35 140 C 30 120, 30 100, 35 80 L 50 45 C 60 30, 80 20, 100 20 Z"
                fill="url(#shieldInner3)"
                stroke="url(#shieldGradient3)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 100 50 L 120 75 L 120 100 L 135 115 L 120 130 L 120 155 L 100 140 L 80 155 L 80 130 L 65 115 L 80 100 L 80 75 Z"
                fill="none"
                stroke="url(#shieldGradient3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="100" cy="105" r="12" fill="none" stroke="url(#shieldGradient3)" strokeWidth="2.5" />
              <rect x="94" y="105" width="12" height="15" rx="1" fill="none" stroke="url(#shieldGradient3)" strokeWidth="2.5" />

              <circle cx="100" cy="50" r="4" fill="url(#shieldGradient3)" />
              <circle cx="120" cy="75" r="4" fill="url(#shieldGradient3)" />
              <circle cx="80" cy="75" r="4" fill="url(#shieldGradient3)" />
              <circle cx="135" cy="115" r="4" fill="url(#shieldGradient3)" />
              <circle cx="65" cy="115" r="4" fill="url(#shieldGradient3)" />
              <circle cx="120" cy="155" r="4" fill="url(#shieldGradient3)" />
              <circle cx="80" cy="155" r="4" fill="url(#shieldGradient3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shieldInner4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>

              <path
                d="M 100 20 C 120 20, 140 30, 150 45 L 165 80 C 170 100, 170 120, 165 140 C 155 165, 130 185, 100 190 C 70 185, 45 165, 35 140 C 30 120, 30 100, 35 80 L 50 45 C 60 30, 80 20, 100 20 Z"
                fill="url(#shieldInner4)"
                stroke="url(#shieldGradient4)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 100 50 L 120 75 L 120 100 L 135 115 L 120 130 L 120 155 L 100 140 L 80 155 L 80 130 L 65 115 L 80 100 L 80 75 Z"
                fill="none"
                stroke="url(#shieldGradient4)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="100" cy="105" r="12" fill="none" stroke="url(#shieldGradient4)" strokeWidth="2.5" />
              <rect x="94" y="105" width="12" height="15" rx="1" fill="none" stroke="url(#shieldGradient4)" strokeWidth="2.5" />

              <circle cx="100" cy="50" r="4" fill="url(#shieldGradient4)" />
              <circle cx="120" cy="75" r="4" fill="url(#shieldGradient4)" />
              <circle cx="80" cy="75" r="4" fill="url(#shieldGradient4)" />
              <circle cx="135" cy="115" r="4" fill="url(#shieldGradient4)" />
              <circle cx="65" cy="115" r="4" fill="url(#shieldGradient4)" />
              <circle cx="120" cy="155" r="4" fill="url(#shieldGradient4)" />
              <circle cx="80" cy="155" r="4" fill="url(#shieldGradient4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Fluid shield outline with smooth, organic curves</li>
            <li>• Perfect vertical symmetry representing balanced security</li>
            <li>• Central lock icon symbolizing security and protection</li>
            <li>• Symmetrical geometric network inside shield</li>
            <li>• Electric gradient from indigo through purple to teal</li>
            <li>• Seven symmetrical nodes representing comprehensive security coverage</li>
            <li>• Clean, professional design conveying trust and protection</li>
            <li>• Scales perfectly from 16px favicon to large format</li>
          </ul>
        </div>

        {/* Comparison Link */}
        <div className="text-center">
          <a
            href="/logo"
            className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            View Original Logo (Abstract Network)
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Wizard3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Wizard 3 - Crystal Ball</h1>
          <p className="text-white/70">Divination orb on stand</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard3Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard3RadialGrad1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              {/* Crystal ball */}
              <circle cx="100" cy="90" r="25" fill="url(#wizard3RadialGrad1)" stroke="url(#wizard3Grad1)" strokeWidth="2.5" />

              {/* Inner glow */}
              <circle cx="100" cy="90" r="15" fill="none" stroke="url(#wizard3Grad1)" strokeWidth="1" opacity="0.4" />

              {/* Mystical swirl inside */}
              <path d="M 95 85 Q 100 80, 105 85 Q 110 90, 105 95 Q 100 100, 95 95"
                    fill="none" stroke="url(#wizard3Grad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Stand base */}
              <path d="M 85 115 L 90 125 L 110 125 L 115 115 Z" fill="none" stroke="url(#wizard3Grad1)" strokeWidth="2" />

              {/* Stand connector */}
              <path d="M 95 115 Q 100 110, 105 115" fill="none" stroke="url(#wizard3Grad1)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard3Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard3RadialGrad2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="25" fill="url(#wizard3RadialGrad2)" stroke="url(#wizard3Grad2)" strokeWidth="2.5" />
              <circle cx="100" cy="90" r="15" fill="none" stroke="url(#wizard3Grad2)" strokeWidth="1" opacity="0.4" />
              <path d="M 95 85 Q 100 80, 105 85 Q 110 90, 105 95 Q 100 100, 95 95"
                    fill="none" stroke="url(#wizard3Grad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 85 115 L 90 125 L 110 125 L 115 115 Z" fill="none" stroke="url(#wizard3Grad2)" strokeWidth="2" />
              <path d="M 95 115 Q 100 110, 105 115" fill="none" stroke="url(#wizard3Grad2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard3Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard3RadialGrad3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="25" fill="url(#wizard3RadialGrad3)" stroke="url(#wizard3Grad3)" strokeWidth="2.5" />
              <circle cx="100" cy="90" r="15" fill="none" stroke="url(#wizard3Grad3)" strokeWidth="1" opacity="0.4" />
              <path d="M 95 85 Q 100 80, 105 85 Q 110 90, 105 95 Q 100 100, 95 95"
                    fill="none" stroke="url(#wizard3Grad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 85 115 L 90 125 L 110 125 L 115 115 Z" fill="none" stroke="url(#wizard3Grad3)" strokeWidth="2" />
              <path d="M 95 115 Q 100 110, 105 115" fill="none" stroke="url(#wizard3Grad3)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard3Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard3RadialGrad4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="90" r="25" fill="url(#wizard3RadialGrad4)" stroke="url(#wizard3Grad4)" strokeWidth="2.5" />
              <circle cx="100" cy="90" r="15" fill="none" stroke="url(#wizard3Grad4)" strokeWidth="1" opacity="0.4" />
              <path d="M 95 85 Q 100 80, 105 85 Q 110 90, 105 95 Q 100 100, 95 95"
                    fill="none" stroke="url(#wizard3Grad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 85 115 L 90 125 L 110 125 L 115 115 Z" fill="none" stroke="url(#wizard3Grad4)" strokeWidth="2" />
              <path d="M 95 115 Q 100 110, 105 115" fill="none" stroke="url(#wizard3Grad4)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Crystal ball with mystical swirl and inner glow</li>
            <li>• Represents: Divination, foresight, prophecy</li>
            <li>• Ornate stand holding the magical orb</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/wizard2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Wizard 2
          </a>
          <a href="/wizard4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Wizard 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

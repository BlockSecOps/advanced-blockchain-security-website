'use client'

export default function Wizard5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Wizard 5 - Potion Bottle</h1>
          <p className="text-white/70">Magical elixir with bubbles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard5RadialGrad1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.05 }} />
                </radialGradient>
              </defs>

              {/* Bottle cork/stopper */}
              <rect x="90" y="55" width="20" height="8" rx="2" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="2" />

              {/* Bottle neck */}
              <path d="M 92 63 L 92 75 L 108 75 L 108 63" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="2" />

              {/* Bottle body */}
              <path d="M 75 75 L 75 125 Q 75 135, 85 135 L 115 135 Q 125 135, 125 125 L 125 75 Z"
                    fill="url(#wizard5RadialGrad1)" stroke="url(#wizard5Grad1)" strokeWidth="2.5" />

              {/* Liquid level */}
              <path d="M 77 95 Q 100 98, 123 95" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="1.5" opacity="0.5" />

              {/* Bubbles */}
              <circle cx="90" cy="105" r="3" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="105" cy="115" r="2.5" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="110" cy="100" r="2" fill="none" stroke="url(#wizard5Grad1)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="95" cy="120" r="1.5" fill="url(#wizard5Grad1)" opacity="0.5" />

              {/* Sparkle effect */}
              <path d="M 115 85 L 116 87 L 118 86 L 116 88 L 118 90 L 116 89 L 115 91 L 114 89 L 112 90 L 114 88 L 112 86 L 114 87 Z"
                    fill="url(#wizard5Grad1)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard5RadialGrad2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.05 }} />
                </radialGradient>
              </defs>

              <rect x="90" y="55" width="20" height="8" rx="2" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="2" />
              <path d="M 92 63 L 92 75 L 108 75 L 108 63" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="2" />
              <path d="M 75 75 L 75 125 Q 75 135, 85 135 L 115 135 Q 125 135, 125 125 L 125 75 Z"
                    fill="url(#wizard5RadialGrad2)" stroke="url(#wizard5Grad2)" strokeWidth="2.5" />
              <path d="M 77 95 Q 100 98, 123 95" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="90" cy="105" r="3" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="105" cy="115" r="2.5" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="110" cy="100" r="2" fill="none" stroke="url(#wizard5Grad2)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="95" cy="120" r="1.5" fill="url(#wizard5Grad2)" opacity="0.5" />
              <path d="M 115 85 L 116 87 L 118 86 L 116 88 L 118 90 L 116 89 L 115 91 L 114 89 L 112 90 L 114 88 L 112 86 L 114 87 Z"
                    fill="url(#wizard5Grad2)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard5RadialGrad3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.05 }} />
                </radialGradient>
              </defs>

              <rect x="90" y="55" width="20" height="8" rx="2" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="2" />
              <path d="M 92 63 L 92 75 L 108 75 L 108 63" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="2" />
              <path d="M 75 75 L 75 125 Q 75 135, 85 135 L 115 135 Q 125 135, 125 125 L 125 75 Z"
                    fill="url(#wizard5RadialGrad3)" stroke="url(#wizard5Grad3)" strokeWidth="2.5" />
              <path d="M 77 95 Q 100 98, 123 95" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="90" cy="105" r="3" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="105" cy="115" r="2.5" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="110" cy="100" r="2" fill="none" stroke="url(#wizard5Grad3)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="95" cy="120" r="1.5" fill="url(#wizard5Grad3)" opacity="0.5" />
              <path d="M 115 85 L 116 87 L 118 86 L 116 88 L 118 90 L 116 89 L 115 91 L 114 89 L 112 90 L 114 88 L 112 86 L 114 87 Z"
                    fill="url(#wizard5Grad3)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard5RadialGrad4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.05 }} />
                </radialGradient>
              </defs>

              <rect x="90" y="55" width="20" height="8" rx="2" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="2" />
              <path d="M 92 63 L 92 75 L 108 75 L 108 63" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="2" />
              <path d="M 75 75 L 75 125 Q 75 135, 85 135 L 115 135 Q 125 135, 125 125 L 125 75 Z"
                    fill="url(#wizard5RadialGrad4)" stroke="url(#wizard5Grad4)" strokeWidth="2.5" />
              <path d="M 77 95 Q 100 98, 123 95" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="90" cy="105" r="3" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="105" cy="115" r="2.5" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="110" cy="100" r="2" fill="none" stroke="url(#wizard5Grad4)" strokeWidth="1.5" opacity="0.8" />
              <circle cx="95" cy="120" r="1.5" fill="url(#wizard5Grad4)" opacity="0.5" />
              <path d="M 115 85 L 116 87 L 118 86 L 116 88 L 118 90 L 116 89 L 115 91 L 114 89 L 112 90 L 114 88 L 112 86 L 114 87 Z"
                    fill="url(#wizard5Grad4)" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Magical potion bottle with cork stopper</li>
            <li>• Represents: Alchemy, transformation, magical potions</li>
            <li>• Bubbling liquid with sparkle effect showing active magic</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/wizard4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Wizard 4
          </a>
          <a href="/astronaut1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

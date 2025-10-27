'use client'

export default function Skull1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Skull 1 - Classic Skull</h1>
          <p className="text-white/70">Traditional skull design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Skull top */}
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull1Grad1)" strokeWidth="2.5" />

              {/* Eye sockets */}
              <ellipse cx="88" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad1)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad1)" strokeWidth="2" />

              {/* Nose cavity */}
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull1Grad1)" strokeWidth="2" />

              {/* Jaw */}
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull1Grad1)" strokeWidth="2.5" />

              {/* Teeth */}
              <line x1="85" y1="120" x2="85" y2="130" stroke="url(#skull1Grad1)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull1Grad1)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull1Grad1)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull1Grad1)" strokeWidth="1.5" />
              <line x1="115" y1="120" x2="115" y2="130" stroke="url(#skull1Grad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull1Grad2)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad2)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad2)" strokeWidth="2" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull1Grad2)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull1Grad2)" strokeWidth="2.5" />
              <line x1="85" y1="120" x2="85" y2="130" stroke="url(#skull1Grad2)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull1Grad2)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull1Grad2)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull1Grad2)" strokeWidth="1.5" />
              <line x1="115" y1="120" x2="115" y2="130" stroke="url(#skull1Grad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull1Grad3)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad3)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad3)" strokeWidth="2" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull1Grad3)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull1Grad3)" strokeWidth="2.5" />
              <line x1="85" y1="120" x2="85" y2="130" stroke="url(#skull1Grad3)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull1Grad3)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull1Grad3)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull1Grad3)" strokeWidth="1.5" />
              <line x1="115" y1="120" x2="115" y2="130" stroke="url(#skull1Grad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull1Grad4)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad4)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="10" fill="none" stroke="url(#skull1Grad4)" strokeWidth="2" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull1Grad4)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull1Grad4)" strokeWidth="2.5" />
              <line x1="85" y1="120" x2="85" y2="130" stroke="url(#skull1Grad4)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull1Grad4)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull1Grad4)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull1Grad4)" strokeWidth="1.5" />
              <line x1="115" y1="120" x2="115" y2="130" stroke="url(#skull1Grad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Traditional skull with cranium, eye sockets, and jaw</li>
            <li>• Represents: Security threats, danger warnings, mortality</li>
            <li>• Triangular nose cavity and visible teeth detail</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/wizard5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Wizard 5
          </a>
          <a href="/skull2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Skull 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

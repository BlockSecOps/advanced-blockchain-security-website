'use client'

export default function Skull5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Skull 5 - Horned Skull</h1>
          <p className="text-white/70">Demonic skull with devil horns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Left horn */}
              <path d="M 75 70 Q 65 50, 60 45 Q 55 42, 52 45 Q 55 50, 60 55 Q 68 65, 75 75"
                    fill="none" stroke="url(#skull5Grad1)" strokeWidth="2.5" />

              {/* Right horn */}
              <path d="M 125 70 Q 135 50, 140 45 Q 145 42, 148 45 Q 145 50, 140 55 Q 132 65, 125 75"
                    fill="none" stroke="url(#skull5Grad1)" strokeWidth="2.5" />

              {/* Skull top */}
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull5Grad1)" strokeWidth="2.5" />

              {/* Eye sockets - more menacing */}
              <ellipse cx="88" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad1)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad1)" strokeWidth="2" />

              {/* Inner eye glow */}
              <ellipse cx="88" cy="82" rx="4" ry="6" fill="url(#skull5Grad1)" opacity="0.3" />
              <ellipse cx="112" cy="82" rx="4" ry="6" fill="url(#skull5Grad1)" opacity="0.3" />

              {/* Nose cavity */}
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull5Grad1)" strokeWidth="2" />

              {/* Jaw with sharp teeth */}
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull5Grad1)" strokeWidth="2.5" />

              {/* Sharp fangs/teeth */}
              <path d="M 85 120 L 83 130 L 87 130 Z" fill="none" stroke="url(#skull5Grad1)" strokeWidth="1.5" />
              <path d="M 115 120 L 113 130 L 117 130 Z" fill="none" stroke="url(#skull5Grad1)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull5Grad1)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull5Grad1)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull5Grad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 75 70 Q 65 50, 60 45 Q 55 42, 52 45 Q 55 50, 60 55 Q 68 65, 75 75"
                    fill="none" stroke="url(#skull5Grad2)" strokeWidth="2.5" />
              <path d="M 125 70 Q 135 50, 140 45 Q 145 42, 148 45 Q 145 50, 140 55 Q 132 65, 125 75"
                    fill="none" stroke="url(#skull5Grad2)" strokeWidth="2.5" />
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull5Grad2)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad2)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad2)" strokeWidth="2" />
              <ellipse cx="88" cy="82" rx="4" ry="6" fill="url(#skull5Grad2)" opacity="0.3" />
              <ellipse cx="112" cy="82" rx="4" ry="6" fill="url(#skull5Grad2)" opacity="0.3" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull5Grad2)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull5Grad2)" strokeWidth="2.5" />
              <path d="M 85 120 L 83 130 L 87 130 Z" fill="none" stroke="url(#skull5Grad2)" strokeWidth="1.5" />
              <path d="M 115 120 L 113 130 L 117 130 Z" fill="none" stroke="url(#skull5Grad2)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull5Grad2)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull5Grad2)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull5Grad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 75 70 Q 65 50, 60 45 Q 55 42, 52 45 Q 55 50, 60 55 Q 68 65, 75 75"
                    fill="none" stroke="url(#skull5Grad3)" strokeWidth="2.5" />
              <path d="M 125 70 Q 135 50, 140 45 Q 145 42, 148 45 Q 145 50, 140 55 Q 132 65, 125 75"
                    fill="none" stroke="url(#skull5Grad3)" strokeWidth="2.5" />
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull5Grad3)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad3)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad3)" strokeWidth="2" />
              <ellipse cx="88" cy="82" rx="4" ry="6" fill="url(#skull5Grad3)" opacity="0.3" />
              <ellipse cx="112" cy="82" rx="4" ry="6" fill="url(#skull5Grad3)" opacity="0.3" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull5Grad3)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull5Grad3)" strokeWidth="2.5" />
              <path d="M 85 120 L 83 130 L 87 130 Z" fill="none" stroke="url(#skull5Grad3)" strokeWidth="1.5" />
              <path d="M 115 120 L 113 130 L 117 130 Z" fill="none" stroke="url(#skull5Grad3)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull5Grad3)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull5Grad3)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull5Grad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 75 70 Q 65 50, 60 45 Q 55 42, 52 45 Q 55 50, 60 55 Q 68 65, 75 75"
                    fill="none" stroke="url(#skull5Grad4)" strokeWidth="2.5" />
              <path d="M 125 70 Q 135 50, 140 45 Q 145 42, 148 45 Q 145 50, 140 55 Q 132 65, 125 75"
                    fill="none" stroke="url(#skull5Grad4)" strokeWidth="2.5" />
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull5Grad4)" strokeWidth="2.5" />
              <ellipse cx="88" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad4)" strokeWidth="2" />
              <ellipse cx="112" cy="80" rx="8" ry="12" fill="none" stroke="url(#skull5Grad4)" strokeWidth="2" />
              <ellipse cx="88" cy="82" rx="4" ry="6" fill="url(#skull5Grad4)" opacity="0.3" />
              <ellipse cx="112" cy="82" rx="4" ry="6" fill="url(#skull5Grad4)" opacity="0.3" />
              <path d="M 95 95 L 100 105 L 105 95 Z" fill="none" stroke="url(#skull5Grad4)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull5Grad4)" strokeWidth="2.5" />
              <path d="M 85 120 L 83 130 L 87 130 Z" fill="none" stroke="url(#skull5Grad4)" strokeWidth="1.5" />
              <path d="M 115 120 L 113 130 L 117 130 Z" fill="none" stroke="url(#skull5Grad4)" strokeWidth="1.5" />
              <line x1="92" y1="120" x2="92" y2="130" stroke="url(#skull5Grad4)" strokeWidth="1.5" />
              <line x1="100" y1="120" x2="100" y2="130" stroke="url(#skull5Grad4)" strokeWidth="1.5" />
              <line x1="108" y1="120" x2="108" y2="130" stroke="url(#skull5Grad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Menacing skull with curved devil horns</li>
            <li>• Represents: Malicious threats, evil intent, advanced persistent threats</li>
            <li>• Sharp fangs and glowing eyes for intimidating effect</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/skull4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Skull 4
          </a>
          <a href="/astronaut1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

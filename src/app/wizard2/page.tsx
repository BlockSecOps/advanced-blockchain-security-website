'use client'

export default function Wizard2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Wizard 2 - Magic Wand</h1>
          <p className="text-white/70">Casting tool with sparks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard2Glow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              {/* Wand handle - wooden texture */}
              <line x1="60" y1="135" x2="95" y2="100" stroke="url(#wizard2Grad1)" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="133" x2="97" y2="98" stroke="url(#wizard2Grad1)" strokeWidth="1.5" opacity="0.3" />

              {/* Handle grip details */}
              <line x1="70" y1="127" x2="72" y2="125" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="75" y1="122" x2="77" y2="120" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="80" y1="117" x2="82" y2="115" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="85" y1="112" x2="87" y2="110" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.5" />

              {/* Wand shaft - upper portion */}
              <line x1="95" y1="100" x2="115" y2="80" stroke="url(#wizard2Grad1)" strokeWidth="3.5" strokeLinecap="round" />

              {/* Crystal tip - multi-faceted */}
              <path d="M 115 80 L 120 72 L 125 80 L 120 88 Z" fill="url(#wizard2Glow1)" stroke="url(#wizard2Grad1)" strokeWidth="2.5" />
              <path d="M 115 80 L 120 72 L 125 80 Z" fill="none" stroke="url(#wizard2Grad1)" strokeWidth="1.5" opacity="0.8" />
              <line x1="120" y1="72" x2="120" y2="88" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.6" />
              <line x1="115" y1="80" x2="125" y2="80" stroke="url(#wizard2Grad1)" strokeWidth="1" opacity="0.6" />

              {/* Magical glow around crystal */}
              <circle cx="120" cy="80" r="12" fill="url(#wizard2Glow1)" opacity="0.4" />

              {/* Energy particles emanating from crystal */}
              <circle cx="130" cy="70" r="2.5" fill="url(#wizard2Grad1)" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="135" cy="75" r="2" fill="url(#wizard2Grad1)" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="128" cy="65" r="1.8" fill="url(#wizard2Grad1)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="138" cy="82" r="1.5" fill="url(#wizard2Grad1)" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Sparkle stars - detailed */}
              <path d="M 142 85 L 143.5 88 L 146.5 88.5 L 144 91 L 144.5 94 L 142 92.5 L 139.5 94 L 140 91 L 137.5 88.5 L 140.5 88 Z"
                    fill="url(#wizard2Grad1)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
              </path>
              <path d="M 118 95 L 119 97.5 L 121.5 98 L 119.5 100 L 120 102.5 L 118 101 L 116 102.5 L 116.5 100 L 114.5 98 L 117 97.5 Z"
                    fill="url(#wizard2Grad1)" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
              </path>
              <path d="M 133 58 L 134 60 L 136 60.5 L 134.5 62 L 135 64 L 133 63 L 131 64 L 131.5 62 L 130 60.5 L 132 60 Z"
                    fill="url(#wizard2Grad1)" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.2s" repeatCount="indefinite" />
              </path>

              {/* Magic trail/arc */}
              <path d="M 120 80 Q 128 78, 135 75" stroke="url(#wizard2Grad1)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
              <path d="M 120 80 Q 130 82, 138 85" stroke="url(#wizard2Grad1)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard2Glow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <line x1="60" y1="135" x2="95" y2="100" stroke="url(#wizard2Grad2)" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="133" x2="97" y2="98" stroke="url(#wizard2Grad2)" strokeWidth="1.5" opacity="0.3" />
              <line x1="70" y1="127" x2="72" y2="125" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="75" y1="122" x2="77" y2="120" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="80" y1="117" x2="82" y2="115" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="85" y1="112" x2="87" y2="110" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="95" y1="100" x2="115" y2="80" stroke="url(#wizard2Grad2)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 115 80 L 120 72 L 125 80 L 120 88 Z" fill="url(#wizard2Glow2)" stroke="url(#wizard2Grad2)" strokeWidth="2.5" />
              <path d="M 115 80 L 120 72 L 125 80 Z" fill="none" stroke="url(#wizard2Grad2)" strokeWidth="1.5" opacity="0.8" />
              <line x1="120" y1="72" x2="120" y2="88" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.6" />
              <line x1="115" y1="80" x2="125" y2="80" stroke="url(#wizard2Grad2)" strokeWidth="1" opacity="0.6" />
              <circle cx="120" cy="80" r="12" fill="url(#wizard2Glow2)" opacity="0.4" />
              <circle cx="130" cy="70" r="2.5" fill="url(#wizard2Grad2)" opacity="0.9" />
              <circle cx="135" cy="75" r="2" fill="url(#wizard2Grad2)" opacity="0.7" />
              <circle cx="128" cy="65" r="1.8" fill="url(#wizard2Grad2)" opacity="0.8" />
              <path d="M 142 85 L 143.5 88 L 146.5 88.5 L 144 91 L 144.5 94 L 142 92.5 L 139.5 94 L 140 91 L 137.5 88.5 L 140.5 88 Z"
                    fill="url(#wizard2Grad2)" opacity="0.8" />
              <path d="M 118 95 L 119 97.5 L 121.5 98 L 119.5 100 L 120 102.5 L 118 101 L 116 102.5 L 116.5 100 L 114.5 98 L 117 97.5 Z"
                    fill="url(#wizard2Grad2)" opacity="0.7" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard2Glow3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <line x1="60" y1="135" x2="95" y2="100" stroke="url(#wizard2Grad3)" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="133" x2="97" y2="98" stroke="url(#wizard2Grad3)" strokeWidth="1.5" opacity="0.3" />
              <line x1="70" y1="127" x2="72" y2="125" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="75" y1="122" x2="77" y2="120" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="80" y1="117" x2="82" y2="115" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="85" y1="112" x2="87" y2="110" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="95" y1="100" x2="115" y2="80" stroke="url(#wizard2Grad3)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 115 80 L 120 72 L 125 80 L 120 88 Z" fill="url(#wizard2Glow3)" stroke="url(#wizard2Grad3)" strokeWidth="2.5" />
              <path d="M 115 80 L 120 72 L 125 80 Z" fill="none" stroke="url(#wizard2Grad3)" strokeWidth="1.5" opacity="0.8" />
              <line x1="120" y1="72" x2="120" y2="88" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.6" />
              <line x1="115" y1="80" x2="125" y2="80" stroke="url(#wizard2Grad3)" strokeWidth="1" opacity="0.6" />
              <circle cx="120" cy="80" r="12" fill="url(#wizard2Glow3)" opacity="0.4" />
              <circle cx="130" cy="70" r="2.5" fill="url(#wizard2Grad3)" opacity="0.9" />
              <circle cx="135" cy="75" r="2" fill="url(#wizard2Grad3)" opacity="0.7" />
              <circle cx="128" cy="65" r="1.8" fill="url(#wizard2Grad3)" opacity="0.8" />
              <path d="M 142 85 L 143.5 88 L 146.5 88.5 L 144 91 L 144.5 94 L 142 92.5 L 139.5 94 L 140 91 L 137.5 88.5 L 140.5 88 Z"
                    fill="url(#wizard2Grad3)" opacity="0.8" />
              <path d="M 118 95 L 119 97.5 L 121.5 98 L 119.5 100 L 120 102.5 L 118 101 L 116 102.5 L 116.5 100 L 114.5 98 L 117 97.5 Z"
                    fill="url(#wizard2Grad3)" opacity="0.7" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard2Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="wizard2Glow4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <line x1="60" y1="135" x2="95" y2="100" stroke="url(#wizard2Grad4)" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="133" x2="97" y2="98" stroke="url(#wizard2Grad4)" strokeWidth="1.5" opacity="0.3" />
              <line x1="70" y1="127" x2="72" y2="125" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="75" y1="122" x2="77" y2="120" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="80" y1="117" x2="82" y2="115" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="85" y1="112" x2="87" y2="110" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="95" y1="100" x2="115" y2="80" stroke="url(#wizard2Grad4)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 115 80 L 120 72 L 125 80 L 120 88 Z" fill="url(#wizard2Glow4)" stroke="url(#wizard2Grad4)" strokeWidth="2.5" />
              <path d="M 115 80 L 120 72 L 125 80 Z" fill="none" stroke="url(#wizard2Grad4)" strokeWidth="1.5" opacity="0.8" />
              <line x1="120" y1="72" x2="120" y2="88" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.6" />
              <line x1="115" y1="80" x2="125" y2="80" stroke="url(#wizard2Grad4)" strokeWidth="1" opacity="0.6" />
              <circle cx="120" cy="80" r="12" fill="url(#wizard2Glow4)" opacity="0.4" />
              <circle cx="130" cy="70" r="2.5" fill="url(#wizard2Grad4)" opacity="0.9" />
              <circle cx="135" cy="75" r="2" fill="url(#wizard2Grad4)" opacity="0.7" />
              <circle cx="128" cy="65" r="1.8" fill="url(#wizard2Grad4)" opacity="0.8" />
              <path d="M 142 85 L 143.5 88 L 146.5 88.5 L 144 91 L 144.5 94 L 142 92.5 L 139.5 94 L 140 91 L 137.5 88.5 L 140.5 88 Z"
                    fill="url(#wizard2Grad4)" opacity="0.8" />
              <path d="M 118 95 L 119 97.5 L 121.5 98 L 119.5 100 L 120 102.5 L 118 101 L 116 102.5 L 116.5 100 L 114.5 98 L 117 97.5 Z"
                    fill="url(#wizard2Grad4)" opacity="0.7" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Magic wand with crystal tip and sparks</li>
            <li>• Represents: Power, spellcasting, magical energy</li>
            <li>• Sparkles showing active magic</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/wizard1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Wizard 1
          </a>
          <a href="/wizard3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Wizard 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

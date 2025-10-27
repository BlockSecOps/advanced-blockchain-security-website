'use client'

export default function Skull2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Skull 2 - Skull and Crossbones</h1>
          <p className="text-white/70">Danger symbol with crossed bones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Skull */}
              <ellipse cx="100" cy="75" rx="22" ry="25" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2.5" />
              <ellipse cx="92" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <ellipse cx="108" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <path d="M 96 84 L 100 90 L 104 84" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <path d="M 85 92 Q 85 102, 91 105 L 109 105 Q 115 102, 115 92"
                    fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <line x1="91" y1="98" x2="91" y2="105" stroke="url(#skull2Grad1)" strokeWidth="1.5" />
              <line x1="100" y1="98" x2="100" y2="105" stroke="url(#skull2Grad1)" strokeWidth="1.5" />
              <line x1="109" y1="98" x2="109" y2="105" stroke="url(#skull2Grad1)" strokeWidth="1.5" />

              {/* Crossed bones */}
              {/* Bone 1 */}
              <line x1="70" y1="115" x2="130" y2="135" stroke="url(#skull2Grad1)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="70" cy="115" r="5" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <circle cx="130" cy="135" r="5" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />

              {/* Bone 2 */}
              <line x1="130" y1="115" x2="70" y2="135" stroke="url(#skull2Grad1)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="130" cy="115" r="5" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
              <circle cx="70" cy="135" r="5" fill="none" stroke="url(#skull2Grad1)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="75" rx="22" ry="25" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2.5" />
              <ellipse cx="92" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <ellipse cx="108" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <path d="M 96 84 L 100 90 L 104 84" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <path d="M 85 92 Q 85 102, 91 105 L 109 105 Q 115 102, 115 92"
                    fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <line x1="91" y1="98" x2="91" y2="105" stroke="url(#skull2Grad2)" strokeWidth="1.5" />
              <line x1="100" y1="98" x2="100" y2="105" stroke="url(#skull2Grad2)" strokeWidth="1.5" />
              <line x1="109" y1="98" x2="109" y2="105" stroke="url(#skull2Grad2)" strokeWidth="1.5" />
              <line x1="70" y1="115" x2="130" y2="135" stroke="url(#skull2Grad2)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="70" cy="115" r="5" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <circle cx="130" cy="135" r="5" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <line x1="130" y1="115" x2="70" y2="135" stroke="url(#skull2Grad2)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="130" cy="115" r="5" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
              <circle cx="70" cy="135" r="5" fill="none" stroke="url(#skull2Grad2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="75" rx="22" ry="25" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2.5" />
              <ellipse cx="92" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <ellipse cx="108" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <path d="M 96 84 L 100 90 L 104 84" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <path d="M 85 92 Q 85 102, 91 105 L 109 105 Q 115 102, 115 92"
                    fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <line x1="91" y1="98" x2="91" y2="105" stroke="url(#skull2Grad3)" strokeWidth="1.5" />
              <line x1="100" y1="98" x2="100" y2="105" stroke="url(#skull2Grad3)" strokeWidth="1.5" />
              <line x1="109" y1="98" x2="109" y2="105" stroke="url(#skull2Grad3)" strokeWidth="1.5" />
              <line x1="70" y1="115" x2="130" y2="135" stroke="url(#skull2Grad3)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="70" cy="115" r="5" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <circle cx="130" cy="135" r="5" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <line x1="130" y1="115" x2="70" y2="135" stroke="url(#skull2Grad3)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="130" cy="115" r="5" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
              <circle cx="70" cy="135" r="5" fill="none" stroke="url(#skull2Grad3)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull2Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="75" rx="22" ry="25" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2.5" />
              <ellipse cx="92" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <ellipse cx="108" cy="72" rx="5" ry="7" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <path d="M 96 84 L 100 90 L 104 84" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <path d="M 85 92 Q 85 102, 91 105 L 109 105 Q 115 102, 115 92"
                    fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <line x1="91" y1="98" x2="91" y2="105" stroke="url(#skull2Grad4)" strokeWidth="1.5" />
              <line x1="100" y1="98" x2="100" y2="105" stroke="url(#skull2Grad4)" strokeWidth="1.5" />
              <line x1="109" y1="98" x2="109" y2="105" stroke="url(#skull2Grad4)" strokeWidth="1.5" />
              <line x1="70" y1="115" x2="130" y2="135" stroke="url(#skull2Grad4)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="70" cy="115" r="5" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <circle cx="130" cy="135" r="5" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <line x1="130" y1="115" x2="70" y2="135" stroke="url(#skull2Grad4)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="130" cy="115" r="5" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
              <circle cx="70" cy="135" r="5" fill="none" stroke="url(#skull2Grad4)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic pirate symbol - skull with crossed bones beneath</li>
            <li>• Represents: Extreme danger, toxicity, lethal threats</li>
            <li>• Universal warning symbol for hazardous content</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/skull1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Skull 1
          </a>
          <a href="/skull3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Skull 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Astronaut5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Astronaut 5 - Space Walk</h1>
          <p className="text-white/70">Floating astronaut explorer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="walkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Helmet */}
              <circle cx="100" cy="70" r="18" fill="none" stroke="url(#walkGrad1)" strokeWidth="2.5" />

              {/* Visor */}
              <ellipse cx="100" cy="70" rx="12" ry="6" fill="none" stroke="url(#walkGrad1)" strokeWidth="1.5" opacity="0.7" />

              {/* Body/suit */}
              <rect x="88" y="88" width="24" height="30" rx="3" fill="none" stroke="url(#walkGrad1)" strokeWidth="2.5" />

              {/* Backpack/life support */}
              <rect x="90" y="90" width="20" height="18" rx="2" fill="none" stroke="url(#walkGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Arms */}
              <line x1="88" y1="95" x2="75" y2="100" stroke="url(#walkGrad1)" strokeWidth="2" />
              <line x1="112" y1="95" x2="125" y2="100" stroke="url(#walkGrad1)" strokeWidth="2" />

              {/* Legs */}
              <line x1="94" y1="118" x2="90" y2="135" stroke="url(#walkGrad1)" strokeWidth="2" />
              <line x1="106" y1="118" x2="110" y2="135" stroke="url(#walkGrad1)" strokeWidth="2" />

              {/* Tether line */}
              <path d="M 125 100 L 135 95 L 145 92" stroke="url(#walkGrad1)" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="walkGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="18" fill="none" stroke="url(#walkGrad2)" strokeWidth="2.5" />
              <ellipse cx="100" cy="70" rx="12" ry="6" fill="none" stroke="url(#walkGrad2)" strokeWidth="1.5" opacity="0.7" />
              <rect x="88" y="88" width="24" height="30" rx="3" fill="none" stroke="url(#walkGrad2)" strokeWidth="2.5" />
              <rect x="90" y="90" width="20" height="18" rx="2" fill="none" stroke="url(#walkGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="88" y1="95" x2="75" y2="100" stroke="url(#walkGrad2)" strokeWidth="2" />
              <line x1="112" y1="95" x2="125" y2="100" stroke="url(#walkGrad2)" strokeWidth="2" />
              <line x1="94" y1="118" x2="90" y2="135" stroke="url(#walkGrad2)" strokeWidth="2" />
              <line x1="106" y1="118" x2="110" y2="135" stroke="url(#walkGrad2)" strokeWidth="2" />
              <path d="M 125 100 L 135 95 L 145 92" stroke="url(#walkGrad2)" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="walkGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="18" fill="none" stroke="url(#walkGrad3)" strokeWidth="2.5" />
              <ellipse cx="100" cy="70" rx="12" ry="6" fill="none" stroke="url(#walkGrad3)" strokeWidth="1.5" opacity="0.7" />
              <rect x="88" y="88" width="24" height="30" rx="3" fill="none" stroke="url(#walkGrad3)" strokeWidth="2.5" />
              <rect x="90" y="90" width="20" height="18" rx="2" fill="none" stroke="url(#walkGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="88" y1="95" x2="75" y2="100" stroke="url(#walkGrad3)" strokeWidth="2" />
              <line x1="112" y1="95" x2="125" y2="100" stroke="url(#walkGrad3)" strokeWidth="2" />
              <line x1="94" y1="118" x2="90" y2="135" stroke="url(#walkGrad3)" strokeWidth="2" />
              <line x1="106" y1="118" x2="110" y2="135" stroke="url(#walkGrad3)" strokeWidth="2" />
              <path d="M 125 100 L 135 95 L 145 92" stroke="url(#walkGrad3)" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="walkGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="18" fill="none" stroke="url(#walkGrad4)" strokeWidth="2.5" />
              <ellipse cx="100" cy="70" rx="12" ry="6" fill="none" stroke="url(#walkGrad4)" strokeWidth="1.5" opacity="0.7" />
              <rect x="88" y="88" width="24" height="30" rx="3" fill="none" stroke="url(#walkGrad4)" strokeWidth="2.5" />
              <rect x="90" y="90" width="20" height="18" rx="2" fill="none" stroke="url(#walkGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="88" y1="95" x2="75" y2="100" stroke="url(#walkGrad4)" strokeWidth="2" />
              <line x1="112" y1="95" x2="125" y2="100" stroke="url(#walkGrad4)" strokeWidth="2" />
              <line x1="94" y1="118" x2="90" y2="135" stroke="url(#walkGrad4)" strokeWidth="2" />
              <line x1="106" y1="118" x2="110" y2="135" stroke="url(#walkGrad4)" strokeWidth="2" />
              <path d="M 125 100 L 135 95 L 145 92" stroke="url(#walkGrad4)" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Astronaut in EVA suit with tether line</li>
            <li>• Represents: Exploration, hands-on security, direct intervention</li>
            <li>• Simple figure showing space suit and life support</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/astronaut4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Astronaut 4
          </a>
          <a href="/ninja1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

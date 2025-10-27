'use client'

export default function Astronaut4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Astronaut 4 - Moon Base</h1>
          <p className="text-white/70">Lunar station outpost</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="moonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Moon surface */}
              <ellipse cx="100" cy="140" rx="70" ry="12" fill="none" stroke="url(#moonGrad1)" strokeWidth="2" opacity="0.4" />

              {/* Dome structure */}
              <path d="M 70 120 Q 70 90, 100 90 Q 130 90, 130 120" fill="none" stroke="url(#moonGrad1)" strokeWidth="3" />
              <line x1="70" y1="120" x2="130" y2="120" stroke="url(#moonGrad1)" strokeWidth="3" />

              {/* Support structure */}
              <line x1="70" y1="120" x2="70" y2="140" stroke="url(#moonGrad1)" strokeWidth="2" />
              <line x1="130" y1="120" x2="130" y2="140" stroke="url(#moonGrad1)" strokeWidth="2" />

              {/* Windows */}
              <circle cx="90" cy="110" r="4" fill="none" stroke="url(#moonGrad1)" strokeWidth="1.5" />
              <circle cx="110" cy="110" r="4" fill="none" stroke="url(#moonGrad1)" strokeWidth="1.5" />

              {/* Antenna on top */}
              <line x1="100" y1="90" x2="100" y2="75" stroke="url(#moonGrad1)" strokeWidth="2" />
              <circle cx="100" cy="75" r="3" fill="none" stroke="url(#moonGrad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="moonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="140" rx="70" ry="12" fill="none" stroke="url(#moonGrad2)" strokeWidth="2" opacity="0.4" />
              <path d="M 70 120 Q 70 90, 100 90 Q 130 90, 130 120" fill="none" stroke="url(#moonGrad2)" strokeWidth="3" />
              <line x1="70" y1="120" x2="130" y2="120" stroke="url(#moonGrad2)" strokeWidth="3" />
              <line x1="70" y1="120" x2="70" y2="140" stroke="url(#moonGrad2)" strokeWidth="2" />
              <line x1="130" y1="120" x2="130" y2="140" stroke="url(#moonGrad2)" strokeWidth="2" />
              <circle cx="90" cy="110" r="4" fill="none" stroke="url(#moonGrad2)" strokeWidth="1.5" />
              <circle cx="110" cy="110" r="4" fill="none" stroke="url(#moonGrad2)" strokeWidth="1.5" />
              <line x1="100" y1="90" x2="100" y2="75" stroke="url(#moonGrad2)" strokeWidth="2" />
              <circle cx="100" cy="75" r="3" fill="none" stroke="url(#moonGrad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="moonGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="140" rx="70" ry="12" fill="none" stroke="url(#moonGrad3)" strokeWidth="2" opacity="0.4" />
              <path d="M 70 120 Q 70 90, 100 90 Q 130 90, 130 120" fill="none" stroke="url(#moonGrad3)" strokeWidth="3" />
              <line x1="70" y1="120" x2="130" y2="120" stroke="url(#moonGrad3)" strokeWidth="3" />
              <line x1="70" y1="120" x2="70" y2="140" stroke="url(#moonGrad3)" strokeWidth="2" />
              <line x1="130" y1="120" x2="130" y2="140" stroke="url(#moonGrad3)" strokeWidth="2" />
              <circle cx="90" cy="110" r="4" fill="none" stroke="url(#moonGrad3)" strokeWidth="1.5" />
              <circle cx="110" cy="110" r="4" fill="none" stroke="url(#moonGrad3)" strokeWidth="1.5" />
              <line x1="100" y1="90" x2="100" y2="75" stroke="url(#moonGrad3)" strokeWidth="2" />
              <circle cx="100" cy="75" r="3" fill="none" stroke="url(#moonGrad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="moonGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="140" rx="70" ry="12" fill="none" stroke="url(#moonGrad4)" strokeWidth="2" opacity="0.4" />
              <path d="M 70 120 Q 70 90, 100 90 Q 130 90, 130 120" fill="none" stroke="url(#moonGrad4)" strokeWidth="3" />
              <line x1="70" y1="120" x2="130" y2="120" stroke="url(#moonGrad4)" strokeWidth="3" />
              <line x1="70" y1="120" x2="70" y2="140" stroke="url(#moonGrad4)" strokeWidth="2" />
              <line x1="130" y1="120" x2="130" y2="140" stroke="url(#moonGrad4)" strokeWidth="2" />
              <circle cx="90" cy="110" r="4" fill="none" stroke="url(#moonGrad4)" strokeWidth="1.5" />
              <circle cx="110" cy="110" r="4" fill="none" stroke="url(#moonGrad4)" strokeWidth="1.5" />
              <line x1="100" y1="90" x2="100" y2="75" stroke="url(#moonGrad4)" strokeWidth="2" />
              <circle cx="100" cy="75" r="3" fill="none" stroke="url(#moonGrad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Dome habitat on lunar surface</li>
            <li>• Represents: Secure outpost, protected environment, frontier base</li>
            <li>• Simple architectural design with observation windows</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/astronaut3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Astronaut 3
          </a>
          <a href="/astronaut5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

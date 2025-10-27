'use client'

export default function Astronaut3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Astronaut 3 - Satellite Orbit</h1>
          <p className="text-white/70">Orbital monitoring system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="satelliteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Orbital path */}
              <circle cx="100" cy="90" r="50" fill="none" stroke="url(#satelliteGrad1)" strokeWidth="2" opacity="0.4" />

              {/* Satellite body */}
              <rect x="130" y="55" width="20" height="12" rx="2" fill="none" stroke="url(#satelliteGrad1)" strokeWidth="2" />

              {/* Solar panels */}
              <rect x="120" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad1)" strokeWidth="1.5" />
              <rect x="152" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad1)" strokeWidth="1.5" />

              {/* Antenna */}
              <line x1="140" y1="55" x2="140" y2="48" stroke="url(#satelliteGrad1)" strokeWidth="2" />
              <circle cx="140" cy="48" r="2" fill="url(#satelliteGrad1)" />

              {/* Signal waves */}
              <path d="M 130 61 Q 110 70, 100 90" stroke="url(#satelliteGrad1)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="satelliteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="none" stroke="url(#satelliteGrad2)" strokeWidth="2" opacity="0.4" />
              <rect x="130" y="55" width="20" height="12" rx="2" fill="none" stroke="url(#satelliteGrad2)" strokeWidth="2" />
              <rect x="120" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad2)" strokeWidth="1.5" />
              <rect x="152" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad2)" strokeWidth="1.5" />
              <line x1="140" y1="55" x2="140" y2="48" stroke="url(#satelliteGrad2)" strokeWidth="2" />
              <circle cx="140" cy="48" r="2" fill="url(#satelliteGrad2)" />
              <path d="M 130 61 Q 110 70, 100 90" stroke="url(#satelliteGrad2)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="satelliteGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="none" stroke="url(#satelliteGrad3)" strokeWidth="2" opacity="0.4" />
              <rect x="130" y="55" width="20" height="12" rx="2" fill="none" stroke="url(#satelliteGrad3)" strokeWidth="2" />
              <rect x="120" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad3)" strokeWidth="1.5" />
              <rect x="152" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad3)" strokeWidth="1.5" />
              <line x1="140" y1="55" x2="140" y2="48" stroke="url(#satelliteGrad3)" strokeWidth="2" />
              <circle cx="140" cy="48" r="2" fill="url(#satelliteGrad3)" />
              <path d="M 130 61 Q 110 70, 100 90" stroke="url(#satelliteGrad3)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="satelliteGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="50" fill="none" stroke="url(#satelliteGrad4)" strokeWidth="2" opacity="0.4" />
              <rect x="130" y="55" width="20" height="12" rx="2" fill="none" stroke="url(#satelliteGrad4)" strokeWidth="2" />
              <rect x="120" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad4)" strokeWidth="1.5" />
              <rect x="152" y="58" width="8" height="6" fill="none" stroke="url(#satelliteGrad4)" strokeWidth="1.5" />
              <line x1="140" y1="55" x2="140" y2="48" stroke="url(#satelliteGrad4)" strokeWidth="2" />
              <circle cx="140" cy="48" r="2" fill="url(#satelliteGrad4)" />
              <path d="M 130 61 Q 110 70, 100 90" stroke="url(#satelliteGrad4)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Satellite with solar panels in orbit</li>
            <li>• Represents: Continuous monitoring, global coverage, surveillance systems</li>
            <li>• Clean technical design showing orbital mechanics</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/astronaut2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Astronaut 2
          </a>
          <a href="/astronaut4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

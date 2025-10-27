'use client'

export default function Ninja4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ninja 4 - Smoke Bomb</h1>
          <p className="text-white/70">Stealth escape cloud</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="smokeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="80" cy="90" r="25" fill="none" stroke="url(#smokeGrad1)" strokeWidth="3" opacity="0.7" />
              <circle cx="110" cy="85" r="30" fill="none" stroke="url(#smokeGrad1)" strokeWidth="3" opacity="0.5" />
              <circle cx="100" cy="110" r="28" fill="none" stroke="url(#smokeGrad1)" strokeWidth="3" opacity="0.6" />
              <circle cx="130" cy="100" r="22" fill="none" stroke="url(#smokeGrad1)" strokeWidth="3" opacity="0.4" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="smokeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="80" cy="90" r="25" fill="none" stroke="url(#smokeGrad2)" strokeWidth="3" opacity="0.7" />
              <circle cx="110" cy="85" r="30" fill="none" stroke="url(#smokeGrad2)" strokeWidth="3" opacity="0.5" />
              <circle cx="100" cy="110" r="28" fill="none" stroke="url(#smokeGrad2)" strokeWidth="3" opacity="0.6" />
              <circle cx="130" cy="100" r="22" fill="none" stroke="url(#smokeGrad2)" strokeWidth="3" opacity="0.4" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="smokeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="80" cy="90" r="25" fill="none" stroke="url(#smokeGrad3)" strokeWidth="3" opacity="0.7" />
              <circle cx="110" cy="85" r="30" fill="none" stroke="url(#smokeGrad3)" strokeWidth="3" opacity="0.5" />
              <circle cx="100" cy="110" r="28" fill="none" stroke="url(#smokeGrad3)" strokeWidth="3" opacity="0.6" />
              <circle cx="130" cy="100" r="22" fill="none" stroke="url(#smokeGrad3)" strokeWidth="3" opacity="0.4" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="smokeGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="80" cy="90" r="25" fill="none" stroke="url(#smokeGrad4)" strokeWidth="3" opacity="0.7" />
              <circle cx="110" cy="85" r="30" fill="none" stroke="url(#smokeGrad4)" strokeWidth="3" opacity="0.5" />
              <circle cx="100" cy="110" r="28" fill="none" stroke="url(#smokeGrad4)" strokeWidth="3" opacity="0.6" />
              <circle cx="130" cy="100" r="22" fill="none" stroke="url(#smokeGrad4)" strokeWidth="3" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Smoke cloud with overlapping puffs</li>
            <li>• Varying opacity for depth</li>
            <li>• Represents: Obfuscation, stealth escape, hiding tracks</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ninja 3
          </a>
          <a href="/ninja5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

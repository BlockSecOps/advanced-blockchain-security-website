'use client'

export default function Ninja3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ninja 3 - Katana Sword</h1>
          <p className="text-white/70">Precision blade weapon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="katanaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Blade */}
              <line x1="60" y1="140" x2="140" y2="60" stroke="url(#katanaGrad1)" strokeWidth="6" strokeLinecap="round" />

              {/* Handle (tsuka) */}
              <line x1="50" y1="150" x2="65" y2="135" stroke="#1a1a2e" strokeWidth="12" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="url(#katanaGrad1)" strokeWidth="3" strokeLinecap="round" />

              {/* Guard (tsuba) */}
              <rect x="60" y="130" width="15" height="15" rx="2" fill="url(#katanaGrad1)" transform="rotate(-45 67.5 137.5)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="katanaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <line x1="60" y1="140" x2="140" y2="60" stroke="url(#katanaGrad2)" strokeWidth="6" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="#1a1a2e" strokeWidth="12" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="url(#katanaGrad2)" strokeWidth="3" strokeLinecap="round" />
              <rect x="60" y="130" width="15" height="15" rx="2" fill="url(#katanaGrad2)" transform="rotate(-45 67.5 137.5)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="katanaGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <line x1="60" y1="140" x2="140" y2="60" stroke="url(#katanaGrad3)" strokeWidth="6" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="#4a4a5e" strokeWidth="12" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="url(#katanaGrad3)" strokeWidth="3" strokeLinecap="round" />
              <rect x="60" y="130" width="15" height="15" rx="2" fill="url(#katanaGrad3)" transform="rotate(-45 67.5 137.5)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="katanaGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <line x1="60" y1="140" x2="140" y2="60" stroke="url(#katanaGrad4)" strokeWidth="6" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="#1a1a2e" strokeWidth="12" strokeLinecap="round" />
              <line x1="50" y1="150" x2="65" y2="135" stroke="url(#katanaGrad4)" strokeWidth="3" strokeLinecap="round" />
              <rect x="60" y="130" width="15" height="15" rx="2" fill="url(#katanaGrad4)" transform="rotate(-45 67.5 137.5)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Sleek katana sword design</li>
            <li>• Clean diagonal blade</li>
            <li>• Traditional guard (tsuba)</li>
            <li>• Represents: Precision cutting, swift action, disciplined security</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ninja 2
          </a>
          <a href="/ninja4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

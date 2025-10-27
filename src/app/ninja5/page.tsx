'use client'

export default function Ninja5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ninja 5 - Shadow Figure</h1>
          <p className="text-white/70">Crouching stealth silhouette</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shadowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Crouching figure */}
              <circle cx="100" cy="70" r="15" fill="#1a1a2e" stroke="url(#shadowGrad1)" strokeWidth="3" />
              <path d="M 85 85 Q 85 95, 80 105 L 75 125 L 85 125 L 90 105 L 95 95 L 100 105 L 105 125 L 115 125 L 110 105 Q 115 95, 115 85 Z" fill="#1a1a2e" stroke="url(#shadowGrad1)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shadowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="15" fill="#1a1a2e" stroke="url(#shadowGrad2)" strokeWidth="3" />
              <path d="M 85 85 Q 85 95, 80 105 L 75 125 L 85 125 L 90 105 L 95 95 L 100 105 L 105 125 L 115 125 L 110 105 Q 115 95, 115 85 Z" fill="#1a1a2e" stroke="url(#shadowGrad2)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shadowGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="15" fill="#2a2a3e" stroke="url(#shadowGrad3)" strokeWidth="3" />
              <path d="M 85 85 Q 85 95, 80 105 L 75 125 L 85 125 L 90 105 L 95 95 L 100 105 L 105 125 L 115 125 L 110 105 Q 115 95, 115 85 Z" fill="#2a2a3e" stroke="url(#shadowGrad3)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shadowGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="70" r="15" fill="#1a1a2e" stroke="url(#shadowGrad4)" strokeWidth="3" />
              <path d="M 85 85 Q 85 95, 80 105 L 75 125 L 85 125 L 90 105 L 95 95 L 100 105 L 105 125 L 115 125 L 110 105 Q 115 95, 115 85 Z" fill="#1a1a2e" stroke="url(#shadowGrad4)" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Crouching ninja silhouette</li>
            <li>• Simple head and body shape</li>
            <li>• Represents: Stealth position, ready to strike, hidden presence</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ninja 4
          </a>
          <a href="/ghost1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ghost 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

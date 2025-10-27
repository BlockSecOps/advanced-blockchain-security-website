'use client'

export default function Satellite4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Satellite 4 - Signal Broadcast</h1>
          <p className="text-white/70">Radiating transmission waves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Satellite body */}
              <rect x="85" y="85" width="30" height="30" rx="3" fill="none" stroke="url(#sat4Grad1)" strokeWidth="2.5" />

              {/* Solar panels */}
              <rect x="65" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad1)" strokeWidth="2" />
              <rect x="120" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad1)" strokeWidth="2" />

              {/* Radiating signal waves */}
              <path d="M 100 70 Q 85 60, 75 50" stroke="url(#sat4Grad1)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 100 55, 100 45" stroke="url(#sat4Grad1)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 115 60, 125 50" stroke="url(#sat4Grad1)" strokeWidth="2" fill="none" opacity="0.7" />

              {/* Wider signal waves */}
              <path d="M 100 70 Q 75 55, 60 40" stroke="url(#sat4Grad1)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 100 50, 100 35" stroke="url(#sat4Grad1)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 125 55, 140 40" stroke="url(#sat4Grad1)" strokeWidth="1.5" fill="none" opacity="0.4" />

              {/* Antenna */}
              <line x1="100" y1="85" x2="100" y2="70" stroke="url(#sat4Grad1)" strokeWidth="2" />
              <circle cx="100" cy="70" r="2.5" fill="url(#sat4Grad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="85" width="30" height="30" rx="3" fill="none" stroke="url(#sat4Grad2)" strokeWidth="2.5" />
              <rect x="65" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad2)" strokeWidth="2" />
              <rect x="120" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad2)" strokeWidth="2" />
              <path d="M 100 70 Q 85 60, 75 50" stroke="url(#sat4Grad2)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 100 55, 100 45" stroke="url(#sat4Grad2)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 115 60, 125 50" stroke="url(#sat4Grad2)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 75 55, 60 40" stroke="url(#sat4Grad2)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 100 50, 100 35" stroke="url(#sat4Grad2)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 125 55, 140 40" stroke="url(#sat4Grad2)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <line x1="100" y1="85" x2="100" y2="70" stroke="url(#sat4Grad2)" strokeWidth="2" />
              <circle cx="100" cy="70" r="2.5" fill="url(#sat4Grad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="85" width="30" height="30" rx="3" fill="none" stroke="url(#sat4Grad3)" strokeWidth="2.5" />
              <rect x="65" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad3)" strokeWidth="2" />
              <rect x="120" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad3)" strokeWidth="2" />
              <path d="M 100 70 Q 85 60, 75 50" stroke="url(#sat4Grad3)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 100 55, 100 45" stroke="url(#sat4Grad3)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 115 60, 125 50" stroke="url(#sat4Grad3)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 75 55, 60 40" stroke="url(#sat4Grad3)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 100 50, 100 35" stroke="url(#sat4Grad3)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 125 55, 140 40" stroke="url(#sat4Grad3)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <line x1="100" y1="85" x2="100" y2="70" stroke="url(#sat4Grad3)" strokeWidth="2" />
              <circle cx="100" cy="70" r="2.5" fill="url(#sat4Grad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="85" width="30" height="30" rx="3" fill="none" stroke="url(#sat4Grad4)" strokeWidth="2.5" />
              <rect x="65" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad4)" strokeWidth="2" />
              <rect x="120" y="92" width="15" height="16" fill="none" stroke="url(#sat4Grad4)" strokeWidth="2" />
              <path d="M 100 70 Q 85 60, 75 50" stroke="url(#sat4Grad4)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 100 55, 100 45" stroke="url(#sat4Grad4)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 115 60, 125 50" stroke="url(#sat4Grad4)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 100 70 Q 75 55, 60 40" stroke="url(#sat4Grad4)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 100 50, 100 35" stroke="url(#sat4Grad4)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 100 70 Q 125 55, 140 40" stroke="url(#sat4Grad4)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <line x1="100" y1="85" x2="100" y2="70" stroke="url(#sat4Grad4)" strokeWidth="2" />
              <circle cx="100" cy="70" r="2.5" fill="url(#sat4Grad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Satellite broadcasting radiating signal waves</li>
            <li>• Represents: Data transmission, signal coverage, broadcasting</li>
            <li>• Multiple wave layers showing signal propagation</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/satellite3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Satellite 3
          </a>
          <a href="/satellite5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Satellite 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

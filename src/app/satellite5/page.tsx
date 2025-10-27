'use client'

export default function Satellite5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Satellite 5 - Observation Platform</h1>
          <p className="text-white/70">Earth monitoring sensor array</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Main satellite body */}
              <rect x="80" y="75" width="40" height="35" rx="3" fill="none" stroke="url(#sat5Grad1)" strokeWidth="2.5" />

              {/* Solar panel left */}
              <rect x="45" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad1)" strokeWidth="2" />
              <line x1="50" y1="87" x2="70" y2="87" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="92" x2="70" y2="92" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="97" x2="70" y2="97" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />

              {/* Solar panel right */}
              <rect x="125" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad1)" strokeWidth="2" />
              <line x1="130" y1="87" x2="150" y2="87" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="92" x2="150" y2="92" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="97" x2="150" y2="97" stroke="url(#sat5Grad1)" strokeWidth="1" opacity="0.5" />

              {/* Camera/sensor lens pointing down */}
              <circle cx="100" cy="110" r="8" fill="none" stroke="url(#sat5Grad1)" strokeWidth="2" />
              <circle cx="100" cy="110" r="4" fill="none" stroke="url(#sat5Grad1)" strokeWidth="1.5" />

              {/* Scan beam */}
              <path d="M 90 118 L 75 135" stroke="url(#sat5Grad1)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 100 118 L 100 140" stroke="url(#sat5Grad1)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 118 L 125 135" stroke="url(#sat5Grad1)" strokeWidth="1.5" opacity="0.5" />

              {/* Antenna */}
              <line x1="100" y1="75" x2="100" y2="60" stroke="url(#sat5Grad1)" strokeWidth="2" />
              <line x1="95" y1="60" x2="105" y2="60" stroke="url(#sat5Grad1)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="80" y="75" width="40" height="35" rx="3" fill="none" stroke="url(#sat5Grad2)" strokeWidth="2.5" />
              <rect x="45" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad2)" strokeWidth="2" />
              <line x1="50" y1="87" x2="70" y2="87" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="92" x2="70" y2="92" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="97" x2="70" y2="97" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <rect x="125" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad2)" strokeWidth="2" />
              <line x1="130" y1="87" x2="150" y2="87" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="92" x2="150" y2="92" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="97" x2="150" y2="97" stroke="url(#sat5Grad2)" strokeWidth="1" opacity="0.5" />
              <circle cx="100" cy="110" r="8" fill="none" stroke="url(#sat5Grad2)" strokeWidth="2" />
              <circle cx="100" cy="110" r="4" fill="none" stroke="url(#sat5Grad2)" strokeWidth="1.5" />
              <path d="M 90 118 L 75 135" stroke="url(#sat5Grad2)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 100 118 L 100 140" stroke="url(#sat5Grad2)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 118 L 125 135" stroke="url(#sat5Grad2)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="75" x2="100" y2="60" stroke="url(#sat5Grad2)" strokeWidth="2" />
              <line x1="95" y1="60" x2="105" y2="60" stroke="url(#sat5Grad2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="80" y="75" width="40" height="35" rx="3" fill="none" stroke="url(#sat5Grad3)" strokeWidth="2.5" />
              <rect x="45" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad3)" strokeWidth="2" />
              <line x1="50" y1="87" x2="70" y2="87" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="92" x2="70" y2="92" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="97" x2="70" y2="97" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <rect x="125" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad3)" strokeWidth="2" />
              <line x1="130" y1="87" x2="150" y2="87" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="92" x2="150" y2="92" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="97" x2="150" y2="97" stroke="url(#sat5Grad3)" strokeWidth="1" opacity="0.5" />
              <circle cx="100" cy="110" r="8" fill="none" stroke="url(#sat5Grad3)" strokeWidth="2" />
              <circle cx="100" cy="110" r="4" fill="none" stroke="url(#sat5Grad3)" strokeWidth="1.5" />
              <path d="M 90 118 L 75 135" stroke="url(#sat5Grad3)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 100 118 L 100 140" stroke="url(#sat5Grad3)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 118 L 125 135" stroke="url(#sat5Grad3)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="75" x2="100" y2="60" stroke="url(#sat5Grad3)" strokeWidth="2" />
              <line x1="95" y1="60" x2="105" y2="60" stroke="url(#sat5Grad3)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="80" y="75" width="40" height="35" rx="3" fill="none" stroke="url(#sat5Grad4)" strokeWidth="2.5" />
              <rect x="45" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad4)" strokeWidth="2" />
              <line x1="50" y1="87" x2="70" y2="87" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="92" x2="70" y2="92" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="97" x2="70" y2="97" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <rect x="125" y="82" width="30" height="20" fill="none" stroke="url(#sat5Grad4)" strokeWidth="2" />
              <line x1="130" y1="87" x2="150" y2="87" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="92" x2="150" y2="92" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="130" y1="97" x2="150" y2="97" stroke="url(#sat5Grad4)" strokeWidth="1" opacity="0.5" />
              <circle cx="100" cy="110" r="8" fill="none" stroke="url(#sat5Grad4)" strokeWidth="2" />
              <circle cx="100" cy="110" r="4" fill="none" stroke="url(#sat5Grad4)" strokeWidth="1.5" />
              <path d="M 90 118 L 75 135" stroke="url(#sat5Grad4)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 100 118 L 100 140" stroke="url(#sat5Grad4)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 118 L 125 135" stroke="url(#sat5Grad4)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="75" x2="100" y2="60" stroke="url(#sat5Grad4)" strokeWidth="2" />
              <line x1="95" y1="60" x2="105" y2="60" stroke="url(#sat5Grad4)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Earth observation satellite with downward-facing sensor</li>
            <li>• Represents: Surveillance, remote sensing, threat detection</li>
            <li>• Scan beam showing active monitoring coverage</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/satellite4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Satellite 4
          </a>
          <a href="/ninja1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

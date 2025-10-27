'use client'

export default function Satellite3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Satellite 3 - GPS Constellation</h1>
          <p className="text-white/70">Global positioning network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat3Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Earth/center point */}
              <circle cx="100" cy="100" r="15" fill="none" stroke="url(#sat3Grad1)" strokeWidth="2" />

              {/* Orbital rings */}
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#sat3Grad1)" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#sat3Grad1)" strokeWidth="1.5" opacity="0.3" />

              {/* Satellites at different positions */}
              <rect x="95" y="45" width="10" height="8" fill="none" stroke="url(#sat3Grad1)" strokeWidth="1.5" />
              <line x1="92" y1="49" x2="88" y2="49" stroke="url(#sat3Grad1)" strokeWidth="1" />
              <line x1="108" y1="49" x2="112" y2="49" stroke="url(#sat3Grad1)" strokeWidth="1" />

              <rect x="140" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad1)" strokeWidth="1.5" />
              <line x1="137" y1="99" x2="133" y2="99" stroke="url(#sat3Grad1)" strokeWidth="1" />
              <line x1="153" y1="99" x2="157" y2="99" stroke="url(#sat3Grad1)" strokeWidth="1" />

              <rect x="45" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad1)" strokeWidth="1.5" />
              <line x1="42" y1="99" x2="38" y2="99" stroke="url(#sat3Grad1)" strokeWidth="1" />
              <line x1="58" y1="99" x2="62" y2="99" stroke="url(#sat3Grad1)" strokeWidth="1" />

              {/* Signal lines */}
              <line x1="100" y1="53" x2="100" y2="85" stroke="url(#sat3Grad1)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="145" y1="99" x2="115" y2="100" stroke="url(#sat3Grad1)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="50" y1="99" x2="85" y2="100" stroke="url(#sat3Grad1)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat3Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="15" fill="none" stroke="url(#sat3Grad2)" strokeWidth="2" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#sat3Grad2)" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#sat3Grad2)" strokeWidth="1.5" opacity="0.3" />
              <rect x="95" y="45" width="10" height="8" fill="none" stroke="url(#sat3Grad2)" strokeWidth="1.5" />
              <line x1="92" y1="49" x2="88" y2="49" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <line x1="108" y1="49" x2="112" y2="49" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <rect x="140" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad2)" strokeWidth="1.5" />
              <line x1="137" y1="99" x2="133" y2="99" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <line x1="153" y1="99" x2="157" y2="99" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <rect x="45" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad2)" strokeWidth="1.5" />
              <line x1="42" y1="99" x2="38" y2="99" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <line x1="58" y1="99" x2="62" y2="99" stroke="url(#sat3Grad2)" strokeWidth="1" />
              <line x1="100" y1="53" x2="100" y2="85" stroke="url(#sat3Grad2)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="145" y1="99" x2="115" y2="100" stroke="url(#sat3Grad2)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="50" y1="99" x2="85" y2="100" stroke="url(#sat3Grad2)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat3Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="15" fill="none" stroke="url(#sat3Grad3)" strokeWidth="2" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#sat3Grad3)" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#sat3Grad3)" strokeWidth="1.5" opacity="0.3" />
              <rect x="95" y="45" width="10" height="8" fill="none" stroke="url(#sat3Grad3)" strokeWidth="1.5" />
              <line x1="92" y1="49" x2="88" y2="49" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <line x1="108" y1="49" x2="112" y2="49" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <rect x="140" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad3)" strokeWidth="1.5" />
              <line x1="137" y1="99" x2="133" y2="99" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <line x1="153" y1="99" x2="157" y2="99" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <rect x="45" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad3)" strokeWidth="1.5" />
              <line x1="42" y1="99" x2="38" y2="99" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <line x1="58" y1="99" x2="62" y2="99" stroke="url(#sat3Grad3)" strokeWidth="1" />
              <line x1="100" y1="53" x2="100" y2="85" stroke="url(#sat3Grad3)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="145" y1="99" x2="115" y2="100" stroke="url(#sat3Grad3)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="50" y1="99" x2="85" y2="100" stroke="url(#sat3Grad3)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat3Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="15" fill="none" stroke="url(#sat3Grad4)" strokeWidth="2" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#sat3Grad4)" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#sat3Grad4)" strokeWidth="1.5" opacity="0.3" />
              <rect x="95" y="45" width="10" height="8" fill="none" stroke="url(#sat3Grad4)" strokeWidth="1.5" />
              <line x1="92" y1="49" x2="88" y2="49" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <line x1="108" y1="49" x2="112" y2="49" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <rect x="140" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad4)" strokeWidth="1.5" />
              <line x1="137" y1="99" x2="133" y2="99" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <line x1="153" y1="99" x2="157" y2="99" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <rect x="45" y="95" width="10" height="8" fill="none" stroke="url(#sat3Grad4)" strokeWidth="1.5" />
              <line x1="42" y1="99" x2="38" y2="99" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <line x1="58" y1="99" x2="62" y2="99" stroke="url(#sat3Grad4)" strokeWidth="1" />
              <line x1="100" y1="53" x2="100" y2="85" stroke="url(#sat3Grad4)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="145" y1="99" x2="115" y2="100" stroke="url(#sat3Grad4)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="50" y1="99" x2="85" y2="100" stroke="url(#sat3Grad4)" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Multiple satellites in orbital constellation</li>
            <li>• Represents: Global positioning, triangulation, network coverage</li>
            <li>• Signal lines showing triangulation to center point</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/satellite2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Satellite 2
          </a>
          <a href="/satellite4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Satellite 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

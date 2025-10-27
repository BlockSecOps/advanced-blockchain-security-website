'use client'

export default function Contract3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Contract 3 - State Machine</h1>
          <p className="text-white/70">Contract state transitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract3Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* State circles */}
              <circle cx="70" cy="80" r="15" fill="none" stroke="url(#contract3Grad1)" strokeWidth="2.5" />
              <circle cx="130" cy="80" r="15" fill="none" stroke="url(#contract3Grad1)" strokeWidth="2.5" />
              <circle cx="100" cy="130" r="15" fill="none" stroke="url(#contract3Grad1)" strokeWidth="2.5" />

              {/* Transition arrows */}
              <line x1="85" y1="80" x2="115" y2="80" stroke="url(#contract3Grad1)" strokeWidth="2" />
              <path d="M 115 80 L 108 77 L 108 83 Z" fill="url(#contract3Grad1)" />

              <line x1="125" y1="92" x2="108" y2="120" stroke="url(#contract3Grad1)" strokeWidth="2" />
              <path d="M 108 120 L 112 113 L 106 111 Z" fill="url(#contract3Grad1)" />

              <line x1="92" y1="120" x2="75" y2="92" stroke="url(#contract3Grad1)" strokeWidth="2" />
              <path d="M 75 92 L 79 99 L 85 97 Z" fill="url(#contract3Grad1)" />

              {/* State labels */}
              <circle cx="70" cy="80" r="5" fill="url(#contract3Grad1)" opacity="0.5" />
              <circle cx="130" cy="80" r="5" fill="url(#contract3Grad1)" opacity="0.5" />
              <circle cx="100" cy="130" r="5" fill="url(#contract3Grad1)" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract3Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="70" cy="80" r="15" fill="none" stroke="url(#contract3Grad2)" strokeWidth="2.5" />
              <circle cx="130" cy="80" r="15" fill="none" stroke="url(#contract3Grad2)" strokeWidth="2.5" />
              <circle cx="100" cy="130" r="15" fill="none" stroke="url(#contract3Grad2)" strokeWidth="2.5" />
              <line x1="85" y1="80" x2="115" y2="80" stroke="url(#contract3Grad2)" strokeWidth="2" />
              <path d="M 115 80 L 108 77 L 108 83 Z" fill="url(#contract3Grad2)" />
              <line x1="125" y1="92" x2="108" y2="120" stroke="url(#contract3Grad2)" strokeWidth="2" />
              <path d="M 108 120 L 112 113 L 106 111 Z" fill="url(#contract3Grad2)" />
              <line x1="92" y1="120" x2="75" y2="92" stroke="url(#contract3Grad2)" strokeWidth="2" />
              <path d="M 75 92 L 79 99 L 85 97 Z" fill="url(#contract3Grad2)" />
              <circle cx="70" cy="80" r="5" fill="url(#contract3Grad2)" opacity="0.5" />
              <circle cx="130" cy="80" r="5" fill="url(#contract3Grad2)" opacity="0.5" />
              <circle cx="100" cy="130" r="5" fill="url(#contract3Grad2)" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract3Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="70" cy="80" r="15" fill="none" stroke="url(#contract3Grad3)" strokeWidth="2.5" />
              <circle cx="130" cy="80" r="15" fill="none" stroke="url(#contract3Grad3)" strokeWidth="2.5" />
              <circle cx="100" cy="130" r="15" fill="none" stroke="url(#contract3Grad3)" strokeWidth="2.5" />
              <line x1="85" y1="80" x2="115" y2="80" stroke="url(#contract3Grad3)" strokeWidth="2" />
              <path d="M 115 80 L 108 77 L 108 83 Z" fill="url(#contract3Grad3)" />
              <line x1="125" y1="92" x2="108" y2="120" stroke="url(#contract3Grad3)" strokeWidth="2" />
              <path d="M 108 120 L 112 113 L 106 111 Z" fill="url(#contract3Grad3)" />
              <line x1="92" y1="120" x2="75" y2="92" stroke="url(#contract3Grad3)" strokeWidth="2" />
              <path d="M 75 92 L 79 99 L 85 97 Z" fill="url(#contract3Grad3)" />
              <circle cx="70" cy="80" r="5" fill="url(#contract3Grad3)" opacity="0.5" />
              <circle cx="130" cy="80" r="5" fill="url(#contract3Grad3)" opacity="0.5" />
              <circle cx="100" cy="130" r="5" fill="url(#contract3Grad3)" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract3Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="70" cy="80" r="15" fill="none" stroke="url(#contract3Grad4)" strokeWidth="2.5" />
              <circle cx="130" cy="80" r="15" fill="none" stroke="url(#contract3Grad4)" strokeWidth="2.5" />
              <circle cx="100" cy="130" r="15" fill="none" stroke="url(#contract3Grad4)" strokeWidth="2.5" />
              <line x1="85" y1="80" x2="115" y2="80" stroke="url(#contract3Grad4)" strokeWidth="2" />
              <path d="M 115 80 L 108 77 L 108 83 Z" fill="url(#contract3Grad4)" />
              <line x1="125" y1="92" x2="108" y2="120" stroke="url(#contract3Grad4)" strokeWidth="2" />
              <path d="M 108 120 L 112 113 L 106 111 Z" fill="url(#contract3Grad4)" />
              <line x1="92" y1="120" x2="75" y2="92" stroke="url(#contract3Grad4)" strokeWidth="2" />
              <path d="M 75 92 L 79 99 L 85 97 Z" fill="url(#contract3Grad4)" />
              <circle cx="70" cy="80" r="5" fill="url(#contract3Grad4)" opacity="0.5" />
              <circle cx="130" cy="80" r="5" fill="url(#contract3Grad4)" opacity="0.5" />
              <circle cx="100" cy="130" r="5" fill="url(#contract3Grad4)" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• State machine with transition arrows</li>
            <li>• Represents: Contract lifecycle, state changes, workflow automation</li>
            <li>• Three states showing cyclic transitions</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contract2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Contract 2
          </a>
          <a href="/contract4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Contract 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

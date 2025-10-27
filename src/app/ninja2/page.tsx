'use client'

export default function Ninja2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ninja 2 - Shuriken Star</h1>
          <p className="text-white/70">Throwing star weapon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shurikenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* 4-pointed shuriken */}
              <path d="M 100 50 L 110 85 L 100 90 L 90 85 Z" fill="url(#shurikenGrad1)" stroke="url(#shurikenGrad1)" strokeWidth="2" />
              <path d="M 150 100 L 115 110 L 110 100 L 115 90 Z" fill="url(#shurikenGrad1)" stroke="url(#shurikenGrad1)" strokeWidth="2" />
              <path d="M 100 150 L 90 115 L 100 110 L 110 115 Z" fill="url(#shurikenGrad1)" stroke="url(#shurikenGrad1)" strokeWidth="2" />
              <path d="M 50 100 L 85 90 L 90 100 L 85 110 Z" fill="url(#shurikenGrad1)" stroke="url(#shurikenGrad1)" strokeWidth="2" />

              {/* Center circle */}
              <circle cx="100" cy="100" r="12" fill="#1a1a2e" stroke="url(#shurikenGrad1)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shurikenGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 85 L 100 90 L 90 85 Z" fill="url(#shurikenGrad2)" stroke="url(#shurikenGrad2)" strokeWidth="2" />
              <path d="M 150 100 L 115 110 L 110 100 L 115 90 Z" fill="url(#shurikenGrad2)" stroke="url(#shurikenGrad2)" strokeWidth="2" />
              <path d="M 100 150 L 90 115 L 100 110 L 110 115 Z" fill="url(#shurikenGrad2)" stroke="url(#shurikenGrad2)" strokeWidth="2" />
              <path d="M 50 100 L 85 90 L 90 100 L 85 110 Z" fill="url(#shurikenGrad2)" stroke="url(#shurikenGrad2)" strokeWidth="2" />
              <circle cx="100" cy="100" r="12" fill="#1a1a2e" stroke="url(#shurikenGrad2)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shurikenGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 85 L 100 90 L 90 85 Z" fill="url(#shurikenGrad3)" stroke="url(#shurikenGrad3)" strokeWidth="2" />
              <path d="M 150 100 L 115 110 L 110 100 L 115 90 Z" fill="url(#shurikenGrad3)" stroke="url(#shurikenGrad3)" strokeWidth="2" />
              <path d="M 100 150 L 90 115 L 100 110 L 110 115 Z" fill="url(#shurikenGrad3)" stroke="url(#shurikenGrad3)" strokeWidth="2" />
              <path d="M 50 100 L 85 90 L 90 100 L 85 110 Z" fill="url(#shurikenGrad3)" stroke="url(#shurikenGrad3)" strokeWidth="2" />
              <circle cx="100" cy="100" r="12" fill="white" stroke="url(#shurikenGrad3)" strokeWidth="3" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shurikenGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 85 L 100 90 L 90 85 Z" fill="url(#shurikenGrad4)" stroke="url(#shurikenGrad4)" strokeWidth="2" />
              <path d="M 150 100 L 115 110 L 110 100 L 115 90 Z" fill="url(#shurikenGrad4)" stroke="url(#shurikenGrad4)" strokeWidth="2" />
              <path d="M 100 150 L 90 115 L 100 110 L 110 115 Z" fill="url(#shurikenGrad4)" stroke="url(#shurikenGrad4)" strokeWidth="2" />
              <path d="M 50 100 L 85 90 L 90 100 L 85 110 Z" fill="url(#shurikenGrad4)" stroke="url(#shurikenGrad4)" strokeWidth="2" />
              <circle cx="100" cy="100" r="12" fill="#1a1a2e" stroke="url(#shurikenGrad4)" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• 4-pointed throwing star (shuriken)</li>
            <li>• Sharp, precise geometry</li>
            <li>• Center void for balance</li>
            <li>• Represents: Precision attacks, multi-vector defense, rapid deployment</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ninja 1
          </a>
          <a href="/ninja3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

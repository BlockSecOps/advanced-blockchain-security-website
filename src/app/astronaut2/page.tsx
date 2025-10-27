'use client'

export default function Astronaut2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Astronaut 2 - Rocket Ship</h1>
          <p className="text-white/70">Launch trajectory</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rocketGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Rocket body */}
              <path d="M 100 50 L 110 70 L 110 115 L 100 120 L 90 115 L 90 70 Z" fill="none" stroke="url(#rocketGrad1)" strokeWidth="3" />

              {/* Nose cone */}
              <path d="M 90 70 L 100 50 L 110 70" fill="none" stroke="url(#rocketGrad1)" strokeWidth="3" />

              {/* Window */}
              <circle cx="100" cy="85" r="6" fill="none" stroke="url(#rocketGrad1)" strokeWidth="2" />

              {/* Fins */}
              <path d="M 90 115 L 75 125 L 90 120 Z" fill="none" stroke="url(#rocketGrad1)" strokeWidth="2" />
              <path d="M 110 115 L 125 125 L 110 120 Z" fill="none" stroke="url(#rocketGrad1)" strokeWidth="2" />

              {/* Exhaust flame */}
              <path d="M 95 120 L 90 135 M 100 120 L 100 140 M 105 120 L 110 135" stroke="url(#rocketGrad1)" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rocketGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 70 L 110 115 L 100 120 L 90 115 L 90 70 Z" fill="none" stroke="url(#rocketGrad2)" strokeWidth="3" />
              <path d="M 90 70 L 100 50 L 110 70" fill="none" stroke="url(#rocketGrad2)" strokeWidth="3" />
              <circle cx="100" cy="85" r="6" fill="none" stroke="url(#rocketGrad2)" strokeWidth="2" />
              <path d="M 90 115 L 75 125 L 90 120 Z" fill="none" stroke="url(#rocketGrad2)" strokeWidth="2" />
              <path d="M 110 115 L 125 125 L 110 120 Z" fill="none" stroke="url(#rocketGrad2)" strokeWidth="2" />
              <path d="M 95 120 L 90 135 M 100 120 L 100 140 M 105 120 L 110 135" stroke="url(#rocketGrad2)" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rocketGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 70 L 110 115 L 100 120 L 90 115 L 90 70 Z" fill="none" stroke="url(#rocketGrad3)" strokeWidth="3" />
              <path d="M 90 70 L 100 50 L 110 70" fill="none" stroke="url(#rocketGrad3)" strokeWidth="3" />
              <circle cx="100" cy="85" r="6" fill="none" stroke="url(#rocketGrad3)" strokeWidth="2" />
              <path d="M 90 115 L 75 125 L 90 120 Z" fill="none" stroke="url(#rocketGrad3)" strokeWidth="2" />
              <path d="M 110 115 L 125 125 L 110 120 Z" fill="none" stroke="url(#rocketGrad3)" strokeWidth="2" />
              <path d="M 95 120 L 90 135 M 100 120 L 100 140 M 105 120 L 110 135" stroke="url(#rocketGrad3)" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rocketGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 110 70 L 110 115 L 100 120 L 90 115 L 90 70 Z" fill="none" stroke="url(#rocketGrad4)" strokeWidth="3" />
              <path d="M 90 70 L 100 50 L 110 70" fill="none" stroke="url(#rocketGrad4)" strokeWidth="3" />
              <circle cx="100" cy="85" r="6" fill="none" stroke="url(#rocketGrad4)" strokeWidth="2" />
              <path d="M 90 115 L 75 125 L 90 120 Z" fill="none" stroke="url(#rocketGrad4)" strokeWidth="2" />
              <path d="M 110 115 L 125 125 L 110 120 Z" fill="none" stroke="url(#rocketGrad4)" strokeWidth="2" />
              <path d="M 95 120 L 90 135 M 100 120 L 100 140 M 105 120 L 110 135" stroke="url(#rocketGrad4)" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic rocket ship with exhaust trail</li>
            <li>• Represents: Fast deployment, rapid ascent, launching initiatives</li>
            <li>• Simple geometric rocket design</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/astronaut1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Astronaut 1
          </a>
          <a href="/astronaut3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

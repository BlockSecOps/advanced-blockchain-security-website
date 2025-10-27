'use client'

export default function Ghost1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ghost 1 - Classic Ghost</h1>
          <p className="text-white/70">Floating spirit with wavy tail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ghostGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Ghost body with wavy bottom */}
              <path d="M 70 90 Q 70 60, 100 60 Q 130 60, 130 90 L 130 120 Q 127.5 115, 125 120 Q 122.5 125, 120 120 Q 117.5 115, 115 120 Q 112.5 125, 110 120 Q 107.5 115, 105 120 Q 102.5 125, 100 120 Q 97.5 115, 95 120 Q 92.5 125, 90 120 Q 87.5 115, 85 120 Q 82.5 125, 80 120 Q 77.5 115, 75 120 Q 72.5 125, 70 120 Q 70 115, 70 90" fill="none" stroke="url(#ghostGrad1)" strokeWidth="3" opacity="0.8" />

              {/* Eyes */}
              <circle cx="90" cy="85" r="5" fill="url(#ghostGrad1)" />
              <circle cx="110" cy="85" r="5" fill="url(#ghostGrad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ghostGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 70 90 Q 70 60, 100 60 Q 130 60, 130 90 L 130 120 Q 127.5 115, 125 120 Q 122.5 125, 120 120 Q 117.5 115, 115 120 Q 112.5 125, 110 120 Q 107.5 115, 105 120 Q 102.5 125, 100 120 Q 97.5 115, 95 120 Q 92.5 125, 90 120 Q 87.5 115, 85 120 Q 82.5 125, 80 120 Q 77.5 115, 75 120 Q 72.5 125, 70 120 Q 70 115, 70 90" fill="none" stroke="url(#ghostGrad2)" strokeWidth="3" opacity="0.8" />
              <circle cx="90" cy="85" r="5" fill="url(#ghostGrad2)" />
              <circle cx="110" cy="85" r="5" fill="url(#ghostGrad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ghostGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 70 90 Q 70 60, 100 60 Q 130 60, 130 90 L 130 120 Q 127.5 115, 125 120 Q 122.5 125, 120 120 Q 117.5 115, 115 120 Q 112.5 125, 110 120 Q 107.5 115, 105 120 Q 102.5 125, 100 120 Q 97.5 115, 95 120 Q 92.5 125, 90 120 Q 87.5 115, 85 120 Q 82.5 125, 80 120 Q 77.5 115, 75 120 Q 72.5 125, 70 120 Q 70 115, 70 90" fill="none" stroke="url(#ghostGrad3)" strokeWidth="3" opacity="0.8" />
              <circle cx="90" cy="85" r="5" fill="url(#ghostGrad3)" />
              <circle cx="110" cy="85" r="5" fill="url(#ghostGrad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ghostGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 70 90 Q 70 60, 100 60 Q 130 60, 130 90 L 130 120 Q 127.5 115, 125 120 Q 122.5 125, 120 120 Q 117.5 115, 115 120 Q 112.5 125, 110 120 Q 107.5 115, 105 120 Q 102.5 125, 100 120 Q 97.5 115, 95 120 Q 92.5 125, 90 120 Q 87.5 115, 85 120 Q 82.5 125, 80 120 Q 77.5 115, 75 120 Q 72.5 125, 70 120 Q 70 115, 70 90" fill="none" stroke="url(#ghostGrad4)" strokeWidth="3" opacity="0.8" />
              <circle cx="90" cy="85" r="5" fill="url(#ghostGrad4)" />
              <circle cx="110" cy="85" r="5" fill="url(#ghostGrad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic ghost with rounded top</li>
            <li>• Wavy bottom tail</li>
            <li>• Two simple eyes</li>
            <li>• Represents: Invisible threats, phantom processes, undetectable monitoring</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ninja5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ninja 5
          </a>
          <a href="/ghost2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ghost 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Solar3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Solar 3 - Ringed Planet</h1>
          <p className="text-white/70">Saturn-style gas giant</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar3Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Planet */}
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#solar3Grad1)" strokeWidth="3" />

              {/* Atmospheric bands */}
              <ellipse cx="100" cy="95" rx="28" ry="5" fill="none" stroke="url(#solar3Grad1)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="105" rx="28" ry="5" fill="none" stroke="url(#solar3Grad1)" strokeWidth="1.5" opacity="0.5" />

              {/* Rings */}
              <ellipse cx="100" cy="100" rx="55" ry="15" fill="none" stroke="url(#solar3Grad1)" strokeWidth="2.5" opacity="0.8" />
              <ellipse cx="100" cy="100" rx="60" ry="17" fill="none" stroke="url(#solar3Grad1)" strokeWidth="2" opacity="0.5" />

              {/* Ring shadow on planet */}
              <path d="M 75 100 Q 100 103, 125 100" fill="none" stroke="url(#solar3Grad1)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar3Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#solar3Grad2)" strokeWidth="3" />
              <ellipse cx="100" cy="95" rx="28" ry="5" fill="none" stroke="url(#solar3Grad2)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="105" rx="28" ry="5" fill="none" stroke="url(#solar3Grad2)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="100" rx="55" ry="15" fill="none" stroke="url(#solar3Grad2)" strokeWidth="2.5" opacity="0.8" />
              <ellipse cx="100" cy="100" rx="60" ry="17" fill="none" stroke="url(#solar3Grad2)" strokeWidth="2" opacity="0.5" />
              <path d="M 75 100 Q 100 103, 125 100" fill="none" stroke="url(#solar3Grad2)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar3Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#solar3Grad3)" strokeWidth="3" />
              <ellipse cx="100" cy="95" rx="28" ry="5" fill="none" stroke="url(#solar3Grad3)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="105" rx="28" ry="5" fill="none" stroke="url(#solar3Grad3)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="100" rx="55" ry="15" fill="none" stroke="url(#solar3Grad3)" strokeWidth="2.5" opacity="0.8" />
              <ellipse cx="100" cy="100" rx="60" ry="17" fill="none" stroke="url(#solar3Grad3)" strokeWidth="2" opacity="0.5" />
              <path d="M 75 100 Q 100 103, 125 100" fill="none" stroke="url(#solar3Grad3)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar3Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#solar3Grad4)" strokeWidth="3" />
              <ellipse cx="100" cy="95" rx="28" ry="5" fill="none" stroke="url(#solar3Grad4)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="105" rx="28" ry="5" fill="none" stroke="url(#solar3Grad4)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="100" cy="100" rx="55" ry="15" fill="none" stroke="url(#solar3Grad4)" strokeWidth="2.5" opacity="0.8" />
              <ellipse cx="100" cy="100" rx="60" ry="17" fill="none" stroke="url(#solar3Grad4)" strokeWidth="2" opacity="0.5" />
              <path d="M 75 100 Q 100 103, 125 100" fill="none" stroke="url(#solar3Grad4)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Gas giant with distinctive ring system</li>
            <li>• Represents: Complex systems, layered security, protective rings</li>
            <li>• Atmospheric bands showing system structure</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/solar2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Solar 2
          </a>
          <a href="/solar4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Solar 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Solar4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Solar 4 - Asteroid Belt</h1>
          <p className="text-white/70">Debris field barrier</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Central sun */}
              <circle cx="100" cy="100" r="12" fill="url(#solar4Grad1)" opacity="0.6" />

              {/* Asteroid belt ring */}
              <circle cx="100" cy="100" r="45" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />

              {/* Asteroids scattered along belt */}
              <circle cx="145" cy="100" r="3" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="138" cy="115" r="2.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="125" cy="128" r="2" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="110" cy="135" r="3.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="90" cy="135" r="2.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="75" cy="128" r="3" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="62" cy="115" r="2" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="55" cy="100" r="2.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="62" cy="85" r="3.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="75" cy="72" r="2" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="90" cy="65" r="2.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="110" cy="65" r="3" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="125" cy="72" r="2.5" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
              <circle cx="138" cy="85" r="3" fill="none" stroke="url(#solar4Grad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="12" fill="url(#solar4Grad2)" opacity="0.6" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
              <circle cx="145" cy="100" r="3" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="138" cy="115" r="2.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="125" cy="128" r="2" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="110" cy="135" r="3.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="90" cy="135" r="2.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="75" cy="128" r="3" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="62" cy="115" r="2" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="55" cy="100" r="2.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="62" cy="85" r="3.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="75" cy="72" r="2" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="90" cy="65" r="2.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="110" cy="65" r="3" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="125" cy="72" r="2.5" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
              <circle cx="138" cy="85" r="3" fill="none" stroke="url(#solar4Grad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="12" fill="url(#solar4Grad3)" opacity="0.6" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
              <circle cx="145" cy="100" r="3" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="138" cy="115" r="2.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="125" cy="128" r="2" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="110" cy="135" r="3.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="90" cy="135" r="2.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="75" cy="128" r="3" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="62" cy="115" r="2" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="55" cy="100" r="2.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="62" cy="85" r="3.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="75" cy="72" r="2" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="90" cy="65" r="2.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="110" cy="65" r="3" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="125" cy="72" r="2.5" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
              <circle cx="138" cy="85" r="3" fill="none" stroke="url(#solar4Grad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="12" fill="url(#solar4Grad4)" opacity="0.6" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
              <circle cx="145" cy="100" r="3" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="138" cy="115" r="2.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="125" cy="128" r="2" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="110" cy="135" r="3.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="90" cy="135" r="2.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="75" cy="128" r="3" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="62" cy="115" r="2" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="55" cy="100" r="2.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="62" cy="85" r="3.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="75" cy="72" r="2" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="90" cy="65" r="2.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="110" cy="65" r="3" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="125" cy="72" r="2.5" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
              <circle cx="138" cy="85" r="3" fill="none" stroke="url(#solar4Grad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Scattered asteroids forming protective belt</li>
            <li>• Represents: Distributed defenses, debris field barriers, perimeter protection</li>
            <li>• Varying asteroid sizes showing chaotic natural barrier</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/solar3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Solar 3
          </a>
          <a href="/solar5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Solar 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Satellite1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Satellite 1 - Classic Orbiter</h1>
          <p className="text-white/70">Traditional communications satellite</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Main body */}
              <rect x="85" y="80" width="30" height="40" rx="2" fill="none" stroke="url(#sat1Grad1)" strokeWidth="2.5" />

              {/* Left solar panel */}
              <rect x="50" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad1)" strokeWidth="2" />
              <line x1="55" y1="90" x2="75" y2="90" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="95" x2="75" y2="95" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="100" x2="75" y2="100" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="105" x2="75" y2="105" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="110" x2="75" y2="110" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />

              {/* Right solar panel */}
              <rect x="120" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad1)" strokeWidth="2" />
              <line x1="125" y1="90" x2="145" y2="90" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="95" x2="145" y2="95" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="100" x2="145" y2="100" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="105" x2="145" y2="105" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="110" x2="145" y2="110" stroke="url(#sat1Grad1)" strokeWidth="1" opacity="0.5" />

              {/* Antenna */}
              <line x1="100" y1="80" x2="100" y2="65" stroke="url(#sat1Grad1)" strokeWidth="2" />
              <circle cx="100" cy="65" r="3" fill="url(#sat1Grad1)" />

              {/* Dish */}
              <ellipse cx="100" cy="100" rx="8" ry="5" fill="none" stroke="url(#sat1Grad1)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="80" width="30" height="40" rx="2" fill="none" stroke="url(#sat1Grad2)" strokeWidth="2.5" />
              <rect x="50" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad2)" strokeWidth="2" />
              <line x1="55" y1="90" x2="75" y2="90" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="95" x2="75" y2="95" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="100" x2="75" y2="100" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="105" x2="75" y2="105" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="110" x2="75" y2="110" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <rect x="120" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad2)" strokeWidth="2" />
              <line x1="125" y1="90" x2="145" y2="90" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="95" x2="145" y2="95" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="100" x2="145" y2="100" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="105" x2="145" y2="105" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="110" x2="145" y2="110" stroke="url(#sat1Grad2)" strokeWidth="1" opacity="0.5" />
              <line x1="100" y1="80" x2="100" y2="65" stroke="url(#sat1Grad2)" strokeWidth="2" />
              <circle cx="100" cy="65" r="3" fill="url(#sat1Grad2)" />
              <ellipse cx="100" cy="100" rx="8" ry="5" fill="none" stroke="url(#sat1Grad2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="80" width="30" height="40" rx="2" fill="none" stroke="url(#sat1Grad3)" strokeWidth="2.5" />
              <rect x="50" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad3)" strokeWidth="2" />
              <line x1="55" y1="90" x2="75" y2="90" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="95" x2="75" y2="95" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="100" x2="75" y2="100" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="105" x2="75" y2="105" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="110" x2="75" y2="110" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <rect x="120" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad3)" strokeWidth="2" />
              <line x1="125" y1="90" x2="145" y2="90" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="95" x2="145" y2="95" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="100" x2="145" y2="100" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="105" x2="145" y2="105" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="110" x2="145" y2="110" stroke="url(#sat1Grad3)" strokeWidth="1" opacity="0.5" />
              <line x1="100" y1="80" x2="100" y2="65" stroke="url(#sat1Grad3)" strokeWidth="2" />
              <circle cx="100" cy="65" r="3" fill="url(#sat1Grad3)" />
              <ellipse cx="100" cy="100" rx="8" ry="5" fill="none" stroke="url(#sat1Grad3)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sat1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="85" y="80" width="30" height="40" rx="2" fill="none" stroke="url(#sat1Grad4)" strokeWidth="2.5" />
              <rect x="50" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad4)" strokeWidth="2" />
              <line x1="55" y1="90" x2="75" y2="90" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="95" x2="75" y2="95" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="100" x2="75" y2="100" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="105" x2="75" y2="105" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="110" x2="75" y2="110" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <rect x="120" y="85" width="30" height="30" fill="none" stroke="url(#sat1Grad4)" strokeWidth="2" />
              <line x1="125" y1="90" x2="145" y2="90" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="95" x2="145" y2="95" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="100" x2="145" y2="100" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="105" x2="145" y2="105" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="125" y1="110" x2="145" y2="110" stroke="url(#sat1Grad4)" strokeWidth="1" opacity="0.5" />
              <line x1="100" y1="80" x2="100" y2="65" stroke="url(#sat1Grad4)" strokeWidth="2" />
              <circle cx="100" cy="65" r="3" fill="url(#sat1Grad4)" />
              <ellipse cx="100" cy="100" rx="8" ry="5" fill="none" stroke="url(#sat1Grad4)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Traditional satellite with solar panel wings</li>
            <li>• Represents: Communications, data relay, persistent monitoring</li>
            <li>• Classic design with antenna and communication dish</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/astronaut5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Astronaut 5
          </a>
          <a href="/satellite2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Satellite 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

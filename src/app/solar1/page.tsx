'use client'

export default function Solar1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Solar 1 - Sun Core</h1>
          <p className="text-white/70">Central star energy source</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="solarFill1">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              {/* Sun core */}
              <circle cx="100" cy="100" r="30" fill="url(#solarFill1)" stroke="url(#solar1Grad1)" strokeWidth="3" />

              {/* Sun rays */}
              <line x1="100" y1="55" x2="100" y2="40" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="121" y1="64" x2="131" y2="54" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="136" y1="85" x2="151" y2="85" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="136" y1="115" x2="151" y2="115" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="121" y1="136" x2="131" y2="146" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="100" y1="145" x2="100" y2="160" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="79" y1="136" x2="69" y2="146" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="64" y1="115" x2="49" y2="115" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="64" y1="85" x2="49" y2="85" stroke="url(#solar1Grad1)" strokeWidth="2.5" />
              <line x1="79" y1="64" x2="69" y2="54" stroke="url(#solar1Grad1)" strokeWidth="2.5" />

              {/* Inner glow ring */}
              <circle cx="100" cy="100" r="20" fill="none" stroke="url(#solar1Grad1)" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="solarFill2">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="100" r="30" fill="url(#solarFill2)" stroke="url(#solar1Grad2)" strokeWidth="3" />
              <line x1="100" y1="55" x2="100" y2="40" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="121" y1="64" x2="131" y2="54" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="136" y1="85" x2="151" y2="85" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="136" y1="115" x2="151" y2="115" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="121" y1="136" x2="131" y2="146" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="100" y1="145" x2="100" y2="160" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="79" y1="136" x2="69" y2="146" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="64" y1="115" x2="49" y2="115" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="64" y1="85" x2="49" y2="85" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <line x1="79" y1="64" x2="69" y2="54" stroke="url(#solar1Grad2)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="url(#solar1Grad2)" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="solarFill3">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="100" r="30" fill="url(#solarFill3)" stroke="url(#solar1Grad3)" strokeWidth="3" />
              <line x1="100" y1="55" x2="100" y2="40" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="121" y1="64" x2="131" y2="54" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="136" y1="85" x2="151" y2="85" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="136" y1="115" x2="151" y2="115" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="121" y1="136" x2="131" y2="146" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="100" y1="145" x2="100" y2="160" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="79" y1="136" x2="69" y2="146" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="64" y1="115" x2="49" y2="115" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="64" y1="85" x2="49" y2="85" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <line x1="79" y1="64" x2="69" y2="54" stroke="url(#solar1Grad3)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="url(#solar1Grad3)" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="solarFill4">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>

              <circle cx="100" cy="100" r="30" fill="url(#solarFill4)" stroke="url(#solar1Grad4)" strokeWidth="3" />
              <line x1="100" y1="55" x2="100" y2="40" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="121" y1="64" x2="131" y2="54" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="136" y1="85" x2="151" y2="85" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="136" y1="115" x2="151" y2="115" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="121" y1="136" x2="131" y2="146" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="100" y1="145" x2="100" y2="160" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="79" y1="136" x2="69" y2="146" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="64" y1="115" x2="49" y2="115" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="64" y1="85" x2="49" y2="85" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <line x1="79" y1="64" x2="69" y2="54" stroke="url(#solar1Grad4)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="url(#solar1Grad4)" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Sun with radiating energy beams</li>
            <li>• Represents: Central authority, power source, core infrastructure</li>
            <li>• Radial gradient showing energy emission</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/satellite5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Satellite 5
          </a>
          <a href="/solar2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Solar 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

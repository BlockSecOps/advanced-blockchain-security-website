'use client'

export default function Astronaut1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Astronaut 1 - Space Helmet</h1>
          <p className="text-white/70">Classic astronaut visor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="helmetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Helmet circle */}
              <circle cx="100" cy="90" r="45" fill="none" stroke="url(#helmetGrad1)" strokeWidth="3" />

              {/* Visor - horizontal ellipse */}
              <ellipse cx="100" cy="90" rx="30" ry="12" fill="none" stroke="url(#helmetGrad1)" strokeWidth="2" opacity="0.8" />

              {/* Collar/neck ring */}
              <ellipse cx="100" cy="135" rx="25" ry="8" fill="none" stroke="url(#helmetGrad1)" strokeWidth="2" />

              {/* Connection lines */}
              <line x1="75" y1="135" x2="70" y2="127" stroke="url(#helmetGrad1)" strokeWidth="2" />
              <line x1="125" y1="135" x2="130" y2="127" stroke="url(#helmetGrad1)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="helmetGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="none" stroke="url(#helmetGrad2)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="30" ry="12" fill="none" stroke="url(#helmetGrad2)" strokeWidth="2" opacity="0.8" />
              <ellipse cx="100" cy="135" rx="25" ry="8" fill="none" stroke="url(#helmetGrad2)" strokeWidth="2" />
              <line x1="75" y1="135" x2="70" y2="127" stroke="url(#helmetGrad2)" strokeWidth="2" />
              <line x1="125" y1="135" x2="130" y2="127" stroke="url(#helmetGrad2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="helmetGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="none" stroke="url(#helmetGrad3)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="30" ry="12" fill="none" stroke="url(#helmetGrad3)" strokeWidth="2" opacity="0.8" />
              <ellipse cx="100" cy="135" rx="25" ry="8" fill="none" stroke="url(#helmetGrad3)" strokeWidth="2" />
              <line x1="75" y1="135" x2="70" y2="127" stroke="url(#helmetGrad3)" strokeWidth="2" />
              <line x1="125" y1="135" x2="130" y2="127" stroke="url(#helmetGrad3)" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="helmetGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="90" r="45" fill="none" stroke="url(#helmetGrad4)" strokeWidth="3" />
              <ellipse cx="100" cy="90" rx="30" ry="12" fill="none" stroke="url(#helmetGrad4)" strokeWidth="2" opacity="0.8" />
              <ellipse cx="100" cy="135" rx="25" ry="8" fill="none" stroke="url(#helmetGrad4)" strokeWidth="2" />
              <line x1="75" y1="135" x2="70" y2="127" stroke="url(#helmetGrad4)" strokeWidth="2" />
              <line x1="125" y1="135" x2="130" y2="127" stroke="url(#helmetGrad4)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic space helmet with visor</li>
            <li>• Represents: Exploration, frontier security, space-age technology</li>
            <li>• Clean iconic design for immediate recognition</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/malware5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Malware 5
          </a>
          <a href="/astronaut2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Astronaut 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

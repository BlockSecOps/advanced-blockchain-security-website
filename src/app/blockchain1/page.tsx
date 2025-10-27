'use client'

export default function Blockchain1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Blockchain 1 - Block Chain</h1>
          <p className="text-white/70">Connected block sequence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Block 1 */}
              <rect x="35" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad1)" strokeWidth="2.5" />
              <circle cx="50" cy="100" r="3" fill="url(#blockchain1Grad1)" opacity="0.6" />

              {/* Chain link 1 */}
              <line x1="65" y1="100" x2="85" y2="100" stroke="url(#blockchain1Grad1)" strokeWidth="2" />

              {/* Block 2 */}
              <rect x="85" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad1)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="3" fill="url(#blockchain1Grad1)" opacity="0.6" />

              {/* Chain link 2 */}
              <line x1="115" y1="100" x2="135" y2="100" stroke="url(#blockchain1Grad1)" strokeWidth="2" />

              {/* Block 3 */}
              <rect x="135" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad1)" strokeWidth="2.5" />
              <circle cx="150" cy="100" r="3" fill="url(#blockchain1Grad1)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="35" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad2)" strokeWidth="2.5" />
              <circle cx="50" cy="100" r="3" fill="url(#blockchain1Grad2)" opacity="0.6" />
              <line x1="65" y1="100" x2="85" y2="100" stroke="url(#blockchain1Grad2)" strokeWidth="2" />
              <rect x="85" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad2)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="3" fill="url(#blockchain1Grad2)" opacity="0.6" />
              <line x1="115" y1="100" x2="135" y2="100" stroke="url(#blockchain1Grad2)" strokeWidth="2" />
              <rect x="135" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad2)" strokeWidth="2.5" />
              <circle cx="150" cy="100" r="3" fill="url(#blockchain1Grad2)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="35" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad3)" strokeWidth="2.5" />
              <circle cx="50" cy="100" r="3" fill="url(#blockchain1Grad3)" opacity="0.6" />
              <line x1="65" y1="100" x2="85" y2="100" stroke="url(#blockchain1Grad3)" strokeWidth="2" />
              <rect x="85" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad3)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="3" fill="url(#blockchain1Grad3)" opacity="0.6" />
              <line x1="115" y1="100" x2="135" y2="100" stroke="url(#blockchain1Grad3)" strokeWidth="2" />
              <rect x="135" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad3)" strokeWidth="2.5" />
              <circle cx="150" cy="100" r="3" fill="url(#blockchain1Grad3)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="35" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad4)" strokeWidth="2.5" />
              <circle cx="50" cy="100" r="3" fill="url(#blockchain1Grad4)" opacity="0.6" />
              <line x1="65" y1="100" x2="85" y2="100" stroke="url(#blockchain1Grad4)" strokeWidth="2" />
              <rect x="85" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad4)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="3" fill="url(#blockchain1Grad4)" opacity="0.6" />
              <line x1="115" y1="100" x2="135" y2="100" stroke="url(#blockchain1Grad4)" strokeWidth="2" />
              <rect x="135" y="85" width="30" height="30" rx="2" fill="none" stroke="url(#blockchain1Grad4)" strokeWidth="2.5" />
              <circle cx="150" cy="100" r="3" fill="url(#blockchain1Grad4)" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Three connected blocks in sequence</li>
            <li>• Represents: Blockchain structure, immutable ledger, linked data</li>
            <li>• Dots showing data within each block</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contract5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Contract 5
          </a>
          <a href="/blockchain2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Blockchain 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

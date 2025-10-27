'use client'

export default function Blockchain5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Blockchain 5 - Consensus Nodes</h1>
          <p className="text-white/70">Agreement validation network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Voting nodes in circle */}
              <circle cx="100" cy="65" r="10" fill="none" stroke="url(#blockchain5Grad1)" strokeWidth="2.5" />
              <path d="M 97 62 L 100 67 L 106 60" stroke="url(#blockchain5Grad1)" strokeWidth="2" fill="none" />

              <circle cx="135" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad1)" strokeWidth="2.5" />
              <path d="M 132 87 L 135 92 L 141 85" stroke="url(#blockchain5Grad1)" strokeWidth="2" fill="none" />

              <circle cx="125" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad1)" strokeWidth="2.5" />
              <path d="M 122 122 L 125 127 L 131 120" stroke="url(#blockchain5Grad1)" strokeWidth="2" fill="none" />

              <circle cx="75" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad1)" strokeWidth="2.5" />
              <path d="M 72 122 L 75 127 L 81 120" stroke="url(#blockchain5Grad1)" strokeWidth="2" fill="none" />

              <circle cx="65" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad1)" strokeWidth="2.5" />
              <path d="M 62 87 L 65 92 L 71 85" stroke="url(#blockchain5Grad1)" strokeWidth="2" fill="none" />

              {/* Center point showing consensus */}
              <circle cx="100" cy="95" r="5" fill="url(#blockchain5Grad1)" opacity="0.8" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="65" r="10" fill="none" stroke="url(#blockchain5Grad2)" strokeWidth="2.5" />
              <path d="M 97 62 L 100 67 L 106 60" stroke="url(#blockchain5Grad2)" strokeWidth="2" fill="none" />
              <circle cx="135" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad2)" strokeWidth="2.5" />
              <path d="M 132 87 L 135 92 L 141 85" stroke="url(#blockchain5Grad2)" strokeWidth="2" fill="none" />
              <circle cx="125" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad2)" strokeWidth="2.5" />
              <path d="M 122 122 L 125 127 L 131 120" stroke="url(#blockchain5Grad2)" strokeWidth="2" fill="none" />
              <circle cx="75" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad2)" strokeWidth="2.5" />
              <path d="M 72 122 L 75 127 L 81 120" stroke="url(#blockchain5Grad2)" strokeWidth="2" fill="none" />
              <circle cx="65" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad2)" strokeWidth="2.5" />
              <path d="M 62 87 L 65 92 L 71 85" stroke="url(#blockchain5Grad2)" strokeWidth="2" fill="none" />
              <circle cx="100" cy="95" r="5" fill="url(#blockchain5Grad2)" opacity="0.8" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="65" r="10" fill="none" stroke="url(#blockchain5Grad3)" strokeWidth="2.5" />
              <path d="M 97 62 L 100 67 L 106 60" stroke="url(#blockchain5Grad3)" strokeWidth="2" fill="none" />
              <circle cx="135" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad3)" strokeWidth="2.5" />
              <path d="M 132 87 L 135 92 L 141 85" stroke="url(#blockchain5Grad3)" strokeWidth="2" fill="none" />
              <circle cx="125" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad3)" strokeWidth="2.5" />
              <path d="M 122 122 L 125 127 L 131 120" stroke="url(#blockchain5Grad3)" strokeWidth="2" fill="none" />
              <circle cx="75" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad3)" strokeWidth="2.5" />
              <path d="M 72 122 L 75 127 L 81 120" stroke="url(#blockchain5Grad3)" strokeWidth="2" fill="none" />
              <circle cx="65" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad3)" strokeWidth="2.5" />
              <path d="M 62 87 L 65 92 L 71 85" stroke="url(#blockchain5Grad3)" strokeWidth="2" fill="none" />
              <circle cx="100" cy="95" r="5" fill="url(#blockchain5Grad3)" opacity="0.8" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="65" r="10" fill="none" stroke="url(#blockchain5Grad4)" strokeWidth="2.5" />
              <path d="M 97 62 L 100 67 L 106 60" stroke="url(#blockchain5Grad4)" strokeWidth="2" fill="none" />
              <circle cx="135" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad4)" strokeWidth="2.5" />
              <path d="M 132 87 L 135 92 L 141 85" stroke="url(#blockchain5Grad4)" strokeWidth="2" fill="none" />
              <circle cx="125" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad4)" strokeWidth="2.5" />
              <path d="M 122 122 L 125 127 L 131 120" stroke="url(#blockchain5Grad4)" strokeWidth="2" fill="none" />
              <circle cx="75" cy="125" r="10" fill="none" stroke="url(#blockchain5Grad4)" strokeWidth="2.5" />
              <path d="M 72 122 L 75 127 L 81 120" stroke="url(#blockchain5Grad4)" strokeWidth="2" fill="none" />
              <circle cx="65" cy="90" r="10" fill="none" stroke="url(#blockchain5Grad4)" strokeWidth="2.5" />
              <path d="M 62 87 L 65 92 L 71 85" stroke="url(#blockchain5Grad4)" strokeWidth="2" fill="none" />
              <circle cx="100" cy="95" r="5" fill="url(#blockchain5Grad4)" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Validator nodes with checkmarks showing agreement</li>
            <li>• Represents: Consensus mechanisms, proof of stake, Byzantine fault tolerance</li>
            <li>• Center point showing achieved consensus</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/blockchain4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Blockchain 4
          </a>
          <a href="/ninja1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

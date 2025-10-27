'use client'

export default function Contract5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Contract 5 - Verification Lock</h1>
          <p className="text-white/70">Secure contract validation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Document/contract */}
              <rect x="65" y="60" width="70" height="80" rx="3" fill="none" stroke="url(#contract5Grad1)" strokeWidth="2.5" />

              {/* Code lines */}
              <line x1="75" y1="75" x2="125" y2="75" stroke="url(#contract5Grad1)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="85" x2="125" y2="85" stroke="url(#contract5Grad1)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="95" x2="110" y2="95" stroke="url(#contract5Grad1)" strokeWidth="2" opacity="0.5" />

              {/* Lock overlay */}
              <circle cx="100" cy="115" r="12" fill="none" stroke="url(#contract5Grad1)" strokeWidth="2.5" />
              <rect x="90" y="115" width="20" height="15" rx="2" fill="none" stroke="url(#contract5Grad1)" strokeWidth="2.5" />

              {/* Checkmark inside lock */}
              <path d="M 96 120 L 99 123 L 104 117" stroke="url(#contract5Grad1)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="65" y="60" width="70" height="80" rx="3" fill="none" stroke="url(#contract5Grad2)" strokeWidth="2.5" />
              <line x1="75" y1="75" x2="125" y2="75" stroke="url(#contract5Grad2)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="85" x2="125" y2="85" stroke="url(#contract5Grad2)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="95" x2="110" y2="95" stroke="url(#contract5Grad2)" strokeWidth="2" opacity="0.5" />
              <circle cx="100" cy="115" r="12" fill="none" stroke="url(#contract5Grad2)" strokeWidth="2.5" />
              <rect x="90" y="115" width="20" height="15" rx="2" fill="none" stroke="url(#contract5Grad2)" strokeWidth="2.5" />
              <path d="M 96 120 L 99 123 L 104 117" stroke="url(#contract5Grad2)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="65" y="60" width="70" height="80" rx="3" fill="none" stroke="url(#contract5Grad3)" strokeWidth="2.5" />
              <line x1="75" y1="75" x2="125" y2="75" stroke="url(#contract5Grad3)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="85" x2="125" y2="85" stroke="url(#contract5Grad3)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="95" x2="110" y2="95" stroke="url(#contract5Grad3)" strokeWidth="2" opacity="0.5" />
              <circle cx="100" cy="115" r="12" fill="none" stroke="url(#contract5Grad3)" strokeWidth="2.5" />
              <rect x="90" y="115" width="20" height="15" rx="2" fill="none" stroke="url(#contract5Grad3)" strokeWidth="2.5" />
              <path d="M 96 120 L 99 123 L 104 117" stroke="url(#contract5Grad3)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="65" y="60" width="70" height="80" rx="3" fill="none" stroke="url(#contract5Grad4)" strokeWidth="2.5" />
              <line x1="75" y1="75" x2="125" y2="75" stroke="url(#contract5Grad4)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="85" x2="125" y2="85" stroke="url(#contract5Grad4)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="95" x2="110" y2="95" stroke="url(#contract5Grad4)" strokeWidth="2" opacity="0.5" />
              <circle cx="100" cy="115" r="12" fill="none" stroke="url(#contract5Grad4)" strokeWidth="2.5" />
              <rect x="90" y="115" width="20" height="15" rx="2" fill="none" stroke="url(#contract5Grad4)" strokeWidth="2.5" />
              <path d="M 96 120 L 99 123 L 104 117" stroke="url(#contract5Grad4)" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Contract document with verification lock</li>
            <li>• Represents: Contract verification, audited code, security validation</li>
            <li>• Checkmark showing successful verification</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contract4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Contract 4
          </a>
          <a href="/blockchain1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Blockchain 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

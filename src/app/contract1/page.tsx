'use client'

export default function Contract1Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Contract 1 - Digital Agreement</h1>
          <p className="text-white/70">Electronic contract document</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Document outline */}
              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#contract1Grad1)" strokeWidth="2.5" />

              {/* Folded corner */}
              <path d="M 140 50 L 140 65 L 125 65 Z" fill="none" stroke="url(#contract1Grad1)" strokeWidth="2.5" />

              {/* Contract lines */}
              <line x1="70" y1="75" x2="130" y2="75" stroke="url(#contract1Grad1)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="85" x2="130" y2="85" stroke="url(#contract1Grad1)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="95" x2="130" y2="95" stroke="url(#contract1Grad1)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="105" x2="110" y2="105" stroke="url(#contract1Grad1)" strokeWidth="2" opacity="0.6" />

              {/* Code brackets */}
              <text x="70" y="125" fill="url(#contract1Grad1)" fontSize="16" fontFamily="monospace" opacity="0.8">{'{'}</text>
              <text x="125" y="125" fill="url(#contract1Grad1)" fontSize="16" fontFamily="monospace" opacity="0.8">{'}'}</text>

              {/* Digital signature line */}
              <line x1="70" y1="135" x2="130" y2="135" stroke="url(#contract1Grad1)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#contract1Grad2)" strokeWidth="2.5" />
              <path d="M 140 50 L 140 65 L 125 65 Z" fill="none" stroke="url(#contract1Grad2)" strokeWidth="2.5" />
              <line x1="70" y1="75" x2="130" y2="75" stroke="url(#contract1Grad2)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="85" x2="130" y2="85" stroke="url(#contract1Grad2)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="95" x2="130" y2="95" stroke="url(#contract1Grad2)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="105" x2="110" y2="105" stroke="url(#contract1Grad2)" strokeWidth="2" opacity="0.6" />
              <text x="70" y="125" fill="url(#contract1Grad2)" fontSize="16" fontFamily="monospace" opacity="0.8">{'{'}</text>
              <text x="125" y="125" fill="url(#contract1Grad2)" fontSize="16" fontFamily="monospace" opacity="0.8">{'}'}</text>
              <line x1="70" y1="135" x2="130" y2="135" stroke="url(#contract1Grad2)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#contract1Grad3)" strokeWidth="2.5" />
              <path d="M 140 50 L 140 65 L 125 65 Z" fill="none" stroke="url(#contract1Grad3)" strokeWidth="2.5" />
              <line x1="70" y1="75" x2="130" y2="75" stroke="url(#contract1Grad3)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="85" x2="130" y2="85" stroke="url(#contract1Grad3)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="95" x2="130" y2="95" stroke="url(#contract1Grad3)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="105" x2="110" y2="105" stroke="url(#contract1Grad3)" strokeWidth="2" opacity="0.6" />
              <text x="70" y="125" fill="url(#contract1Grad3)" fontSize="16" fontFamily="monospace" opacity="0.8">{'{'}</text>
              <text x="125" y="125" fill="url(#contract1Grad3)" fontSize="16" fontFamily="monospace" opacity="0.8">{'}'}</text>
              <line x1="70" y1="135" x2="130" y2="135" stroke="url(#contract1Grad3)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="60" y="50" width="80" height="100" rx="3" fill="none" stroke="url(#contract1Grad4)" strokeWidth="2.5" />
              <path d="M 140 50 L 140 65 L 125 65 Z" fill="none" stroke="url(#contract1Grad4)" strokeWidth="2.5" />
              <line x1="70" y1="75" x2="130" y2="75" stroke="url(#contract1Grad4)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="85" x2="130" y2="85" stroke="url(#contract1Grad4)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="95" x2="130" y2="95" stroke="url(#contract1Grad4)" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="105" x2="110" y2="105" stroke="url(#contract1Grad4)" strokeWidth="2" opacity="0.6" />
              <text x="70" y="125" fill="url(#contract1Grad4)" fontSize="16" fontFamily="monospace" opacity="0.8">{'{'}</text>
              <text x="125" y="125" fill="url(#contract1Grad4)" fontSize="16" fontFamily="monospace" opacity="0.8">{'}'}</text>
              <line x1="70" y1="135" x2="130" y2="135" stroke="url(#contract1Grad4)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Document with code brackets representing smart contract</li>
            <li>• Represents: Digital agreements, programmable contracts, automated execution</li>
            <li>• Signature line showing binding commitment</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/solar5" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Solar 5
          </a>
          <a href="/contract2" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Contract 2 →
          </a>
        </div>
      </div>
    </div>
  )
}

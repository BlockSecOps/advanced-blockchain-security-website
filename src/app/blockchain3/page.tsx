'use client'

export default function Blockchain3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Blockchain 3 - Hash Link</h1>
          <p className="text-white/70">Cryptographic chain connection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain3Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Block with hash */}
              <rect x="40" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad1)" strokeWidth="2.5" />
              <text x="50" y="105" fill="url(#blockchain3Grad1)" fontSize="10" fontFamily="monospace" opacity="0.7">#ABC</text>

              {/* Chain link icon */}
              <path d="M 105 90 Q 105 95, 110 95 L 120 95 Q 125 95, 125 90 Q 125 85, 120 85 L 110 85 Q 105 85, 105 90 Z" fill="none" stroke="url(#blockchain3Grad1)" strokeWidth="2" />
              <path d="M 105 110 Q 105 115, 110 115 L 120 115 Q 125 115, 125 110 Q 125 105, 120 105 L 110 105 Q 105 105, 105 110 Z" fill="none" stroke="url(#blockchain3Grad1)" strokeWidth="2" />
              <line x1="117" y1="95" x2="113" y2="105" stroke="url(#blockchain3Grad1)" strokeWidth="2" />

              {/* Next block */}
              <rect x="140" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad1)" strokeWidth="2.5" />
              <text x="150" y="105" fill="url(#blockchain3Grad1)" fontSize="10" fontFamily="monospace" opacity="0.7">#DEF</text>
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain3Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad2)" strokeWidth="2.5" />
              <text x="50" y="105" fill="url(#blockchain3Grad2)" fontSize="10" fontFamily="monospace" opacity="0.7">#ABC</text>
              <path d="M 105 90 Q 105 95, 110 95 L 120 95 Q 125 95, 125 90 Q 125 85, 120 85 L 110 85 Q 105 85, 105 90 Z" fill="none" stroke="url(#blockchain3Grad2)" strokeWidth="2" />
              <path d="M 105 110 Q 105 115, 110 115 L 120 115 Q 125 115, 125 110 Q 125 105, 120 105 L 110 105 Q 105 105, 105 110 Z" fill="none" stroke="url(#blockchain3Grad2)" strokeWidth="2" />
              <line x1="117" y1="95" x2="113" y2="105" stroke="url(#blockchain3Grad2)" strokeWidth="2" />
              <rect x="140" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad2)" strokeWidth="2.5" />
              <text x="150" y="105" fill="url(#blockchain3Grad2)" fontSize="10" fontFamily="monospace" opacity="0.7">#DEF</text>
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain3Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad3)" strokeWidth="2.5" />
              <text x="50" y="105" fill="url(#blockchain3Grad3)" fontSize="10" fontFamily="monospace" opacity="0.7">#ABC</text>
              <path d="M 105 90 Q 105 95, 110 95 L 120 95 Q 125 95, 125 90 Q 125 85, 120 85 L 110 85 Q 105 85, 105 90 Z" fill="none" stroke="url(#blockchain3Grad3)" strokeWidth="2" />
              <path d="M 105 110 Q 105 115, 110 115 L 120 115 Q 125 115, 125 110 Q 125 105, 120 105 L 110 105 Q 105 105, 105 110 Z" fill="none" stroke="url(#blockchain3Grad3)" strokeWidth="2" />
              <line x1="117" y1="95" x2="113" y2="105" stroke="url(#blockchain3Grad3)" strokeWidth="2" />
              <rect x="140" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad3)" strokeWidth="2.5" />
              <text x="150" y="105" fill="url(#blockchain3Grad3)" fontSize="10" fontFamily="monospace" opacity="0.7">#DEF</text>
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain3Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad4)" strokeWidth="2.5" />
              <text x="50" y="105" fill="url(#blockchain3Grad4)" fontSize="10" fontFamily="monospace" opacity="0.7">#ABC</text>
              <path d="M 105 90 Q 105 95, 110 95 L 120 95 Q 125 95, 125 90 Q 125 85, 120 85 L 110 85 Q 105 85, 105 90 Z" fill="none" stroke="url(#blockchain3Grad4)" strokeWidth="2" />
              <path d="M 105 110 Q 105 115, 110 115 L 120 115 Q 125 115, 125 110 Q 125 105, 120 105 L 110 105 Q 105 105, 105 110 Z" fill="none" stroke="url(#blockchain3Grad4)" strokeWidth="2" />
              <line x1="117" y1="95" x2="113" y2="105" stroke="url(#blockchain3Grad4)" strokeWidth="2" />
              <rect x="140" y="75" width="50" height="50" rx="3" fill="none" stroke="url(#blockchain3Grad4)" strokeWidth="2.5" />
              <text x="150" y="105" fill="url(#blockchain3Grad4)" fontSize="10" fontFamily="monospace" opacity="0.7">#DEF</text>
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Blocks connected by cryptographic hash link</li>
            <li>• Represents: Hash pointers, cryptographic linking, chain integrity</li>
            <li>• Hash symbols showing block identification</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/blockchain2" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Blockchain 2
          </a>
          <a href="/blockchain4" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Blockchain 4 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Contract4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Contract 4 - Token Transfer</h1>
          <p className="text-white/70">Digital asset exchange</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Sender wallet */}
              <rect x="40" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad1)" strokeWidth="2.5" />
              <line x1="50" y1="95" x2="65" y2="95" stroke="url(#contract4Grad1)" strokeWidth="2" opacity="0.5" />
              <line x1="50" y1="105" x2="65" y2="105" stroke="url(#contract4Grad1)" strokeWidth="2" opacity="0.5" />

              {/* Receiver wallet */}
              <rect x="125" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad1)" strokeWidth="2.5" />
              <line x1="135" y1="95" x2="150" y2="95" stroke="url(#contract4Grad1)" strokeWidth="2" opacity="0.5" />
              <line x1="135" y1="105" x2="150" y2="105" stroke="url(#contract4Grad1)" strokeWidth="2" opacity="0.5" />

              {/* Transfer arrow with token */}
              <line x1="75" y1="100" x2="125" y2="100" stroke="url(#contract4Grad1)" strokeWidth="2.5" />
              <path d="M 125 100 L 118 97 L 118 103 Z" fill="url(#contract4Grad1)" />

              {/* Token symbol */}
              <circle cx="100" cy="100" r="8" fill="none" stroke="url(#contract4Grad1)" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="url(#contract4Grad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad2)" strokeWidth="2.5" />
              <line x1="50" y1="95" x2="65" y2="95" stroke="url(#contract4Grad2)" strokeWidth="2" opacity="0.5" />
              <line x1="50" y1="105" x2="65" y2="105" stroke="url(#contract4Grad2)" strokeWidth="2" opacity="0.5" />
              <rect x="125" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad2)" strokeWidth="2.5" />
              <line x1="135" y1="95" x2="150" y2="95" stroke="url(#contract4Grad2)" strokeWidth="2" opacity="0.5" />
              <line x1="135" y1="105" x2="150" y2="105" stroke="url(#contract4Grad2)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="100" x2="125" y2="100" stroke="url(#contract4Grad2)" strokeWidth="2.5" />
              <path d="M 125 100 L 118 97 L 118 103 Z" fill="url(#contract4Grad2)" />
              <circle cx="100" cy="100" r="8" fill="none" stroke="url(#contract4Grad2)" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="url(#contract4Grad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad3)" strokeWidth="2.5" />
              <line x1="50" y1="95" x2="65" y2="95" stroke="url(#contract4Grad3)" strokeWidth="2" opacity="0.5" />
              <line x1="50" y1="105" x2="65" y2="105" stroke="url(#contract4Grad3)" strokeWidth="2" opacity="0.5" />
              <rect x="125" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad3)" strokeWidth="2.5" />
              <line x1="135" y1="95" x2="150" y2="95" stroke="url(#contract4Grad3)" strokeWidth="2" opacity="0.5" />
              <line x1="135" y1="105" x2="150" y2="105" stroke="url(#contract4Grad3)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="100" x2="125" y2="100" stroke="url(#contract4Grad3)" strokeWidth="2.5" />
              <path d="M 125 100 L 118 97 L 118 103 Z" fill="url(#contract4Grad3)" />
              <circle cx="100" cy="100" r="8" fill="none" stroke="url(#contract4Grad3)" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="url(#contract4Grad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="40" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad4)" strokeWidth="2.5" />
              <line x1="50" y1="95" x2="65" y2="95" stroke="url(#contract4Grad4)" strokeWidth="2" opacity="0.5" />
              <line x1="50" y1="105" x2="65" y2="105" stroke="url(#contract4Grad4)" strokeWidth="2" opacity="0.5" />
              <rect x="125" y="80" width="35" height="40" rx="3" fill="none" stroke="url(#contract4Grad4)" strokeWidth="2.5" />
              <line x1="135" y1="95" x2="150" y2="95" stroke="url(#contract4Grad4)" strokeWidth="2" opacity="0.5" />
              <line x1="135" y1="105" x2="150" y2="105" stroke="url(#contract4Grad4)" strokeWidth="2" opacity="0.5" />
              <line x1="75" y1="100" x2="125" y2="100" stroke="url(#contract4Grad4)" strokeWidth="2.5" />
              <path d="M 125 100 L 118 97 L 118 103 Z" fill="url(#contract4Grad4)" />
              <circle cx="100" cy="100" r="8" fill="none" stroke="url(#contract4Grad4)" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="url(#contract4Grad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Two wallets with token transfer arrow</li>
            <li>• Represents: Asset transfers, token transactions, value exchange</li>
            <li>• Token symbol showing digital asset movement</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contract3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Contract 3
          </a>
          <a href="/contract5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Contract 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Blockchain2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Blockchain 2 - Network Nodes</h1>
          <p className="text-white/70">Distributed peer network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Center node */}
              <circle cx="100" cy="100" r="10" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2.5" />

              {/* Peripheral nodes */}
              <circle cx="70" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2" />
              <circle cx="130" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2" />
              <circle cx="145" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2" />
              <circle cx="100" cy="145" r="8" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2" />
              <circle cx="55" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad1)" strokeWidth="2" />

              {/* Connection lines */}
              <line x1="77" y1="77" x2="93" y2="93" stroke="url(#blockchain2Grad1)" strokeWidth="1.5" opacity="0.5" />
              <line x1="123" y1="77" x2="107" y2="93" stroke="url(#blockchain2Grad1)" strokeWidth="1.5" opacity="0.5" />
              <line x1="138" y1="110" x2="110" y2="100" stroke="url(#blockchain2Grad1)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="137" x2="100" y2="110" stroke="url(#blockchain2Grad1)" strokeWidth="1.5" opacity="0.5" />
              <line x1="62" y1="110" x2="90" y2="100" stroke="url(#blockchain2Grad1)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="10" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2.5" />
              <circle cx="70" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2" />
              <circle cx="130" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2" />
              <circle cx="145" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2" />
              <circle cx="100" cy="145" r="8" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2" />
              <circle cx="55" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad2)" strokeWidth="2" />
              <line x1="77" y1="77" x2="93" y2="93" stroke="url(#blockchain2Grad2)" strokeWidth="1.5" opacity="0.5" />
              <line x1="123" y1="77" x2="107" y2="93" stroke="url(#blockchain2Grad2)" strokeWidth="1.5" opacity="0.5" />
              <line x1="138" y1="110" x2="110" y2="100" stroke="url(#blockchain2Grad2)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="137" x2="100" y2="110" stroke="url(#blockchain2Grad2)" strokeWidth="1.5" opacity="0.5" />
              <line x1="62" y1="110" x2="90" y2="100" stroke="url(#blockchain2Grad2)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="10" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2.5" />
              <circle cx="70" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2" />
              <circle cx="130" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2" />
              <circle cx="145" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2" />
              <circle cx="100" cy="145" r="8" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2" />
              <circle cx="55" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad3)" strokeWidth="2" />
              <line x1="77" y1="77" x2="93" y2="93" stroke="url(#blockchain2Grad3)" strokeWidth="1.5" opacity="0.5" />
              <line x1="123" y1="77" x2="107" y2="93" stroke="url(#blockchain2Grad3)" strokeWidth="1.5" opacity="0.5" />
              <line x1="138" y1="110" x2="110" y2="100" stroke="url(#blockchain2Grad3)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="137" x2="100" y2="110" stroke="url(#blockchain2Grad3)" strokeWidth="1.5" opacity="0.5" />
              <line x1="62" y1="110" x2="90" y2="100" stroke="url(#blockchain2Grad3)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain2Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="10" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2.5" />
              <circle cx="70" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2" />
              <circle cx="130" cy="70" r="8" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2" />
              <circle cx="145" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2" />
              <circle cx="100" cy="145" r="8" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2" />
              <circle cx="55" cy="115" r="8" fill="none" stroke="url(#blockchain2Grad4)" strokeWidth="2" />
              <line x1="77" y1="77" x2="93" y2="93" stroke="url(#blockchain2Grad4)" strokeWidth="1.5" opacity="0.5" />
              <line x1="123" y1="77" x2="107" y2="93" stroke="url(#blockchain2Grad4)" strokeWidth="1.5" opacity="0.5" />
              <line x1="138" y1="110" x2="110" y2="100" stroke="url(#blockchain2Grad4)" strokeWidth="1.5" opacity="0.5" />
              <line x1="100" y1="137" x2="100" y2="110" stroke="url(#blockchain2Grad4)" strokeWidth="1.5" opacity="0.5" />
              <line x1="62" y1="110" x2="90" y2="100" stroke="url(#blockchain2Grad4)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Distributed network with central and peripheral nodes</li>
            <li>• Represents: Decentralized network, peer-to-peer architecture, consensus</li>
            <li>• Connection lines showing peer relationships</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/blockchain1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Blockchain 1
          </a>
          <a href="/blockchain3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Blockchain 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

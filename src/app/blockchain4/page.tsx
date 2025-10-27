'use client'

export default function Blockchain4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Blockchain 4 - Merkle Tree</h1>
          <p className="text-white/70">Hierarchical hash structure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Root */}
              <circle cx="100" cy="60" r="8" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2.5" />

              {/* Level 1 */}
              <circle cx="75" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />
              <circle cx="125" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />

              {/* Level 2 (leaves) */}
              <circle cx="60" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />
              <circle cx="90" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />
              <circle cx="110" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />
              <circle cx="140" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad1)" strokeWidth="2" />

              {/* Connections */}
              <line x1="100" y1="68" x2="75" y2="83" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="68" x2="125" y2="83" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="60" y2="114" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="90" y2="114" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="110" y2="114" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="140" y2="114" stroke="url(#blockchain4Grad1)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="60" r="8" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2.5" />
              <circle cx="75" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <circle cx="125" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <circle cx="60" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <circle cx="90" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <circle cx="110" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <circle cx="140" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad2)" strokeWidth="2" />
              <line x1="100" y1="68" x2="75" y2="83" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="68" x2="125" y2="83" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="60" y2="114" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="90" y2="114" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="110" y2="114" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="140" y2="114" stroke="url(#blockchain4Grad2)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="60" r="8" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2.5" />
              <circle cx="75" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <circle cx="125" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <circle cx="60" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <circle cx="90" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <circle cx="110" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <circle cx="140" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad3)" strokeWidth="2" />
              <line x1="100" y1="68" x2="75" y2="83" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="68" x2="125" y2="83" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="60" y2="114" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="90" y2="114" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="110" y2="114" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="140" y2="114" stroke="url(#blockchain4Grad3)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blockchain4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="60" r="8" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2.5" />
              <circle cx="75" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <circle cx="125" cy="90" r="7" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <circle cx="60" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <circle cx="90" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <circle cx="110" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <circle cx="140" cy="120" r="6" fill="none" stroke="url(#blockchain4Grad4)" strokeWidth="2" />
              <line x1="100" y1="68" x2="75" y2="83" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="68" x2="125" y2="83" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="60" y2="114" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="75" y1="97" x2="90" y2="114" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="110" y2="114" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="125" y1="97" x2="140" y2="114" stroke="url(#blockchain4Grad4)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Binary tree structure with root and leaf nodes</li>
            <li>• Represents: Merkle trees, data integrity, efficient verification</li>
            <li>• Hierarchical hash aggregation</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/blockchain3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Blockchain 3
          </a>
          <a href="/blockchain5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Blockchain 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

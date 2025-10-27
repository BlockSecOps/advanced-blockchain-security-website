'use client'

export default function Ghost4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Ghost 4 - Spectral Wave</h1>
          <p className="text-white/70">Flowing energy spirit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Flowing wave lines */}
              <path d="M 50 80 Q 70 70, 90 80 T 130 80 T 170 80" fill="none" stroke="url(#waveGrad1)" strokeWidth="3" opacity="0.8" />
              <path d="M 50 95 Q 70 85, 90 95 T 130 95 T 170 95" fill="none" stroke="url(#waveGrad1)" strokeWidth="3" opacity="0.6" />
              <path d="M 50 110 Q 70 100, 90 110 T 130 110 T 170 110" fill="none" stroke="url(#waveGrad1)" strokeWidth="3" opacity="0.4" />

              {/* Eyes */}
              <circle cx="85" cy="85" r="4" fill="url(#waveGrad1)" />
              <circle cx="105" cy="85" r="4" fill="url(#waveGrad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 50 80 Q 70 70, 90 80 T 130 80 T 170 80" fill="none" stroke="url(#waveGrad2)" strokeWidth="3" opacity="0.8" />
              <path d="M 50 95 Q 70 85, 90 95 T 130 95 T 170 95" fill="none" stroke="url(#waveGrad2)" strokeWidth="3" opacity="0.6" />
              <path d="M 50 110 Q 70 100, 90 110 T 130 110 T 170 110" fill="none" stroke="url(#waveGrad2)" strokeWidth="3" opacity="0.4" />
              <circle cx="85" cy="85" r="4" fill="url(#waveGrad2)" />
              <circle cx="105" cy="85" r="4" fill="url(#waveGrad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 50 80 Q 70 70, 90 80 T 130 80 T 170 80" fill="none" stroke="url(#waveGrad3)" strokeWidth="3" opacity="0.8" />
              <path d="M 50 95 Q 70 85, 90 95 T 130 95 T 170 95" fill="none" stroke="url(#waveGrad3)" strokeWidth="3" opacity="0.6" />
              <path d="M 50 110 Q 70 100, 90 110 T 130 110 T 170 110" fill="none" stroke="url(#waveGrad3)" strokeWidth="3" opacity="0.4" />
              <circle cx="85" cy="85" r="4" fill="url(#waveGrad3)" />
              <circle cx="105" cy="85" r="4" fill="url(#waveGrad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 50 80 Q 70 70, 90 80 T 130 80 T 170 80" fill="none" stroke="url(#waveGrad4)" strokeWidth="3" opacity="0.8" />
              <path d="M 50 95 Q 70 85, 90 95 T 130 95 T 170 95" fill="none" stroke="url(#waveGrad4)" strokeWidth="3" opacity="0.6" />
              <path d="M 50 110 Q 70 100, 90 110 T 130 110 T 170 110" fill="none" stroke="url(#waveGrad4)" strokeWidth="3" opacity="0.4" />
              <circle cx="85" cy="85" r="4" fill="url(#waveGrad4)" />
              <circle cx="105" cy="85" r="4" fill="url(#waveGrad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Flowing wave pattern</li>
            <li>• Progressive opacity fade</li>
            <li>• Represents: Flowing energy, data streams, ethereal movement</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/ghost3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Ghost 3
          </a>
          <a href="/ghost5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ghost 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

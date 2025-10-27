'use client'

export default function Solar5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Solar 5 - Galaxy Spiral</h1>
          <p className="text-white/70">Spiral galaxy formation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar5Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Central core */}
              <circle cx="100" cy="100" r="8" fill="url(#solar5Grad1)" />

              {/* Spiral arms */}
              <path d="M 100 92 Q 120 85, 135 90 Q 145 95, 150 105" stroke="url(#solar5Grad1)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 108 100 Q 120 120, 110 140 Q 100 150, 85 145" stroke="url(#solar5Grad1)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 100 108 Q 75 115, 60 105 Q 50 95, 50 80" stroke="url(#solar5Grad1)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 92 100 Q 80 75, 95 60 Q 110 50, 125 55" stroke="url(#solar5Grad1)" strokeWidth="2.5" fill="none" opacity="0.8" />

              {/* Star clusters along arms */}
              <circle cx="140" cy="95" r="2" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="145" cy="102" r="1.5" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="115" cy="135" r="2" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="90" cy="143" r="1.5" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="65" cy="100" r="2" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="55" cy="85" r="1.5" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="100" cy="65" r="2" fill="url(#solar5Grad1)" opacity="0.6" />
              <circle cx="120" cy="58" r="1.5" fill="url(#solar5Grad1)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar5Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="8" fill="url(#solar5Grad2)" />
              <path d="M 100 92 Q 120 85, 135 90 Q 145 95, 150 105" stroke="url(#solar5Grad2)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 108 100 Q 120 120, 110 140 Q 100 150, 85 145" stroke="url(#solar5Grad2)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 100 108 Q 75 115, 60 105 Q 50 95, 50 80" stroke="url(#solar5Grad2)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 92 100 Q 80 75, 95 60 Q 110 50, 125 55" stroke="url(#solar5Grad2)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <circle cx="140" cy="95" r="2" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="145" cy="102" r="1.5" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="115" cy="135" r="2" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="90" cy="143" r="1.5" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="65" cy="100" r="2" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="55" cy="85" r="1.5" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="100" cy="65" r="2" fill="url(#solar5Grad2)" opacity="0.6" />
              <circle cx="120" cy="58" r="1.5" fill="url(#solar5Grad2)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar5Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="8" fill="url(#solar5Grad3)" />
              <path d="M 100 92 Q 120 85, 135 90 Q 145 95, 150 105" stroke="url(#solar5Grad3)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 108 100 Q 120 120, 110 140 Q 100 150, 85 145" stroke="url(#solar5Grad3)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 100 108 Q 75 115, 60 105 Q 50 95, 50 80" stroke="url(#solar5Grad3)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 92 100 Q 80 75, 95 60 Q 110 50, 125 55" stroke="url(#solar5Grad3)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <circle cx="140" cy="95" r="2" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="145" cy="102" r="1.5" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="115" cy="135" r="2" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="90" cy="143" r="1.5" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="65" cy="100" r="2" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="55" cy="85" r="1.5" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="100" cy="65" r="2" fill="url(#solar5Grad3)" opacity="0.6" />
              <circle cx="120" cy="58" r="1.5" fill="url(#solar5Grad3)" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solar5Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="8" fill="url(#solar5Grad4)" />
              <path d="M 100 92 Q 120 85, 135 90 Q 145 95, 150 105" stroke="url(#solar5Grad4)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 108 100 Q 120 120, 110 140 Q 100 150, 85 145" stroke="url(#solar5Grad4)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 100 108 Q 75 115, 60 105 Q 50 95, 50 80" stroke="url(#solar5Grad4)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <path d="M 92 100 Q 80 75, 95 60 Q 110 50, 125 55" stroke="url(#solar5Grad4)" strokeWidth="2.5" fill="none" opacity="0.8" />
              <circle cx="140" cy="95" r="2" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="145" cy="102" r="1.5" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="115" cy="135" r="2" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="90" cy="143" r="1.5" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="65" cy="100" r="2" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="55" cy="85" r="1.5" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="100" cy="65" r="2" fill="url(#solar5Grad4)" opacity="0.6" />
              <circle cx="120" cy="58" r="1.5" fill="url(#solar5Grad4)" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Spiral galaxy with radiating arms and star clusters</li>
            <li>• Represents: Large-scale systems, cosmic perspective, distributed networks</li>
            <li>• Four spiral arms showing rotational structure</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/solar4" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Solar 4
          </a>
          <a href="/ninja1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Ninja 1 →
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Skull4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Skull 4 - Cyber Skull</h1>
          <p className="text-white/70">Digital skull with circuit patterns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Skull top */}
              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull4Grad1)" strokeWidth="2.5" />

              {/* Digital eye sockets with circuit board pattern */}
              <rect x="82" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad1)" strokeWidth="2" />
              <rect x="104" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad1)" strokeWidth="2" />

              {/* Circuit lines in eyes */}
              <path d="M 84 80 L 94 80" stroke="url(#skull4Grad1)" strokeWidth="1" opacity="0.6" />
              <path d="M 106 80 L 116 80" stroke="url(#skull4Grad1)" strokeWidth="1" opacity="0.6" />
              <circle cx="89" cy="80" r="1.5" fill="url(#skull4Grad1)" opacity="0.7" />
              <circle cx="111" cy="80" r="1.5" fill="url(#skull4Grad1)" opacity="0.7" />

              {/* Circuit pattern on forehead */}
              <path d="M 90 65 L 95 65 L 95 70" stroke="url(#skull4Grad1)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 65 L 105 65 L 105 70" stroke="url(#skull4Grad1)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="95" cy="62" r="2" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" opacity="0.6" />
              <circle cx="105" cy="62" r="2" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" opacity="0.6" />

              {/* Digital nose */}
              <path d="M 95 95 L 100 102 L 105 95 L 100 98 Z" fill="none" stroke="url(#skull4Grad1)" strokeWidth="2" />

              {/* Jaw with tech elements */}
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull4Grad1)" strokeWidth="2.5" />

              {/* Digital teeth pattern */}
              <rect x="85" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" />
              <rect x="92" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" />
              <rect x="100" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" />
              <rect x="108" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad1)" strokeWidth="1" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull4Grad2)" strokeWidth="2.5" />
              <rect x="82" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad2)" strokeWidth="2" />
              <rect x="104" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad2)" strokeWidth="2" />
              <path d="M 84 80 L 94 80" stroke="url(#skull4Grad2)" strokeWidth="1" opacity="0.6" />
              <path d="M 106 80 L 116 80" stroke="url(#skull4Grad2)" strokeWidth="1" opacity="0.6" />
              <circle cx="89" cy="80" r="1.5" fill="url(#skull4Grad2)" opacity="0.7" />
              <circle cx="111" cy="80" r="1.5" fill="url(#skull4Grad2)" opacity="0.7" />
              <path d="M 90 65 L 95 65 L 95 70" stroke="url(#skull4Grad2)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 65 L 105 65 L 105 70" stroke="url(#skull4Grad2)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="95" cy="62" r="2" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" opacity="0.6" />
              <circle cx="105" cy="62" r="2" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" opacity="0.6" />
              <path d="M 95 95 L 100 102 L 105 95 L 100 98 Z" fill="none" stroke="url(#skull4Grad2)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull4Grad2)" strokeWidth="2.5" />
              <rect x="85" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" />
              <rect x="92" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" />
              <rect x="100" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" />
              <rect x="108" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad2)" strokeWidth="1" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull4Grad3)" strokeWidth="2.5" />
              <rect x="82" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad3)" strokeWidth="2" />
              <rect x="104" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad3)" strokeWidth="2" />
              <path d="M 84 80 L 94 80" stroke="url(#skull4Grad3)" strokeWidth="1" opacity="0.6" />
              <path d="M 106 80 L 116 80" stroke="url(#skull4Grad3)" strokeWidth="1" opacity="0.6" />
              <circle cx="89" cy="80" r="1.5" fill="url(#skull4Grad3)" opacity="0.7" />
              <circle cx="111" cy="80" r="1.5" fill="url(#skull4Grad3)" opacity="0.7" />
              <path d="M 90 65 L 95 65 L 95 70" stroke="url(#skull4Grad3)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 65 L 105 65 L 105 70" stroke="url(#skull4Grad3)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="95" cy="62" r="2" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" opacity="0.6" />
              <circle cx="105" cy="62" r="2" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" opacity="0.6" />
              <path d="M 95 95 L 100 102 L 105 95 L 100 98 Z" fill="none" stroke="url(#skull4Grad3)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull4Grad3)" strokeWidth="2.5" />
              <rect x="85" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" />
              <rect x="92" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" />
              <rect x="100" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" />
              <rect x="108" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad3)" strokeWidth="1" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skull4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <ellipse cx="100" cy="85" rx="30" ry="35" fill="none" stroke="url(#skull4Grad4)" strokeWidth="2.5" />
              <rect x="82" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad4)" strokeWidth="2" />
              <rect x="104" y="73" width="14" height="14" rx="2" fill="none" stroke="url(#skull4Grad4)" strokeWidth="2" />
              <path d="M 84 80 L 94 80" stroke="url(#skull4Grad4)" strokeWidth="1" opacity="0.6" />
              <path d="M 106 80 L 116 80" stroke="url(#skull4Grad4)" strokeWidth="1" opacity="0.6" />
              <circle cx="89" cy="80" r="1.5" fill="url(#skull4Grad4)" opacity="0.7" />
              <circle cx="111" cy="80" r="1.5" fill="url(#skull4Grad4)" opacity="0.7" />
              <path d="M 90 65 L 95 65 L 95 70" stroke="url(#skull4Grad4)" strokeWidth="1.5" opacity="0.5" />
              <path d="M 110 65 L 105 65 L 105 70" stroke="url(#skull4Grad4)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="95" cy="62" r="2" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" opacity="0.6" />
              <circle cx="105" cy="62" r="2" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" opacity="0.6" />
              <path d="M 95 95 L 100 102 L 105 95 L 100 98 Z" fill="none" stroke="url(#skull4Grad4)" strokeWidth="2" />
              <path d="M 75 105 Q 75 125, 85 130 L 115 130 Q 125 125, 125 105"
                    fill="none" stroke="url(#skull4Grad4)" strokeWidth="2.5" />
              <rect x="85" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" />
              <rect x="92" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" />
              <rect x="100" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" />
              <rect x="108" y="120" width="4" height="10" fill="none" stroke="url(#skull4Grad4)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Futuristic skull with circuit board patterns and digital elements</li>
            <li>• Represents: Cyber threats, digital security, hacking</li>
            <li>• Square eyes and rectangular teeth for tech aesthetic</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/skull3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Skull 3
          </a>
          <a href="/skull5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Skull 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

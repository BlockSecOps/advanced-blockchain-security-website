'use client'

export default function Wizard4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Wizard 4 - Wizard Hat</h1>
          <p className="text-white/70">Pointed hat with stars and moon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard4Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="wizard4HatFill1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.05 }} />
                </linearGradient>
                <radialGradient id="wizard4Glow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              {/* Hat cone with fill */}
              <path d="M 100 60 L 70 120 L 130 120 Z" fill="url(#wizard4HatFill1)" stroke="url(#wizard4Grad1)" strokeWidth="2.5" />

              {/* Hat cone details/folds */}
              <path d="M 90 80 Q 95 90, 95 120" stroke="url(#wizard4Grad1)" strokeWidth="1" opacity="0.3" />
              <path d="M 105 90 Q 105 105, 107 120" stroke="url(#wizard4Grad1)" strokeWidth="1" opacity="0.3" />

              {/* Hat brim - with 3D effect */}
              <ellipse cx="100" cy="120" rx="35" ry="8" fill="url(#wizard4HatFill1)" stroke="url(#wizard4Grad1)" strokeWidth="2.5" />
              <ellipse cx="100" cy="118" rx="35" ry="6" fill="none" stroke="url(#wizard4Grad1)" strokeWidth="1" opacity="0.4" />

              {/* Crescent moon - more detailed */}
              <path d="M 92 85 Q 88 90, 92 95 Q 97 91, 92 85"
                    fill="none" stroke="url(#wizard4Grad1)" strokeWidth="2" opacity="0.9" />
              <circle cx="92" cy="90" r="10" fill="url(#wizard4Glow1)" opacity="0.3" />
              <path d="M 89 87 L 90 88" stroke="url(#wizard4Grad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Stars - detailed with glow */}
              <path d="M 113 72 L 114.5 76 L 118.5 76.5 L 115.5 79.5 L 116.5 83.5 L 113 81.5 L 109.5 83.5 L 110.5 79.5 L 107.5 76.5 L 111.5 76 Z"
                    fill="url(#wizard4Grad1)" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
              </path>
              <circle cx="113" cy="78" r="6" fill="url(#wizard4Glow1)" opacity="0.2" />

              <path d="M 82 100 L 83 102.5 L 85.5 103 L 83.5 105 L 84 107.5 L 82 106 L 80 107.5 L 80.5 105 L 78.5 103 L 81 102.5 Z"
                    fill="url(#wizard4Grad1)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.3s" repeatCount="indefinite" />
              </path>
              <circle cx="82" cy="104" r="5" fill="url(#wizard4Glow1)" opacity="0.2" />

              <path d="M 108 105 L 108.5 106.5 L 110 107 L 109 108 L 109.5 109.5 L 108 108.5 L 106.5 109.5 L 107 108 L 106 107 L 107.5 106.5 Z"
                    fill="url(#wizard4Grad1)" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
              </path>

              {/* Additional small stars */}
              <circle cx="120" cy="95" r="1.5" fill="url(#wizard4Grad1)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="75" cy="85" r="1.5" fill="url(#wizard4Grad1)" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite" />
              </circle>

              {/* Hat band decoration */}
              <ellipse cx="100" cy="120" rx="30" ry="4" fill="none" stroke="url(#wizard4Grad1)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard4Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="wizard4HatFill2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.05 }} />
                </linearGradient>
                <radialGradient id="wizard4Glow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <path d="M 100 60 L 70 120 L 130 120 Z" fill="url(#wizard4HatFill2)" stroke="url(#wizard4Grad2)" strokeWidth="2.5" />
              <path d="M 90 80 Q 95 90, 95 120" stroke="url(#wizard4Grad2)" strokeWidth="1" opacity="0.3" />
              <path d="M 105 90 Q 105 105, 107 120" stroke="url(#wizard4Grad2)" strokeWidth="1" opacity="0.3" />
              <ellipse cx="100" cy="120" rx="35" ry="8" fill="url(#wizard4HatFill2)" stroke="url(#wizard4Grad2)" strokeWidth="2.5" />
              <ellipse cx="100" cy="118" rx="35" ry="6" fill="none" stroke="url(#wizard4Grad2)" strokeWidth="1" opacity="0.4" />
              <path d="M 92 85 Q 88 90, 92 95 Q 97 91, 92 85" fill="none" stroke="url(#wizard4Grad2)" strokeWidth="2" opacity="0.9" />
              <circle cx="92" cy="90" r="10" fill="url(#wizard4Glow2)" opacity="0.3" />
              <path d="M 113 72 L 114.5 76 L 118.5 76.5 L 115.5 79.5 L 116.5 83.5 L 113 81.5 L 109.5 83.5 L 110.5 79.5 L 107.5 76.5 L 111.5 76 Z"
                    fill="url(#wizard4Grad2)" opacity="0.9" />
              <circle cx="113" cy="78" r="6" fill="url(#wizard4Glow2)" opacity="0.2" />
              <path d="M 82 100 L 83 102.5 L 85.5 103 L 83.5 105 L 84 107.5 L 82 106 L 80 107.5 L 80.5 105 L 78.5 103 L 81 102.5 Z"
                    fill="url(#wizard4Grad2)" opacity="0.8" />
              <ellipse cx="100" cy="120" rx="30" ry="4" fill="none" stroke="url(#wizard4Grad2)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard4Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="wizard4HatFill3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.05 }} />
                </linearGradient>
                <radialGradient id="wizard4Glow3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <path d="M 100 60 L 70 120 L 130 120 Z" fill="url(#wizard4HatFill3)" stroke="url(#wizard4Grad3)" strokeWidth="2.5" />
              <path d="M 90 80 Q 95 90, 95 120" stroke="url(#wizard4Grad3)" strokeWidth="1" opacity="0.3" />
              <path d="M 105 90 Q 105 105, 107 120" stroke="url(#wizard4Grad3)" strokeWidth="1" opacity="0.3" />
              <ellipse cx="100" cy="120" rx="35" ry="8" fill="url(#wizard4HatFill3)" stroke="url(#wizard4Grad3)" strokeWidth="2.5" />
              <ellipse cx="100" cy="118" rx="35" ry="6" fill="none" stroke="url(#wizard4Grad3)" strokeWidth="1" opacity="0.4" />
              <path d="M 92 85 Q 88 90, 92 95 Q 97 91, 92 85" fill="none" stroke="url(#wizard4Grad3)" strokeWidth="2" opacity="0.9" />
              <circle cx="92" cy="90" r="10" fill="url(#wizard4Glow3)" opacity="0.3" />
              <path d="M 113 72 L 114.5 76 L 118.5 76.5 L 115.5 79.5 L 116.5 83.5 L 113 81.5 L 109.5 83.5 L 110.5 79.5 L 107.5 76.5 L 111.5 76 Z"
                    fill="url(#wizard4Grad3)" opacity="0.9" />
              <circle cx="113" cy="78" r="6" fill="url(#wizard4Glow3)" opacity="0.2" />
              <path d="M 82 100 L 83 102.5 L 85.5 103 L 83.5 105 L 84 107.5 L 82 106 L 80 107.5 L 80.5 105 L 78.5 103 L 81 102.5 Z"
                    fill="url(#wizard4Grad3)" opacity="0.8" />
              <ellipse cx="100" cy="120" rx="30" ry="4" fill="none" stroke="url(#wizard4Grad3)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wizard4Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="wizard4HatFill4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.05 }} />
                </linearGradient>
                <radialGradient id="wizard4Glow4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <path d="M 100 60 L 70 120 L 130 120 Z" fill="url(#wizard4HatFill4)" stroke="url(#wizard4Grad4)" strokeWidth="2.5" />
              <path d="M 90 80 Q 95 90, 95 120" stroke="url(#wizard4Grad4)" strokeWidth="1" opacity="0.3" />
              <path d="M 105 90 Q 105 105, 107 120" stroke="url(#wizard4Grad4)" strokeWidth="1" opacity="0.3" />
              <ellipse cx="100" cy="120" rx="35" ry="8" fill="url(#wizard4HatFill4)" stroke="url(#wizard4Grad4)" strokeWidth="2.5" />
              <ellipse cx="100" cy="118" rx="35" ry="6" fill="none" stroke="url(#wizard4Grad4)" strokeWidth="1" opacity="0.4" />
              <path d="M 92 85 Q 88 90, 92 95 Q 97 91, 92 85" fill="none" stroke="url(#wizard4Grad4)" strokeWidth="2" opacity="0.9" />
              <circle cx="92" cy="90" r="10" fill="url(#wizard4Glow4)" opacity="0.3" />
              <path d="M 113 72 L 114.5 76 L 118.5 76.5 L 115.5 79.5 L 116.5 83.5 L 113 81.5 L 109.5 83.5 L 110.5 79.5 L 107.5 76.5 L 111.5 76 Z"
                    fill="url(#wizard4Grad4)" opacity="0.9" />
              <circle cx="113" cy="78" r="6" fill="url(#wizard4Glow4)" opacity="0.2" />
              <path d="M 82 100 L 83 102.5 L 85.5 103 L 83.5 105 L 84 107.5 L 82 106 L 80 107.5 L 80.5 105 L 78.5 103 L 81 102.5 Z"
                    fill="url(#wizard4Grad4)" opacity="0.8" />
              <ellipse cx="100" cy="120" rx="30" ry="4" fill="none" stroke="url(#wizard4Grad4)" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Classic wizard hat with pointed cone and wide brim</li>
            <li>• Represents: Wizardry, magical authority, mysticism</li>
            <li>• Decorated with crescent moon and stars</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/wizard3" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Wizard 3
          </a>
          <a href="/wizard5" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Wizard 5 →
          </a>
        </div>
      </div>
    </div>
  )
}

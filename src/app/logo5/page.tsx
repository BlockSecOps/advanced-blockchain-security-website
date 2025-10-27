'use client'

export default function Logo5Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 5 - Geometric Bloodhound</h1>
          <p className="text-white/70">Security tracking and threat detection</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="houndGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Side Profile Bloodhound - Geometric Style */}

              {/* Back/Body (rectangular body shape) */}
              <path d="M 40 75 L 35 85 L 35 105 L 42 115 L 50 115 L 55 108" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Tail - carried high with curve */}
              <path d="M 38 75 Q 32 68, 35 60" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinecap="round" />

              {/* Back of head/neck - wrinkled skin folds */}
              <path d="M 55 70 L 60 78 L 58 85 L 62 92" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Wrinkle folds on neck */}
              <path d="M 56 80 L 52 82" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 58 88 L 54 90" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Top of head - long narrow head */}
              <path d="M 62 65 L 80 58 L 110 55 L 140 58 L 160 62 L 175 68" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Rear ear - very long and droopy */}
              <path d="M 70 62 L 68 70 L 65 85 L 64 100 L 66 110 L 70 115 L 72 108 L 74 95 L 76 78 L 77 68" fill="url(#houndGrad1)" fillOpacity="0.2" stroke="url(#houndGrad1)" strokeWidth="2" strokeLinejoin="round" />

              {/* Forehead/brow - wrinkles */}
              <path d="M 110 58 Q 115 60, 120 58" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 125 59 Q 130 61, 135 59" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Eye - deep set, diamond shaped */}
              <path d="M 145 68 L 150 70 L 148 74 L 143 72 Z" fill="url(#houndGrad1)" stroke="url(#houndGrad1)" strokeWidth="1.5" />

              {/* Upper face/cheek wrinkles */}
              <path d="M 152 72 L 155 78 L 158 85" fill="none" stroke="url(#houndGrad1)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 156 76 L 152 78" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 158 82 L 154 84" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Long muzzle/snout - extends forward */}
              <path d="M 160 88 L 172 90 L 188 92 L 200 94 L 205 97" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Lower jaw/jowls - heavy hanging jowls */}
              <path d="M 175 68 L 182 72 L 190 75 L 198 78 L 205 82 L 210 88 L 208 95 L 205 97" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Jowl folds - loose skin */}
              <path d="M 185 75 Q 188 78, 190 82" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 195 80 Q 198 83, 200 87" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Nose - large prominent nose */}
              <ellipse cx="208" cy="96" rx="5" ry="4" fill="url(#houndGrad1)" stroke="url(#houndGrad1)" strokeWidth="1.5" />

              {/* Front ear - very long droopy ear in front */}
              <path d="M 160 65 L 165 68 L 170 75 L 174 85 L 176 98 L 177 110 L 176 120 L 174 125 L 170 122 L 168 112 L 166 98 L 164 82 L 162 70" fill="url(#houndGrad1)" fillOpacity="0.3" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Under jaw/throat - loose skin */}
              <path d="M 158 88 L 152 95 L 148 102 L 145 108" fill="none" stroke="url(#houndGrad1)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 155 98 L 152 100" fill="none" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Chest - deep chest */}
              <path d="M 62 92 L 68 102 L 78 110 L 90 115 L 100 115" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Front leg */}
              <path d="M 100 115 L 102 130 L 104 145 L 105 155" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 102 155 L 108 158 L 112 156" fill="none" stroke="url(#houndGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Detection/scent lines from nose */}
              <line x1="213" y1="96" x2="225" y2="92" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="228" y2="96" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="225" y2="100" stroke="url(#houndGrad1)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />

              {/* Accent dots */}
              <circle cx="80" cy="58" r="2.5" fill="url(#houndGrad1)" />
              <circle cx="147" cy="70" r="2.5" fill="url(#houndGrad1)" />
              <circle cx="208" cy="96" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="houndGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 40 75 L 35 85 L 35 105 L 42 115 L 50 115 L 55 108" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 38 75 Q 32 68, 35 60" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 55 70 L 60 78 L 58 85 L 62 92" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 56 80 L 52 82" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 58 88 L 54 90" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 65 L 80 58 L 110 55 L 140 58 L 160 62 L 175 68" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 70 62 L 68 70 L 65 85 L 64 100 L 66 110 L 70 115 L 72 108 L 74 95 L 76 78 L 77 68" fill="url(#houndGrad2)" fillOpacity="0.2" stroke="url(#houndGrad2)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 110 58 Q 115 60, 120 58" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 125 59 Q 130 61, 135 59" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 145 68 L 150 70 L 148 74 L 143 72 Z" fill="url(#houndGrad2)" stroke="url(#houndGrad2)" strokeWidth="1.5" />
              <path d="M 152 72 L 155 78 L 158 85" fill="none" stroke="url(#houndGrad2)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 156 76 L 152 78" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 158 82 L 154 84" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 160 88 L 172 90 L 188 92 L 200 94 L 205 97" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 175 68 L 182 72 L 190 75 L 198 78 L 205 82 L 210 88 L 208 95 L 205 97" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 185 75 Q 188 78, 190 82" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 195 80 Q 198 83, 200 87" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="208" cy="96" rx="5" ry="4" fill="url(#houndGrad2)" stroke="url(#houndGrad2)" strokeWidth="1.5" />
              <path d="M 160 65 L 165 68 L 170 75 L 174 85 L 176 98 L 177 110 L 176 120 L 174 125 L 170 122 L 168 112 L 166 98 L 164 82 L 162 70" fill="url(#houndGrad2)" fillOpacity="0.3" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 158 88 L 152 95 L 148 102 L 145 108" fill="none" stroke="url(#houndGrad2)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 155 98 L 152 100" fill="none" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 92 L 68 102 L 78 110 L 90 115 L 100 115" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 100 115 L 102 130 L 104 145 L 105 155" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 102 155 L 108 158 L 112 156" fill="none" stroke="url(#houndGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="213" y1="96" x2="225" y2="92" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="228" y2="96" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="225" y2="100" stroke="url(#houndGrad2)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <circle cx="80" cy="58" r="2.5" fill="url(#houndGrad2)" />
              <circle cx="147" cy="70" r="2.5" fill="url(#houndGrad2)" />
              <circle cx="208" cy="96" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="houndGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 40 75 L 35 85 L 35 105 L 42 115 L 50 115 L 55 108" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 38 75 Q 32 68, 35 60" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 55 70 L 60 78 L 58 85 L 62 92" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 56 80 L 52 82" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 58 88 L 54 90" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 65 L 80 58 L 110 55 L 140 58 L 160 62 L 175 68" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 70 62 L 68 70 L 65 85 L 64 100 L 66 110 L 70 115 L 72 108 L 74 95 L 76 78 L 77 68" fill="url(#houndGrad3)" fillOpacity="0.2" stroke="url(#houndGrad3)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 110 58 Q 115 60, 120 58" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 125 59 Q 130 61, 135 59" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 145 68 L 150 70 L 148 74 L 143 72 Z" fill="url(#houndGrad3)" stroke="url(#houndGrad3)" strokeWidth="1.5" />
              <path d="M 152 72 L 155 78 L 158 85" fill="none" stroke="url(#houndGrad3)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 156 76 L 152 78" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 158 82 L 154 84" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 160 88 L 172 90 L 188 92 L 200 94 L 205 97" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 175 68 L 182 72 L 190 75 L 198 78 L 205 82 L 210 88 L 208 95 L 205 97" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 185 75 Q 188 78, 190 82" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 195 80 Q 198 83, 200 87" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="208" cy="96" rx="5" ry="4" fill="url(#houndGrad3)" stroke="url(#houndGrad3)" strokeWidth="1.5" />
              <path d="M 160 65 L 165 68 L 170 75 L 174 85 L 176 98 L 177 110 L 176 120 L 174 125 L 170 122 L 168 112 L 166 98 L 164 82 L 162 70" fill="url(#houndGrad3)" fillOpacity="0.3" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 158 88 L 152 95 L 148 102 L 145 108" fill="none" stroke="url(#houndGrad3)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 155 98 L 152 100" fill="none" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 92 L 68 102 L 78 110 L 90 115 L 100 115" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 100 115 L 102 130 L 104 145 L 105 155" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 102 155 L 108 158 L 112 156" fill="none" stroke="url(#houndGrad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="213" y1="96" x2="225" y2="92" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="228" y2="96" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="225" y2="100" stroke="url(#houndGrad3)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <circle cx="80" cy="58" r="2.5" fill="url(#houndGrad3)" />
              <circle cx="147" cy="70" r="2.5" fill="url(#houndGrad3)" />
              <circle cx="208" cy="96" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="houndGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 40 75 L 35 85 L 35 105 L 42 115 L 50 115 L 55 108" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 38 75 Q 32 68, 35 60" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 55 70 L 60 78 L 58 85 L 62 92" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 56 80 L 52 82" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 58 88 L 54 90" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 65 L 80 58 L 110 55 L 140 58 L 160 62 L 175 68" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 70 62 L 68 70 L 65 85 L 64 100 L 66 110 L 70 115 L 72 108 L 74 95 L 76 78 L 77 68" fill="url(#houndGrad4)" fillOpacity="0.2" stroke="url(#houndGrad4)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 110 58 Q 115 60, 120 58" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 125 59 Q 130 61, 135 59" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 145 68 L 150 70 L 148 74 L 143 72 Z" fill="url(#houndGrad4)" stroke="url(#houndGrad4)" strokeWidth="1.5" />
              <path d="M 152 72 L 155 78 L 158 85" fill="none" stroke="url(#houndGrad4)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 156 76 L 152 78" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 158 82 L 154 84" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 160 88 L 172 90 L 188 92 L 200 94 L 205 97" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 175 68 L 182 72 L 190 75 L 198 78 L 205 82 L 210 88 L 208 95 L 205 97" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 185 75 Q 188 78, 190 82" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 195 80 Q 198 83, 200 87" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="208" cy="96" rx="5" ry="4" fill="url(#houndGrad4)" stroke="url(#houndGrad4)" strokeWidth="1.5" />
              <path d="M 160 65 L 165 68 L 170 75 L 174 85 L 176 98 L 177 110 L 176 120 L 174 125 L 170 122 L 168 112 L 166 98 L 164 82 L 162 70" fill="url(#houndGrad4)" fillOpacity="0.3" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 158 88 L 152 95 L 148 102 L 145 108" fill="none" stroke="url(#houndGrad4)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 155 98 L 152 100" fill="none" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.6" />
              <path d="M 62 92 L 68 102 L 78 110 L 90 115 L 100 115" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 100 115 L 102 130 L 104 145 L 105 155" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 102 155 L 108 158 L 112 156" fill="none" stroke="url(#houndGrad4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="213" y1="96" x2="225" y2="92" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="228" y2="96" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <line x1="213" y1="96" x2="225" y2="100" stroke="url(#houndGrad4)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2" />
              <circle cx="80" cy="58" r="2.5" fill="url(#houndGrad4)" />
              <circle cx="147" cy="70" r="2.5" fill="url(#houndGrad4)" />
              <circle cx="208" cy="96" r="2" fill="#2DD4BF" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Side profile geometric bloodhound - expert tracker and threat detector</li>
            <li>• Accurate bloodhound anatomy: very long droopy ears extending down</li>
            <li>• Heavy wrinkled skin folds on face, neck, and jowls (signature feature)</li>
            <li>• Long narrow head with extended muzzle - classic bloodhound profile</li>
            <li>• Deep-set diamond-shaped eye - solemn, dignified expression</li>
            <li>• Rectangular body shape (not square) - breed-accurate proportions</li>
            <li>• Large prominent nose with scent detection lines</li>
            <li>• Tail carried high with curve - active tracking posture</li>
            <li>• Deep chest extending down - accurate breed structure</li>
            <li>• Electric gradient throughout - modern tech aesthetic</li>
            <li>• Represents: Relentless tracking, threat detection, vulnerability hunting</li>
            <li>• Symbolism: Bloodhounds never give up the trail - continuous security monitoring</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            Logo 0 (Network)
          </a>
          <a href="/logo1" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Logo 1 (Shield)
          </a>
          <a href="/logo2" className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-lg transition-colors">
            Logo 2 (Cube)
          </a>
          <a href="/logo3" className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-lg transition-colors">
            Logo 3 (Cube Array)
          </a>
          <a href="/logo4" className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-lg transition-colors">
            Logo 4 (Pipeline)
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Logo3Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 3 - Cube Array</h1>
          <p className="text-white/70">Modular security architecture with interconnected cubes</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrayGrad1-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad1-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad1-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayAccent1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Back Left Cube - smaller */}
              <g opacity="0.7">
                <path d="M 60 50 L 86.64 63.325 L 60 76.65 L 33.36 63.325 Z" fill="url(#arrayGrad1-1)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 33.36 63.325 L 33.36 90 L 60 103.325 L 60 76.65 Z" fill="url(#arrayGrad1-2)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 60 76.65 L 60 103.325 L 86.64 90 L 86.64 63.325 Z" fill="url(#arrayGrad1-3)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
              </g>

              {/* Back Right Cube - smaller */}
              <g opacity="0.7">
                <path d="M 180 50 L 206.64 63.325 L 180 76.65 L 153.36 63.325 Z" fill="url(#arrayGrad1-1)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 153.36 63.325 L 153.36 90 L 180 103.325 L 180 76.65 Z" fill="url(#arrayGrad1-2)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 180 76.65 L 180 103.325 L 206.64 90 L 206.64 63.325 Z" fill="url(#arrayGrad1-3)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
              </g>

              {/* Front Center Cube - larger, main focus */}
              <g>
                <path d="M 120 70 L 156.64 89.3 L 120 108.6 L 83.36 89.3 Z" fill="url(#arrayGrad1-1)" stroke="url(#arrayAccent1)" strokeWidth="2" />
                <path d="M 83.36 89.3 L 83.36 128 L 120 147.3 L 120 108.6 Z" fill="url(#arrayGrad1-2)" stroke="url(#arrayAccent1)" strokeWidth="2" />
                <path d="M 120 108.6 L 120 147.3 L 156.64 128 L 156.64 89.3 Z" fill="url(#arrayGrad1-3)" stroke="url(#arrayAccent1)" strokeWidth="2" />

                {/* Shield on center cube */}
                <path d="M 120 110 C 115 110, 112 112, 112 115 L 112 125 C 112 133, 116 137, 120 140 C 124 137, 128 133, 128 125 L 128 115 C 128 112, 125 110, 120 110 Z" fill="none" stroke="url(#arrayAccent1)" strokeWidth="2" />
              </g>

              {/* Front Left Cube - medium */}
              <g opacity="0.85">
                <path d="M 50 110 L 76.64 123.325 L 50 136.65 L 23.36 123.325 Z" fill="url(#arrayGrad1-1)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 23.36 123.325 L 23.36 150 L 50 163.325 L 50 136.65 Z" fill="url(#arrayGrad1-2)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 50 136.65 L 50 163.325 L 76.64 150 L 76.64 123.325 Z" fill="url(#arrayGrad1-3)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
              </g>

              {/* Front Right Cube - medium */}
              <g opacity="0.85">
                <path d="M 190 110 L 216.64 123.325 L 190 136.65 L 163.36 123.325 Z" fill="url(#arrayGrad1-1)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 163.36 123.325 L 163.36 150 L 190 163.325 L 190 136.65 Z" fill="url(#arrayGrad1-2)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
                <path d="M 190 136.65 L 190 163.325 L 216.64 150 L 216.64 123.325 Z" fill="url(#arrayGrad1-3)" stroke="url(#arrayAccent1)" strokeWidth="1.5" />
              </g>

              {/* Connection lines between cubes */}
              <line x1="60" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent1)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="180" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent1)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent1)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="190" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent1)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />

              {/* Accent nodes at cube corners */}
              <circle cx="120" cy="70" r="3" fill="url(#arrayAccent1)" />
              <circle cx="60" cy="50" r="2.5" fill="url(#arrayAccent1)" opacity="0.7" />
              <circle cx="180" cy="50" r="2.5" fill="url(#arrayAccent1)" opacity="0.7" />
              <circle cx="50" cy="110" r="2.5" fill="url(#arrayAccent1)" opacity="0.85" />
              <circle cx="190" cy="110" r="2.5" fill="url(#arrayAccent1)" opacity="0.85" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrayGrad2-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad2-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad2-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayAccent2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <g opacity="0.7">
                <path d="M 60 50 L 86.64 63.325 L 60 76.65 L 33.36 63.325 Z" fill="url(#arrayGrad2-1)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 33.36 63.325 L 33.36 90 L 60 103.325 L 60 76.65 Z" fill="url(#arrayGrad2-2)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 60 76.65 L 60 103.325 L 86.64 90 L 86.64 63.325 Z" fill="url(#arrayGrad2-3)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
              </g>

              <g opacity="0.7">
                <path d="M 180 50 L 206.64 63.325 L 180 76.65 L 153.36 63.325 Z" fill="url(#arrayGrad2-1)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 153.36 63.325 L 153.36 90 L 180 103.325 L 180 76.65 Z" fill="url(#arrayGrad2-2)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 180 76.65 L 180 103.325 L 206.64 90 L 206.64 63.325 Z" fill="url(#arrayGrad2-3)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
              </g>

              <g>
                <path d="M 120 70 L 156.64 89.3 L 120 108.6 L 83.36 89.3 Z" fill="url(#arrayGrad2-1)" stroke="url(#arrayAccent2)" strokeWidth="2" />
                <path d="M 83.36 89.3 L 83.36 128 L 120 147.3 L 120 108.6 Z" fill="url(#arrayGrad2-2)" stroke="url(#arrayAccent2)" strokeWidth="2" />
                <path d="M 120 108.6 L 120 147.3 L 156.64 128 L 156.64 89.3 Z" fill="url(#arrayGrad2-3)" stroke="url(#arrayAccent2)" strokeWidth="2" />
                <path d="M 120 110 C 115 110, 112 112, 112 115 L 112 125 C 112 133, 116 137, 120 140 C 124 137, 128 133, 128 125 L 128 115 C 128 112, 125 110, 120 110 Z" fill="none" stroke="url(#arrayAccent2)" strokeWidth="2" />
              </g>

              <g opacity="0.85">
                <path d="M 50 110 L 76.64 123.325 L 50 136.65 L 23.36 123.325 Z" fill="url(#arrayGrad2-1)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 23.36 123.325 L 23.36 150 L 50 163.325 L 50 136.65 Z" fill="url(#arrayGrad2-2)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 50 136.65 L 50 163.325 L 76.64 150 L 76.64 123.325 Z" fill="url(#arrayGrad2-3)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
              </g>

              <g opacity="0.85">
                <path d="M 190 110 L 216.64 123.325 L 190 136.65 L 163.36 123.325 Z" fill="url(#arrayGrad2-1)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 163.36 123.325 L 163.36 150 L 190 163.325 L 190 136.65 Z" fill="url(#arrayGrad2-2)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
                <path d="M 190 136.65 L 190 163.325 L 216.64 150 L 216.64 123.325 Z" fill="url(#arrayGrad2-3)" stroke="url(#arrayAccent2)" strokeWidth="1.5" />
              </g>

              <line x1="60" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent2)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="180" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent2)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent2)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="190" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent2)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />

              <circle cx="120" cy="70" r="3" fill="url(#arrayAccent2)" />
              <circle cx="60" cy="50" r="2.5" fill="url(#arrayAccent2)" opacity="0.7" />
              <circle cx="180" cy="50" r="2.5" fill="url(#arrayAccent2)" opacity="0.7" />
              <circle cx="50" cy="110" r="2.5" fill="url(#arrayAccent2)" opacity="0.85" />
              <circle cx="190" cy="110" r="2.5" fill="url(#arrayAccent2)" opacity="0.85" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrayGrad3-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.9 }} />
                </linearGradient>
                <linearGradient id="arrayGrad3-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0.8 }} />
                </linearGradient>
                <linearGradient id="arrayGrad3-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.85 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.85 }} />
                </linearGradient>
                <linearGradient id="arrayAccent3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <g opacity="0.7">
                <path d="M 60 50 L 86.64 63.325 L 60 76.65 L 33.36 63.325 Z" fill="url(#arrayGrad3-1)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 33.36 63.325 L 33.36 90 L 60 103.325 L 60 76.65 Z" fill="url(#arrayGrad3-2)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 60 76.65 L 60 103.325 L 86.64 90 L 86.64 63.325 Z" fill="url(#arrayGrad3-3)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
              </g>

              <g opacity="0.7">
                <path d="M 180 50 L 206.64 63.325 L 180 76.65 L 153.36 63.325 Z" fill="url(#arrayGrad3-1)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 153.36 63.325 L 153.36 90 L 180 103.325 L 180 76.65 Z" fill="url(#arrayGrad3-2)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 180 76.65 L 180 103.325 L 206.64 90 L 206.64 63.325 Z" fill="url(#arrayGrad3-3)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
              </g>

              <g>
                <path d="M 120 70 L 156.64 89.3 L 120 108.6 L 83.36 89.3 Z" fill="url(#arrayGrad3-1)" stroke="url(#arrayAccent3)" strokeWidth="2" />
                <path d="M 83.36 89.3 L 83.36 128 L 120 147.3 L 120 108.6 Z" fill="url(#arrayGrad3-2)" stroke="url(#arrayAccent3)" strokeWidth="2" />
                <path d="M 120 108.6 L 120 147.3 L 156.64 128 L 156.64 89.3 Z" fill="url(#arrayGrad3-3)" stroke="url(#arrayAccent3)" strokeWidth="2" />
                <path d="M 120 110 C 115 110, 112 112, 112 115 L 112 125 C 112 133, 116 137, 120 140 C 124 137, 128 133, 128 125 L 128 115 C 128 112, 125 110, 120 110 Z" fill="none" stroke="url(#arrayAccent3)" strokeWidth="2" />
              </g>

              <g opacity="0.85">
                <path d="M 50 110 L 76.64 123.325 L 50 136.65 L 23.36 123.325 Z" fill="url(#arrayGrad3-1)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 23.36 123.325 L 23.36 150 L 50 163.325 L 50 136.65 Z" fill="url(#arrayGrad3-2)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 50 136.65 L 50 163.325 L 76.64 150 L 76.64 123.325 Z" fill="url(#arrayGrad3-3)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
              </g>

              <g opacity="0.85">
                <path d="M 190 110 L 216.64 123.325 L 190 136.65 L 163.36 123.325 Z" fill="url(#arrayGrad3-1)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 163.36 123.325 L 163.36 150 L 190 163.325 L 190 136.65 Z" fill="url(#arrayGrad3-2)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
                <path d="M 190 136.65 L 190 163.325 L 216.64 150 L 216.64 123.325 Z" fill="url(#arrayGrad3-3)" stroke="url(#arrayAccent3)" strokeWidth="1.5" />
              </g>

              <line x1="60" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent3)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="180" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent3)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent3)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="190" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent3)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />

              <circle cx="120" cy="70" r="3" fill="url(#arrayAccent3)" />
              <circle cx="60" cy="50" r="2.5" fill="url(#arrayAccent3)" opacity="0.7" />
              <circle cx="180" cy="50" r="2.5" fill="url(#arrayAccent3)" opacity="0.7" />
              <circle cx="50" cy="110" r="2.5" fill="url(#arrayAccent3)" opacity="0.85" />
              <circle cx="190" cy="110" r="2.5" fill="url(#arrayAccent3)" opacity="0.85" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrayGrad4-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad4-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayGrad4-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="arrayAccent4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <g opacity="0.7">
                <path d="M 60 50 L 86.64 63.325 L 60 76.65 L 33.36 63.325 Z" fill="url(#arrayGrad4-1)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 33.36 63.325 L 33.36 90 L 60 103.325 L 60 76.65 Z" fill="url(#arrayGrad4-2)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 60 76.65 L 60 103.325 L 86.64 90 L 86.64 63.325 Z" fill="url(#arrayGrad4-3)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
              </g>

              <g opacity="0.7">
                <path d="M 180 50 L 206.64 63.325 L 180 76.65 L 153.36 63.325 Z" fill="url(#arrayGrad4-1)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 153.36 63.325 L 153.36 90 L 180 103.325 L 180 76.65 Z" fill="url(#arrayGrad4-2)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 180 76.65 L 180 103.325 L 206.64 90 L 206.64 63.325 Z" fill="url(#arrayGrad4-3)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
              </g>

              <g>
                <path d="M 120 70 L 156.64 89.3 L 120 108.6 L 83.36 89.3 Z" fill="url(#arrayGrad4-1)" stroke="url(#arrayAccent4)" strokeWidth="2" />
                <path d="M 83.36 89.3 L 83.36 128 L 120 147.3 L 120 108.6 Z" fill="url(#arrayGrad4-2)" stroke="url(#arrayAccent4)" strokeWidth="2" />
                <path d="M 120 108.6 L 120 147.3 L 156.64 128 L 156.64 89.3 Z" fill="url(#arrayGrad4-3)" stroke="url(#arrayAccent4)" strokeWidth="2" />
                <path d="M 120 110 C 115 110, 112 112, 112 115 L 112 125 C 112 133, 116 137, 120 140 C 124 137, 128 133, 128 125 L 128 115 C 128 112, 125 110, 120 110 Z" fill="none" stroke="url(#arrayAccent4)" strokeWidth="2" />
              </g>

              <g opacity="0.85">
                <path d="M 50 110 L 76.64 123.325 L 50 136.65 L 23.36 123.325 Z" fill="url(#arrayGrad4-1)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 23.36 123.325 L 23.36 150 L 50 163.325 L 50 136.65 Z" fill="url(#arrayGrad4-2)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 50 136.65 L 50 163.325 L 76.64 150 L 76.64 123.325 Z" fill="url(#arrayGrad4-3)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
              </g>

              <g opacity="0.85">
                <path d="M 190 110 L 216.64 123.325 L 190 136.65 L 163.36 123.325 Z" fill="url(#arrayGrad4-1)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 163.36 123.325 L 163.36 150 L 190 163.325 L 190 136.65 Z" fill="url(#arrayGrad4-2)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
                <path d="M 190 136.65 L 190 163.325 L 216.64 150 L 216.64 123.325 Z" fill="url(#arrayGrad4-3)" stroke="url(#arrayAccent4)" strokeWidth="1.5" />
              </g>

              <line x1="60" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent4)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="180" y1="76.65" x2="120" y2="108.6" stroke="url(#arrayAccent4)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent4)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
              <line x1="190" y1="136.65" x2="120" y2="108.6" stroke="url(#arrayAccent4)" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />

              <circle cx="120" cy="70" r="3" fill="url(#arrayAccent4)" />
              <circle cx="60" cy="50" r="2.5" fill="url(#arrayAccent4)" opacity="0.7" />
              <circle cx="180" cy="50" r="2.5" fill="url(#arrayAccent4)" opacity="0.7" />
              <circle cx="50" cy="110" r="2.5" fill="url(#arrayAccent4)" opacity="0.85" />
              <circle cx="190" cy="110" r="2.5" fill="url(#arrayAccent4)" opacity="0.85" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Array of 5 interconnected isometric cubes representing distributed security</li>
            <li>• Central cube is larger and features shield icon - the security core</li>
            <li>• Four surrounding cubes represent modular security components</li>
            <li>• Dashed connection lines show inter-module communication</li>
            <li>• Varying opacity creates depth and hierarchy</li>
            <li>• Electric gradient flows across all cubes for unity</li>
            <li>• Represents: Microservices architecture, distributed security, scalability</li>
            <li>• Conveys: Modular design, interconnected protection, enterprise scale</li>
            <li>• Similar to: Kubernetes, Docker Swarm, and distributed systems logos</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo" className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
            Logo 0 (Network)
          </a>
          <a href="/logo1" className="inline-block px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors">
            Logo 1 (Shield)
          </a>
          <a href="/logo2" className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
            Logo 2 (Single Cube)
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function Logo2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 2 - Secure Cube</h1>
          <p className="text-white/70">Isometric cube representing blockchain security layers</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cubeGradient1-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient1-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient1-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeAccent1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Perfect Isometric Cube - all sides 50 units */}
              {/* Top face */}
              <path
                d="M 100 50 L 143.3 71.65 L 100 93.3 L 56.7 71.65 Z"
                fill="url(#cubeGradient1-top)"
                stroke="url(#cubeAccent1)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Left face */}
              <path
                d="M 56.7 71.65 L 56.7 115 L 100 136.65 L 100 93.3 Z"
                fill="url(#cubeGradient1-left)"
                stroke="url(#cubeAccent1)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Right face */}
              <path
                d="M 100 93.3 L 100 136.65 L 143.3 115 L 143.3 71.65 Z"
                fill="url(#cubeGradient1-right)"
                stroke="url(#cubeAccent1)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Security layers - horizontal lines */}
              <line x1="56.7" y1="86.1" x2="100" y2="107.75" stroke="url(#cubeAccent1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="107.75" x2="143.3" y2="86.1" stroke="url(#cubeAccent1)" strokeWidth="1.5" opacity="0.6" />

              <line x1="56.7" y1="100.55" x2="100" y2="122.2" stroke="url(#cubeAccent1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="122.2" x2="143.3" y2="100.55" stroke="url(#cubeAccent1)" strokeWidth="1.5" opacity="0.6" />

              {/* Central shield icon on front face */}
              <path
                d="M 100 100 C 95 100, 92 102, 92 105 L 92 115 C 92 123, 96 127, 100 130 C 104 127, 108 123, 108 115 L 108 105 C 108 102, 105 100, 100 100 Z"
                fill="none"
                stroke="url(#cubeAccent1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Corner highlights */}
              <circle cx="100" cy="50" r="3.5" fill="url(#cubeAccent1)" />
              <circle cx="143.3" cy="71.65" r="3.5" fill="url(#cubeAccent1)" />
              <circle cx="56.7" cy="71.65" r="3.5" fill="url(#cubeAccent1)" />
              <circle cx="100" cy="136.65" r="3.5" fill="url(#cubeAccent1)" />
              <circle cx="143.3" cy="115" r="3.5" fill="url(#cubeAccent1)" />
              <circle cx="56.7" cy="115" r="3.5" fill="url(#cubeAccent1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cubeGradient2-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient2-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient2-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeAccent2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 143.3 71.65 L 100 93.3 L 56.7 71.65 Z" fill="url(#cubeGradient2-top)" stroke="url(#cubeAccent2)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 56.7 71.65 L 56.7 115 L 100 136.65 L 100 93.3 Z" fill="url(#cubeGradient2-left)" stroke="url(#cubeAccent2)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 100 93.3 L 100 136.65 L 143.3 115 L 143.3 71.65 Z" fill="url(#cubeGradient2-right)" stroke="url(#cubeAccent2)" strokeWidth="2" strokeLinejoin="round" />

              <line x1="56.7" y1="86.1" x2="100" y2="107.75" stroke="url(#cubeAccent2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="107.75" x2="143.3" y2="86.1" stroke="url(#cubeAccent2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="56.7" y1="100.55" x2="100" y2="122.2" stroke="url(#cubeAccent2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="122.2" x2="143.3" y2="100.55" stroke="url(#cubeAccent2)" strokeWidth="1.5" opacity="0.6" />

              <path d="M 100 100 C 95 100, 92 102, 92 105 L 92 115 C 92 123, 96 127, 100 130 C 104 127, 108 123, 108 115 L 108 105 C 108 102, 105 100, 100 100 Z" fill="none" stroke="url(#cubeAccent2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <circle cx="100" cy="50" r="3.5" fill="url(#cubeAccent2)" />
              <circle cx="143.3" cy="71.65" r="3.5" fill="url(#cubeAccent2)" />
              <circle cx="56.7" cy="71.65" r="3.5" fill="url(#cubeAccent2)" />
              <circle cx="100" cy="136.65" r="3.5" fill="url(#cubeAccent2)" />
              <circle cx="143.3" cy="115" r="3.5" fill="url(#cubeAccent2)" />
              <circle cx="56.7" cy="115" r="3.5" fill="url(#cubeAccent2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cubeGradient3-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.9 }} />
                </linearGradient>
                <linearGradient id="cubeGradient3-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0.8 }} />
                </linearGradient>
                <linearGradient id="cubeGradient3-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.85 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.85 }} />
                </linearGradient>
                <linearGradient id="cubeAccent3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 143.3 71.65 L 100 93.3 L 56.7 71.65 Z" fill="url(#cubeGradient3-top)" stroke="url(#cubeAccent3)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 56.7 71.65 L 56.7 115 L 100 136.65 L 100 93.3 Z" fill="url(#cubeGradient3-left)" stroke="url(#cubeAccent3)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 100 93.3 L 100 136.65 L 143.3 115 L 143.3 71.65 Z" fill="url(#cubeGradient3-right)" stroke="url(#cubeAccent3)" strokeWidth="2" strokeLinejoin="round" />

              <line x1="56.7" y1="86.1" x2="100" y2="107.75" stroke="url(#cubeAccent3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="107.75" x2="143.3" y2="86.1" stroke="url(#cubeAccent3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="56.7" y1="100.55" x2="100" y2="122.2" stroke="url(#cubeAccent3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="122.2" x2="143.3" y2="100.55" stroke="url(#cubeAccent3)" strokeWidth="1.5" opacity="0.6" />

              <path d="M 100 100 C 95 100, 92 102, 92 105 L 92 115 C 92 123, 96 127, 100 130 C 104 127, 108 123, 108 115 L 108 105 C 108 102, 105 100, 100 100 Z" fill="none" stroke="url(#cubeAccent3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <circle cx="100" cy="50" r="3.5" fill="url(#cubeAccent3)" />
              <circle cx="143.3" cy="71.65" r="3.5" fill="url(#cubeAccent3)" />
              <circle cx="56.7" cy="71.65" r="3.5" fill="url(#cubeAccent3)" />
              <circle cx="100" cy="136.65" r="3.5" fill="url(#cubeAccent3)" />
              <circle cx="143.3" cy="115" r="3.5" fill="url(#cubeAccent3)" />
              <circle cx="56.7" cy="115" r="3.5" fill="url(#cubeAccent3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cubeGradient4-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient4-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeGradient4-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="cubeAccent4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 100 50 L 143.3 71.65 L 100 93.3 L 56.7 71.65 Z" fill="url(#cubeGradient4-top)" stroke="url(#cubeAccent4)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 56.7 71.65 L 56.7 115 L 100 136.65 L 100 93.3 Z" fill="url(#cubeGradient4-left)" stroke="url(#cubeAccent4)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 100 93.3 L 100 136.65 L 143.3 115 L 143.3 71.65 Z" fill="url(#cubeGradient4-right)" stroke="url(#cubeAccent4)" strokeWidth="2" strokeLinejoin="round" />

              <line x1="56.7" y1="86.1" x2="100" y2="107.75" stroke="url(#cubeAccent4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="107.75" x2="143.3" y2="86.1" stroke="url(#cubeAccent4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="56.7" y1="100.55" x2="100" y2="122.2" stroke="url(#cubeAccent4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="100" y1="122.2" x2="143.3" y2="100.55" stroke="url(#cubeAccent4)" strokeWidth="1.5" opacity="0.6" />

              <path d="M 100 100 C 95 100, 92 102, 92 105 L 92 115 C 92 123, 96 127, 100 130 C 104 127, 108 123, 108 115 L 108 105 C 108 102, 105 100, 100 100 Z" fill="none" stroke="url(#cubeAccent4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <circle cx="100" cy="50" r="3.5" fill="url(#cubeAccent4)" />
              <circle cx="143.3" cy="71.65" r="3.5" fill="url(#cubeAccent4)" />
              <circle cx="56.7" cy="71.65" r="3.5" fill="url(#cubeAccent4)" />
              <circle cx="100" cy="136.65" r="3.5" fill="url(#cubeAccent4)" />
              <circle cx="143.3" cy="115" r="3.5" fill="url(#cubeAccent4)" />
              <circle cx="56.7" cy="115" r="3.5" fill="url(#cubeAccent4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Perfect isometric cube - all sides are equal length (50 units)</li>
            <li>• Represents blockchain's layered architecture and modularity</li>
            <li>• Three distinct faces with gradient progression (light to dark)</li>
            <li>• Horizontal security layers showing defense in depth</li>
            <li>• Central shield icon symbolizing protection</li>
            <li>• Six corner nodes representing secure endpoints</li>
            <li>• Electric gradient from indigo through purple to teal</li>
            <li>• 3D perspective gives depth and modern tech feel</li>
            <li>• Similar to logos from: Polygon, Cube.dev, and other Web3 platforms</li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/logo" className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
            View Logo 0 (Abstract Network)
          </a>
          <a href="/logo1" className="inline-block px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors">
            View Logo 1 (Security Shield)
          </a>
        </div>
      </div>
    </div>
  )
}

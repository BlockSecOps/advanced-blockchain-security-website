'use client'

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo Preview</h1>
          <p className="text-white/70">Modern abstract logo with electric gradient</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="electricGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Abstract geometric shape made of connected lines */}
              <path
                d="M 50 30 L 100 60 L 150 40 L 130 90 L 170 130 L 120 150 L 100 120 L 70 160 L 40 110 L 60 70 Z"
                stroke="url(#electricGradient1)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="30" r="6" fill="url(#electricGradient1)" />
              <circle cx="100" cy="60" r="6" fill="url(#electricGradient1)" />
              <circle cx="150" cy="40" r="6" fill="url(#electricGradient1)" />
              <circle cx="130" cy="90" r="6" fill="url(#electricGradient1)" />
              <circle cx="170" cy="130" r="6" fill="url(#electricGradient1)" />
              <circle cx="120" cy="150" r="6" fill="url(#electricGradient1)" />
              <circle cx="100" cy="120" r="6" fill="url(#electricGradient1)" />
              <circle cx="70" cy="160" r="6" fill="url(#electricGradient1)" />
              <circle cx="40" cy="110" r="6" fill="url(#electricGradient1)" />
              <circle cx="60" cy="70" r="6" fill="url(#electricGradient1)" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="electricGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 30 L 100 60 L 150 40 L 130 90 L 170 130 L 120 150 L 100 120 L 70 160 L 40 110 L 60 70 Z"
                stroke="url(#electricGradient2)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="30" r="6" fill="url(#electricGradient2)" />
              <circle cx="100" cy="60" r="6" fill="url(#electricGradient2)" />
              <circle cx="150" cy="40" r="6" fill="url(#electricGradient2)" />
              <circle cx="130" cy="90" r="6" fill="url(#electricGradient2)" />
              <circle cx="170" cy="130" r="6" fill="url(#electricGradient2)" />
              <circle cx="120" cy="150" r="6" fill="url(#electricGradient2)" />
              <circle cx="100" cy="120" r="6" fill="url(#electricGradient2)" />
              <circle cx="70" cy="160" r="6" fill="url(#electricGradient2)" />
              <circle cx="40" cy="110" r="6" fill="url(#electricGradient2)" />
              <circle cx="60" cy="70" r="6" fill="url(#electricGradient2)" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="electricGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 30 L 100 60 L 150 40 L 130 90 L 170 130 L 120 150 L 100 120 L 70 160 L 40 110 L 60 70 Z"
                stroke="url(#electricGradient3)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="30" r="6" fill="url(#electricGradient3)" />
              <circle cx="100" cy="60" r="6" fill="url(#electricGradient3)" />
              <circle cx="150" cy="40" r="6" fill="url(#electricGradient3)" />
              <circle cx="130" cy="90" r="6" fill="url(#electricGradient3)" />
              <circle cx="170" cy="130" r="6" fill="url(#electricGradient3)" />
              <circle cx="120" cy="150" r="6" fill="url(#electricGradient3)" />
              <circle cx="100" cy="120" r="6" fill="url(#electricGradient3)" />
              <circle cx="70" cy="160" r="6" fill="url(#electricGradient3)" />
              <circle cx="40" cy="110" r="6" fill="url(#electricGradient3)" />
              <circle cx="60" cy="70" r="6" fill="url(#electricGradient3)" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="electricGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 30 L 100 60 L 150 40 L 130 90 L 170 130 L 120 150 L 100 120 L 70 160 L 40 110 L 60 70 Z"
                stroke="url(#electricGradient4)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="30" r="6" fill="url(#electricGradient4)" />
              <circle cx="100" cy="60" r="6" fill="url(#electricGradient4)" />
              <circle cx="150" cy="40" r="6" fill="url(#electricGradient4)" />
              <circle cx="130" cy="90" r="6" fill="url(#electricGradient4)" />
              <circle cx="170" cy="130" r="6" fill="url(#electricGradient4)" />
              <circle cx="120" cy="150" r="6" fill="url(#electricGradient4)" />
              <circle cx="100" cy="120" r="6" fill="url(#electricGradient4)" />
              <circle cx="70" cy="160" r="6" fill="url(#electricGradient4)" />
              <circle cx="40" cy="110" r="6" fill="url(#electricGradient4)" />
              <circle cx="60" cy="70" r="6" fill="url(#electricGradient4)" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Abstract geometric network representing blockchain security connections</li>
            <li>• Electric gradient from indigo (#818CF8) to teal (#2DD4BF)</li>
            <li>• Node points represent security checkpoints in the DevSecOps pipeline</li>
            <li>• Irregular polygon shape suggests comprehensive coverage</li>
            <li>• Modern, minimal design similar to 2025 crypto logos</li>
            <li>• Scalable from favicon size to large format</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

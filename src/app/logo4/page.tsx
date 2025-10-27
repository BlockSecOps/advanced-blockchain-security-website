'use client'

export default function Logo4Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 4 - DevSecOps Pipeline</h1>
          <p className="text-white/70">Continuous security in the SDLC infinity loop</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pipelineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Infinity loop / DevOps cycle */}
              <path
                d="M 50 100 C 50 70, 70 50, 100 50 C 130 50, 150 70, 150 100 C 150 130, 130 150, 100 150 C 70 150, 50 130, 50 100 Z M 100 50 C 130 50, 150 70, 150 100 C 150 130, 130 150, 100 150"
                fill="none"
                stroke="url(#pipelineGrad1)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Create infinity symbol */}
              <path
                d="M 65 100 Q 75 80, 100 100 Q 125 120, 135 100 Q 125 80, 100 100 Q 75 120, 65 100 Z"
                fill="none"
                stroke="url(#pipelineGrad1)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Security checkpoints on the loop */}
              {/* Plan/Code checkpoint */}
              <g>
                <circle cx="65" cy="100" r="8" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2.5" />
                <circle cx="65" cy="100" r="3" fill="url(#pipelineGrad1)" />
              </g>

              {/* Build/Test checkpoint */}
              <g>
                <circle cx="100" cy="80" r="8" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2.5" />
                <circle cx="100" cy="80" r="3" fill="url(#pipelineGrad1)" />
              </g>

              {/* Deploy checkpoint */}
              <g>
                <circle cx="135" cy="100" r="8" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2.5" />
                <circle cx="135" cy="100" r="3" fill="url(#pipelineGrad1)" />
              </g>

              {/* Monitor/Operate checkpoint */}
              <g>
                <circle cx="100" cy="120" r="8" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2.5" />
                <circle cx="100" cy="120" r="3" fill="url(#pipelineGrad1)" />
              </g>

              {/* Center shield - Sec in DevSecOps */}
              <g>
                <path
                  d="M 100 90 C 95 90, 92 92, 92 95 L 92 105 C 92 113, 96 117, 100 120 C 104 117, 108 113, 108 105 L 108 95 C 108 92, 105 90, 100 90 Z"
                  fill="none"
                  stroke="url(#pipelineGrad1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Arrows showing flow direction */}
              <path d="M 80 87 L 85 82 L 80 77" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 113 L 115 118 L 120 123" fill="none" stroke="url(#pipelineGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Stage labels */}
              <text x="50" y="95" fontSize="8" fill="url(#pipelineGrad1)" fontWeight="600">CODE</text>
              <text x="90" y="70" fontSize="8" fill="url(#pipelineGrad1)" fontWeight="600">BUILD</text>
              <text x="125" y="95" fontSize="8" fill="url(#pipelineGrad1)" fontWeight="600">DEPLOY</text>
              <text x="85" y="135" fontSize="8" fill="url(#pipelineGrad1)" fontWeight="600">MONITOR</text>
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pipelineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 65 100 Q 75 80, 100 100 Q 125 120, 135 100 Q 125 80, 100 100 Q 75 120, 65 100 Z" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

              <g>
                <circle cx="65" cy="100" r="8" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2.5" />
                <circle cx="65" cy="100" r="3" fill="url(#pipelineGrad2)" />
              </g>

              <g>
                <circle cx="100" cy="80" r="8" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2.5" />
                <circle cx="100" cy="80" r="3" fill="url(#pipelineGrad2)" />
              </g>

              <g>
                <circle cx="135" cy="100" r="8" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2.5" />
                <circle cx="135" cy="100" r="3" fill="url(#pipelineGrad2)" />
              </g>

              <g>
                <circle cx="100" cy="120" r="8" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2.5" />
                <circle cx="100" cy="120" r="3" fill="url(#pipelineGrad2)" />
              </g>

              <g>
                <path d="M 100 90 C 95 90, 92 92, 92 95 L 92 105 C 92 113, 96 117, 100 120 C 104 117, 108 113, 108 105 L 108 95 C 108 92, 105 90, 100 90 Z" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <path d="M 80 87 L 85 82 L 80 77" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 113 L 115 118 L 120 123" fill="none" stroke="url(#pipelineGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pipelineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 65 100 Q 75 80, 100 100 Q 125 120, 135 100 Q 125 80, 100 100 Q 75 120, 65 100 Z" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

              <g>
                <circle cx="65" cy="100" r="8" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2.5" />
                <circle cx="65" cy="100" r="3" fill="url(#pipelineGrad3)" />
              </g>

              <g>
                <circle cx="100" cy="80" r="8" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2.5" />
                <circle cx="100" cy="80" r="3" fill="url(#pipelineGrad3)" />
              </g>

              <g>
                <circle cx="135" cy="100" r="8" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2.5" />
                <circle cx="135" cy="100" r="3" fill="url(#pipelineGrad3)" />
              </g>

              <g>
                <circle cx="100" cy="120" r="8" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2.5" />
                <circle cx="100" cy="120" r="3" fill="url(#pipelineGrad3)" />
              </g>

              <g>
                <path d="M 100 90 C 95 90, 92 92, 92 95 L 92 105 C 92 113, 96 117, 100 120 C 104 117, 108 113, 108 105 L 108 95 C 108 92, 105 90, 100 90 Z" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <path d="M 80 87 L 85 82 L 80 77" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 113 L 115 118 L 120 123" fill="none" stroke="url(#pipelineGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <text x="50" y="95" fontSize="8" fill="url(#pipelineGrad3)" fontWeight="600">CODE</text>
              <text x="90" y="70" fontSize="8" fill="url(#pipelineGrad3)" fontWeight="600">BUILD</text>
              <text x="125" y="95" fontSize="8" fill="url(#pipelineGrad3)" fontWeight="600">DEPLOY</text>
              <text x="85" y="135" fontSize="8" fill="url(#pipelineGrad3)" fontWeight="600">MONITOR</text>
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pipelineGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <path d="M 65 100 Q 75 80, 100 100 Q 125 120, 135 100 Q 125 80, 100 100 Q 75 120, 65 100 Z" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

              <g>
                <circle cx="65" cy="100" r="8" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2.5" />
                <circle cx="65" cy="100" r="3" fill="url(#pipelineGrad4)" />
              </g>

              <g>
                <circle cx="100" cy="80" r="8" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2.5" />
                <circle cx="100" cy="80" r="3" fill="url(#pipelineGrad4)" />
              </g>

              <g>
                <circle cx="135" cy="100" r="8" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2.5" />
                <circle cx="135" cy="100" r="3" fill="url(#pipelineGrad4)" />
              </g>

              <g>
                <circle cx="100" cy="120" r="8" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2.5" />
                <circle cx="100" cy="120" r="3" fill="url(#pipelineGrad4)" />
              </g>

              <g>
                <path d="M 100 90 C 95 90, 92 92, 92 95 L 92 105 C 92 113, 96 117, 100 120 C 104 117, 108 113, 108 105 L 108 95 C 108 92, 105 90, 100 90 Z" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <path d="M 80 87 L 85 82 L 80 77" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 113 L 115 118 L 120 123" fill="none" stroke="url(#pipelineGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Infinity loop symbolizing continuous DevOps/SDLC cycle</li>
            <li>• Four security checkpoints: CODE → BUILD → DEPLOY → MONITOR</li>
            <li>• Central shield representing "Sec" in DevSecOps</li>
            <li>• Directional arrows showing continuous flow</li>
            <li>• Checkpoints with dual rings representing security gates</li>
            <li>• Electric gradient showing energy and continuous motion</li>
            <li>• Clean, recognizable design that scales well</li>
            <li>• Represents: CI/CD, automated security, continuous protection</li>
            <li>• Similar to: Azure DevOps, GitLab, CircleCI logos</li>
            <li>• Conveys: Automation, integration, continuous security</li>
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
        </div>
      </div>
    </div>
  )
}

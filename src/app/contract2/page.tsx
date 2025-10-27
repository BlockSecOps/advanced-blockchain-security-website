'use client'

export default function Contract2Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Contract 2 - Function Call</h1>
          <p className="text-white/70">Executable code function</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Function box */}
              <rect x="55" y="70" width="90" height="60" rx="4" fill="none" stroke="url(#contract2Grad1)" strokeWidth="2.5" />

              {/* Function name */}
              <text x="70" y="95" fill="url(#contract2Grad1)" fontSize="14" fontFamily="monospace" opacity="0.8">execute()</text>

              {/* Parameters */}
              <circle cx="70" cy="110" r="3" fill="url(#contract2Grad1)" opacity="0.6" />
              <circle cx="85" cy="110" r="3" fill="url(#contract2Grad1)" opacity="0.6" />
              <circle cx="100" cy="110" r="3" fill="url(#contract2Grad1)" opacity="0.6" />

              {/* Input arrow */}
              <line x1="35" y1="100" x2="55" y2="100" stroke="url(#contract2Grad1)" strokeWidth="2" />
              <path d="M 55 100 L 48 97 L 48 103 Z" fill="url(#contract2Grad1)" />

              {/* Output arrow */}
              <line x1="145" y1="100" x2="165" y2="100" stroke="url(#contract2Grad1)" strokeWidth="2" />
              <path d="M 165 100 L 158 97 L 158 103 Z" fill="url(#contract2Grad1)" />
            </svg>
          </div>

          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="55" y="70" width="90" height="60" rx="4" fill="none" stroke="url(#contract2Grad2)" strokeWidth="2.5" />
              <text x="70" y="95" fill="url(#contract2Grad2)" fontSize="14" fontFamily="monospace" opacity="0.8">execute()</text>
              <circle cx="70" cy="110" r="3" fill="url(#contract2Grad2)" opacity="0.6" />
              <circle cx="85" cy="110" r="3" fill="url(#contract2Grad2)" opacity="0.6" />
              <circle cx="100" cy="110" r="3" fill="url(#contract2Grad2)" opacity="0.6" />
              <line x1="35" y1="100" x2="55" y2="100" stroke="url(#contract2Grad2)" strokeWidth="2" />
              <path d="M 55 100 L 48 97 L 48 103 Z" fill="url(#contract2Grad2)" />
              <line x1="145" y1="100" x2="165" y2="100" stroke="url(#contract2Grad2)" strokeWidth="2" />
              <path d="M 165 100 L 158 97 L 158 103 Z" fill="url(#contract2Grad2)" />
            </svg>
          </div>

          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="55" y="70" width="90" height="60" rx="4" fill="none" stroke="url(#contract2Grad3)" strokeWidth="2.5" />
              <text x="70" y="95" fill="url(#contract2Grad3)" fontSize="14" fontFamily="monospace" opacity="0.8">execute()</text>
              <circle cx="70" cy="110" r="3" fill="url(#contract2Grad3)" opacity="0.6" />
              <circle cx="85" cy="110" r="3" fill="url(#contract2Grad3)" opacity="0.6" />
              <circle cx="100" cy="110" r="3" fill="url(#contract2Grad3)" opacity="0.6" />
              <line x1="35" y1="100" x2="55" y2="100" stroke="url(#contract2Grad3)" strokeWidth="2" />
              <path d="M 55 100 L 48 97 L 48 103 Z" fill="url(#contract2Grad3)" />
              <line x1="145" y1="100" x2="165" y2="100" stroke="url(#contract2Grad3)" strokeWidth="2" />
              <path d="M 165 100 L 158 97 L 158 103 Z" fill="url(#contract2Grad3)" />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contract2Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect x="55" y="70" width="90" height="60" rx="4" fill="none" stroke="url(#contract2Grad4)" strokeWidth="2.5" />
              <text x="70" y="95" fill="url(#contract2Grad4)" fontSize="14" fontFamily="monospace" opacity="0.8">execute()</text>
              <circle cx="70" cy="110" r="3" fill="url(#contract2Grad4)" opacity="0.6" />
              <circle cx="85" cy="110" r="3" fill="url(#contract2Grad4)" opacity="0.6" />
              <circle cx="100" cy="110" r="3" fill="url(#contract2Grad4)" opacity="0.6" />
              <line x1="35" y1="100" x2="55" y2="100" stroke="url(#contract2Grad4)" strokeWidth="2" />
              <path d="M 55 100 L 48 97 L 48 103 Z" fill="url(#contract2Grad4)" />
              <line x1="145" y1="100" x2="165" y2="100" stroke="url(#contract2Grad4)" strokeWidth="2" />
              <path d="M 165 100 L 158 97 L 158 103 Z" fill="url(#contract2Grad4)" />
            </svg>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Function box with input/output arrows</li>
            <li>• Represents: Executable functions, contract methods, programmable logic</li>
            <li>• Parameters shown as dots indicating function inputs</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contract1" className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors">
            ← Contract 1
          </a>
          <a href="/contract3" className="inline-block px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm rounded-lg transition-colors">
            Contract 3 →
          </a>
        </div>
      </div>
    </div>
  )
}

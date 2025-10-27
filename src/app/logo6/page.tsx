'use client'

export default function Logo6Preview() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABS Logo 6 - Automation Robot</h1>
          <p className="text-white/70">Automated DevSecOps and continuous security</p>
        </div>

        {/* Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Large - Dark Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="robotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="robotFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              {/* Robot Head */}
              <rect x="70" y="45" width="60" height="50" rx="8" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Antenna */}
              <line x1="100" y1="45" x2="100" y2="30" stroke="url(#robotGrad1)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="28" r="5" fill="url(#robotGrad1)" />

              {/* Signal waves from antenna */}
              <path d="M 88 28 Q 85 25, 85 20" fill="none" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <path d="M 112 28 Q 115 25, 115 20" fill="none" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

              {/* Eyes - digital/robotic */}
              <rect x="80" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad1)" strokeWidth="2" />
              <rect x="108" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Eye pupils - glowing */}
              <circle cx="86" cy="66" r="3" fill="url(#robotGrad1)" />
              <circle cx="114" cy="66" r="3" fill="url(#robotGrad1)" />

              {/* Mouth/Display panel */}
              <rect x="78" y="80" width="44" height="8" rx="2" fill="none" stroke="url(#robotGrad1)" strokeWidth="2" />
              <line x1="85" y1="84" x2="95" y2="84" stroke="url(#robotGrad1)" strokeWidth="1.5" />
              <line x1="105" y1="84" x2="115" y2="84" stroke="url(#robotGrad1)" strokeWidth="1.5" />

              {/* Neck - small connector */}
              <rect x="92" y="95" width="16" height="8" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Body - main torso */}
              <rect x="65" y="103" width="70" height="55" rx="6" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2.5" strokeLinejoin="round" />

              {/* Chest panel - security badge/display */}
              <rect x="82" y="115" width="36" height="30" rx="3" fill="none" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Security shield icon on chest */}
              <path d="M 100 122 L 92 126 L 92 133 C 92 137, 96 139, 100 140 C 104 139, 108 137, 108 133 L 108 126 Z" fill="none" stroke="url(#robotGrad1)" strokeWidth="1.8" />

              {/* Status lights on chest */}
              <circle cx="75" cy="118" r="2.5" fill="url(#robotGrad1)" />
              <circle cx="75" cy="128" r="2.5" fill="url(#robotGrad1)" />
              <circle cx="75" cy="138" r="2.5" fill="url(#robotGrad1)" />
              <circle cx="125" cy="118" r="2.5" fill="url(#robotGrad1)" />
              <circle cx="125" cy="128" r="2.5" fill="url(#robotGrad1)" />
              <circle cx="125" cy="138" r="2.5" fill="url(#robotGrad1)" />

              {/* Arms */}
              {/* Left arm */}
              <rect x="45" y="110" width="12" height="35" rx="4" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />
              <rect x="42" y="145" width="18" height="12" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Right arm */}
              <rect x="143" y="110" width="12" height="35" rx="4" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />
              <rect x="140" y="145" width="18" height="12" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Legs */}
              {/* Left leg */}
              <rect x="75" y="158" width="18" height="30" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />
              <rect x="72" y="188" width="24" height="10" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Right leg */}
              <rect x="107" y="158" width="18" height="30" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />
              <rect x="104" y="188" width="24" height="10" rx="3" fill="url(#robotFill1)" stroke="url(#robotGrad1)" strokeWidth="2" />

              {/* Automation gears/cogs overlay - subtle */}
              <circle cx="51" cy="127" r="6" fill="none" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="121" x2="51" y2="123" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="131" x2="51" y2="133" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="45" y1="127" x2="47" y2="127" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="55" y1="127" x2="57" y2="127" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />

              <circle cx="149" cy="127" r="6" fill="none" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="121" x2="149" y2="123" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="131" x2="149" y2="133" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="143" y1="127" x2="145" y2="127" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="153" y1="127" x2="155" y2="127" stroke="url(#robotGrad1)" strokeWidth="1.5" opacity="0.6" />

              {/* Accent nodes */}
              <circle cx="100" cy="28" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Small on Dark */}
          <div className="bg-dark-800 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/60 mb-6 text-sm">Small - Dark Background</p>
            <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="robotGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="robotFill2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <rect x="70" y="45" width="60" height="50" rx="8" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="100" y1="45" x2="100" y2="30" stroke="url(#robotGrad2)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="28" r="5" fill="url(#robotGrad2)" />
              <path d="M 88 28 Q 85 25, 85 20" fill="none" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <path d="M 112 28 Q 115 25, 115 20" fill="none" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <rect x="80" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="108" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad2)" strokeWidth="2" />
              <circle cx="86" cy="66" r="3" fill="url(#robotGrad2)" />
              <circle cx="114" cy="66" r="3" fill="url(#robotGrad2)" />
              <rect x="78" y="80" width="44" height="8" rx="2" fill="none" stroke="url(#robotGrad2)" strokeWidth="2" />
              <line x1="85" y1="84" x2="95" y2="84" stroke="url(#robotGrad2)" strokeWidth="1.5" />
              <line x1="105" y1="84" x2="115" y2="84" stroke="url(#robotGrad2)" strokeWidth="1.5" />
              <rect x="92" y="95" width="16" height="8" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="65" y="103" width="70" height="55" rx="6" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2.5" strokeLinejoin="round" />
              <rect x="82" y="115" width="36" height="30" rx="3" fill="none" stroke="url(#robotGrad2)" strokeWidth="2" />
              <path d="M 100 122 L 92 126 L 92 133 C 92 137, 96 139, 100 140 C 104 139, 108 137, 108 133 L 108 126 Z" fill="none" stroke="url(#robotGrad2)" strokeWidth="1.8" />
              <circle cx="75" cy="118" r="2.5" fill="url(#robotGrad2)" />
              <circle cx="75" cy="128" r="2.5" fill="url(#robotGrad2)" />
              <circle cx="75" cy="138" r="2.5" fill="url(#robotGrad2)" />
              <circle cx="125" cy="118" r="2.5" fill="url(#robotGrad2)" />
              <circle cx="125" cy="128" r="2.5" fill="url(#robotGrad2)" />
              <circle cx="125" cy="138" r="2.5" fill="url(#robotGrad2)" />
              <rect x="45" y="110" width="12" height="35" rx="4" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="42" y="145" width="18" height="12" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="143" y="110" width="12" height="35" rx="4" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="140" y="145" width="18" height="12" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="75" y="158" width="18" height="30" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="72" y="188" width="24" height="10" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="107" y="158" width="18" height="30" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <rect x="104" y="188" width="24" height="10" rx="3" fill="url(#robotFill2)" stroke="url(#robotGrad2)" strokeWidth="2" />
              <circle cx="51" cy="127" r="6" fill="none" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="121" x2="51" y2="123" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="131" x2="51" y2="133" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="45" y1="127" x2="47" y2="127" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="55" y1="127" x2="57" y2="127" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="149" cy="127" r="6" fill="none" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="121" x2="149" y2="123" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="131" x2="149" y2="133" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="143" y1="127" x2="145" y2="127" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="153" y1="127" x2="155" y2="127" stroke="url(#robotGrad2)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="100" cy="28" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Large on White */}
          <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-6 text-sm">Large - Light Background</p>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="robotGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="robotFill3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              <rect x="70" y="45" width="60" height="50" rx="8" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="100" y1="45" x2="100" y2="30" stroke="url(#robotGrad3)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="28" r="5" fill="url(#robotGrad3)" />
              <path d="M 88 28 Q 85 25, 85 20" fill="none" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <path d="M 112 28 Q 115 25, 115 20" fill="none" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <rect x="80" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="108" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad3)" strokeWidth="2" />
              <circle cx="86" cy="66" r="3" fill="url(#robotGrad3)" />
              <circle cx="114" cy="66" r="3" fill="url(#robotGrad3)" />
              <rect x="78" y="80" width="44" height="8" rx="2" fill="none" stroke="url(#robotGrad3)" strokeWidth="2" />
              <line x1="85" y1="84" x2="95" y2="84" stroke="url(#robotGrad3)" strokeWidth="1.5" />
              <line x1="105" y1="84" x2="115" y2="84" stroke="url(#robotGrad3)" strokeWidth="1.5" />
              <rect x="92" y="95" width="16" height="8" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="65" y="103" width="70" height="55" rx="6" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2.5" strokeLinejoin="round" />
              <rect x="82" y="115" width="36" height="30" rx="3" fill="none" stroke="url(#robotGrad3)" strokeWidth="2" />
              <path d="M 100 122 L 92 126 L 92 133 C 92 137, 96 139, 100 140 C 104 139, 108 137, 108 133 L 108 126 Z" fill="none" stroke="url(#robotGrad3)" strokeWidth="1.8" />
              <circle cx="75" cy="118" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="75" cy="128" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="75" cy="138" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="125" cy="118" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="125" cy="128" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="125" cy="128" r="2.5" fill="url(#robotGrad3)" />
              <circle cx="125" cy="138" r="2.5" fill="url(#robotGrad3)" />
              <rect x="45" y="110" width="12" height="35" rx="4" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="42" y="145" width="18" height="12" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="143" y="110" width="12" height="35" rx="4" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="140" y="145" width="18" height="12" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="75" y="158" width="18" height="30" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="72" y="188" width="24" height="10" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="107" y="158" width="18" height="30" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <rect x="104" y="188" width="24" height="10" rx="3" fill="url(#robotFill3)" stroke="url(#robotGrad3)" strokeWidth="2" />
              <circle cx="51" cy="127" r="6" fill="none" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="121" x2="51" y2="123" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="131" x2="51" y2="133" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="45" y1="127" x2="47" y2="127" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="55" y1="127" x2="57" y2="127" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="149" cy="127" r="6" fill="none" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="121" x2="149" y2="123" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="131" x2="149" y2="133" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="143" y1="127" x2="145" y2="127" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="153" y1="127" x2="155" y2="127" stroke="url(#robotGrad3)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="100" cy="28" r="2" fill="#2DD4BF" />
            </svg>
          </div>

          {/* Icon Size */}
          <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-12 flex flex-col items-center justify-center">
            <p className="text-white/80 mb-6 text-sm">Icon - 48x48</p>
            <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="robotGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="robotFill4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>

              <rect x="70" y="45" width="60" height="50" rx="8" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="100" y1="45" x2="100" y2="30" stroke="url(#robotGrad4)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="28" r="5" fill="url(#robotGrad4)" />
              <path d="M 88 28 Q 85 25, 85 20" fill="none" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <path d="M 112 28 Q 115 25, 115 20" fill="none" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
              <rect x="80" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="108" y="60" width="12" height="12" rx="2" fill="none" stroke="url(#robotGrad4)" strokeWidth="2" />
              <circle cx="86" cy="66" r="3" fill="url(#robotGrad4)" />
              <circle cx="114" cy="66" r="3" fill="url(#robotGrad4)" />
              <rect x="78" y="80" width="44" height="8" rx="2" fill="none" stroke="url(#robotGrad4)" strokeWidth="2" />
              <line x1="85" y1="84" x2="95" y2="84" stroke="url(#robotGrad4)" strokeWidth="1.5" />
              <line x1="105" y1="84" x2="115" y2="84" stroke="url(#robotGrad4)" strokeWidth="1.5" />
              <rect x="92" y="95" width="16" height="8" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="65" y="103" width="70" height="55" rx="6" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2.5" strokeLinejoin="round" />
              <rect x="82" y="115" width="36" height="30" rx="3" fill="none" stroke="url(#robotGrad4)" strokeWidth="2" />
              <path d="M 100 122 L 92 126 L 92 133 C 92 137, 96 139, 100 140 C 104 139, 108 137, 108 133 L 108 126 Z" fill="none" stroke="url(#robotGrad4)" strokeWidth="1.8" />
              <circle cx="75" cy="118" r="2.5" fill="url(#robotGrad4)" />
              <circle cx="75" cy="128" r="2.5" fill="url(#robotGrad4)" />
              <circle cx="75" cy="138" r="2.5" fill="url(#robotGrad4)" />
              <circle cx="125" cy="118" r="2.5" fill="url(#robotGrad4)" />
              <circle cx="125" cy="128" r="2.5" fill="url(#robotGrad4)" />
              <circle cx="125" cy="138" r="2.5" fill="url(#robotGrad4)" />
              <rect x="45" y="110" width="12" height="35" rx="4" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="42" y="145" width="18" height="12" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="143" y="110" width="12" height="35" rx="4" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="140" y="145" width="18" height="12" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="75" y="158" width="18" height="30" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="72" y="188" width="24" height="10" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="107" y="158" width="18" height="30" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <rect x="104" y="188" width="24" height="10" rx="3" fill="url(#robotFill4)" stroke="url(#robotGrad4)" strokeWidth="2" />
              <circle cx="51" cy="127" r="6" fill="none" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="121" x2="51" y2="123" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="51" y1="131" x2="51" y2="133" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="45" y1="127" x2="47" y2="127" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="55" y1="127" x2="57" y2="127" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="149" cy="127" r="6" fill="none" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="121" x2="149" y2="123" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="149" y1="131" x2="149" y2="133" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="143" y1="127" x2="145" y2="127" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <line x1="153" y1="127" x2="155" y2="127" stroke="url(#robotGrad4)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="100" cy="28" r="2" fill="#2DD4BF" />
            </svg>
          </div>
        </div>

        {/* Design Notes */}
        <div className="bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design Notes</h2>
          <ul className="text-white/70 space-y-2">
            <li>• Geometric robot representing automated DevSecOps processes</li>
            <li>• Antenna with signal waves - continuous communication and monitoring</li>
            <li>• Digital square eyes with glowing pupils - AI-powered analysis</li>
            <li>• Security shield badge on chest - protection-focused automation</li>
            <li>• Status indicator lights (6 total) - real-time system health monitoring</li>
            <li>• Automation gear/cog symbols on arms - mechanical precision</li>
            <li>• Clean geometric construction - modern, reliable, systematic</li>
            <li>• Symmetrical design - balanced, consistent operations</li>
            <li>• Electric gradient throughout - powered by advanced technology</li>
            <li>• Represents: Automation, CI/CD integration, continuous scanning, tireless operation</li>
            <li>• Symbolism: Always-on security, no human fatigue, consistent enforcement</li>
            <li>• Perfect for: DevSecOps platforms, automated testing, security-as-code</li>
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
          <a href="/logo5" className="inline-block px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm rounded-lg transition-colors">
            Logo 5 (Bloodhound)
          </a>
        </div>
      </div>
    </div>
  )
}

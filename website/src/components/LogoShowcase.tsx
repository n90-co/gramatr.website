'use client';

export function LogoShowcase() {
  return (
    <div className="p-8 bg-neutral-50 dark:bg-primary-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 text-center">
          grāmatr Logo Concepts
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Concept 1: Neural Typography */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-8 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Concept 1: Neural Typography
            </h3>
            <div className="flex justify-center mb-6 p-6 bg-neutral-50 dark:bg-primary-800 rounded-lg">
              <svg width="280" height="60" viewBox="0 0 280 60" className="text-primary-900 dark:text-primary-100">
                {/* Custom neural-connected grāmatr */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Neural connections */}
                <path d="M65 32 Q85 22 105 32 M165 32 Q185 22 205 32" 
                      stroke="#2d9cdb" strokeWidth="1" fill="none" opacity="0.4"/>
                
                {/* Letters with geometric styling */}
                <text x="20" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">g</text>
                <text x="45" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">r</text>
                
                {/* Special ā with neural node */}
                <text x="75" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">ā</text>
                <circle cx="82" cy="20" r="2.5" fill="#2d9cdb" filter="url(#glow)"/>
                
                <text x="105" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">m</text>
                <text x="140" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">a</text>
                <text x="165" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">t</text>
                <text x="185" y="40" fontSize="32" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">r</text>
                
                {/* Neural nodes at connection points */}
                <circle cx="85" cy="25" r="1.5" fill="#56b4d3" opacity="0.6"/>
                <circle cx="185" cy="25" r="1.5" fill="#56b4d3" opacity="0.6"/>
              </svg>
            </div>
            <p className="text-sm text-primary-600">
              <strong>Font:</strong> Inter Variable with neural modifications<br/>
              <strong>Key:</strong> Neural node integrated into ā, subtle connections
            </p>
          </div>

          {/* Concept 2: Elevated Intelligence */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-8 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Concept 2: Elevated Intelligence
            </h3>
            <div className="flex justify-center mb-6 p-6 bg-neutral-50 dark:bg-primary-800 rounded-lg">
              <svg width="280" height="60" viewBox="0 0 280 60" className="text-primary-900 dark:text-primary-100">
                {/* Friendly Poppins-style letters */}
                <text x="25" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">g</text>
                <text x="50" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">r</text>
                <text x="75" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">ā</text>
                <text x="100" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">m</text>
                <text x="135" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">a</text>
                <text x="160" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">t</text>
                
                {/* r with upward arrow tail */}
                <text x="185" y="40" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fill="currentColor">r</text>
                <path d="M205 32 L210 27 M210 27 L215 32 M210 27 L210 35" stroke="#2d9cdb" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                
                {/* Optional neural dots constellation above */}
                <circle cx="140" cy="15" r="1.5" fill="#56b4d3" opacity="0.7"/>
                <circle cx="148" cy="12" r="1" fill="#56b4d3" opacity="0.5"/>
                <circle cx="135" cy="18" r="1" fill="#56b4d3" opacity="0.5"/>
              </svg>
            </div>
            <p className="text-sm text-primary-600">
              <strong>Font:</strong> Poppins/Nunito Sans style<br/>
              <strong>Key:</strong> Upward arrow in r, friendly constellation
            </p>
          </div>

          {/* Concept 3: Synaptic Flow */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-8 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Concept 3: Synaptic Flow
            </h3>
            <div className="flex justify-center mb-6 p-6 bg-neutral-50 dark:bg-primary-800 rounded-lg">
              <svg width="300" height="60" viewBox="0 0 300 60">
                <defs>
                  <linearGradient id="synapticGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7fcdcd"/>
                    <stop offset="50%" stopColor="#56b4d3"/>
                    <stop offset="100%" stopColor="#2d9cdb"/>
                  </linearGradient>
                </defs>
                
                {/* Letters with increased spacing for synaptic gaps */}
                <text x="20" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">g</text>
                <text x="50" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">r</text>
                <text x="80" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">ā</text>
                <text x="110" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">m</text>
                <text x="145" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">a</text>
                <text x="175" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">t</text>
                <text x="205" y="40" fontSize="28" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#synapticGradient)">r</text>
                
                {/* Subtle connecting lines in synaptic gaps */}
                <line x1="42" y1="32" x2="47" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
                <line x1="72" y1="32" x2="77" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
                <line x1="102" y1="32" x2="107" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
                <line x1="137" y1="32" x2="142" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
                <line x1="167" y1="32" x2="172" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
                <line x1="197" y1="32" x2="202" y2="32" stroke="#56b4d3" strokeWidth="1" opacity="0.3"/>
              </svg>
            </div>
            <p className="text-sm text-primary-600">
              <strong>Font:</strong> Outfit/Work Sans style<br/>
              <strong>Key:</strong> Synaptic spacing, gradient flow, connecting lines
            </p>
          </div>

          {/* Concept 4: Bootstrap Interface */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-8 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Concept 4: Bootstrap Interface
            </h3>
            <div className="flex justify-center mb-6 p-6 bg-neutral-50 dark:bg-primary-800 rounded-lg">
              <svg width="280" height="60" viewBox="0 0 280 60">
                <defs>
                  <pattern id="gridPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2d9cdb" strokeWidth="0.3" opacity="0.2"/>
                  </pattern>
                </defs>
                
                {/* Interface grid background */}
                <rect x="15" y="15" width="250" height="30" fill="url(#gridPattern)" opacity="0.3"/>
                
                {/* Terminal-style prompt */}
                <text x="20" y="28" fontSize="10" fontFamily="monospace" fill="#56b4d3">$</text>
                
                {/* Main wordmark */}
                <text x="35" y="37" fontSize="26" fontFamily="SF Mono, Monaco, monospace" fontWeight="400" fill="currentColor">grāmatr</text>
                
                {/* Version indicator */}
                <text x="200" y="28" fontSize="8" fontFamily="monospace" fill="#56b4d3" opacity="0.7">v2.0</text>
                
                {/* Status indicators */}
                <circle cx="240" cy="25" r="2" fill="#2d9cdb"/>
                <circle cx="250" cy="25" r="2" fill="#56b4d3"/>
                <circle cx="260" cy="25" r="2" fill="#7fcdcd"/>
              </svg>
            </div>
            <p className="text-sm text-primary-600">
              <strong>Font:</strong> SF Mono (system monospace)<br/>
              <strong>Key:</strong> Terminal interface, version control, system status
            </p>
          </div>

        </div>

        {/* Dark theme preview */}
        <div className="mt-12 bg-primary-900 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-primary-100 mb-6 text-center">
            Dark Theme Preview (All Concepts)
          </h3>
          <div className="flex justify-around items-center flex-wrap gap-6">
            
            {/* Mini versions in dark */}
            <div className="text-center">
              <div className="mb-2">
                <svg width="120" height="30" viewBox="0 0 120 30" className="text-primary-100">
                  <text x="10" y="20" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor">grāmatr</text>
                  <circle cx="35" cy="12" r="2" fill="#56b4d3"/>
                </svg>
              </div>
              <p className="text-xs text-primary-300">Neural</p>
            </div>

            <div className="text-center">
              <div className="mb-2">
                <svg width="120" height="30" viewBox="0 0 120 30" className="text-primary-100">
                  <text x="10" y="20" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="500" fill="currentColor">grāmatr</text>
                  <path d="M95 15 L99 12 L95 15 L99 18" stroke="#2d9cdb" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <p className="text-xs text-primary-300">Elevated</p>
            </div>

            <div className="text-center">
              <div className="mb-2">
                <svg width="120" height="30" viewBox="0 0 120 30">
                  <defs>
                    <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7fcdcd"/>
                      <stop offset="100%" stopColor="#2d9cdb"/>
                    </linearGradient>
                  </defs>
                  <text x="10" y="20" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="400" fill="url(#darkGradient)">g r ā m a t r</text>
                </svg>
              </div>
              <p className="text-xs text-primary-300">Synaptic</p>
            </div>

            <div className="text-center">
              <div className="mb-2">
                <svg width="120" height="30" viewBox="0 0 120 30">
                  <rect x="5" y="5" width="110" height="20" rx="6" fill="none" stroke="#56b4d3" strokeWidth="1" opacity="0.6"/>
                  <text x="60" y="18" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="500" fill="#e2e8f0" textAnchor="middle">grāmatr</text>
                </svg>
              </div>
              <p className="text-xs text-primary-300">Badge</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
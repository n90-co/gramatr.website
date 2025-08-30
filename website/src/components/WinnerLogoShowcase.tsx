'use client';

export function WinnerLogoShowcase() {
  return (
    <div className="p-8 bg-neutral-50 dark:bg-primary-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 text-center">
          grāmatr Final Logo
        </h1>
        
        {/* Winner Logo Display */}
        <div className="mb-12 bg-white dark:bg-primary-700 rounded-xl p-12 border border-neutral-200 dark:border-primary-600 text-center">
          <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-8">
            grāmatr Final Logo - Clean Bracket System
          </h2>
          
          {/* Large SVG Display using actual production file */}
          <div className="mb-8 p-8 bg-neutral-50 dark:bg-primary-800 rounded-lg">
            <img 
              src="/logo-main.svg" 
              alt="grāmatr Final Logo" 
              className="mx-auto" 
              style={{width: '300px', height: '70px'}}
            />
          </div>
          
          <p className="text-sm text-primary-600 mb-4">
            <strong>Rationale:</strong> Cross-audience appeal, perfect scalability, "packaged system" concept
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-primary-600">
            <div>
              <strong>Typography:</strong> Inter Medium 500 (wordmark), Inter Regular 400 (brackets)
            </div>
            <div>
              <strong>Colors:</strong> Purple #7c3aed (brackets), currentColor (wordmark)
            </div>
          </div>
        </div>

        {/* Format Variations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* SVG Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">SVG Version</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-main.svg" 
                alt="grāmatr Logo SVG" 
                className="w-full max-w-[200px] mx-auto"
                style={{height: '50px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Vector format, infinite scalability</p>
          </div>

          {/* PNG Preview */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">PNG Version</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-main.png" 
                alt="grāmatr Logo PNG" 
                className="mx-auto" 
                style={{maxWidth: '200px', height: '50px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Raster format for web/print</p>
          </div>

          {/* Text Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Text Version</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <div className="text-center" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                <span className="text-purple-600 text-2xl" style={{fontWeight: 400}}>[</span>
                <span className="text-2xl" style={{fontWeight: 500}}>grāmatr</span>
                <span className="text-purple-600 text-2xl" style={{fontWeight: 400}}>]</span>
              </div>
            </div>
            <p className="text-xs text-primary-600">Plain text, email signatures</p>
          </div>

          {/* Small/Compressed Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Small Logo</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-small.svg" 
                alt="grāmatr Small Logo" 
                className="mx-auto" 
                style={{maxWidth: '100px', height: '40px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Compressed navigation, sidebars</p>
          </div>
        </div>

        {/* Color Variations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Main Purple Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Primary</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-main.svg" 
                alt="grāmatr Primary Logo" 
                className="mx-auto" 
                style={{maxWidth: '160px', height: '40px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Purple brackets, standard use</p>
          </div>

          {/* Black Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Black</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-black.svg" 
                alt="grāmatr Black Logo" 
                className="mx-auto" 
                style={{maxWidth: '160px', height: '40px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Single color, print materials</p>
          </div>

          {/* White Version */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-600">
            <h3 className="text-lg font-semibold text-white mb-4">White</h3>
            <div className="bg-neutral-900 rounded-lg p-6 mb-4">
              <img 
                src="/logo-white.svg" 
                alt="grāmatr White Logo" 
                className="mx-auto" 
                style={{maxWidth: '160px', height: '40px'}}
              />
            </div>
            <p className="text-xs text-neutral-400">Dark backgrounds, overlays</p>
          </div>

          {/* Small Version */}
          <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Small</h3>
            <div className="bg-neutral-50 dark:bg-primary-800 rounded-lg p-6 mb-4">
              <img 
                src="/logo-small.svg" 
                alt="grāmatr Small Logo" 
                className="mx-auto" 
                style={{maxWidth: '80px', height: '40px'}}
              />
            </div>
            <p className="text-xs text-primary-600">Navigation, tight spaces</p>
          </div>
        </div>

        {/* Favicon */}
        <div className="bg-white dark:bg-primary-700 rounded-xl p-8 border border-neutral-200 dark:border-primary-600">
          <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
            Favicon
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-neutral-100 dark:bg-primary-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="/favicon.svg" 
                  alt="grāmatr Favicon" 
                  className="w-16 h-16"
                />
              </div>
              <h4 className="font-semibold text-lg mb-2">grāmatr Favicon</h4>
              <p className="text-sm text-primary-600">Perfect for browser tabs and bookmarks</p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-8 bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-4">Usage Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Primary Usage</h4>
              <ul className="space-y-1 text-primary-600">
                <li>• Website headers</li>
                <li>• Business cards</li>
                <li>• Presentations</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Specs</h4>
              <ul className="space-y-1 text-primary-600">
                <li>• Font: Inter Medium 500</li>
                <li>• Purple: #7c3aed</li>
                <li>• Minimum size: 0.5" print</li>
                <li>• Clear space: 1x bracket height</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">File Formats</h4>
              <ul className="space-y-1 text-primary-600">
                <li>• SVG: Web, scalable graphics</li>
                <li>• PNG: Social media, email</li>
                <li>• Text: Email signatures</li>
                <li>• Favicon: 16x16, 32x32, 48x48</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
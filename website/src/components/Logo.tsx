'use client';

interface LogoProps {
  className?: string;
  showAnimation?: boolean;
}

export function Logo({ className = "", showAnimation = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center">
        <span className="text-2xl font-semibold tracking-tight text-primary-900 dark:text-primary-100">
          Gramatr
        </span>
        {showAnimation && (
          <div className="ml-3 flex items-center gap-1">
            {/* Neural expansion visualization: 3 dots → 7 dots */}
            <div className="flex gap-1">
              <div className="neural-dots w-2 h-2 bg-primary-300 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-primary-300 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-primary-300 rounded-full"></div>
            </div>
            <svg 
              width="16" 
              height="8" 
              viewBox="0 0 16 8" 
              className="text-accent-500 mx-2"
              fill="currentColor"
            >
              <path d="M12.5 3.5L16 4L12.5 4.5V3.5Z" />
              <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <div className="flex gap-1">
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
              <div className="neural-dots w-2 h-2 bg-accent-500 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      <div className="text-xs text-primary-500 font-mono">
        /ˈɡreɪ mə tər/
      </div>
    </div>
  );
}
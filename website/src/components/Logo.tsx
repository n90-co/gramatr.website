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
          grāmatr
        </span>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Logo } from './Logo';

export function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-accent-50 to-neutral-100 dark:from-primary-900 dark:via-primary-800 dark:to-primary-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--accent-500) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <Logo showAnimation={true} />
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/n90-co/gramatr" 
              className="text-primary-600 hover:text-accent-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="/docs" 
              className="text-primary-600 hover:text-accent-500 transition-colors"
            >
              Docs
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Hook: The Setup */}
          <div className="mb-8">
            <p className="text-lg text-primary-600 mb-2 font-medium">
              You&apos;ve heard humans only use 10% of their brain...
            </p>
            <p className="text-xl text-primary-700 font-semibold">
              Your AI is stuck there too.
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-6 leading-tight">
            Unlock the next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">
              9x
            </span>
            <br />
            with Gramatr
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            The Universal AI Operating System that provides{' '}
            <span className="font-semibold text-accent-600">persistent memory</span>{' '}
            and{' '}
            <span className="font-semibold text-accent-600">context continuity</span>{' '}
            across all AI platforms.
          </p>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-accent-200/50">
              <div className="text-accent-500 text-2xl mb-3">🧠</div>
              <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Cross-Platform Memory
              </h3>
              <p className="text-primary-600 text-sm">
                Remember everything across all MCP-compatible AIs
              </p>
            </div>
            <div className="bg-white/50 dark:bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-accent-200/50">
              <div className="text-accent-500 text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Project Continuity
              </h3>
              <p className="text-primary-600 text-sm">
                Pick up exactly where you left off
              </p>
            </div>
            <div className="bg-white/50 dark:bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-accent-200/50">
              <div className="text-accent-500 text-2xl mb-3">🌐</div>
              <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Universal Context
              </h3>
              <p className="text-primary-600 text-sm">
                Your AI finally understands your full story
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Transformation
            </button>
            <button 
              className="border-2 border-accent-500 text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/20 font-semibold px-8 py-4 rounded-xl transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              See Live Demo
            </button>
          </div>

          {/* Quick Install Preview */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-primary-900 dark:bg-primary-800 rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-neutral-400 text-sm font-mono ml-2">Terminal</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-neutral-400 mb-1"># Install Gramatr MCP Server</div>
                <div className="text-accent-400">claude mcp add gramatr \\</div>
                <div className="text-neutral-300 ml-4">--scope=user \\</div>
                <div className="text-neutral-300 ml-4">-- docker run -i ghcr.io/n90-co/gramatr:latest</div>
                <div className="text-green-400 mt-3">✓ Gramatr connected - Universal AI memory active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

export function Features() {
  const features = [
    {
      category: "Universal Compatibility",
      title: "MCP Protocol Native",
      description: "Built on the Model Context Protocol standard for universal AI platform compatibility",
      items: [
        "Works with Claude, GPT, Gemini, and future MCP-enabled AIs",
        "Container-first deployment with Docker",
        "Platform-agnostic memory persistence"
      ],
      gradient: "from-accent-500 to-accent-400"
    },
    {
      category: "Intelligent Memory",
      title: "Dual-Scoped Architecture",
      description: "Privacy-aware data separation between personal insights and team collaboration",
      items: [
        "Private SQLite database for personal patterns",
        "Git-tracked files for team-sharable context",
        "Selective sharing with access control"
      ],
      gradient: "from-success-500 to-accent-400"
    },
    {
      category: "Enterprise Ready",
      title: "Production Deployment",
      description: "Comprehensive system management with 20+ MCP tools for complete AI workflow automation",
      items: [
        "Session state persistence across context compression",
        "Project-specific memory with assessment tracking",
        "Container orchestration with volume mounting"
      ],
      gradient: "from-primary-500 to-accent-500"
    }
  ];

  const techSpecs = [
    { label: "Session Start Time", value: "<500ms", improvement: "vs 2-5s file-based" },
    { label: "MCP Tools", value: "20+", improvement: "Complete system coverage" },
    { label: "Database Performance", value: "SQLite", improvement: "Hybrid with Git files" },
    { label: "Container Image", value: "Production", improvement: "ghcr.io/n90-co/gramatr" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            Your AI&apos;s Other{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-success-500">
              90%
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Most AI interactions forget everything between sessions. grāmatr provides the persistent memory 
            and context continuity your AI was meant to have.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-neutral-50 dark:bg-primary-800 rounded-2xl p-8 h-full border border-neutral-200 dark:border-primary-700 hover:border-accent-300 dark:hover:border-accent-500 transition-colors">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-accent-600 mb-2 uppercase tracking-wide">
                    {feature.category}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-600 mb-6">
                    {feature.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-primary-700 dark:text-primary-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-accent-50 to-success-50 dark:from-primary-800 dark:to-primary-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-8 text-center">
            Performance at Scale
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">
                  {spec.value}
                </div>
                <div className="text-primary-900 dark:text-primary-100 font-semibold mb-1">
                  {spec.label}
                </div>
                <div className="text-sm text-primary-600">
                  {spec.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Case Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8">
            See grāmatr in Action
          </h3>
          <div className="bg-primary-900 dark:bg-primary-800 rounded-2xl p-8 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-neutral-400 text-sm font-mono ml-2">AI Assistant Demo</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="text-accent-400">Human:</span>
                <span className="text-neutral-300 ml-2">Remember this project uses React + TypeScript</span>
              </div>
              <div>
                <span className="text-success-400">AI:</span>
                <span className="text-neutral-300 ml-2">✓ Saved to project context. I&apos;ll use these technologies consistently.</span>
              </div>
              <div className="border-l-2 border-accent-500 pl-4 my-4">
                <span className="text-neutral-400 text-xs">[Context compression event - 150K tokens exceeded]</span>
              </div>
              <div>
                <span className="text-accent-400">Human:</span>
                <span className="text-neutral-300 ml-2">Add error handling to the login form</span>
              </div>
              <div>
                <span className="text-success-400">AI:</span>
                <span className="text-neutral-300 ml-2">I&apos;ll add TypeScript error handling to your React login form, maintaining your project&apos;s patterns.</span>
              </div>
              <div className="text-green-400 text-xs mt-2">
                ✓ Context preserved • ✓ Project continuity maintained • ✓ Zero setup time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
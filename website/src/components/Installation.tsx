'use client';

import { useState } from 'react';

export function Installation() {
  const [activeTab, setActiveTab] = useState('claude');
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const installations = {
    claude: {
      title: "Claude Code",
      subtitle: "Recommended for Claude users",
      commands: [
        {
          id: 'claude-project',
          title: 'Project-Specific Installation',
          description: 'Each project gets its own container and memory',
          command: `# Set up project-specific grāmatr
export GRAMATR_PROJECT_PATH=$(pwd)
claude mcp add gramatr \\
    --scope=local \\
    --env GRAMATR_PROJECT_PATH=$GRAMATR_PROJECT_PATH \\
    --env MCP_CONTEXT_SAVE_THRESHOLD_PERCENT=80 \\
    --env MCP_BEHAVIORAL_INDUCTION_ENABLED=true \\
    --env MCP_TODO_SYNC_ENABLED=true \\
    --env MCP_GIT_INTEGRATION_ENABLED=true \\
    -- docker run --rm -i \\
        -v ~/.gramatr/data:/data \\
        -v ~/.claude:/workspace/.claude:ro \\
        -v $GRAMATR_PROJECT_PATH:/workspace/project:rw \\
        ghcr.io/n90-co/gramatr:latest`
        },
        {
          id: 'claude-global',
          title: 'User-Level Installation',
          description: 'Shared container across all projects',
          command: `# Set up user-level grāmatr
claude mcp add gramatr-global \\
    --scope=user \\
    -- docker run --rm -i \\
        -v ~/.gramatr/data:/data \\
        -v ~/.claude:/workspace/.claude:ro \\
        ghcr.io/n90-co/gramatr:latest`
        }
      ]
    },
    other: {
      title: "Other AI Platforms",
      subtitle: "ChatGPT, Continue.dev, and MCP-compatible AIs",
      commands: [
        {
          id: 'mcp-config',
          title: 'MCP Configuration',
          description: 'Add to your MCP settings file',
          command: `{
  "mcpServers": {
    "gramatr": {
      "command": "docker", 
      "args": [
        "run", 
        "--rm", 
        "-i", 
        "-v", "~/.gramatr/data:/data",
        "ghcr.io/n90-co/gramatr:latest"
      ],
      "env": {
        "MCP_CONTEXT_SAVE_THRESHOLD_PERCENT": "80",
        "MCP_BEHAVIORAL_INDUCTION_ENABLED": "true",
        "MCP_TODO_SYNC_ENABLED": "true",
        "MCP_GIT_INTEGRATION_ENABLED": "true"
      }
    }
  }
}`
        }
      ]
    },
    manual: {
      title: "Manual Setup",
      subtitle: "For custom deployments and development",
      commands: [
        {
          id: 'docker-manual',
          title: 'Direct Docker Usage',
          description: 'Run container directly without MCP integration',
          command: `# Pull and run grāmatr container
docker pull ghcr.io/n90-co/gramatr:latest

# Run with volume mounting
docker run --rm -i \\
    -v ~/.gramatr/data:/data \\
    -v $PWD:/workspace \\
    ghcr.io/n90-co/gramatr:latest`
        },
        {
          id: 'source-build',
          title: 'Build from Source',
          description: 'For development and customization',
          command: `# Clone and build grāmatr
git clone https://github.com/n90-co/gramatr.git
cd gramatr/mcp-server

# Build container
docker build -t gramatr-mcp .

# Run locally built version
docker run --rm -i \\
    -v ~/.gramatr/data:/data \\
    gramatr-mcp`
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-primary-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            Get Started in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-success-500">
              60 Seconds
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Choose your AI platform and get universal memory persistence with a single command.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-primary-700 rounded-xl p-2 inline-flex border border-neutral-200 dark:border-primary-600">
            {Object.entries(installations).map(([key, install]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-accent-500 text-white shadow-md'
                    : 'text-primary-600 hover:text-primary-900 dark:hover:text-primary-100'
                }`}
              >
                {install.title}
              </button>
            ))}
          </div>
        </div>

        {/* Installation Content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
              {installations[activeTab as keyof typeof installations].title}
            </h3>
            <p className="text-primary-600">
              {installations[activeTab as keyof typeof installations].subtitle}
            </p>
          </div>

          {/* Command Blocks */}
          <div className="space-y-8">
            {installations[activeTab as keyof typeof installations].commands.map((cmd) => (
              <div key={cmd.id} className="bg-white dark:bg-primary-700 rounded-xl border border-neutral-200 dark:border-primary-600 overflow-hidden">
                <div className="p-6 border-b border-neutral-200 dark:border-primary-600">
                  <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-1">
                    {cmd.title}
                  </h4>
                  <p className="text-primary-600 text-sm">
                    {cmd.description}
                  </p>
                </div>
                <div className="bg-primary-900 dark:bg-primary-800">
                  <div className="flex items-center justify-between p-4 border-b border-primary-700">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-neutral-400 text-sm font-mono ml-2">Terminal</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cmd.command, cmd.id)}
                      className="text-accent-400 hover:text-accent-300 text-sm font-mono transition-colors"
                    >
                      {copied === cmd.id ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="font-mono text-sm text-neutral-300 overflow-x-auto">
                      <code>{cmd.command}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              After Installation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
                <div className="text-accent-500 text-2xl mb-3">1️⃣</div>
                <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Initialize Project
                </h4>
                <p className="text-primary-600 text-sm">
                  Ask your AI: "Initialize project memory for this directory"
                </p>
              </div>
              <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
                <div className="text-accent-500 text-2xl mb-3">2️⃣</div>
                <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Start Creating
                </h4>
                <p className="text-primary-600 text-sm">
                  Your AI now remembers everything across sessions
                </p>
              </div>
              <div className="bg-white dark:bg-primary-700 rounded-xl p-6 border border-neutral-200 dark:border-primary-600">
                <div className="text-accent-500 text-2xl mb-3">3️⃣</div>
                <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Experience 9x
                </h4>
                <p className="text-primary-600 text-sm">
                  Context continuity, project memory, zero setup time
                </p>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="mt-12 bg-success-50 dark:bg-success-900/20 rounded-xl p-6 border border-success-200 dark:border-success-500/30">
            <h4 className="font-semibold text-success-800 dark:text-success-300 mb-3 flex items-center gap-2">
              <span className="text-lg">✅</span>
              Verify Installation
            </h4>
            <p className="text-success-700 dark:text-success-400 mb-4">
              Test your installation by asking your AI assistant:
            </p>
            <div className="bg-white dark:bg-primary-800 rounded-lg p-4 border border-success-200 dark:border-success-500/30">
              <code className="text-accent-600 font-mono text-sm">
                "List available MCP tools and show me what grāmatr can do"
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client'

import { motion } from 'framer-motion'
import { Shield, Layers, Activity, Zap, BarChart3, GitBranch } from 'lucide-react'
import { Card, Button } from '@/components/ui'

const features = [
  {
    icon: Layers,
    title: '25+ Integrated Scanners',
    description: 'Unified platform consolidating Slither, Mythril, Aderyn, Semgrep, and 20+ more security tools',
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description: 'Lightning-fast scans with WebSocket live updates. Quick scans in ~30s, deep analysis in ~15 min',
  },
  {
    icon: Shield,
    title: '509 Security Detectors',
    description: 'Comprehensive coverage across Solidity, Vyper, Rust/Solana, Cairo, and Move smart contracts',
  },
  {
    icon: BarChart3,
    title: 'Security Dashboards',
    description: 'Real-time metrics, analytics, and audit-ready compliance reporting for SOC 2, ISO 27001, NIST',
  },
  {
    icon: Activity,
    title: 'AI-Powered Intelligence',
    description: 'Reduce false positives by 95% with machine learning that correlates findings across tools',
  },
  {
    icon: GitBranch,
    title: 'Native CI/CD Integration',
    description: 'Seamless integration with GitHub, GitLab, and Jenkins for automated security in your pipeline',
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Introducing <span className="text-secondary-400">BlockSecOps</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            The industry's first unified DevSecOps platform for enterprise blockchain development
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-4 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Card variant="glass" className="inline-block px-12 py-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Smart Contract Security?</h3>
            <p className="text-white/70 mb-6 max-w-2xl">
              Join leading Web3 teams who trust BlockSecOps to secure their blockchain applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => window.location.href = 'https://blocksecops.com'}>
                Explore BlockSecOps
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Demo
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Layers, GitBranch, Brain, Zap, Shield, Activity, Users, BarChart3, TrendingUp, Copy } from 'lucide-react'
import { Card } from '@/components/ui'

const services = [
  {
    icon: Layers,
    title: 'Unified Scanning',
    description: '25+ security tools integrated into one platform. Intelligent deduplication reduces findings by 60% while providing comprehensive coverage across Solidity, Vyper, Rust, Move, and Cairo.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Integration',
    description: 'Native integration with GitHub, GitLab, and Jenkins. Automated security scanning in your development pipeline with real-time threat detection before deployment.',
  },
  {
    icon: Brain,
    title: 'Unified Intelligence',
    description: 'AI-powered vulnerability analysis reduces false positives from 73% to <5%. Machine learning models correlate findings across tools and prioritize critical issues automatically.',
  },
  {
    icon: Zap,
    title: 'Real-Time Scanning',
    description: 'Lightning-fast analysis with WebSocket live updates. Quick scans in ~30s, standard scans in ~5 min, and deep analysis in ~15 min using Kubernetes-orchestrated jobs.',
  },
  {
    icon: Shield,
    title: 'Multi-Language Support',
    description: 'Comprehensive security coverage for 5 blockchain languages: Solidity, Vyper, Rust/Solana, Move, and Cairo. Enterprise-grade support for all major smart contract platforms.',
  },
  {
    icon: Activity,
    title: 'Compliance Automation',
    description: 'Automated documentation for SOC 2, ISO 27001, and NIST compliance. Enterprise workflows with RBAC, audit trails, and integrations with Jira, Slack, and PagerDuty.',
  },
  {
    icon: Users,
    title: 'Web3 DevSecOps Consulting',
    description: 'Expert SSDLC consulting for teams who prefer not to use the BlockSecOps platform, need dedicated platform support, or require comprehensive DevSecOps strategy guidance. Tailored consultation to establish secure development practices.',
  },
  {
    icon: Copy,
    title: 'Intelligent Deduplication',
    description: 'Advanced deduplication engine reduces redundant findings by 60% across multiple security tools. Smart matching algorithms identify duplicate vulnerabilities while preserving unique insights from each scanner.',
  },
  {
    icon: BarChart3,
    title: 'Security Analytics',
    description: 'Comprehensive analytics dashboards provide deep insights into vulnerability trends, risk distribution, and remediation progress. Track security posture improvements over time with customizable reports.',
  },
  {
    icon: TrendingUp,
    title: 'Security Metrics',
    description: 'Track key security metrics including vulnerability density, time-to-remediation, and security debt. Executive dashboards and customizable KPIs provide visibility for stakeholders at all levels.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            DevSecOps Platform & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Automated security operations and expert consulting for enterprise smart contract development
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-4 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Users, Zap, CheckCircle, Target } from 'lucide-react'
import { Card } from '@/components/ui'

const services = [
  {
    icon: Shield,
    title: 'Smart Contract Security Pipeline',
    description: 'Build automated security testing into your development workflow with static analysis, fuzzing, and formal verification integrated before every deployment.',
  },
  {
    icon: Code,
    title: 'Web3 Development Workflow',
    description: 'Custom DevOps pipelines for Solidity, Rust, and Move development with automated testing, gas optimization checks, and multi-chain deployment automation.',
  },
  {
    icon: Users,
    title: 'Security Training for Web3 Devs',
    description: 'Practical training on common vulnerabilities (reentrancy, oracle manipulation, access control), secure coding patterns, and blockchain-specific attack vectors.',
  },
  {
    icon: Zap,
    title: 'CI/CD for Multi-Chain',
    description: 'Streamline deployments across EVM chains, Solana, Cosmos, and other ecosystems with security gates, automated testing, and deployment verification.',
  },
  {
    icon: CheckCircle,
    title: 'Pre-Audit Code Reviews',
    description: 'Expert review of your smart contracts before formal audits to catch common issues, reduce audit costs, and accelerate time-to-market.',
  },
  {
    icon: Target,
    title: 'Security-First Architecture',
    description: 'Design secure protocol architecture from the ground up with upgradability strategies, access control patterns, and defense-in-depth principles.',
  },
]

export function ConsultingServices() {
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
            Services for <span className="gradient-text">Web3 Teams</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            From smart contract pipelines to multi-chain deployments, we help development teams ship secure Web3 products faster
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

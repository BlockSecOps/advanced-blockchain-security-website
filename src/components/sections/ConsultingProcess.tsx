'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Search, FileCheck, Rocket } from 'lucide-react'
import { Card } from '@/components/ui'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery Call',
    description: 'Understand your tech stack, development workflow, target chains, and security pain points. Identify quick wins and long-term improvements.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Security & Process Audit',
    description: 'Review your codebase, deployment process, and testing coverage. Map out vulnerabilities in your current workflow and identify gaps.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Custom Implementation Plan',
    description: 'Design a security pipeline tailored to your stack—automated testing, deployment gates, monitoring, and team training roadmap.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Build & Train',
    description: 'Implement the security infrastructure, integrate tools into your CI/CD, train your team on secure practices, and establish ongoing support.',
  },
]

export function ConsultingProcess() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            How We <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            A practical approach to embedding security into your Web3 development workflow
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                <div className="mb-4 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

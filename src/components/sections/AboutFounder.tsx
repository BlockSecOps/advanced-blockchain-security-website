'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui'
import { Award, Code, Shield, Briefcase } from 'lucide-react'

const achievements = [
  {
    icon: Shield,
    title: 'Security Expert',
    description: 'Deep expertise in blockchain security and smart contract auditing',
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'Building tools that developers love to use',
  },
  {
    icon: Briefcase,
    title: 'Industry Leader',
    description: 'Pioneering DevSecOps solutions for Web3',
  },
  {
    icon: Award,
    title: 'Innovator',
    description: 'Creating the future of blockchain security',
  },
]

export function AboutFounder() {
  return (
    <section id="founder" className="py-24 bg-dark-900">
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
            Meet Our <span className="text-primary-400">Founder</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Visionary leadership driving blockchain security innovation
          </p>
        </motion.div>

        {/* Founder Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <Card variant="glass" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">DC</span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold font-display mb-2">Dehvon Curtis</h3>
                <p className="text-xl text-primary-400 mb-6">Founder & CEO</p>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Dehvon Curtis founded Advanced Blockchain Security with a vision to revolutionize how organizations approach blockchain security. With extensive experience in cybersecurity and blockchain technology gained at industry-leading companies including <span className="text-white font-semibold">Symantec</span>, <span className="text-white font-semibold">eBay</span>, and <span className="text-white font-semibold">Adobe</span>, Dehvon recognized the critical gap between traditional security tools and the unique challenges of Web3 development.
                  </p>
                  <p>
                    Drawing from his enterprise security background at these Fortune 500 companies, Dehvon brings world-class expertise to the blockchain space. Under his leadership, Advanced Blockchain Security has developed BlockSecOps, the industry's first unified DevSecOps platform that seamlessly integrates 25+ security tools into a single, powerful solution. His commitment to innovation and excellence has positioned the company at the forefront of blockchain security.
                  </p>
                  <p>
                    His vision extends beyond building tools—it's about creating an ecosystem where blockchain developers can build with confidence, knowing their applications are protected by enterprise-grade security from code to deployment.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto">
                  <achievement.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

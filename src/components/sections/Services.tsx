'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award } from 'lucide-react'
import { Card } from '@/components/ui'

const services = [
  {
    icon: Shield,
    title: 'Enterprise Security Expertise',
    description: 'Backed by years of blockchain security experience, we understand the unique challenges of Web3 development. Our team has secured hundreds of smart contracts across all major blockchain platforms.',
  },
  {
    icon: Users,
    title: 'DevSecOps Consulting',
    description: 'Expert SSDLC consulting for teams who need custom security strategies, dedicated platform support, or comprehensive DevSecOps guidance. We help you establish secure development practices tailored to your needs.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Trusted by leading Web3 projects to secure their smart contracts. Our platform and consulting services have helped prevent millions in potential losses through early vulnerability detection.',
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
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Enterprise blockchain security expertise backed by the industry-leading BlockSecOps platform
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

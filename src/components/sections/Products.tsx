'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Package } from 'lucide-react'
import { Card, Button } from '@/components/ui'

const products = [
  {
    icon: Zap,
    name: 'BlockSecOps Platform',
    description: 'The first unified security operations platform for enterprise Solidity development',
    features: ['25+ integrated security tools', 'Real-time WebSocket updates', 'Multi-language support', 'Enterprise RBAC & compliance'],
    href: 'https://blocksecops.com',
    buttonText: 'Download Now',
  },
  {
    icon: Shield,
    name: 'SolidityDefend',
    description: 'High-performance static analysis tool built with Rust',
    features: ['100+ security detectors', 'Lightning-fast scanning', 'CI/CD integration', 'Modern attack patterns'],
    href: 'https://github.com/BlockSecOps/SolidityDefend',
    buttonText: 'Download Now',
  },
  {
    icon: Package,
    name: 'SolidityBOM',
    description: 'Software Bill of Materials generator for smart contracts',
    features: ['Automatic project detection', 'Complete dependency tracking', 'CycloneDX format', 'Sub-5 second analysis'],
    href: '#contact',
    buttonText: 'Request Beta',
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
            Our <span className="text-secondary-400">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Enterprise-grade security tools and consulting services for modern Web3 development teams
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center shadow-glow">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-white/60 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/70">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full" onClick={() => window.location.href = product.href}>
                  {product.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

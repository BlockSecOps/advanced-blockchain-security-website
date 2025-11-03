'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Lightbulb } from 'lucide-react'
import { Badge } from '@/components/ui'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every line of code, every transaction matters',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Accurate detection with minimal false positives',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering the future of blockchain security',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-mesh animate-gradient bg-[length:600%_600%] overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <Badge variant="default" className="mb-4">
              About Us
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
          >
            Securing the Future of
            <br />
            <span className="gradient-text">Blockchain Technology</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto"
          >
            Advanced Blockchain Security was founded with a singular mission: to make blockchain technology secure, reliable, and accessible for everyone.
          </motion.p>

          {/* Values */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

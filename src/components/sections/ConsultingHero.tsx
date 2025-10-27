'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button, Badge } from '@/components/ui'

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

export function ConsultingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-mesh animate-gradient bg-[length:600%_600%] overflow-hidden">
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
              FOR BLOCKCHAIN & WEB3 DEVELOPMENT TEAMS
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-bold font-display leading-tight"
          >
            Build Secure Web3
            <br />
            <span className="gradient-text">
              From Day One
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto"
          >
            Expert DevSecOps consulting for blockchain development teams. Whether you're building DeFi protocols, NFT platforms, or Layer 2 solutions, we help you integrate security into every stage of your development lifecycle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button variant="primary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2 text-white/40 hover:text-primary-400 transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  )
}

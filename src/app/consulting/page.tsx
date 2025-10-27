import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ConsultingHero, ConsultingServices, ConsultingProcess, Contact } from '@/components/sections'

export const metadata = {
  title: 'Web3 Security Consulting for Development Teams | Advanced Blockchain Security',
  description: 'Expert DevSecOps consulting for blockchain and Web3 development teams. Build secure smart contract pipelines, automate security testing, and ship faster with confidence.',
}

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <Contact />
      <Footer />
    </main>
  )
}

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { AboutHero, AboutFounder, AboutProduct, Contact } from '@/components/sections'

export const metadata = {
  title: 'About Us | Advanced Blockchain Security',
  description: 'Learn about Dehvon Curtis and Advanced Blockchain Security, pioneering the future of blockchain security with BlockSecOps.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutFounder />
      <AboutProduct />
      <Contact />
      <Footer />
    </main>
  )
}

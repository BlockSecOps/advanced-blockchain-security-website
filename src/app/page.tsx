import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Services, Products, Contact } from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero />
      <Products />
      <Services />
      <Contact />

      <Footer />
    </main>
  )
}

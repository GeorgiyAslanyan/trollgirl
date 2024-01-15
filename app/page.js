import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowTo from '@/components/HowTo'
import Roadmap from '@/components/Roadmap'
import Tokenomics from '@/components/Tokenomics'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-[#D9D9D9] min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Roadmap />
      <HowTo />
      <Tokenomics />
      <Footer />
    </main>
  )
}

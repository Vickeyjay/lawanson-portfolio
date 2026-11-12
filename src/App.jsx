import { useState, useEffect } from 'react'
import Navbar from './components/NavbarSection/Navbar'
import Reel from './components/ReelSection/Reel'
import Hero from './components/HeroSection/Hero'
import Marquee from './components/MarqueeSection/Marquee'
import Work from './components/WorkSection/Work'
import About from './components/AboutSection/About'
import Services from './components/ServicesSection/Services'
import Tools from './components/ToolsSection/Tools'
import Testimonials from './components/TestimonialsSection/Testimonials'
import Footer from './components/FooterSection/Footer'
import Dock from './components/DockSection/Dock'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const ids = ['home', 'work', 'about', 'services', 'tools', 'kind-words', 'contact']

    // The active section is the last one whose top has passed the probe line
    const update = () => {
      const probe = window.innerHeight * 0.35
      let current = ids[0]

      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) {
          current = id
        }
      })

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      setActiveSection(atBottom ? 'contact' : current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // About, Services, Tools and Kind words all light up the "About" item
  const navSection = ['services', 'tools', 'kind-words'].includes(activeSection) ? 'about' : activeSection

  return (
    <>
      <Navbar activeSection={navSection} />
      <Reel />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Services />
      <Tools />
      <Testimonials />
      <Footer />
      <Dock activeSection={navSection} />
    </>
  )
}

export default App

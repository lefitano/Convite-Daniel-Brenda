import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Invite from './sections/Invite'
import EventInfo from './sections/EventInfo'
import RSVP from './sections/RSVP'
import Gifts from './sections/Gifts'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Invite />
      <EventInfo />
      <RSVP />
      <Gifts />
      <Footer />
    </>
  )
}

export default App

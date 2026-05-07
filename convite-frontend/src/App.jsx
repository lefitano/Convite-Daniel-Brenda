import { useEffect } from 'react'

function BotanicalOrnament({ side }) {
  return (
    <div
      className={`botanical-ornament botanical-ornament--${side}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 80 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Haste principal ondulada */}
        <path
          d="M 42 2 C 38 58 50 115 41 172 C 33 229 48 286 40 343 C 33 400 43 450 41 518"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        />

        {/* Folha esquerda — y≈58 */}
        <path d="M 41 58 C 30 44 8 46 7 62 C 18 56 41 58 41 58 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 41 60 C 28 52 14 53" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha direita — y≈115 */}
        <path d="M 41 115 C 52 101 74 103 75 119 C 64 113 41 115 41 115 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 41 117 C 54 109 68 110" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha esquerda — y≈172 */}
        <path d="M 41 172 C 30 158 8 160 7 176 C 18 170 41 172 41 172 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 41 174 C 28 166 14 167" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha direita — y≈230 */}
        <path d="M 40 230 C 51 216 73 218 74 234 C 63 228 40 230 40 230 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 40 232 C 53 224 67 225" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha esquerda — y≈288 */}
        <path d="M 40 288 C 29 274 7 276 6 292 C 17 286 40 288 40 288 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 40 290 C 27 282 13 283" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha direita — y≈346 */}
        <path d="M 40 346 C 51 332 73 334 74 350 C 63 344 40 346 40 346 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 40 348 C 53 340 67 341" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Folha esquerda — y≈404 */}
        <path d="M 40 404 C 29 390 7 392 6 408 C 17 402 40 404 40 404 Z"
          fill="currentColor" opacity="0.85"/>
        <path d="M 40 406 C 27 398 13 399" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Brotos no topo */}
        <circle cx="34" cy="18" r="3.2" fill="currentColor" opacity="0.55"/>
        <circle cx="50" cy="11" r="2.6" fill="currentColor" opacity="0.45"/>
        <circle cx="41" cy="5"  r="2"   fill="currentColor" opacity="0.38"/>
      </svg>
    </div>
  )
}
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
      <BotanicalOrnament side="left" />
      <BotanicalOrnament side="right" />
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

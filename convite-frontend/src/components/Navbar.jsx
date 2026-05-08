import { useState } from 'react'
import logo from '../assets/images/LogoCasamento.jpeg'

const links = [
  { href: '#hero',    label: 'B & D'      },
  { href: '#gallery', label: 'Nosso Álbum'       },
  { href: '#invite',  label: 'Convite'     },
  { href: '#event',   label: 'O dia'   },
  { href: '#rsvp',    label: 'Confirmação' },
  { href: '#gifts',   label: 'Presentes'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">  
      <a href="#hero" className="navbar__brand">
        <img src={logo} alt="Brenda & Daniel" className="navbar__logo" />
      </a>

      <button
        className={`navbar__hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links${open ? ' open' : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

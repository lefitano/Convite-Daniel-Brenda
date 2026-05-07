import { useState } from 'react'

const links = [
  { href: '#hero',    label: 'Início'      },
  { href: '#gallery', label: 'Álbum'       },
  { href: '#invite',  label: 'Convite'     },
  { href: '#event',   label: 'Cerimônia'   },
  { href: '#rsvp',    label: 'Confirmação' },
  { href: '#gifts',   label: 'Presentes'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__brand">Daniel &amp; Brenda</a>

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

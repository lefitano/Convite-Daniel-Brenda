import { useState, useRef, useEffect } from 'react'
import fotoNoivos from '../assets/images/ImagemPrincipalDanielBrenda.jpeg'
import musicaSrc from '../assets/audio/musicaEscolhida.mp3'

const TARGET = new Date('2026-11-07T15:30:00')

function getTimeLeft() {
  const diff = TARGET - new Date()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  return {
    dias:     Math.floor(diff / 86400000),
    horas:    Math.floor((diff % 86400000) / 3600000),
    minutos:  Math.floor((diff % 3600000)  / 60000),
    segundos: Math.floor((diff % 60000)    / 1000),
  }
}

export default function Hero() {
  const [playing, setPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const audioRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const units = [
    { value: timeLeft.dias,     label: 'Dias'    },
    { value: timeLeft.horas,    label: 'Horas'   },
    { value: timeLeft.minutos,  label: 'Min'     },
    { value: timeLeft.segundos, label: 'Seg'     },
  ]

  return (
    <section id="hero" className="hero">
      <audio ref={audioRef} src={musicaSrc} loop />

      <div className="hero__content">
        <p className="hero__pre" data-aos="fade-up">
          Convidamos você para celebrar nosso sonhado dia
        </p>

        <h1 className="hero__names" data-aos="fade-up" data-aos-delay="150">
          Brenda <span className="hero__amp">&amp;</span> Daniel
        </h1>

        <div className="hero__divider" data-aos="fade-up" data-aos-delay="300" />

        <p className="hero__date" data-aos="fade-up" data-aos-delay="300">
          07 de Novembro de 2026
        </p>

        <button
          className={`hero__music-btn${playing ? ' hero__music-btn--playing' : ''}`}
          onClick={toggleMusic}
          data-aos="fade-up"
          data-aos-delay="500"
          aria-label={playing ? 'Pausar música' : 'Tocar música'}
        >
          <span className="hero__music-icon">{playing ? '❚❚' : '♪'}</span>
          {playing ? 'Pausar música' : 'Tocar música'}
        </button>
      </div>

      <div className="hero__photo-wrap" data-aos="fade-up" data-aos-delay="400">
        <img
          src={fotoNoivos}
          alt="Brenda e Daniel"
          className="hero__photo"
        />
      </div>

      <p className="hero__bio" data-aos="fade-up" data-aos-delay="200">
        Duas histórias que se encontraram e decidiram escrever um novo capítulo
        juntas — cheio de amor, cumplicidade e muitas aventuras pela frente.
      </p>

      <div className="hero__countdown" data-aos="fade-up" data-aos-delay="300">
        {units.map(({ value, label }, i) => (
          <div key={label} className="hero__countdown-unit">
            <span className="hero__countdown-number">
              {String(value).padStart(2, '0')}
            </span>
            <span className="hero__countdown-label">{label}</span>
            {i < units.length - 1 && (
              <span className="hero__countdown-sep" aria-hidden="true">:</span>
            )}
          </div>
        ))}
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-arrow" />
      </div>
    </section>
  )
}

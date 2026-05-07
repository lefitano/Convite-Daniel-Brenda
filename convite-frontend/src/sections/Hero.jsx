import { useState, useRef } from 'react'
import fotoNoivos from '../assets/images/ImagemPrincipalDanielBrenda.jpeg'
import musicaSrc from '../assets/audio/musicaEscolhida.mp3'

export default function Hero() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

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
          aria-label={playing ? 'Pausar música' : 'Clica aqui pra adicionar uma música'}
        >
          <span className="hero__music-icon">{playing ? '❚❚' : '♪'}</span>
          {playing ? 'Pausar música' : 'Clica aqui pra adicionar uma música'}
        </button>
      </div>

      <div className="hero__photo-wrap" data-aos="fade-up" data-aos-delay="400">
        <img
          src={fotoNoivos}
          alt="Daniel e Brenda"
          className="hero__photo"
        />
      </div>

      <a href="#invite" className="hero__scroll-hint" aria-label="Ver mais">
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}

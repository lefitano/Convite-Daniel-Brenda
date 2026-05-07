import { useState, useRef } from 'react'

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
      <audio ref={audioRef} src="/assets/audio/musica.mp3" loop />

      <div className="hero__bg">
        <img
          src="/assets/images/noivos.jpg"
          alt=""
          className="hero__bg-img"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__content">
        <p className="hero__pre" data-aos="fade-up">
          Convidamos você para celebrar
        </p>

        <h1 className="hero__names" data-aos="fade-up" data-aos-delay="150">
          Daniel <span className="hero__amp">&amp;</span> Brenda
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

      <a href="#invite" className="hero__scroll-hint" aria-label="Ver mais">
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}

import { useState, useRef, useEffect } from 'react'
import fotoNoivos from '../assets/images/ImagemPrincipalDanielBrenda.jpeg'
import musicaSrc from '../assets/audio/musicaEscolhida.mp3'
import fotoBrenda from '../assets/images/BrendaCortada.jpeg'
import fotoDaniel from '../assets/images/DanielCortado.jpeg'
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

      <div className="hero__botanical-corner hero__botanical-corner--left" aria-hidden="true">
        <svg viewBox="0 0 80 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 42 2 C 38 58 50 115 41 172 C 33 229 48 260 40 260" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M 41 58 C 30 44 8 46 7 62 C 18 56 41 58 41 58 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 60 C 28 52 14 53" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <path d="M 41 115 C 52 101 74 103 75 119 C 64 113 41 115 41 115 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 117 C 54 109 68 110" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <path d="M 41 172 C 30 158 8 160 7 176 C 18 170 41 172 41 172 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 174 C 28 166 14 167" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <circle cx="34" cy="18" r="3.2" fill="currentColor" opacity="0.55"/>
          <circle cx="50" cy="11" r="2.6" fill="currentColor" opacity="0.45"/>
          <circle cx="41" cy="5"  r="2"   fill="currentColor" opacity="0.38"/>
        </svg>
      </div>

      <div className="hero__botanical-corner hero__botanical-corner--right" aria-hidden="true">
        <svg viewBox="0 0 80 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 42 2 C 38 58 50 115 41 172 C 33 229 48 260 40 260" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M 41 58 C 30 44 8 46 7 62 C 18 56 41 58 41 58 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 60 C 28 52 14 53" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <path d="M 41 115 C 52 101 74 103 75 119 C 64 113 41 115 41 115 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 117 C 54 109 68 110" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <path d="M 41 172 C 30 158 8 160 7 176 C 18 170 41 172 41 172 Z" fill="currentColor" opacity="0.85"/>
          <path d="M 41 174 C 28 166 14 167" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          <circle cx="34" cy="18" r="3.2" fill="currentColor" opacity="0.55"/>
          <circle cx="50" cy="11" r="2.6" fill="currentColor" opacity="0.45"/>
          <circle cx="41" cy="5"  r="2"   fill="currentColor" opacity="0.38"/>
        </svg>
      </div>

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
        juntas cheio de amor, cumplicidade e muitas aventuras pela frente.
        Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos
        todo o tempo que já estamos juntos. 
        Porém, o brilho intenso e apaixonado dos nossos olhares nos fazem 
        lembrar o porquê de chegarmos até aqui sem sentir tanto o tempo passar... Vamos nos casar! Estamos preparando tudo com muito carinho para curtirmos cada momento com nossos amigos e familiares queridos! 
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

      <div className="hero__individuals" data-aos="fade-up" data-aos-delay="350">

        <div className="hero__couple-header">
          <span className="hero__couple-eyebrow">Conheça</span>
          <h2 className="hero__couple-title">O casal</h2>
          <p className="hero__couple-subtitle">
            Duas almas que se encontraram e escolheram trilhar o mesmo caminho.
          </p>
        </div>

        <div className="hero__individuals-photos">
          <div className="hero__individual">
            <div className="hero__individual-img-wrap">
              <img src={fotoBrenda} alt="Brenda" className="hero__individual-img" />
            </div>
            <p className="hero__individual-name">Brenda</p>
          </div>

          <div className="hero__individual">
            <div className="hero__individual-img-wrap">
              <img src={fotoDaniel} alt="Daniel" className="hero__individual-img" />
            </div>
            <p className="hero__individual-name">Daniel</p>
          </div>
        </div>

        <div className="hero__individual-caption">
          <p>
            Em meio a tanta gente neste mundo imenso, dois corações se encontraram quase por acaso.
            Primeiro veio a amizade, depois, como quem não quer nada, nasceu uma história de amor
            daquelas que parecem ter sido escritas pelas estrelas. Às vezes pensamos:
            “Ah, se tivéssemos nos conhecido há muitos anos atrás…” Mas entendemos que tudo acontece
            no tempo perfeito de Deus. E foi nesse tempo que Ele nos uniu, com o coração
            transbordando de amor, para começarmos juntos uma linda e longa jornada.
          </p>
          <p>
            Criamos este cantinho especial para compartilhar cada detalhe desse grande momento que
            está chegando. Aqui você vai encontrar tudo sobre o nosso casamento, feito com muito
            carinho e pensado para que cada passo seja acompanhado de perto por vocês.
          </p>
          <p>
            Estamos suuuper ansiosos para celebrar esse dia mágico ao lado de cada um! Afinal,
            uma história de amor só fica completa quando é vivida e festejada com quem faz parte dela.
          </p>
        </div>

      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-arrow" />
      </div>
    </section>
  )
}

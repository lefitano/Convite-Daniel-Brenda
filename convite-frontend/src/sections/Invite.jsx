import { Mail } from 'lucide-react'

export default function Invite() {
  return (
    <section id="invite" className="invite">
      <div className="invite__inner">

        <span className="invite__eyebrow" data-aos="fade-up">Convite</span>

        <div className="invite__icon" data-aos="zoom-in" data-aos-delay="50" aria-hidden="true">
          <Mail size={48} strokeWidth={1.2} />
        </div>

        <div className="invite__ornament" aria-hidden="true" data-aos="fade-up" data-aos-delay="100">
          <span />
        </div>

        <h2 className="invite__title" data-aos="fade-up" data-aos-delay="100">
          Você está convidado
        </h2>

        <div className="invite__rule" data-aos="fade-up" data-aos-delay="200" />

        <div className="invite__body" data-aos="fade-up" data-aos-delay="200">
          <p>
            Com imensa alegria e o coração cheio de amor, temos a honra de
            convidá-lo para celebrar conosco o início de uma nova história.
          </p>
          <p>
            Em meio à presença daqueles que amamos, uniremos nossas vidas no
            sagrado laço do matrimônio — um momento que permanecerá para sempre
            em nossas memórias e em nossos corações.
          </p>
          <p>
            Sua presença tornará esse dia ainda mais especial e inesquecível.
            Será uma honra e uma alegria tê-lo ao nosso lado nessa celebração
            tão sonhada.
          </p>
        </div>

        <div className="invite__ornament" aria-hidden="true" data-aos="fade-up" data-aos-delay="350">
          <span />
        </div>

      </div>
    </section>
  )
}

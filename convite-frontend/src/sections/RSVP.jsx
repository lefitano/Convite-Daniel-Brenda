export default function RSVP() {
  return (
    <section id="rsvp" className="rsvp">
      <div className="rsvp__inner">

        <span className="rsvp__eyebrow" data-aos="fade-up">Confirmação</span>

        <h2 className="rsvp__title" data-aos="fade-up" data-aos-delay="100">
          Confirme sua Presença
        </h2>

        <p className="rsvp__text" data-aos="fade-up" data-aos-delay="150">
          Sua presença é muito importante para nós. Preencha o formulário abaixo
          e nos confirme até <strong>31 de Outubro de 2026</strong>.
        </p>

        <div className="rsvp__form-wrap" data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfxFN3UGh6YI0WII-VbknpufIPbnPzLcjo6Tu5bIGxy3_3Rpw/viewform?embedded=true"
            className="rsvp__iframe"
            title="Formulário de confirmação de presença"
          >
            Carregando…
          </iframe>
        </div>

      </div>
    </section>
  )
}

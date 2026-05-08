import { CalendarDays, Clock4, MapPin } from 'lucide-react'

const cards = [
  {
    Icon: CalendarDays,
    label: 'Data',
    title: '07 de Novembro',
    detail: 'Sábado, 2026',
  },
  {
    Icon: Clock4,
    label: 'Horário',
    title: '15:30',
    detail: 'Pontualmente',
  },
  {
    Icon: MapPin,
    label: 'Local',
    title: 'Refúgio Matões',
    detail: 'Cerimônia e Recepção',
  },
]

export default function EventInfo() {
  return (
    <section id="event" className="event">
      <div className="event__inner">

        <span className="event__eyebrow" data-aos="fade-up">Detalhes</span>
        <h2 className="event__title" data-aos="fade-up" data-aos-delay="100">
          A Cerimônia & Recepção
        </h2>

        <div className="event__cards">
          {cards.map(({ Icon, label, title, detail }, i) => (
            <div
              key={label}
              className="event__card"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="event__card-icon-wrap">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className="event__card-label">{label}</span>
              <strong className="event__card-title">{title}</strong>
              <span className="event__card-detail">{detail}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/place/Ref%C3%BAgio+Mat%C3%B5es/@-3.6140788,-38.8221859,17z/data=!3m1!4b1!4m6!3m5!1s0x7c0cf147a0daed9:0x8b0efd167fc9df71!8m2!3d-3.6140842!4d-38.819611!16s%2Fg%2F11m5r6t1x5?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="event__map-btn"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <MapPin size={15} strokeWidth={2} />
          Ver no mapa
        </a>

      </div>
    </section>
  )
}

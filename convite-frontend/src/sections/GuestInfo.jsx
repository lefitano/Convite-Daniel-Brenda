import {
  LuCalendarCheck,
  LuPartyPopper,
  LuSparkles,
  LuCamera,
  LuAlarmClock,
  LuUserX,
  LuChurch,
  LuHeartHandshake,
} from 'react-icons/lu'

const rules = [
  {
    Icon: LuCalendarCheck,
    title: 'Confirme sua Presença',
    desc: 'Sua confirmação nos ajuda a preparar tudo com carinho. Não deixe para a última hora.',
  },
  {
    Icon: LuPartyPopper,
    title: 'Entregue-se à Festa',
    desc: 'Dance, ria e celebre. Os noivos querem te ver feliz do início ao fim.',
  },
  {
    Icon: LuSparkles,
    title: 'Branco é da Noiva',
    desc: 'Nesse dia, o branco pertence a ela. Reserve essa cor para que a noiva brilhe sozinha.',
  },
  {
    Icon: LuCamera,
    title: 'Eternize as Memórias',
    desc: 'Registre tudo o que o coração mandar. Fotos e vídeos são testemunhos desse amor.',
  },
  {
    Icon: LuAlarmClock,
    title: 'Pontualidade é Carinho',
    desc: 'A cerimônia começa às 15h30 em ponto. Sua chegada a tempo faz toda a diferença.',
  },
  {
    Icon: LuUserX,
    title: 'Convite é Pessoal',
    desc: 'Cada nome foi escolhido com cuidado. Por favor, não traga acompanhantes não confirmados.',
  },
  {
    Icon: LuChurch,
    title: 'Viva a Cerimônia',
    desc: 'Esteja presente de coração. Esse é um instante único e irrepetível.',
  },
  {
    Icon: LuHeartHandshake,
    title: 'Despeça-se dos Noivos',
    desc: 'Antes de ir, um abraço. Cada despedida desta noite vai guardar um pedacinho do dia.',
  },
]

export default function GuestInfo() {
  return (
    <section id="guide" className="guide">
      <div className="guide__inner">

        <span className="guide__eyebrow" data-aos="fade-up">Etiqueta</span>
        <h2 className="guide__title" data-aos="fade-up" data-aos-delay="100">
          Manual dos Convidados
        </h2>
        <p className="guide__subtitle" data-aos="fade-up" data-aos-delay="180">
          Pequenos gestos que tornam este dia ainda mais especial para todos.
        </p>

        <div className="guide__grid">
          {rules.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="guide__item"
              data-aos="fade-up"
              data-aos-delay={Math.floor(i / 2) * 120}
            >
              <div className="guide__item-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="guide__item-body">
                <strong className="guide__item-title">{title}</strong>
                <span className="guide__item-desc">{desc}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react'
import imgLuaMel      from '../assets/images/Fundo lua de mel.jpg'
import imgRobo        from '../assets/images/Robô aspirador.jpg'
import imgCobertor    from '../assets/images/Kit Cobertor.jpg'
import imgJantar      from '../assets/images/Jantar Romântico.jpg'
import imgVinho       from '../assets/images/Taças de vinho.jpg'
import imgPanela      from '../assets/images/Panela de Pressão.jpg'
import imgStreaming   from '../assets/images/Streaming.jpg'
import imgChocolate   from '../assets/images/Caixa de chocolate.jpg'
import imgFogao       from '../assets/images/Fogao inducao.jpg'
import imgJogo        from '../assets/images/Jogo online.jpg'
import imgSalao       from '../assets/images/Salão de beleza.jpg'
import imgLavagem     from '../assets/images/Kit lavagem.jpg'
import imgCerveja     from '../assets/images/Cerveja.jpg'
import imgTalheres    from '../assets/images/Talheres.jpg'
import imgGasolina    from '../assets/images/CarroAbastcendoV2.jpg'
import imgPassat from '../assets/images/Passat.jpg'
import imgEscritorio from '../assets/images/Escritorio.jpg'
import imgRoupa from '../assets/images/Roupa.jpg'
import imgPassagens from '../assets/images/PassagensAereas.jpg'

const gifts = [
  {
    name: 'Fundo da Lua de Mel',
    desc: 'Para que o casal vá além do quintal e coloque os pés em algum lugar com praia.',
    value: 'R$ 790,00',
    image: imgLuaMel,
    link: null,   
  },
  {
    name: 'Robô Aspirador',
    desc: 'Porque o amor é lindo, mas varrer o chão às 7h da manhã de sábado, nem tanto.',
    value: 'R$ 2.522,00',
    image: imgRobo,
    link: null,
  },
  {
    name: 'Kit Cobertor Extra',
    desc: 'Solução definitiva para a guerra do cobertor. Cada um com o seu. Paz garantida.',
    value: 'R$ 470,00',
    image: imgCobertor,
    link: null,
  },
  {
    name: 'Jantar Romântico',
    desc: 'Para quando a empolgação de cozinhar junto passar e o delivery estiver longe.',
    value: 'R$ 565,00',
    image: imgJantar,
    link: null,
  },
  {
    name: 'Vinho de Qualidade',
    desc: 'Para celebrar as pequenas conquistas do casal e sobreviver às grandes.',
    value: 'R$ 320,00',
    image: imgVinho,
    link: null,
  },
  {
    name: 'Panela de Pressão',
    desc: 'Porque amor também precisa de pressão pra ficar gostoso. Filosofia culinária.',
    value: 'R$ 700,00',
    image: imgPanela,
    link: null,
  },
  {
    name: 'Assinatura de Streaming',
    desc: 'Para os domingos em que "sair de casa" é coisa de pessoas muito animadas.',
    value: 'R$ 390,00',
    image: imgStreaming,
    link: null,
  },
  {
    name: 'Caixa de Chocolates Finos',
    desc: 'Porque briga não tem solução sem chocolate na mesa. Comprovado pela ciência.',
    value: 'R$ 427,00',
    image: imgChocolate,
    link: null,
  },
  {
    name: 'Fogão de Indução',
    desc: 'Para aquele fim de semana onde os dois decidem ser adultos responsáveis.',
    value: 'R$ 281,00',
    image: imgFogao,
    link: null,
  },
  {
    name: 'Fundo pro Daniel gastar com jogo online',
    desc: 'Depois de casado vai ser a única diversão dele.',
    value: 'R$ 520,00',
    image: imgJogo,
    link: null,
  },
  {
    name: 'Ajuda para Brenda ir ao salão toda semana',
    desc: 'Quando ela quiser ter o momento relax dela.',
    value: 'R$ 725,00',
    image: imgSalao,
    link: null,
  },
  {
    name: 'Kit para lavagem do carro',
    desc: 'Daniel tem o hobby de lavar o carro toda semana.',
    value: 'R$ 922,00',
    image: imgLavagem,
    link: null,
  },
  {
    name: 'Cerveja diária do Daniel',
    desc: 'Todo dia esse rapaz gosta de tomar uma pra dormir.',
    value: 'R$ 200,00',
    image: imgCerveja,
    link: null,
  },
  {
    name: 'Kit Talheres',
    desc: 'Eles vão precisar para se alimentar.',
    value: 'R$ 538,00',
    image: imgTalheres,
    link: null,
  },
  {
    name: '1 mês de gasolina livre',
    desc: 'Enquanto não vem o carro elétrico vamos ajudar com gasolina que está barata.',
    value: 'R$ 1.024,00',
    image: imgGasolina,
    link: null,
  },
  {
    name: 'Vaquinha pro Passat',
    desc: 'O Daniel já foi ao detran, já pesquisou seguro, já escolheu a cor e até o cheirinho do banco. Só falta a grana. Ajude a realizar o sonho do futuro marido.',
    value: 'R$ 634,00',
    image: imgPassat,
    link: null,
  },
  {
    name: 'Patrocínio para o casal fazer uma viagem',
    desc: 'Ajuda financeira para o casal curtir a vida em algum lugar do mundão.',
    value: 'R$ 1700,00',
    image: imgPassagens,
    link: null,
  },
  {
    name: 'Renovação do Guarda-roupa da Brenda',
    desc: 'Porque toda mulher merece opções. E a Brenda claramente nunca tem nada para vestir mesmo com o armário cheio. Um clássico da vida a dois.',
    value: 'R$ 326,00',
    image: imgRoupa,
    link: null,
  },
]

const INITIAL_COUNT = 9

export default function Gifts() {
  const [showAll, setShowAll] = useState(false)

  const visibleGifts = showAll ? gifts : gifts.slice(0, INITIAL_COUNT)
  const hasMore = gifts.length > INITIAL_COUNT

  return (
    <section id="gifts" className="gifts">
      <div className="gifts__inner">

        <div className="gifts__header" data-aos="fade-up">
          <span className="gifts__eyebrow">Presentes</span>
          <h2 className="gifts__title">Lista de Presentes</h2>
          <p className="gifts__subtitle">
            Sua presença já é o maior presente, mas se quiser nos dar um empurrãozinho
            para a vida a dois, escolha algo da lista abaixo. Promessa de bom uso.
          </p>
        </div>

        <div className="gifts__grid">
          {visibleGifts.map(({ name, desc, value, image, link }, i) => (
            <div
              key={name}
              className="gifts__card"
              data-aos="zoom-in"
              data-aos-delay={(i % INITIAL_COUNT) * 80}
            >
              <div className="gifts__card-img-wrap">
                {image
                  ? <img src={image} alt={name} className="gifts__card-img" />
                  : <span className="gifts__card-img-placeholder">Foto</span>
                }
              </div>

              <div className="gifts__card-body">
                <h3 className="gifts__card-name">{name}</h3>
                <p className="gifts__card-desc">{desc}</p>
              </div>

              <div className="gifts__card-footer">
                <span className="gifts__card-value">{value}</span>
                {link
                  ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gifts__card-btn"
                    >
                      Presentear
                    </a>
                  ) : (
                    <span className="gifts__card-btn gifts__card-btn--disabled">
                      Presentear
                    </span>
                  )
                }
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="gifts__toggle-wrap">
            <button
              className="gifts__toggle-btn"
              onClick={() => setShowAll(prev => !prev)}
              type="button"
            >
              {showAll ? 'Mostrar menos' : `Mostrar mais presentes (${gifts.length - INITIAL_COUNT})`}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

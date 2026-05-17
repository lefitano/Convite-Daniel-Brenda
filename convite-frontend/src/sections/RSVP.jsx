import { useState, useEffect } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function RSVP() {
  const [fields, setFields] = useState({
    nome: '',
    confirmacao: '',
    acompanhantes: '1',
  })
  const [nomesAcompanhantes, setNomesAcompanhantes] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const saved = localStorage.getItem('rsvp_nome')
    if (saved) {
      setFields(prev => ({ ...prev, nome: saved }))
      setStatus('success')
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'acompanhantes') {
      const count = Math.max(1, parseInt(value, 10) || 1)
      const extras = count - 1
      setNomesAcompanhantes(prev =>
        Array.from({ length: extras }, (_, i) => prev[i] ?? '')
      )
      setFields(prev => ({ ...prev, acompanhantes: String(count) }))
      return
    }

    if (name === 'confirmacao' && value === 'nao') {
      setNomesAcompanhantes([])
      setFields(prev => ({ ...prev, confirmacao: value, acompanhantes: '1' }))
      return
    }

    setFields(prev => ({ ...prev, [name]: value }))
  }

  const handleNomeAcompanhante = (index, value) => {
    setNomesAcompanhantes(prev => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      'form-name': 'rsvp',
      nome: fields.nome,
      confirmacao: fields.confirmacao,
      ...(fields.confirmacao === 'sim' && { acompanhantes: fields.acompanhantes }),
      ...(nomesAcompanhantes.length > 0 && {
        nomes_acompanhantes: nomesAcompanhantes.join(', '),
      }),
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (res.ok) {
        localStorage.setItem('rsvp_nome', fields.nome)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="rsvp" className="rsvp">
        <div className="rsvp__inner">
          <span className="rsvp__eyebrow">Confirmação</span>
          <h2 className="rsvp__title">Confirme sua Presença</h2>
          <div className="rsvp__success" data-aos="fade-up">
            <div className="rsvp__success-icon">♡</div>
            <h3 className="rsvp__success-title">Recebemos sua confirmação!</h3>
            <p className="rsvp__success-text">
              Obrigado, <strong>{fields.nome}</strong>. Daniel e Brenda ficaram muito felizes
              com sua resposta. Nos vemos em breve!
            </p>
          </div>
        </div>
      </section>
    )
  }

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

        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rsvp__form"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <p hidden><input name="bot-field" onChange={handleChange} /></p>

          <div className="rsvp__field">
            <label className="rsvp__label" htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              name="nome"
              className="rsvp__input"
              placeholder="Seu nome"
              value={fields.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rsvp__field">
            <span className="rsvp__label">Você vai comparecer?</span>
            <div className="rsvp__radio-group">
              <label className={`rsvp__radio-label${fields.confirmacao === 'sim' ? ' rsvp__radio-label--active' : ''}`}>
                <input
                  type="radio"
                  name="confirmacao"
                  value="sim"
                  checked={fields.confirmacao === 'sim'}
                  onChange={handleChange}
                  required
                />
                Sim, estarei lá!
              </label>
              <label className={`rsvp__radio-label${fields.confirmacao === 'nao' ? ' rsvp__radio-label--active' : ''}`}>
                <input
                  type="radio"
                  name="confirmacao"
                  value="nao"
                  checked={fields.confirmacao === 'nao'}
                  onChange={handleChange}
                />
                Infelizmente não poderei
              </label>
            </div>
          </div>

          {fields.confirmacao === 'sim' && (
            <>
              <div className="rsvp__field">
                <label className="rsvp__label" htmlFor="acompanhantes">
                  Quantas pessoas incluindo você?
                </label>
                <input
                  id="acompanhantes"
                  type="number"
                  name="acompanhantes"
                  className="rsvp__input rsvp__input--short"
                  min="1"
                  max="10"
                  value={fields.acompanhantes}
                  onChange={handleChange}
                />
              </div>

              {nomesAcompanhantes.length > 0 && (
                <div className="rsvp__field">
                  <span className="rsvp__label">Nome dos acompanhantes</span>
                  <div className="rsvp__companions">
                    {nomesAcompanhantes.map((nome, i) => (
                      <input
                        key={i}
                        type="text"
                        className="rsvp__input"
                        placeholder={`Acompanhante ${i + 1}`}
                        value={nome}
                        onChange={(e) => handleNomeAcompanhante(i, e.target.value)}
                        required
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {status === 'error' && (
            <p className="rsvp__error">
              Algo deu errado. Por favor, tente novamente.
            </p>
          )}

          <button
            type="submit"
            className="rsvp__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando…' : 'Confirmar presença'}
          </button>
        </form>

      </div>
    </section>
  )
}

import logo from '../assets/images/LogoCasamento.jpeg'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">

        <img
          src={logo}
          alt="Brenda & Daniel"
          className="footer__logo"
        />

        <h2 className="footer__names">
          Brenda <span className="footer__amp">&amp;</span> Daniel
        </h2>

        <p className="footer__date">07 de Novembro de 2026</p>

        <div className="footer__divider" aria-hidden="true" />

        <p className="footer__thanks">
          Obrigado por fazer parte da nossa história.
          <br />
        </p>

      </div>

      <p className="footer__credit"> &copy; Desenvolvido por Leonardo Monteiro</p>
    </footer>
  )
}

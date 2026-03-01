export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-logo">
            <i className="bi bi-newspaper"></i> NewsBlog
          </h4>
          <p>Seu portal de notícias confiável e atualizado com as melhores histórias do dia.</p>
        </div>
        <div className="footer-section">
          <h4>Categorias</h4>
          <ul>
            <li><a href="#tech">Tecnologia</a></li>
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#business">Negócios</a></li>
            <li><a href="#sustain">Sustentabilidade</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="#" className="social-link" title="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-link" title="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-link" title="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-link" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} NewsBlog. Todos os direitos reservados. | Desenvolvido por Jonas Marques</p>
      </div>
    </footer>
  )
}

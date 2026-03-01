import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo ao NewsBlog</h1>
        <p className="hero-subtitle">Descubra as histórias mais interessantes do dia</p>
        <Link to="/subscribe" className="hero-button">
          Explorar Agora
        </Link>
      </div>
    </section>
  )
}

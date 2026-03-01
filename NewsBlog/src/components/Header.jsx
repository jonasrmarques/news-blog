import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <i className="bi bi-newspaper logo-icon"></i>
          <span className="logo-text">NewsBlog</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Início</Link>
          <a href="#trending" className="nav-link">Trending</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link to="/subscribe" className="subscribe-btn">Inscrever-se</Link>
        </div>
      </div>
    </header>
  )
}

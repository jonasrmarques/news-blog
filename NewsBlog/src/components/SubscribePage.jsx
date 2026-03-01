import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Footer } from '.'

export const SubscribePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'todos',
    frequency: 'weekly',
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio do formulário
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    
    // Redirecionar após 2 segundos
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <>
      <Header />
      <div className="subscribe-page">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Voltar
        </button>

        <div className="subscribe-container">
        <div className="subscribe-content">
          <h1 className="subscribe-title">Inscreva-se no NewsBlog</h1>
          <p className="subscribe-subtitle">
            Receba as melhores notícias direto na sua caixa de entrada
          </p>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon"><i className="bi bi-check-circle"></i></div>
              <h2>Inscrição Realizada com Sucesso!</h2>
              <p>Obrigado por se inscrever. Você receberá um email de confirmação em breve.</p>
              <p className="redirect-text">Redirecionando para a página inicial...</p>
            </div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoria de Interesse</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="todos">Todas as categorias</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="tech">Tech</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="negocios">Negócios</option>
                  <option value="sustentabilidade">Sustentabilidade</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="frequency">Frequência de Envio</label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="daily">Diariamente</option>
                  <option value="weekly">Semanalmente</option>
                  <option value="monthly">Mensalmente</option>
                </select>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  defaultChecked
                  className="checkbox-input"
                />
                <label htmlFor="consent">
                  Concordo em receber emails de notícias e promoções
                </label>
              </div>

              <button type="submit" className="submit-button">
                Inscrever-se Agora
              </button>
            </form>
          )}

          <div className="subscribe-benefits">
            <h3>Por que se inscrever?</h3>
            <ul>
              <li>Receba as notícias mais relevantes em tempo real</li>
              <li>Personalize suas preferências de tópicos</li>
              <li>Acesso prioritário a conteúdo exclusivo</li>
              <li>Notificações sobre análises aprofundadas</li>
            </ul>
          </div>
        </div>

        <div className="subscribe-visual">
          <div className="visual-box">
            <div className="visual-icon"><i className="bi bi-newspaper"></i></div>
            <p>Fique informado com as melhores notícias</p>
          </div>
          <div className="visual-box">
            <div className="visual-icon"><i className="bi bi-lightning-fill"></i></div>
            <p>Atualizações em tempo real</p>
          </div>
          <div className="visual-box">
            <div className="visual-icon"><i className="bi bi-gift"></i></div>
            <p>Conteúdo exclusivo para inscritos</p>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

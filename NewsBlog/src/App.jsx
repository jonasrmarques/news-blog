import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, SubscribePage, ArticlePage } from './components'
import './styles/Blog.css'

function App() {
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App

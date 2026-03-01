import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const isDarkMode = savedTheme === 'dark'
    setIsDark(isDarkMode)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} title={isDark ? 'Modo claro' : 'Modo escuro'}>
      {isDark ? (
        <i className="bi bi-brightness-high"></i>
      ) : (
        <i className="bi bi-moon"></i>
      )}
    </button>
  )
}

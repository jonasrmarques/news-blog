import { useState, useEffect } from 'react'
import { Display } from './Display'
import { Button } from './Button'
import { AlchemistCircle } from './AlchemistCircle'
import '../styles/Calculator.css'

export const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key

      if (/[0-9]/.test(key)) {
        handleNumberClick(key)
      } else if (key === '.') {
        handleDecimalClick()
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperationClick(key)
      } else if (key === 'Enter' || key === '=') {
        handleEqualsClick()
      } else if (key === 'Backspace') {
        handleBackspace()
      } else if (key === 'Escape') {
        handleClear()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [display, previousValue, operation, waitingForNewValue])

  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num))
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimalClick = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperationClick = (op) => {
    const currentValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = performCalculation(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setWaitingForNewValue(true)
  }

  const performCalculation = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '*':
        return prev * current
      case '/':
        return prev !== 0 ? prev / current : 0
      default:
        return current
    }
  }

  const handleEqualsClick = () => {
    if (previousValue !== null && operation) {
      const currentValue = parseFloat(display)
      const result = performCalculation(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  return (
    <div className="calculator-container">
      <AlchemistCircle />

      <div className="calculator">
        <h1 className="title">⚗️ CALCULADORA ALQUÍMICA ⚗️</h1>

        <Display value={display} />

        <div className="buttons-grid">
          <Button label="C" onClick={handleClear} className="btn-clear" />
          <Button label="←" onClick={handleBackspace} className="btn-operation" />
          <Button label="÷" onClick={() => handleOperationClick('/')} className="btn-operation" />
          <Button label="×" onClick={() => handleOperationClick('*')} className="btn-operation" />

          <Button label="7" onClick={() => handleNumberClick('7')} className="btn-number" />
          <Button label="8" onClick={() => handleNumberClick('8')} className="btn-number" />
          <Button label="9" onClick={() => handleNumberClick('9')} className="btn-number" />
          <Button label="-" onClick={() => handleOperationClick('-')} className="btn-operation" />

          <Button label="4" onClick={() => handleNumberClick('4')} className="btn-number" />
          <Button label="5" onClick={() => handleNumberClick('5')} className="btn-number" />
          <Button label="6" onClick={() => handleNumberClick('6')} className="btn-number" />
          <Button label="+" onClick={() => handleOperationClick('+')} className="btn-operation" />

          <Button label="1" onClick={() => handleNumberClick('1')} className="btn-number" />
          <Button label="2" onClick={() => handleNumberClick('2')} className="btn-number" />
          <Button label="3" onClick={() => handleNumberClick('3')} className="btn-number" />
          <Button label="=" onClick={handleEqualsClick} className="btn-equals" />

          <Button label="0" onClick={() => handleNumberClick('0')} className="btn-zero" />
          <Button label="." onClick={handleDecimalClick} className="btn-number" />
        </div>
      </div>

      <div className="footer">
        <p>Pressione ESC para limpar | Use o teclado para calcular</p>
      </div>
    </div>
  )
}

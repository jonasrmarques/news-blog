export const AlchemistCircle = () => {
  return (
    <div className="alchemist-circle">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon
          points="50,15 85,50 50,85 15,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}

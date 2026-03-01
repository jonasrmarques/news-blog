import PropTypes from 'prop-types'

export const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Button.defaultProps = {
  className: '',
}

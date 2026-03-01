import PropTypes from 'prop-types'

export const Display = ({ value }) => {
  return <div className="display">{value}</div>
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
}

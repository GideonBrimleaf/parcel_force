import PropTypes from 'prop-types'

export function MyButton ({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>
}

MyButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

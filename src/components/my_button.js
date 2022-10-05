import PropTypes from 'prop-types'

export function MyButton ({ onClick }) {
  return <button onClick={onClick}>Push Me</button>
}

MyButton.propTypes = {
  onClick: PropTypes.func
}

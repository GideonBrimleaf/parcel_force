import PropTypes from 'prop-types'

const ApiMessage = ({ message }) => {
  return <p>{message}</p>
}

ApiMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export { ApiMessage }
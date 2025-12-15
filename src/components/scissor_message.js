import PropTypes from 'prop-types'

const ScissorMessage = ({ count }) => {
  if (count > 0) {
    return <p>You got scissored {count} times</p>
  }
}

ScissorMessage.propTypes = {
  count: PropTypes.number
}

export default ScissorMessage

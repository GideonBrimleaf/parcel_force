import PropTypes from 'prop-types'

export function ScissorMessage ({ count }) {
  return <p>You got scissored {count} times</p>
}

ScissorMessage.propTypes = {
  count: PropTypes.number
}

import PropTypes from 'prop-types'

export default function ScissorMessage ({ count }) {
  if (count > 0) {
    return <p>You got scissored {count} times</p>
  }
}

ScissorMessage.propTypes = {
  count: PropTypes.number
}

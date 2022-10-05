import { useState } from 'react'
import { MyButton } from './components/my_button.js'
import { ScissorMessage } from './components/scissor_message.js'

export function App () {
  const [scissorCount, setScissorCount] = useState(0)

  function handleClick () {
    setScissorCount(scissorCount + 1)
  }

  function resetCount () {
    setScissorCount(0)
  }

  return (
    <>
      <h1>Scissor Me Daddy Ass!</h1>
      <MyButton onClick={handleClick} text={'Scissor Me!'}/>
      <br />
      <MyButton onClick={resetCount} text={'Reset'}/>
      <ScissorMessage count={scissorCount} />
    </>
  )
}

import { useState } from 'react'
import { MyButton } from './components/my_button.js'
import { ScissorMessage } from './components/scissor_message.js'

export function App () {
  const [scissorCount, setScissorCount] = useState(0)

  function handleClick () {
    setScissorCount(scissorCount + 1)
  }

  return (
    <>
      <h1>Scissor Me Daddy Ass!</h1>
      <MyButton onClick={handleClick}/>
      <ScissorMessage count={scissorCount} />
    </>
  )
}

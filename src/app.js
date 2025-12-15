import { useState, useEffect } from 'react'
import MyButton from './components/my_button'
import ScissorMessage from './components/scissor_message'
import { ApiMessage } from './components/api_message'

export default function App () {
  const [scissorCount, setScissorCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => { fetchData(scissorCount) }, [scissorCount])

  const incrementScissorCount = () => setScissorCount(scissorCount + 1)
  const resetApp = () => {
    setScissorCount(0)
    setMessage('')
  }

  const fetchData = async (scissorCount) => {
    if (scissorCount === undefined || scissorCount === 0) return

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${scissorCount}`)
    const data = await response.json()
    setMessage(data.title)
  }

  return (
    <>
      <h1>Scissor Me Daddy Ass!</h1>
      <MyButton onClick={incrementScissorCount} text={'Scissor Me!'} />
      <br />
      <MyButton onClick={resetApp} text={'Reset'} />
      <ScissorMessage count={scissorCount} />
      <ApiMessage message={message} />
    </>
  )
}

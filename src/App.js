// Dependencies
import { useEffect, useState } from 'react'

// Styles
import './App.css'

// Components
import Button from './components/Button'
import Container from './components/Container'
import Content from './components/Content'
import Divider from './components/Divider'
import Loading from './components/Loading'
import Title from './components/Title'

// Utilities
import fetchAdvice from './utils/fetchAdvice'

function App() {
  const [id, setId] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAdvice(setLoading, setId, setText)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Title id={id} />
      <Content text={text} />
      <Divider />
      <Button setLoading={setLoading} setId={setId} setText={setText} />
    </Container>
  )
}

export default App

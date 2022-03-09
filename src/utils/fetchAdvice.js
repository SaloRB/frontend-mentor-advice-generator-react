async function fetchAdvice(setLoading, setId, setText) {
  try {
    setLoading(true)
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setId(data.slip.id)
    setText(data.slip.advice)
    setLoading(false)
  } catch (err) {
    console.log(err)
  }
}

export default fetchAdvice

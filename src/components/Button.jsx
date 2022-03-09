// Utilities
import fetchAdvice from '../utils/fetchAdvice'

function Button({ setLoading, setId, setText }) {
  return (
    <button
      onClick={() => fetchAdvice(setLoading, setId, setText)}
      type="button"
    >
      <img src="/assets/images/icon-dice.svg" alt="icon" />
    </button>
  )
}

export default Button

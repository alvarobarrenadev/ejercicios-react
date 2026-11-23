import { useState } from 'react'

const CARACTERES =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?'

const generar = (longitud) =>
  Array.from(crypto.getRandomValues(new Uint32Array(longitud)))
    .map((n) => CARACTERES[n % CARACTERES.length])
    .join('')

function Ejercicio7() {
  const [longitud, setLongitud] = useState('12')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const alGenerar = (e) => {
    e.preventDefault()
    const n = Number(longitud)
    if (longitud.trim() === '' || !Number.isInteger(n) || n < 4) {
      setPassword('')
      return setError('La longitud debe ser mayor o igual a 4.')
    }
    setError('')
    setPassword(generar(n))
  }

  return (
    <div className="stack">
      <form className="form-row" onSubmit={alGenerar}>
        <input
          className="input"
          type="number"
          min="4"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          aria-label="Longitud de la contraseña"
        />
        <button className="btn">Generar contraseña</button>
      </form>

      {error && <p className="mensaje mensaje--error">{error}</p>}
      {password && <p className="password">{password}</p>}
    </div>
  )
}

export default Ejercicio7

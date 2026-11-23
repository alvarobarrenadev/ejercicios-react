import { useState } from 'react'

const OPERACIONES = {
  Sumar: (a, b) => a + b,
  Restar: (a, b) => a - b,
  Multiplicar: (a, b) => a * b,
  Dividir: (a, b) => a / b,
}

function Ejercicio5() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcular = (op) => {
    setResultado(null)
    if (a.trim() === '' || b.trim() === '') return setError('Rellena los dos números.')
    const x = Number(a)
    const y = Number(b)
    if (Number.isNaN(x) || Number.isNaN(y)) return setError('Introduce números válidos.')
    if (op === 'Dividir' && y === 0) return setError('No se puede dividir entre cero.')
    setError('')
    setResultado(OPERACIONES[op](x, y))
  }

  return (
    <div className="stack">
      <div className="form-row">
        <input className="input" type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Número 1" aria-label="Número 1" />
        <input className="input" type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Número 2" aria-label="Número 2" />
      </div>

      <div className="btn-group">
        {Object.keys(OPERACIONES).map((op) => (
          <button key={op} className="btn btn--secondary" onClick={() => calcular(op)}>
            {op}
          </button>
        ))}
      </div>

      {error && <p className="mensaje mensaje--error">{error}</p>}
      {resultado !== null && <p className="display">Resultado: {resultado}</p>}
    </div>
  )
}

export default Ejercicio5

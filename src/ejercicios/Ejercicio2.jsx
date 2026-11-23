import { useState } from 'react'

function Ejercicio2() {
  const [clics, setClics] = useState(0)

  return (
    <div className="stack">
      <p className="display">Clics: {clics}</p>
      <button className="btn" onClick={() => setClics(clics + 1)}>
        Contar clics
      </button>
    </div>
  )
}

export default Ejercicio2

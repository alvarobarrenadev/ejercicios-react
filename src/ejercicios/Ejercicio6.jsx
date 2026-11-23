import { useEffect, useState } from 'react'

const dosDigitos = (n) => String(n).padStart(2, '0')

const formatear = (total) => {
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return `${dosDigitos(h)}:${dosDigitos(m)}:${dosDigitos(s)}`
}

function Ejercicio6() {
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    if (!activo) return
    const id = setInterval(() => setSegundos((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [activo])

  const reiniciar = () => {
    setActivo(false)
    setSegundos(0)
  }

  return (
    <div className="stack">
      <p className="display display--timer">{formatear(segundos)}</p>
      <div className="btn-group">
        <button className="btn" onClick={() => setActivo(true)} disabled={activo}>Iniciar</button>
        <button className="btn btn--secondary" onClick={() => setActivo(false)} disabled={!activo}>Pausar</button>
        <button className="btn btn--danger" onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  )
}

export default Ejercicio6

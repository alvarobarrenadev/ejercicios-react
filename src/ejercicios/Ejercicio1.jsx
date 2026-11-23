import { useEffect, useState } from 'react'

const colorAleatorio = () =>
  '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')

function Ejercicio1() {
  const [color, setColor] = useState(null)

  useEffect(() => {
    if (!color) return
    document.body.style.backgroundColor = color
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [color])

  return (
    <div className="stack">
      <button className="btn" onClick={() => setColor(colorAleatorio())}>
        Cambiar color
      </button>
      <p>Color actual: <code>{color ?? 'por defecto'}</code></p>
    </div>
  )
}

export default Ejercicio1

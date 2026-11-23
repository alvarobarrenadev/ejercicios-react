import { useState } from 'react'

function Ejercicio8() {
  const [texto, setTexto] = useState('')

  const caracteres = texto.replace(/\s/g, '').length
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="stack">
      <textarea
        className="input textarea"
        rows="6"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un párrafo…"
        aria-label="Texto"
      />
      <div className="stats">
        <p><strong>{palabras}</strong> palabras</p>
        <p><strong>{caracteres}</strong> caracteres</p>
      </div>
    </div>
  )
}

export default Ejercicio8

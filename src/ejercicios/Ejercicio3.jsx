import { useState } from 'react'

function Ejercicio3() {
  const [texto, setTexto] = useState('')
  const [items, setItems] = useState([])

  const agregar = (e) => {
    e.preventDefault()
    if (!texto.trim()) return
    setItems([...items, { id: crypto.randomUUID(), texto: texto.trim() }])
    setTexto('')
  }

  const eliminar = (id) => setItems(items.filter((item) => item.id !== id))

  return (
    <div className="stack">
      <form className="form-row" onSubmit={agregar}>
        <input
          className="input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe un elemento"
          aria-label="Nuevo elemento"
        />
        <button className="btn">Agregar</button>
      </form>

      <ul className="lista">
        {items.map((item) => (
          <li key={item.id} className="lista__item">
            <span>{item.texto}</span>
            <button className="btn btn--danger btn--sm" onClick={() => eliminar(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio3

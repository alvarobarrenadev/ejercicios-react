import { useEffect, useState } from 'react'

const CLAVE = 'tareas'

const cargarTareas = () => {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? []
  } catch {
    return []
  }
}

function Ejercicio9() {
  const [tareas, setTareas] = useState(cargarTareas)
  const [texto, setTexto] = useState('')

  useEffect(() => {
    localStorage.setItem(CLAVE, JSON.stringify(tareas))
  }, [tareas])

  const agregar = (e) => {
    e.preventDefault()
    if (!texto.trim()) return
    setTareas([...tareas, { id: crypto.randomUUID(), texto: texto.trim(), completada: false }])
    setTexto('')
  }

  const alternar = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))

  const limpiarCompletadas = () => setTareas(tareas.filter((t) => !t.completada))

  return (
    <div className="stack">
      <form className="form-row" onSubmit={agregar}>
        <input
          className="input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea"
          aria-label="Nueva tarea"
        />
        <button className="btn">Añadir</button>
      </form>

      <ul className="lista">
        {tareas.map((t) => (
          <li key={t.id} className={`lista__item tarea${t.completada ? ' tarea--hecha' : ''}`}>
            <label className="checkbox">
              <input type="checkbox" checked={t.completada} onChange={() => alternar(t.id)} />
              <span>{t.texto}</span>
            </label>
          </li>
        ))}
      </ul>

      <button
        className="btn btn--danger"
        onClick={limpiarCompletadas}
        disabled={!tareas.some((t) => t.completada)}
      >
        Limpiar completadas
      </button>
    </div>
  )
}

export default Ejercicio9

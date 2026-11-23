import { useState } from 'react'

const ANIMALES = ['Perro', 'Gato', 'Pez', 'Caballo', 'Conejo', 'Tortuga', 'Loro', 'Hámster', 'Gallina', 'Vaca']

function Ejercicio4() {
  const [busqueda, setBusqueda] = useState('')

  const filtrados = ANIMALES.filter((animal) =>
    animal.toLowerCase().includes(busqueda.trim().toLowerCase()),
  )

  return (
    <div className="stack">
      <input
        className="input"
        type="search"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar animal…"
        aria-label="Buscar"
      />

      {filtrados.length > 0 ? (
        <ul className="lista">
          {filtrados.map((animal) => (
            <li key={animal} className="lista__item">{animal}</li>
          ))}
        </ul>
      ) : (
        <p className="mensaje">No hay resultados para «{busqueda}».</p>
      )}
    </div>
  )
}

export default Ejercicio4

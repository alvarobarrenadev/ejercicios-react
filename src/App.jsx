import { useEffect, useState } from 'react'
import { ejercicios } from './ejercicios/index.js'
import Home from './pages/Home.jsx'

const rutaActual = () => window.location.hash.replace('#/', '')

function App() {
  const [ruta, setRuta] = useState(rutaActual)

  useEffect(() => {
    const alCambiar = () => setRuta(rutaActual())
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

  const posicion = ejercicios.findIndex((e) => e.id === ruta)
  const ejercicio = ejercicios[posicion]

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href="#/" className="header__logo">Ejercicios React</a>
          {ejercicio && <a href="#/" className="header__back">← Volver al índice</a>}
        </div>
      </header>

      <main className="container main">
        {ejercicio ? (
          <section className="ejercicio">
            <p className="ejercicio__numero">Ejercicio {posicion + 1}</p>
            <h1>{ejercicio.titulo}</h1>
            <div className="ejercicio__card">
              <ejercicio.Componente />
            </div>
          </section>
        ) : (
          <Home />
        )}
      </main>

      <footer className="footer">
        <div className="container">Entrega de ejercicios React - Álvaro Barrena Revilla</div>
      </footer>
    </>
  )
}

export default App

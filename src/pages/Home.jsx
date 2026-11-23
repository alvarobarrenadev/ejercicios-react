import { ejercicios } from '../ejercicios/index.js'

function Home() {
  return (
    <section className="home">
      <h1>Entrega de ejercicios 1</h1>
      <p className="home__lead">
        Nueve ejercicios prácticos de React: estado, eventos, efectos y persistencia con localStorage.
      </p>
      <ol className="home__grid">
        {ejercicios.map(({ id, titulo }, i) => (
          <li key={id}>
            <a href={`#/${id}`} className="home__card">
              <span className="home__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="home__titulo">{titulo}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Home

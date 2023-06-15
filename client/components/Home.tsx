import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="app">
        <h1>Apprendre le Français</h1>
      </div>
      <Link to="/Francais101">
        <button className="main-buttons">Francais 101</button>
      </Link>
      <button className="main-buttons">
        Qu'est-ce que c'est (coming soon)
      </button>
      <button className="main-buttons">Cartes Assorties (coming soon)</button>
      <button className="main-buttons">À propos (coming soon)</button>
    </>
  )
}

export default Home

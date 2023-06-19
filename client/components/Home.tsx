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
      <Link to="/JournalIntime">
        <button className="main-buttons">Journal Intime</button>
      </Link>
      <button className="main-buttons">
        Qu'est-ce que c'est (coming soon)
      </button>
      <Link to="/Apropos">
        <button className="about-button">À propos</button>
      </Link>
    </>
  )
}

export default Home

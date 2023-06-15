import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="app">
        <h1>Apprendre le Français</h1>
      </div>
      <Link to="/Francais101">
        <p className="main-buttons">Francais 101</p>
      </Link>
    </>
  )
}

export default Home

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Diary() {
  return (
    <>
      <div className="app">
        <h1>Journal Intime</h1>
      </div>
      <form>
        <div className="input-boxes">
          <label>
            Français:
            <input type="text"></input>
          </label>
          <label>
            Anglaise:
            <input type="text"></input>
          </label>
          <button className="submit">Ajouter</button>
        </div>
        <div></div>
      </form>

      <div style={{ width: '100%' }}>
        <Link className="link-button" to="/">
          <button className="home-button">Maison</button>
        </Link>
      </div>
    </>
  )
}

export default Diary

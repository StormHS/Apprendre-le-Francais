import { useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className="app">
        <h1>À propos</h1>
      </div>

      <div style={{ width: '100%' }}>
        <Link className="link-button" to="/">
          <button className="home-button">Maison</button>
        </Link>
      </div>
    </>
  )
}

export default About

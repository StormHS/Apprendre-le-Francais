import { useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const linkedUrlLinkedin = `https://www.linkedin.com/in/storm-harris-studdart-803930208/`
  return (
    <>
      <div className="app">
        <h1>À propos</h1>
      </div>

      <div style={{ width: '100%' }}>
        <Link className="link-button" to="/">
          <button className="home-button">Maison</button>
        </Link>
        <div>
          <a href={linkedUrlLinkedin}>LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default About

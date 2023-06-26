import { useState } from 'react'
import { Link } from 'react-router-dom'
import babyPicture from '../Images/babyPicture.jpeg'

function About() {
  const linkedUrlLinkedin = `https://www.linkedin.com/in/storm-harris-studdart-803930208/`
  return (
    <>
      <div className="app">
        <h1>À propos</h1>
      </div>
      <div>
        <img
          className="baby-picture"
          src={babyPicture}
          alt="Storm as a child in France"
        />
      </div>
      <button>
        <a href={linkedUrlLinkedin} className="linkedIn-button">
          LinkedIn
        </a>
      </button>
      <div style={{ width: '100%' }}>
        <Link className="link-button" to="/">
          <button className="home-button">Maison</button>
        </Link>
        <div></div>
      </div>
    </>
  )
}

export default About

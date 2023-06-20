import { useState } from 'react'
import { Link } from 'react-router-dom'

function Diary() {
  const [text, setText] = useState('')
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    console.log('submit', text)
  }
  return (
    <>
      <div className="app">
        <h1>Journal Intime</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-boxes">
          <label>
            Français:
            <input
              type="text"
              name="frenchEntry"
              id="frenchEntry"
              value={text}
              onChange={handleChange}
            />
          </label>
          <label>
            Anglaise:
            <input
              type="text"
              name="englishEntry"
              id="englishEntry"
              value={text}
              onChange={handleChange}
            />
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

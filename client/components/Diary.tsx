import { useState } from 'react'
import { Link } from 'react-router-dom'

function Diary() {
  const [text, setText] = useState('')
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }
  return (
    <>
      <div className="app">
        <h1>Journal Intime</h1>
      </div>

      <form action="/JournalIntime" method="get">
        <div className="input-boxes">
          <label>
            Français:
            <input
              type="text"
              name="Fdiary-entry"
              id="Fdiary-entry"
              value={text}
            />
          </label>
          <label>
            Anglaise:
            <input
              type="text"
              name="Adiary-entry"
              id="Adiary-entry"
              value={text}
              onChange={(handleChange) => {}}
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

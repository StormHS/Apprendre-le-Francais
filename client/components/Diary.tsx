import { useState } from 'react'
import { Link } from 'react-router-dom'

function Diary() {
  const [form, setForm] = useState({ english: '', french: '' })
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // below is where you will eventually sent it to the database
    console.log('submit', form)
    setForm({ english: '', french: '' })
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
              name="french"
              id="frenchEntry"
              value={form.french}
              onChange={handleChange}
            />
          </label>
          <label>
            Anglaise:
            <input
              type="text"
              name="english"
              id="englishEntry"
              value={form.english}
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

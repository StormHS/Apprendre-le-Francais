import { useState } from 'react'
import { Link } from 'react-router-dom'
import Entries from './Entries'
import { addTranslation } from '../apis/translations'
import { useMutation } from '@tanstack/react-query'
import { useTranslationsMutation } from '../hooks/useTranslations'

function Diary() {
  const [form, setForm] = useState({ english: '', french: '' })
  const mutation = useTranslationsMutation(addTranslation)
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // below is where you will eventually sent it to the database
    console.log('submit', form)
    mutation.mutate(form)
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
          {/* {mutation.isSuccess ? <p>tres bien!</p> : null} */}
          {/* // can do the above for is loading or is error */}
        </div>
        <div></div>
      </form>

      <div style={{ width: '100%' }}>
        <Link className="link-button" to="/">
          <button className="home-button">Maison</button>
        </Link>
      </div>
      <Entries />
    </>
  )
}

export default Diary

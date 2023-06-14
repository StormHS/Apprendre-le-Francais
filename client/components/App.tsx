import { useTranslations } from '../hooks/useTranslations'

function App() {
  const { data } = useTranslations()

  return (
    <>
      <div className="app">
        <h1>Apprendre le Francais</h1>
        <ul>
          {data &&
            data.map((translation) => (
              <li key={translation.id}>
                {translation.french}
                {translation.english}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App

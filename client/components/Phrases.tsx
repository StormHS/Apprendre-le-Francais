import { useTranslations } from '../hooks/useTranslations'
import Card from './Card'
import { Link } from 'react-router-dom'

function Phrases() {
  const { data } = useTranslations()

  return (
    <>
      <div className="app">
        <h1>Français 101</h1>

        <ul>
          {data &&
            data.map((translation) => (
              <Card
                key={translation.id}
                english={translation.english}
                french={translation.french}
              />
            ))}
        </ul>
        <div>
          <Link to="/">
            <button className="home-button">Maison</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Phrases

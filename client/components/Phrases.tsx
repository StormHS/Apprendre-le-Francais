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
            <p className="home-button">Maison</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Phrases

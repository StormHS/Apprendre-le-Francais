import { useTranslations } from '../hooks/useTranslations'

export default function Entries() {
  const translations = useTranslations()
  if (translations.isLoading) {
    return <p>loading...</p>
  }
  if (translations.isError) {
    return <p>oh merde</p>
  }
  return (
    <section>
      <h3>Vos Entrées</h3>
      <ul>
        {translations.data.map((translation, i) => (
          <li key={translation.id}>
            <p>{translation.english}</p>
            <p>{translation.french}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

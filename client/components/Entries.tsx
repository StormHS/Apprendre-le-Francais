import { useTranslations } from '../hooks/useTranslations'
import Delete from './Delete'

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
            <p className="entries">{translation.french}</p>
            <p className="entries">{translation.english}</p>
            {/* // the below grabs out delete button function from Delete.tsx and is identifying which translation we are deleting */}
            <Delete id={translation.id} />
            {/*  <button className="delete-button">edit button(Coming Soon - stretch)</button> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

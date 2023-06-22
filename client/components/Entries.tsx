import { useTranslations } from '../hooks/useTranslations'

interface Props {
  translations: string[]
}

export default function Entries({ translations }: Props) {
  return (
    <section>
      Entries
      {/* <ul>
                {translations.map((translation, i) => (
                    <li key{i}>
                        <h3>{translations}</h3>
                    </li>
                ))}
            </ul> */}
    </section>
  )
}

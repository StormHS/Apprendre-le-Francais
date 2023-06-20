interface Props {
    translations: string[]
}

export default function Translation({ translations }: Props) {
    return (
        <section>
            <ul>
                {translations.map((translation, i) => (
                    <li key{i}>
                        <h3>{translations}</h3>
                    </li>
                ))}
            </ul>
        </section>
    )
    }

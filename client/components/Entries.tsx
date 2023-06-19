interface Props {
    entries: string[]
}

function Entries({ entries }: Props) {
    return (
        <section>
            <ul>
                {entries.map((entry, i) => (
                    <li key{i}>
                        <h3>{entry}</h3>
                    </li>
                ))}
            </ul>
        </section>
    )
    }

    export default Entries
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  english: string
  french: string
}

export default function Card(props: Props) {
  console.log(props.english)
  console.log(props.french)
  const [clicked, setClicked] = useState(false)
  function handleClicked() {
    if (clicked) {
      setClicked(false)
    } else if (!clicked) setClicked(true)
  }
  return (
    <>
      <div className="card-button">
        <button onClick={handleClicked}>
          {clicked ? props.english : props.french}
        </button>
      </div>
    </>
  )
}

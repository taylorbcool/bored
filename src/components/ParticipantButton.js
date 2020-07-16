import React from 'react'
import { Link } from 'react-router-dom'

const TypeButton = props => {
  const { participants, partQuery } = props

  return(
    <Link to={`/results`}>
      <button className='option-button' onClick={() => partQuery(participants)}>
        {participants}
      </button>
    </Link>
  )
}

export default TypeButton
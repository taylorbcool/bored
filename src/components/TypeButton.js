import React from 'react'
import { Link } from 'react-router-dom'

const TypeButton = props => {
  const { type, typeQuery } = props

  return(
    <Link to={`/results`}>
      <button className='option-button' onClick={() => typeQuery(type.toLowerCase())}>
        {type}
      </button>
    </Link>
  )
}

export default TypeButton
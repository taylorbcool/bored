import React from 'react'
import { Link } from 'react-router-dom'

const TypeButton = props => {

  return(
    <Link to={`/${props.type}`}>
      <button className='option-button'>
        {props.type}
      </button>
    </Link>
  )
}

export default TypeButton
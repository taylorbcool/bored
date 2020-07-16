import React from 'react'
import { Link } from 'react-router-dom'

const AccessButton = props => {
  const { access, accessQuery } = props

  return(
    <Link to={`/results`}>
      <button className='option-button' onClick={() => accessQuery(access)}>
        {access}
      </button>
    </Link>
  )
}

export default AccessButton
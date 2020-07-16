import React, { useContext } from 'react'
import SearchContext from '../contexts/SearchContext'
import TypeButton from '../components/TypeButton'

const Types = () => {
  const { possibleSearches } = useContext(SearchContext)

  return(
    <div className='container-col'>
      <h1 className='page-title'>
        Types
      </h1>
      <p className='page-text'>
        What type of activity would you like for me to suggest?
      </p>
      <div className='options-container'>
        {possibleSearches.types.map(type => (
          <TypeButton key={type} type={type} />
        ))}
      </div>
    </div>
  )
}

export default Types
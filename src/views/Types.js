import React, { useContext } from 'react'
import axios from 'axios'
import SearchContext from '../contexts/SearchContext'
import TypeButton from '../components/TypeButton'
import ResultsContext from '../contexts/ResultsContext'

const Types = () => {
  const { possibleSearches } = useContext(SearchContext)
  const { setResults } = useContext(ResultsContext)
  
  const typeQuery = (typeClicked) => {
    axios.get(`https://www.boredapi.com/api/activity?type=${typeClicked}`)
      .then(res => {
        setResults(res.data)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }

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
          <TypeButton key={type} type={type} typeQuery={typeQuery} />
        ))}
      </div>
    </div>
  )
}

export default Types
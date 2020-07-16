import React, { useContext } from 'react'
import axios from 'axios'
import SearchContext from '../contexts/SearchContext'
import AccessButton from '../components/AccessButton'
import ResultsContext from '../contexts/ResultsContext'

const Accessibility = () => {
  const { possibleSearches } = useContext(SearchContext)
  const { setResults } = useContext(ResultsContext)

  const accessTable = {
    'Trivial': [0, 0.1],
    'Easy': [0.11, 0.35],
    'Average': [0.36, 0.6],
    'Challenging': [0.61, 0.8],
    'Impossible': [0.81, 1]
  }
  
  const accessQuery = (accessClicked) => {
    axios.get(`http://www.boredapi.com/api/activity?minaccessibility=${accessTable[accessClicked][0]}&maxaccessibility=${accessTable[accessClicked][1]}`)
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
        Difficulty
      </h1>
      <p className='page-text'>
        How difficult of an activity would you like for me to suggest?
      </p>
      <div className='options-container'>
        {possibleSearches.accessibility.map(access => (
          <AccessButton key={access} access={access} accessQuery={accessQuery} />
        ))}
      </div>
    </div>
  )
}

export default Accessibility
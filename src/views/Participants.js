import React, { useContext } from 'react'
import axios from 'axios'
import SearchContext from '../contexts/SearchContext'
import ParticipantButton from '../components/ParticipantButton'
import ResultsContext from '../contexts/ResultsContext'

const Types = () => {
  const { possibleSearches } = useContext(SearchContext)
  const { setResults } = useContext(ResultsContext)
  
  const partQuery = (partClicked) => {
    axios.get(`https://www.boredapi.com/api/activity?participants=${partClicked === '5+' ? 5 : partClicked}`)
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
        Participants
      </h1>
      <p className='page-text'>
        How many people are there to entertain?
      </p>
      <div className='options-container'>
        {possibleSearches.participants.map(number => (
          <ParticipantButton key={number} participants={number} partQuery={partQuery} />
        ))}
      </div>
    </div>
  )
}

export default Types
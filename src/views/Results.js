import React, { useContext } from 'react'
import ResultsContext from '../contexts/ResultsContext'

const Results = () => {
  const { results } = useContext(ResultsContext)

  if(results === {}){
    return(
      <div className='container-col'>
        <div className='page-text'>
          Hmm... I don't have any results for you.
        </div>
        <div className='page-text'>
          Try going back to the home page and searching again.
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-col'>
        <div className='page-text'>
          Your random activity:
        </div>
        <div className='page-title'>
          {results.activity}
        </div>
      </div>
    )
  }
}

export default Results
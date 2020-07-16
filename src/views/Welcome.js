import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ResultsContext from '../contexts/ResultsContext'

const Welcome = () => {
  const { setResults } = useContext(ResultsContext)

  const standardQuery = () => {
    axios.get('https://www.boredapi.com/api/activity/')
      .then(res => {
        // console.log(res.data)
        setResults(res.data)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }

  return(
    <div className='container-col'>
      <h1 className='page-title'>
        Welcome to Bored!
      </h1>
      <p className='page-text'>
        I built this tool to help you find something to do with your time! Press the button below to generate a random activity, or select a search method above.
      </p>
      <Link to='/results'>
        <button className='option-button' onClick={standardQuery}>
          Find
        </button>
      </Link>
    </div>
  )
}

export default Welcome
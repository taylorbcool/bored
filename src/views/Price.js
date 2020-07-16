import React, { useContext } from 'react'
import axios from 'axios'
import SearchContext from '../contexts/SearchContext'
import PriceButton from '../components/PriceButton'
import ResultsContext from '../contexts/ResultsContext'

const Price = () => {
  const { possibleSearches } = useContext(SearchContext)
  const { setResults } = useContext(ResultsContext)

  const priceTable = {
    'Free': [0, 0],
    'Inexpensive': [0, 0.2],
    'Moderately Expensive': [0.21, 0.5],
    'Pretty Expensive': [0.51, 0.75],
    'Quite Expensive': [0.76, 1]
  }
  
  const priceQuery = (priceClicked) => {
    axios.get(`http://www.boredapi.com/api/activity?minprice=${priceTable[priceClicked][0]}&maxprice=${priceTable[priceClicked][1]}`)
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
        Price
      </h1>
      <p className='page-text'>
        How expensive of an activity would you like for me to suggest?
      </p>
      <div className='options-container'>
        {possibleSearches.prices.map(price => (
          <PriceButton key={price} price={price} priceQuery={priceQuery} />
        ))}
      </div>
    </div>
  )
}

export default Price
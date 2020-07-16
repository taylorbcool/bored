import React from 'react'
import { Link } from 'react-router-dom'

const PriceButton = props => {
  const { price, priceQuery } = props

  return(
    <Link to={`/results`}>
      <button className='option-button' onClick={() => priceQuery(price)}>
        {price}
      </button>
    </Link>
  )
}

export default PriceButton
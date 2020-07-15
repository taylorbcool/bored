import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () => {
  return(
    <div className='container-col'>
      <h1 className='page-title'>
        Welcome to Bored!
      </h1>
      <p className='page-text'>
        I built this tool to help you find something to do with your time! Press the button below to generate a random activity, or select a search method above.
      </p>
      <Link to='/types'>
        <button className='option-button'>
          Find
        </button>
      </Link>
    </div>
  )
}

export default Welcome
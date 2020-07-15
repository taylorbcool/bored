import React from 'react'
import { Link } from 'react-router-dom'

const Types = () => {
  return(
    <div className='container-col'>
      <h1 className='page-title'>
        Types
      </h1>
      <p className='page-text'>
        What type of activity would you like for me to suggest?
      </p>
      <div className='options-container'>
        <Link to='/'>
          <button className='option-button'>
            Education
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Recreational
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Social
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Relaxation
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            DIY
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Cooking
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Music
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Busywork
          </button>
        </Link>
        <Link to='/'>
          <button className='option-button'>
            Charity
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Types
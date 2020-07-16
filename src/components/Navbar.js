import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const Navbar = () => {

  return (
    <div className='container'>
      <Link to='/'>
        <div className='back-btn-container'>
          <IoIosArrowBack />
        </div>
      </Link>
      <div className='nav-container'>
        <Link to='/types'>
          <button className='nav-btn'>
            Types
          </button>
        </Link>
        <Link to='/participants'>
          <button className='nav-btn'>
            Participants
          </button>
        </Link>
        <Link to='/price'>
          <button className='nav-btn'>
            Price
          </button>
        </Link>
        <Link to='/difficulty'>
          <button className='nav-btn'>
            Difficulty
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
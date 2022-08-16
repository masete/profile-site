import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='w-full h-full'>
      <img className='hidden sm:block absolute w-full h-[750px] object-cover' 
      src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
          alt='/' />
         <NavBar />
    </div>
 
  )
}

export default Header
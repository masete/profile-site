import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='flex w-full h-full'>
      <img className='hidden sm:block absolute w-full h-[750px] object-cover' 
      src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
          alt='/' />
         <NavBar />
         <div className='absolute top-[50%] flex flex-wrap justify-center'>
            <div className='text-white text-3xl pl-[500px]'>JAVASCRIPT</div>
            <div className='text-white text-3xl pl-[30px]'>PYTHON</div>
         </div>
         
    </div>
 
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='h-20 bg-black/80 rounded text-white absolute top-[10%] rounded border-black block w-[90%] left-[5%] p-6'>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full'>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <Link to='/'>
              <p className='font-bold text-3xl font-signature'>MASETE</p>
            </Link>
            
          </div>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <Link to='/about'>
              <p className='px-6 py-2'>ABOUT</p>
            </Link>

            <Link to='/contact'>
               <p className='px-6 py-2'>CONTACT ME</p>
            </Link>
            
            
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar
import React from 'react'

const NavBar = () => {
  return (
    <nav className='h-20 bg-black/80 rounded text-white absolute top-[15%] rounded border-black block w-[90%] left-[5%] p-6'>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full'>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <p className='font-bold text-3xl'>NICHOLAS MASETE</p>
          </div>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <p className='px-6 py-2'>ABOUT</p>
            <p className='px-6 py-2'>CONTACT ME</p>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar
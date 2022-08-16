import React from 'react'

const NavBar = () => {
  return (
    <nav className='h-16 bg-black/80 border-b rounded b-8 text-white absolute top-[20%] w-full rounded-xl '>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full'>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <p className='font-bold'>hd</p>
          </div>
          <div className='text-center flex items-center align-items cursor-pointer'>
            <p className='px-6 py-2'>hdh</p>
            <p className='px-6 py-2'>dfshjds</p>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar
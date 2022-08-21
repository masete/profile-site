import React from 'react';

const Projects = () => {
  return (
    <>
        <div className='absolute top-[80%]'>
          <div className=''>
            <h1 className='pl-[500px] text-3xl text-bold'>PROJECTS I HAVE BEEN PART OFF</h1>

            <div class="flex items-stretch ...">

              <div className='h-[100px] w-[410px] mx-4 my-6 '>
                      <img className='hidden sm:block absolute w-[400px] h-[200px] border border-gray-400 object-cover rounded-xl' 
              src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
                  alt='/' />
              </div>
              <div className=' h-[100px] w-[410px] mx-4 my-6 self-auto ...'>
              <img className='hidden sm:block absolute w-[400px] h-[200px] rounded-xl border border-gray-400 object-cover' 
              src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
                  alt='/' />
                <p>Second project</p>
                </div>
              <div className='mx-4 my-6 rounded-xl'>
              <img className='hidden sm:block absolute w-[400px] h-[200px] rounded-xl border border-gray-400 object-cover' 
              src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
                  alt='/' />
                <p>third project</p>
                </div>
            </div>
            
          </div>
         

        </div>
        

        
    </>
 
  )
}

export default Projects
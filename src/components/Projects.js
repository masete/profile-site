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
          <p>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>

        </div>
        

        
    </>
 
  )
}

export default Projects
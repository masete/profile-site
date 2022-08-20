import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-black/100 mt-auto w-full h-[50px] absolute top-[100%]'>
          <div className='text-white'>
            <h1 className='text-3xl text-justify pl-[500px] text-bold'>Footer</h1>
            <div className='flex flex-wrap'>
              <div className='w-2/4'>
                <div className='flex flex-wrap'>
                   <div className='w-1/2'>
                    <ul>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                    </ul>
                   </div>
                   <div className='w-1/2'>
                   <ul>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                    </ul>
                   </div>
                </div>
               
                {/* <h3>Filler Links</h3> */}
              </div>
              <div className='w-2/4'>
                <h3>y profile</h3>
                <ul>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                      <li>this that OFF</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Footer
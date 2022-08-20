import React from 'react';
import NavBar from '../components/NavBar';
import Content from './content';

const About = () => {
  return (
    <>
    <div className='w-full h-full'>
        <div className='w-full h-full'>
        <img className='hidden sm:block absolute w-full h-[200px] object-cover' 
        src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg'
            alt='/' />
            <NavBar />
        </div>
        <div className='flex flex-wrap mb-4 justify-center'>
            <div className='w-1/4 absolute top-[50%]'>
                <p>hjskjfkf</p>
            </div>
            <div className='w-3/4 absolute top-[50%]'>
                <p>hjfkhdjkdfjkdf</p>
            </div>
        </div>
        
    </div>
        <Content />
    </>
  )
}

export default About
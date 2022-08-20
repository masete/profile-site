import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        <Header />
        <Projects/>
        {/* <Footer /> */}
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage
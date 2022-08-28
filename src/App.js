import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import About from './pages/About';
// import Contact from './pages/Contact';

export default function App() {
  return (
    <>
    <Header />
    <Projects/>


    <Footer/>
    {/* <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router> */}
    </>
  )
}

// export default App;

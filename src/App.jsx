import React, { useState } from 'react'
import Navbar from './assets/Ui/Navbar'
import MobileMenu from './assets/Ui/MobileMenu';
import Home2 from './assets/Sections/Home2';
import AnimationWaves from './assets/Ui/Animationwaves';
import About from './assets/Sections/About';
import Projects from './assets/Sections/Projects';
import Contact from './assets/Sections/Contact';
import Footer from './assets/Sections/Footer';


function App() {
   
    const[isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
   
     <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

     <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
     <Home2/>
     <AnimationWaves/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
     
      

     
    </>
  )
}

export default App

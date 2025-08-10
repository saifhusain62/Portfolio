import React, { useState } from 'react'
import Navbar from './assets/Ui/Navbar'
import MobileMenu from './assets/Ui/MobileMenu';
import Home2 from './assets/Sections/Home2';


function App() {
   
    const[isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
   
     <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

     <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
     <Home2/>
     
      

     
    </>
  )
}

export default App

import React, { useState } from 'react'
import Navbar from './assets/Ui/Navbar'
import MobileMenu from './assets/Ui/MobileMenu';

function App() {
   
    const[isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='text-3xl font-bold underline'>
     <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

     <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
     
    </div>
  )
}

export default App

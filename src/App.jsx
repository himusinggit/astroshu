import React from 'react'
import Rocket from './components/Rocket.jsx'
import Nav from './components/Nav.jsx'
import Stars from './components/Stars.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function App() {
  useGSAP(() => {
    gsap.from('.welcome', {
      duration: 2,
      opacity: 0,
      x: 150,
      ease: 'power2.out',
    });
    gsap.from('.journey', {
      duration: 2,
      opacity: 0,
      delay:0.2,
      left: 750,
      // delay: 0.5,
      ease: 'power2.out',
    });
    gsap.from('.Instruction', {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 1,
      ease: 'power2.out',
    });

    
  },[]);
  return (
    <div className="space">
      <audio autoPlay>
        <source src="music/background.mp3" type="audio/mpeg" />
      </audio>
      <h1 className='welcome'>Welcome To The</h1>
      <Stars></Stars>
      <Nav></Nav>
      <Rocket></Rocket>
      <h2 className='journey'>Journey</h2>
      <h3 className='Instruction'>Scroll to start</h3>
    </div>
  )
}

export default App

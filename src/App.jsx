import React, { useRef } from 'react'
import Rocket from './components/Rocket.jsx'
import Nav from './components/Nav.jsx'
import Stars from './components/Stars.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Mouse from './components/Mouse.jsx'
function App() {
  const welcome = useRef(null);
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

    welcome.current.addEventListener('mouseenter', () => {

      gsap.to('.welcome', {
        duration: 0.5,
        width: '100%',
          wordSpacing: 20,
        ease: 'linear',
      });
      })
    welcome.current.addEventListener('mouseleave', () => {
      gsap.to('.welcome', {
        duration: 1,
          wordSpacing: 3,
        ease: 'power2.out',
      });
    })
    
    
  },[]);
  return (
    <div className="space">
      <audio autoPlay>
        <source src="music/background.mp3" type="audio/mpeg" />
      </audio>
      <div style={{zIndex:2,width:'100%'}}><h1 ref={welcome} className='welcome'>Welcome To The</h1></div>
      <Stars></Stars>
      <Nav></Nav>
      <Mouse></Mouse>
      <Rocket></Rocket>
      <h2 className='journey'>Journey</h2>
      <h3 className='Instruction'>Scroll to start</h3>
    </div>
  )
}

export default App

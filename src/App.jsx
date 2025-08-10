import React, { useEffect, useRef } from 'react'
import Rocket from './components/Rocket.jsx'
import Nav from './components/Nav.jsx'
import Stars from './components/Stars.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Mouse from './components/Mouse.jsx'
import Permission from './components/Permission.jsx'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animation } from './javascripts/Animation.js'

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
      x:-150,
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
          wordSpacing: 20,
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
  useEffect(() => {animation();

        return () => {
      // 💡 Kill all ScrollTriggers and animations on cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
  

  return (
    <>
      <audio autoPlay>
        <source src="music/background.mp3" type="audio/mpeg" />
      </audio>
    <div className="viewFrame">
      <Nav></Nav>
      <Mouse></Mouse>
      <Rocket></Rocket>
    <Stars></Stars>
    <div className="storyBoard">
    <div className="mercury"></div>
    <div className="space">
      <div className='welcomecover'><h1 ref={welcome} className='welcome'>Welcome To The</h1></div>
      <div className='journeycover'><h2 className='journey'>Journey</h2></div>
      <h3 className='Instruction'>Scroll to start</h3>
    </div>
    </div>
    </div>
   <div className="footer"></div> 
   
    </>
  )
}

export default App

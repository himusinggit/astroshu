import React from 'react'
import Rocket from './components/Rocket.jsx'
import Nav from './components/Nav.jsx'
import Stars from './components/Stars.jsx'
function App() {
  return (
    <div className="space">
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

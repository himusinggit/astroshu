import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Nav() {
    useGSAP(()=>{
        gsap.from('nav .menu h4',{
            opacity:0,
            x:20,
            duration:0.8,
            stagger:-0.1,
        })
    },[])
    return (
        <nav>
            <img className="logo" src="myImages/AstroLogo.png" alt="" />
            <div className="menu">
            <h4>Mercury</h4>
            <h4>Venus</h4>
            <h4>Earth</h4>
            <h4>Mars</h4>
            <h4>Jupiter</h4>
            <h4>Saturn</h4>
            <h4>Uranus</h4>
            <h4>Neptune</h4>
            </div>
        </nav>
    )
}

export default Nav

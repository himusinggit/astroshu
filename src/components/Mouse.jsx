import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Mouse() {
    const mouse = useRef(null);
    const trail = useRef(null);
    const wrap = useRef(null);
    useEffect(() => {
  if (wrap.current) {
    wrap.current.querySelectorAll('.trailets').forEach(el => el.remove());
  }
              for (let i = 0; i < 15; i++) {
        const size = 19 - i; // from 19px down to 5px
        const div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = 'trailets';
        div.style.backgroundColor = 'yellow';
        div.style.borderRadius = '50%';
        div.style.display = 'inline-block';
        div.style.margin = '4px';
        div.style.transform='translate(-50%, -50%)';
        wrap.current.appendChild(div);
      }
    const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    mouse.current.style.transform = `translate(${x}px, ${y}px)`;
    trail.current.style.transform = `translate(${x + 32}px, ${y + 32}px)`;

    gsap.to('.trailets', {
      duration: 0.1,
      x:x+38,
      y:y+18,
      stagger: 0.006,
      ease: 'power2.out',
    });
  };
window.addEventListener('mousemove', handleMouseMove);
    return (() => {
        window.removeEventListener('mousemove', handleMouseMove);
    })
    
    },[])

    return (<div ref={wrap}>
        <div ref = {mouse} className='mouseFollower'></div>
        <div ref={trail} className="trail"></div>
        </div>
    )
}

export default Mouse

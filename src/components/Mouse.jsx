import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Mouse() {
    const mouse = useRef(null);
    useEffect(() => {
            window.addEventListener('mousemove', e => {
        gsap.to(mouse.current, {duration: 3,
            ease: "elastic.out(1,0.3)",
            x: e.clientX+20,
            y: e.clientY+20
        });
    })
    },[])

    return (
        <div ref = {mouse} className='mouseFollower'></div>
    )
}

export default Mouse

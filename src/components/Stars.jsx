import React, { use, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Stars() {
    const starfield = useRef();
    useEffect(() => {
    let canvas= starfield.current;
    let cd = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particleCount=80;
    class particle{
        constructor() {
           this.x=Math.random()*canvas.width;
           this.y=Math.random()*canvas.height;
           this.randomSpeed=0.2;
           this.randomSize=Math.random()*1.2+0.5;
        }
        draw(){
        cd.beginPath();
        cd.fillStyle="white";
        cd.arc(this.x,this.y,this.randomSize,0,Math.PI*2,false);
        cd.fill();
        cd.closePath();
        }
        update(){
            this.draw();
            this.x-=this.randomSpeed;
            if(this.x<0){
                this.x=canvas.width;
            }
        }
        
    }
    let particle1=new particle();
    let allParticles=[];
    for(let i=0;i<particleCount;i++){
        allParticles.push(new particle());
    }
    function animate(){
        requestAnimationFrame(animate);
        cd.clearRect(0,0,canvas.width,canvas.height);
        particle1.update();
        for(let i=0;i<particleCount;i++){
            allParticles[i].update();
        }
        // cd.closePath();
    }
    window.onresize=()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for(let i=0;i<particleCount;i++){
            // allParticles[i].draw();
        }
    }
    animate();
    },[]);
    return (
        <canvas ref={starfield} className="starfield"></canvas>
    )
}

export default Stars;

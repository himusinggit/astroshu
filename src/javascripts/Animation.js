import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".space",
      scroller: "body",        // optional unless you're using a custom scroll container
      start: "0% 0%",
      end: "top -100%",           // defines the scroll length while pinned
      scrub: 2,
      // pin: true,
    //   markers: true
    }
  });

  // Animate welcome out to the left
  tl.to(".welcome", {
    duration: 2,
    opacity: 0,
    x: -150,
    ease: "power2.out",
    delay: 0.2, // delay before starting this animation
  });

  // Animate journey out to the right simultaneously
  tl.to(".journey", {
    duration: 2,
    opacity: 0,
    x: 150,
    ease: "power2.out",
  }, "<");  // start at same time as previous
  tl.to(".Instruction", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1,
    ease: "power2.out"
  }, "<");  // start at same time as previous

    return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    tl.kill(); // also kill the timeline to fully release memory
  };
}
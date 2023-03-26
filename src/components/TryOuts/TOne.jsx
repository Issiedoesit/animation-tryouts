import React, { useEffect } from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Rabbit from './../../assets/media/gifs/Rabbit-with-kisses.gif'





const TOne = () => {

    useEffect(()=>{
      const ctx = gsap.context(()=>{
        var frame_count  = 42,
        offset_value = 100;

      gsap.to(".viewer", {
      backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "+=" + (frame_count * offset_value),
        pin: true,
        scrub: true
      }
});
      })
    }, [])

    return(
      <div className="w-full h-screen">  <img src={Rabbit} className="w-full h-screen" /></div>
    )
}

export default TOne;
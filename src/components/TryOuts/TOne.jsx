import React, { useEffect, useState } from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Rabbit from './../../assets/media/gifs/rabbit-sprite-sheet.png'





const TOne = () => {
  gsap.registerPlugin(ScrollTrigger)

  const [pos, setPos] = useState(0)

    useEffect(()=>{
      // const position = document.querySelector('.rabbit').css('backgroundPosition')
      // setPos(position)

      const ctx = gsap.context(()=>{
        var frame_count  = 42,
        offset_value = 68;

      gsap.to(".viewer", {
      backgroundPosition: (-offset_value * frame_count * 2) + "px 0%",
      ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      // duration:4,
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "+=" + (frame_count * offset_value),
        pin: true,
        scrub: true
      }
});

      })

      return () => ctx.revert()
    }, [])

    return(
      <section>
        <div className="h-screen w-full bg-slate-500 text-4xl flex flex-col item-center justify-center"><p>Start</p>
        <br />
        <p className="pt-4">{pos}</p></div>
        <div class="scene section" id="sticky">
          <div className="w-full h-screen viewer">  
          {/* <img src={Rabbit} className="w-full h-screen rabbit" /> */}
          </div>
        </div>
        <div className="h-screen w-full bg-slate-500 text-4xl flex item-center justify-center">End</div>
      </section>
    )
}

export default TOne;
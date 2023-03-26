import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const [heroAnim, setHeroAnim] = useState(false);

  const boxRef = useRef();

  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroOneAnim = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.hero--bg',
            // markers:true,
            pin: true,
            scrub: 2,
            // endTrigger:".boxes",
            end: '+=10000 top',
            onLeave: () => setHeroAnim(true),
          },
        });

        tl.fromTo(
          '.initial-text',
          { y: 100, opacity: 0, scaleX: 0 },
          { y: 0, opacity: 1, scaleX: 1, duration: 1, stagger: 0.5 }
        );
        tl.to('.cover--all', { y: '-100%', duration: 2 });
        tl.to('.line', { padding: '16px', duration: 1 });
        tl.fromTo(
          '.line',
          { rotate: '45', duration: 1 },
          { rotate: '0', duration: 0.25, repeat: 2, yoyo: true }
        );
        tl.to('.line', { width: '100%', duration: 1 });
        tl.fromTo(
          '.move--down-first',
          { opacity: 0, y: '-100%' },
          { opacity: 1, y: '0%', duration: 1 }
        );
        tl.fromTo(
          '.move--up-first',
          { opacity: 0, y: '100%' },
          { opacity: 1, y: '0%', duration: 1 },
          '-=1'
        );
        tl.to('.line', { height: '200px', duration: 0.75 });
        tl.to('.line', { padding: '0', width: '2px', duration: 0.75 }, '-=.25');
        return tl;
      };

      // const boxesAnim = gsap.to('.box', {
      //   scrollTrigger: {
      //     trigger: '.box',
      //     // markers: true,
      //   },
      //   clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      //   stagger: 0.5,
      // });

      let maxTl = gsap.timeline();
      maxTl.add(heroOneAnim());
      let tl = gsap.timeline({
        scrollTrigger:{
          // markers:true,
          // trigger:".boxes", 
          trigger:".boxes",
          start:"top bottom",
          scrub:true,
          // pin:".boxes",
          // end:`+10000 top`,
          // end:`+=${document.querySelector('.boxes').clientHeight * 4} top`,
        }
      })

      const items = gsap.utils.toArray(".box")
      items.forEach((item, index)=>{
         tl.to(item, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, scrollTrigger:{pin:true, trigger:item,markers:true, scrub:true, toggleActions:"none none none none"} })
      })
      // gsap.to(".one", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, scrollTrigger:{pin:".boxes", trigger:".one",markers:true, scrub:true, toggleActions:"restart none reverse none"} })
      // gsap.to(".two", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, scrollTrigger:{pin:".boxes", trigger:".two", markers:true, scrub:true, toggleActions:"restart none reverse none" } })
      // gsap.to(".three", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, scrollTrigger:{pin:".boxes", trigger:".three", markers:true, scrub:true, toggleActions:"restart none reverse none" } })
      // gsap.to(".four", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, scrollTrigger:{pin:true, trigger:".four", markers:true, scrub:true, toggleActions:"restart none reverse none" } })
      // tl.to(".box",  {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%', stagger:.5})
      // tl.to(".box", {y:0,opacity:1,scaleY:1, stagger:0}, )
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home--wrap">
      {/* <div className="fixed top-0 left-0 bg-blue-500 z-50 p-5">{boxRef.current}</div> */}
      <div className="cover--all fixed top-0 left-0 h-screen w-full bg-black flex flex-col items-center justify-center text-center p z-30">
        <div className="space-y-3">
          <p className="initial-text text-4xl">New Dawn</p>
          <p className="initial-text text-4xl">New Day</p>
          <p className="initial-text text-4xl">New Life</p>
        </div>
      </div>
      <div className="hero--bg min-h-screen py-40 flex flex-col items-center justify-center text-center">
        <div className="z-20">
          <div className="space-y-4 mx-auto">
            <p className="text-7xl font-black move--up move--down-first">
              Hello
            </p>
            <p className="text-xl font-black move--up move--up-first">
              Nice To Meet You
            </p>
          </div>
          <div className="py-5 w-full px-32">
            <div className="line z-10 w-4 mx-auto h-4 bg-white rounded-lg"></div>
          </div>
          <div className="w-full">
            <div className="">
              <div className="space-y-4 mx-auto pb-5">
                <p className="text-7xl font-black move--up move--down-first">
                  Places
                </p>
                <p className="text-xl font-black move--up move--up-first">
                  Let's excite you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-blue-500"></div>

      <div
            className="boxes grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 py-20 text-left"
            ref={boxRef}
          >
            <div className="box one">
              <img
                src="https://images.unsplash.com/photo-1679214110740-15f5ed4d7caa?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk4Mzg1NTY&ixlib=rb-4.0.3&q=85"
                alt="img"
                className="aspect-square"
              />
              <div className="bg-white px-2 py-5 text-black">
                <h3 className="text-xl font-black one-lined-text">
                  Stair way to heaven
                </h3>
                <p className="pt-1 text-sm font-medium">$ 23</p>
              </div>
            </div>
            <div className="box two">
              <img
                src="https://images.unsplash.com/photo-1679349909423-6f5ffad19302?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk4NDA0OTY&ixlib=rb-4.0.3&q=85"
                alt="img"
                className="aspect-square"
              />
              <div className="bg-white px-2 py-5 text-black">
                <h3 className="text-xl font-black one-lined-text">
                  Seaside Escape
                </h3>
                <p className="pt-1 text-sm font-medium">$ 43.87</p>
              </div>
            </div>
            <div className="box three">
              <img
                src="https://images.unsplash.com/photo-1678314530817-68b4966f1b07?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk4NTIyOTA&ixlib=rb-4.0.3&q=85"
                alt="img"
                className="aspect-square"
              />
              <div className="bg-white px-2 py-5 text-black">
                <h3 className="text-xl font-black one-lined-text">
                  Pool Retreat
                </h3>
                <p className="pt-1 text-sm font-medium">$ 23</p>
              </div>
            </div>
            <div className="box four">
              <img
                src="https://images.unsplash.com/photo-1678802676747-308470207d98?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk4NTIzMjU&ixlib=rb-4.0.3&q=85"
                alt="img"
                className="aspect-square"
              />
              <div className="bg-white px-2 py-5 text-black">
                <h3 className="text-xl font-black one-lined-text">
                  Seaside Escape
                </h3>
                <p className="pt-1 text-sm font-medium">$ 43.87</p>
              </div>
            </div>
          </div>


          <div className="h-screen w-full bg-blue-500"></div>

    </div>
  );
};

export default Home;

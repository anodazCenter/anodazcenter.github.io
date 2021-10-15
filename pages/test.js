import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Role from '../component/role'

// gsap.registerPlugin(ScrollTrigger);
// const sections = [
//     {
//       svg: '/images/WEB_Copy.svg'
//     },
//     {
//         svg: '/images/WEB_Beat.svg'
//     },
//     {
//         svg: '/images/WEB_Host.svg'
//     },
//     {
//         svg: '/images/WEB_Sponser.svg'
//     },
//     {
//         svg: '/images/WEB_Pool.svg'
//     },
//     {
//         svg: '/images/WEB_Phase.svg'
//     }
//   ];

export default function test() {
//   const ref = useRef(null);
//   const rr = useRef([]);
//   rr.current =[];


//   const [g, setg] = useState('#ff0000')

//   const TB = () => {
//       const c = g !== '#ff0000' ? '#ff0000' : '#0000ff'
//       setg(c);
//   }

//   useEffect(() => {
//     gsap.from(ref.current, {
//         durations: 1,
//         backgroundColor: g,
//         ease: 'none'
       
//     });
//   }, [g]);

//   useEffect(() => {
//     gsap.from(ref.current, {
//         durations: 5,
//         autoAlpha: 0,
//         ease: 'none',
//         delay: 1
//     });

//     rr.current.forEach((e , i) => {
//         gsap.fromTo(e ,{
//             autoAlpha: 0
//         }, {
//             durations: 1, 
//             autoAlpha: 1, 
//             ease: 'none',
//             scrollTrigger: {
//                 id:`section-${i+1}`,
//                 trigger: e,
//                 duration: 100,
//                 start: 'top center+=100',
//                 toggleActions: 'play none none reverse',
//                 markers: true
//             }
//         });
//     });


//   }, []);


//   const atr = (el) =>{
//       if(el && !rr.current.includes(el)){
//           rr.current.push(el);
//       }
//   };
  return (
    <>
      {/* <header ref={ref} className=' w-screen bg-blue-800 text-white flex flex-col justify-center items-center text-4xl'>
        <h1>5555555555555555</h1>
        <button onClick={() =>TB()}>gggggggggggggggggggggggg</button>

        {
            sections.map(({svg },index) =>{
                return(
                    <div key={index} ref={atr} className=' my-4 w-full '>
                      
                        <img className=' w-full mx-auto ' src={svg}></img>
                    </div>
                )
            })
        }
      </header> */}
        <Role></Role>

    </>
  );
}

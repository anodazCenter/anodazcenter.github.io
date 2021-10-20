import React,{useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Trole from "../component/test_role";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin ,ScrollTrigger)

export default function test() {
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".scroll",
    });
  }, []);

  const godownEnter = ({ currentTarget }) => {
    // let tokendetail = currentTarget.target.value
    console.log(currentTarget);
    gsap.to(currentTarget, {
      scale: 1.1,
      y: 10,
    });
  };

  const godownLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      y: 0,
    });
  };


  
  return (
    <>
     <style > 
        {`
   
    .scroll {
      max-height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
    }

    .panel {
      scroll-snap-align: start;
      height: 100vh;
    }
    
      `}
      </style>
    
        <div
        className="scroll w-full bg-cover bg-bottom bg-no-repeat bg-scroll"
        style={{
          backgroundImage: "url('/images/BG.jpg')",
        }}
      >

        <section   className="panel role">     
          <Trole ></Trole>          
        </section>     
      </div>

    </>
  );
}






  

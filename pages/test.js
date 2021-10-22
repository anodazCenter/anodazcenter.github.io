import React,{useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Role from "../component/role";
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
          backgroundImage: "url('/images/Role_Bg.png')",
        }}
      >

        <section   className="panel role">     
        <div
            className="w-full mb-2 text-center flex justify-center items-center
                    px-4
                    2xl:px-12
                    xl:px-12
                    lg:px-12
                    md:px-4
                    sm:px-4
            "
            style={{ height: "15vh" }}
          >
            <h1
              className="uppercase  font-bold  w-full 
                      text-3xl
                      2xl:text-7xl
                      xl:text-5xl
                      lg:text-6xl
                      md:text-5xl
                      sm:text-5xl
              "
              style={{ color: "rgb(255,132,164)" }}
            >
              role in rhyquiem
            </h1>
           
          </div>
          <Role ></Role>          
        </section>     
      </div>

    </>
  );
}






  

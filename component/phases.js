import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function test_phases() {
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".phasescroll",
    });
  }, []);


  return (
    <>
      <style >
        {`
     
      .phasescroll {
        height: 85vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
      }

      .phasepanel {
        height: 85vh;
        scroll-snap-align: start;
      }
    

      `}
      </style>

      <div
        className="phasescroll w-full py-6 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/images/Role_Bg.png')",
        }}
      >
        {/* phase1 */}
        <section
          className="phasepanel copy flex   w-full phase-1
                             p-4        justify-start
                             2xl:p-24   2xl:justify-center
                             xl:p-12    xl:justify-center
                             lg:p-8     lg:justify-center
                             md:p-4     md:justify-start
                             sm:p-4     sm:justify-start
        "
        >
          <div
            className=" w-5/12 text-right text-white 
                             hidden
                             2xl:block
                             xl:block
                             lg:block
                             md:hidden
                             sm:hidden
          "
          >
            {/* null */}
          </div>

          <div
            className=" px-4   text-white flex justify-center
                            w-3/12
                            2xl:w-1/12
                            xl:w-1/12
                            lg:w-1/12
                            md:w-2/12
                            sm:w-2/12
          "
          >
            <div
              className=" rounded-full bg-black phaseline z-100 relative
                                 w-12           h-12
                                 2xl:w-24       2xl:h-24
                                 xl:w-16        xl:h-16
                                 lg:w-12        lg:h-12
                                 md:w-16        md:h-16
                                 sm:w-16        sm:h-16
                "
              style={{ backgroundColor: "rgb(255,132,164)" }}
            ></div>
          </div>

          <div
            className="  text-white  
                            w-9/12
                            2xl:w-5/12
                            xl:w-5/12
                            lg:w-5/12
                            md:w-10/12
                            sm:w-10/12
          "
          >
            <h1
              className="font-bold  mb-4
                                text-5xl
                                2xl:text-8xl
                                xl:text-7xl
                                lg:text-5xl
                                md:text-7xl
                                sm:text-7xl
            "
            >
              Phase 01
            </h1>
            <div className="pl-12">
              <ul
                className="font-light list-disc 
                                text-2xl
                                2xl:text-6xl
                                xl:text-4xl
                                lg:text-2xl
                                md:text-4xl
                                sm:text-3xl
              "
              >
                <li>Website</li>
                <li>IDO</li>
                <li>NFT Music Collection</li>
              </ul>
            </div>
          </div>
        </section>
        {/* phase2 */}
        <section
          className="phasepanel copy flex   w-full phase-2
                             p-4        justify-start
                             2xl:p-24   2xl:justify-center
                             xl:p-12    xl:justify-center
                             lg:p-8     lg:justify-center
                             md:p-4     md:justify-start
                             sm:p-4     sm:justify-start
        "
        >
          <div
            className=" w-5/12 text-right text-white 
                             hidden
                             2xl:block
                             xl:block
                             lg:block
                             md:hidden
                             sm:hidden
          "
          >
            <h1
              className="font-bold  mb-4
                            text-5xl
                            2xl:text-8xl
                            xl:text-7xl
                            lg:text-5xl
                            md:text-7xl
                            sm:text-7xl
            "
            >
              Phase 02
            </h1>
            <div className="pr-12">
              <ul
                className="font-light list-disc 
                             text-2xl
                             2xl:text-6xl
                             xl:text-4xl
                             lg:text-2xl
                             md:text-4xl
                             sm:text-3xl
              "
                dir="RTL"
              >
                <li>MarketPlace</li>
                <li>Metaverse Fashion NFT</li>
                <li>Avatar Creation</li>
              </ul>
            </div>
          </div>

          <div
            className=" px-4   text-white flex justify-center
                            w-3/12
                            2xl:w-1/12
                            xl:w-1/12
                            lg:w-1/12
                            md:w-2/12
                            sm:w-2/12
          "
          >
            <div
              className=" rounded-full bg-black phaseline z-100 relative
                                 w-12           h-12
                                 2xl:w-24       2xl:h-24
                                 xl:w-16        xl:h-16
                                 lg:w-12        lg:h-12
                                 md:w-16        md:h-16
                                 sm:w-16        sm:h-16
                "
              style={{ backgroundColor: "rgb(255,132,164)" }}
            ></div>
          </div>

          <div
            className="  text-white  
                            w-9/12
                            2xl:w-5/12
                            xl:w-5/12
                            lg:w-5/12
                            md:w-10/12
                            sm:w-10/12
          "
          >
            <h1
              className="font-bold  mb-4
                                text-5xl        block
                                2xl:text-8xl    2xl:hidden
                                xl:text-7xl     xl:hidden
                                lg:text-5xl     lg:hidden
                                md:text-7xl     md:block
                                sm:text-7xl     sm:block
            "
            >
              Phase 02
            </h1>
            <div className="pl-12">
              <ul
                className="font-light list-disc 
                                text-2xl        block
                                2xl:text-6xl    2xl:hidde
                                xl:text-4xl     xl:hidden
                                lg:text-2xl     lg:hidden
                                md:text-4xl     md:block
                                sm:text-3xl     sm:block

              "
              >
                <li>MarketPlace</li>
                <li>Metaverse Fashion NFT</li>
                <li>Avatar Creation</li>
              </ul>
            </div>
          </div>
        </section>
        {/* phase3 */}
        <section
          className="phasepanel copy flex   w-full phase-3
                             p-4        justify-start
                             2xl:p-24   2xl:justify-center
                             xl:p-12    xl:justify-center
                             lg:p-8     lg:justify-center
                             md:p-4     md:justify-start
                             sm:p-4     sm:justify-start
        "
        >
          <div
            className=" w-5/12 text-right text-white 
                             hidden
                             2xl:block
                             xl:block
                             lg:block
                             md:hidden
                             sm:hidden
          "
          >
            {/* null */}
          </div>

          <div
            className=" px-4   text-white flex justify-center
                            w-3/12
                            2xl:w-1/12
                            xl:w-1/12
                            lg:w-1/12
                            md:w-2/12
                            sm:w-2/12
          "
          >
            <div
              className=" rounded-full bg-black phaseline z-100 relative
                                 w-12           h-12
                                 2xl:w-24       2xl:h-24
                                 xl:w-16        xl:h-16
                                 lg:w-12        lg:h-12
                                 md:w-16        md:h-16
                                 sm:w-16        sm:h-16
                "
              style={{ backgroundColor: "rgb(255,132,164)" }}
            ></div>
          </div>

          <div
            className="  text-white  
                            w-9/12
                            2xl:w-5/12
                            xl:w-5/12
                            lg:w-5/12
                            md:w-10/12
                            sm:w-10/12
          "
          >
            <h1
              className="font-bold  mb-4
                                text-5xl
                                2xl:text-8xl
                                xl:text-7xl
                                lg:text-5xl
                                md:text-7xl
                                sm:text-7xl
            "
            >
              Phase 03
            </h1>
            <div className="pl-12">
              <ul
                className="font-light list-disc 
                                text-2xl
                                2xl:text-6xl
                                xl:text-4xl
                                lg:text-2xl
                                md:text-4xl
                                sm:text-3xl
              "
              >
                <li>Engine Note Editor</li>
                <li>Beta Test</li>
                <li>Listen Pool</li>
              </ul>
            </div>
          </div>
        </section>
        {/* phase4 */}
        <section
          className="phasepanel copy flex   w-full phase-4
                             p-4        justify-start
                             2xl:p-24   2xl:justify-center
                             xl:p-12    xl:justify-center
                             lg:p-8     lg:justify-center
                             md:p-4     md:justify-start
                             sm:p-4     sm:justify-start
        "
        >
          <div
            className=" w-5/12 text-right text-white 
                             hidden
                             2xl:block
                             xl:block
                             lg:block
                             md:hidden
                             sm:hidden
          "
          >
            <h1
              className="font-bold  mb-4
                            text-5xl
                            2xl:text-8xl
                            xl:text-7xl
                            lg:text-5xl
                            md:text-7xl
                            sm:text-7xl
            "
            >
              Phase 04
            </h1>
            <div className="pr-12">
              <ul
                className="font-light list-disc 
                             text-2xl
                             2xl:text-6xl
                             xl:text-4xl
                             lg:text-2xl
                             md:text-4xl
                             sm:text-3xl
              "
                dir="RTL"
              >
                <li>Metaverse House</li>
                <li>Furniture NFT</li>
                <li>Governance Event</li>
              </ul>
            </div>
          </div>

          <div
            className=" px-4   text-white flex justify-center
                            w-3/12
                            2xl:w-1/12
                            xl:w-1/12
                            lg:w-1/12
                            md:w-2/12
                            sm:w-2/12
          "
          >
            <div
              className=" rounded-full bg-black phaseline z-100 relative
                                 w-12           h-12
                                 2xl:w-24       2xl:h-24
                                 xl:w-16        xl:h-16
                                 lg:w-12        lg:h-12
                                 md:w-16        md:h-16
                                 sm:w-16        sm:h-16
                "
              style={{ backgroundColor: "rgb(255,132,164)" }}
            ></div>
          </div>

          <div
            className="  text-white  
                            w-9/12
                            2xl:w-5/12
                            xl:w-5/12
                            lg:w-5/12
                            md:w-10/12
                            sm:w-10/12
          "
          >
            <h1
              className="font-bold  mb-4
                                text-5xl        block
                                2xl:text-8xl    2xl:hidden
                                xl:text-7xl     xl:hidden
                                lg:text-5xl     lg:hidden
                                md:text-7xl     md:block
                                sm:text-7xl     sm:block
            "
            >
              Phase 04
            </h1>
            <div className="pl-12">
              <ul
                className="font-light list-disc 
                                text-2xl        block
                                2xl:text-6xl    2xl:hidde
                                xl:text-4xl     xl:hidden
                                lg:text-2xl     lg:hidden
                                md:text-4xl     md:block
                                sm:text-3xl     sm:block

              "
              >
                <li>Metaverse House</li>
                <li>Furniture NFT</li>
                <li>Governance Event</li>
              </ul>
            </div>
          </div>
        </section>
        {/* phase5 */}
        <section
          className="phasepanel copy flex   w-full phase-1
                             p-4        justify-start
                             2xl:p-24   2xl:justify-center
                             xl:p-12    xl:justify-center
                             lg:p-8     lg:justify-center
                             md:p-4     md:justify-start
                             sm:p-4     sm:justify-start
        "
        >
          <div
            className=" w-5/12 text-right text-white 
                             hidden
                             2xl:block
                             xl:block
                             lg:block
                             md:hidden
                             sm:hidden
          "
          >
            {/* null */}
          </div>

          <div
            className=" px-4   text-white flex justify-center
                            w-3/12
                            2xl:w-1/12
                            xl:w-1/12
                            lg:w-1/12
                            md:w-2/12
                            sm:w-2/12
          "
          >
            <div
              className=" rounded-full bg-black  z-100 relative
                                 w-12           h-12
                                 2xl:w-24       2xl:h-24
                                 xl:w-16        xl:h-16
                                 lg:w-12        lg:h-12
                                 md:w-16        md:h-16
                                 sm:w-16        sm:h-16
                "
              style={{ backgroundColor: "rgb(255,132,164)" }}
            ></div>
          </div>

          <div
            className="  text-white  
                            w-9/12
                            2xl:w-5/12
                            xl:w-5/12
                            lg:w-5/12
                            md:w-10/12
                            sm:w-10/12
          "
          >
            <h1
              className="font-bold  mb-4
                                text-5xl
                                2xl:text-8xl
                                xl:text-7xl
                                lg:text-5xl
                                md:text-7xl
                                sm:text-7xl
            "
            >
              Phase 05
            </h1>
            <div className="pl-12">
              <ul
                className="font-light list-disc 
                                text-2xl
                                2xl:text-6xl
                                xl:text-4xl
                                lg:text-2xl
                                md:text-4xl
                                sm:text-3xl
              "
              >
                <li>Praty Club / Band</li>
                <li>New Mode </li>
              </ul>
            </div>
          </div>
        </section>


      
      
      </div>
    </>
  );
}

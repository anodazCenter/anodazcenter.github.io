import React from "react";

export default function header() {
  return (
    <>
      <div className="w-full  pb-4">
        <div className="w-full">
          <img
            className="w-full object-cover object-bottom"
            src="/images/head_logo.png"
            alt=""
            style={{ height: "65vh" }}
          />
        </div>
        <div className="pt-8 mx-auto
                        w-11/12     text-center    
                        2xl:w-8/12  2xl:text-left 
                        xl:w-8/12   xl:text-left  
                        lg:w-10/12  lg:text-left  
                        md:w-11/12  md:text-center
                        sm:w-11/12  sm:text-center
        
        " style={{ height: "35vh" }}>
          <h1
            className="uppercase  font-bold 
                        text-5xl        mb-1
                        2xl:text-7xl    2xl:mb-4
                        xl:text-6xl     xl:mb-4
                        lg:text-5xl     lg:mb-4
                        md:text-5xl     md:mb-4
                        sm:text-5xl     sm:mb-4
            "
            style={{ color: "rgb(255,132,164)" }}
          >
            Rhyquiem
          </h1>
          <p className=' text-white 
                        pl-0        text-center     text-sm
                        2xl:pl-8    2xl:text-left   2xl:text-4xl
                        xl:pl-8     xl:text-left    xl:text-2xl
                        lg:pl-8     lg:text-left    lg:text-2xl
                        md:pl-0     md:text-center  md:text-xl
                        sm:pl-0     sm:text-center  sm:text-xl
          '>
            Ea consectetur adipisicing pariatur velit incididunt mollit velit
            Lorem deserunt aliqua. Consectetur qui consequat labore commodo duis
            deserunt est dolore qui. 
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function vision() {
  return (
    <>
      <div className="w-full flex justify-center items-center h-full
                         flex-col       p-4
                         2xl:flex-row   2xl:p-0
                         xl:flex-row    xl:p-0
                         lg:flex-row    lg:p-0
                         md:flex-col    md:p-4
                         sm:flex-col    sm:p-4
      ">
          <div className='w-2/12 
                         hidden
                         2xl:block
                         xl:block
                         lg:block
                         md:hidden
                         sm:hidden
          '></div>
        <div className=" h-3/5
                        w-full      text-center   
                        2xl:w-4/12  2xl:text-left 
                        xl:w-4/12   xl:text-left  
                        lg:w-4/12   lg:text-left  
                        md:w-full   md:text-center
                        sm:w-full   sm:text-center
        
        ">
          <h1
            className="uppercase text-7xl font-bold mb-4"
            style={{ color: "rgb(255,132,164)" }}
          >
            Vision
          </h1>
          <p className=" text-white 
                          pl-0        text-center     text-lg
                          2xl:pl-8    2xl:text-left   2xl:text-4xl
                          xl:pl-8     xl:text-left    xl:text-3xl
                          lg:pl-8     lg:text-left    lg:text-2xl
                          md:pl-0     md:text-center  md:text-xl
                          sm:pl-0     sm:text-center  sm:text-lg
          ">
            Ea consectetur adipisicing pariatur velit incididunt mollit velit
            Lorem deserunt aliqua. Consectetur qui consequat labore commodo duis
            deserunt est dolore qui.
          </p>
        </div>
        <div className=" relative  h-5/6 
                       w-full       
                       2xl:w-6/12   
                       xl:w-6/12    
                       lg:w-6/12    
                       md:w-full    
                       sm:w-full    
        ">
          <img className='absolute  w-full ' style={{top: '-10%',right: '50px'}}  src="/images/02.png" alt="" />
        </div>
      </div>
    </>
  );
}

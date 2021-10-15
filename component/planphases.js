import React from "react";

export default function planphases() {
  return (
    <>
      <div
        className="pt-4  w-full 
                    px-4      text-center
                    2xl:px-8  2xl:text-right
                    xl:px-8   xl:text-right
                    lg:px-4   lg:text-center
                    md:px-4   md:text-center
                    sm:px-4   sm:text-center
        "
        style={{ color: "rgb(255,132,164)", height: "15vh" }}
      >
        <h1 className=" uppercase  font-bold 
                    text-5xl    
                    2xl:text-7xl
                    xl:text-6xl 
                    lg:text-5xl 
                    md:text-5xl 
                    sm:text-5xl 
        ">Phase</h1>
      </div>
      <div className=" pt-4 w-full flex h-4/5">
        <div className="relative w-full ">
          <img
            className=" absolute top-0 left-0 object-cover object-top"
            src="/images/12.jpg"
            style={{ height: "185vh" }}
          ></img>
        </div>
      </div>
    </>
  );
}

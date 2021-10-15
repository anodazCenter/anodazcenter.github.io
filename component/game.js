import React from "react";

export default function game() {
  return (
    <>
      <div
        className="pt-4  w-full 
                    px-4      text-center
                    2xl:px-8  2xl:text-left
                    xl:px-8   xl:text-left
                    lg:px-4   lg:text-center
                    md:px-4   md:text-center
                    sm:px-4   sm:text-center
        "
        style={{ color: "rgb(255,132,164)" }}
      >
        <h1
          className=" uppercase font-bold
                    text-5xl    
                    2xl:text-7xl
                    xl:text-6xl 
                    lg:text-5xl 
                    md:text-5xl 
                    sm:text-5xl 
        "
        >
          Game Fi
        </h1>
      </div>
      <div
        className="px-8 pt-4 w-full flex justify-center items-center h-4/5
                  flex-col
                  2xl:flex-row
                  xl:flex-row
                  lg:flex-row
                  md:flex-col
                  sm:flex-col
      "
      >
        <div
          className=" text-center text-6xl text-white
                  w-full
                  2xl:w-6/12
                  xl:w-6/12
                  lg:w-6/12
                  md:w-full
                  sm:w-full
        "
        >
          Images or Video
        </div>
        <div
          className=" text-center text-6xl text-white
                  w-full
                  2xl:w-6/12
                  xl:w-6/12
                  lg:w-6/12
                  md:w-full
                  sm:w-full
        "
        >
          Images or Video
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function planphases() {
  return (
    <>
      <div
        className="pt-4 px-8 w-full text-right"
        style={{ color: "rgb(255,132,164)", height: "15vh" }}
      >
        <h1 className=" uppercase text-7xl font-bold">Phase</h1>
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

import React from "react";
import { gsap } from "gsap";

export default function tokenlabel() {
  const onEnter = ({ currentTarget }) => {
    // let tokendetail = currentTarget.target.value
    console.log(currentTarget.id);
    gsap.to(currentTarget.id, {
      opacity: 1,
      xPercent: 0,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(".tokendetail", {
      opacity: 0,
      xPercent: -10,
    });
  };
  return (
    <>
      <div
        id="#reward_pool"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#f9d801" }}
        ></div>
        <p className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Reward pool</p>
      </div>

      <div
        id="#Play_to_Earn"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#f69125" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Play to Earn</p>
      </div>
      <div
        id="#Public_Sale"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#f05f96" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Public Sale</p>
      </div>
      <div
        id="#Private_Sale"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#745ea7" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Private Sale</p>
      </div>
      <div
        id="#Copyright_Holder"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#0481c4" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Copyright Holder</p>
      </div>
      <div
        id="#Party_team"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#2aa8e2" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>3rd Party team</p>
      </div>
      <div
        id="#Core_team"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#75c5ac" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Core team</p>
      </div>
      <div
        id="#Ecosystem_Fund"
        className="my-3 flex items-center cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className=" w-8 h-4 border-2 border-white   mr-2"
          style={{ backgroundColor: "#cee52e" }}
        ></div>
        <p  className='
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        '>Ecosystem Fund</p>
      </div>
    </>
  );
}

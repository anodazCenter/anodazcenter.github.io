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
        <p>Reward pool</p>
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
        <p>Play to Earn</p>
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
        <p>Public Sale</p>
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
        <p>Private Sale</p>
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
        <p>Copyright Holder</p>
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
        <p>3rd Party team</p>
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
        <p>Core team</p>
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
        <p>Ecosystem Fund</p>
      </div>
    </>
  );
}

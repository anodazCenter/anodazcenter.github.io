import React from "react";
import { gsap } from "gsap";

export default function tokenlabel() {
  const onEnter = ({ currentTarget }) => {
    // let tokendetail = currentTarget.target.value
    // console.log(currentTarget.id);
    gsap.to(currentTarget.id, {
      opacity: 1,
      xPercent: 0,
    });

    gsap.to("#default", {
      opacity: 0,
      xPercent: -10,
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
      {/* reward_pool */}
      <div
        id="#reward_pool"
        className="my-0 flex cursor-pointer flex-col"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#f9d801" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Reward pool
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            20%
          </p>
        </div>
      </div>

      {/* Play_to_Earn */}
      <div
        id="#Play_to_Earn"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#f69125" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Play to Earn
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            30%
          </p>
        </div>
      </div>

      {/* Public_Sale */}
      <div
        id="#Public_Sale"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#f05f96" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Public Sale
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            9%
          </p>
        </div>
      </div>

      {/* Private_Sale */}
      <div
        id="#Private_Sale"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#745ea7" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Private Sale
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            3%
          </p>
        </div>
      </div>

      {/* Copyright_Holder */}
      <div
        id="#Copyright_Holder"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#0481c4" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Copyright Holder
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            7%
          </p>
        </div>
      </div>

      {/* Party_team */}
      <div
        id="#Party_team"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#2aa8e2" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            3rd Party team
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            10%
          </p>
        </div>
      </div>

      {/* Core_team */}
      <div
        id="#Core_team"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#75c5ac" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Core team
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            13%
          </p>
        </div>
      </div>

      {/* Ecosystem_Fund */}
      <div
        id="#Ecosystem_Fund"
        className="my-0 flex flex-col cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex  items-center">
          <div
            className=" w-8 h-4 border-2 border-white mr-2 "
            style={{ backgroundColor: "#cee52e" }}
          ></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            Ecosystem Fund
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-8 h-4  mr-2 "></div>
          <p
            className="
            text-base
            2xl:text-4xl
            xl:text-lg
            lg:text-lg
            md:text-lg
            sm:text-base
        "
          >
            8%
          </p>
        </div>
      </div>
    </>
  );
}

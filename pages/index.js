import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../component/header";
import Vision from "../component/vision";
import Role from "../component/role";
import Chart from "../component/chart_pie";
import Tokenlabel from "../component/tokenlabel";
import Tokendetail from "../component/tokendetail";
import Game from "../component/game";
import Planphases from "../component/planphases";

export default function index() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".scroll",
    });
  }, []);

  const gotokenEnter = ({ currentTarget }) => {
    // let tokendetail = currentTarget.target.value
    console.log(currentTarget);
    gsap.to(currentTarget, {
      scale: 1.1,
      y: 10
     
    });
  };

  const gotokenLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      y: 0
    });
  };
  return (
    <>
      <style JSX>
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
          backgroundImage: "url('/images/BG.jpg')",
        }}
      >
        <section className="panel header">
          <Header></Header>
        </section>

        <section className="panel vision">
          <Vision></Vision>
        </section>

        <section className="panel relative role pt-6 flex flex-col justify-end items-center">
          <div
            className="w-full mb-2 text-right
                    pr-4
                    2xl:pr-12
                    xl:pr-12
                    lg:pr-12
                    md:pr-4
                    sm:pr-4
            "
            style={{ height: "18vh" }}
          >
            <h1
              className="uppercase  font-bold mb-4
                      text-5xl
                      2xl:text-7xl
                      xl:text-7xl
                      lg:text-7xl
                      md:text-5xl
                      sm:text-5xl
              "
              style={{ color: "rgb(255,132,164)" }}
            >
              role in
            </h1>
            <h1
              className="uppercase font-bold mb-4
                      text-5xl
                      2xl:text-7xl
                      xl:text-7xl
                      lg:text-7xl
                      md:text-5xl
                      sm:text-5xl
              "
              style={{ color: "rgb(255,132,164)" }}
            >
              rhyquiem
            </h1>
          </div>
          <Role></Role>
          <div className="absolute bottom-4 w-full flex flex-col justify-center items-center">
            <div
              className="cursor-pointer "
              onMouseEnter={gotokenEnter}
              onMouseLeave={gotokenLeave}
            >
              <p
                type="button"
                className=" uppercase  text-xl text-white font-light mx-auto"
              >
                tokennomics
              </p>
              <a href="#tokennomic">
                <img
                  className="w-20 h-20 transform rotate-90 cursor-pointer mx-auto"
                  src="/images/arrow-right.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>

        <section
          id="tokennomic"
          class="panel tokennomic flex flex-col justify-center items-start"
        >
          <div
            className="pt-4 w-full text-center"
            style={{ color: "rgb(255,132,164)" }}
          >
            <h1 className=" uppercase text-7xl font-bold">tokennomics</h1>
          </div>
          <div
            className="w-full px-14 flex justify-center items-center"
            style={{ height: "80vh" }}
          >
            <div className="w-4/12">
              <Chart></Chart>
            </div>
            <div className="w-2/12 text-white text-xl pl-4">
              <Tokenlabel></Tokenlabel>
            </div>
            <div className="w-6/12 py-8 px-12 h-4/5">
              <div className="relative top-0 left-0 w-full  ">
                <Tokendetail></Tokendetail>
              </div>
            </div>
          </div>
        </section>

        <section className="panel Game">
          <Game></Game>
        </section>
        <section className="panel Plane">
          <Planphases></Planphases>
        </section>
        <section className="panel Plane2"></section>
      </div>

      {/* <Role></Role> */}
    </>
  );
}

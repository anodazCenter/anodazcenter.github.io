import React, { useEffect } from "react";
import Chart from "../component/chart_pie";
import Tokenlabel from "./tokenlabel";
import Tokendetail from "./tokendetail";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function role() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".rolescroll",
    });
  }, []);

  return (
    <>
      <style JSX>
        {`
     
      .rolescroll {
        height: 75vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
      }

      .rolepanel {
        height: 75vh;
        scroll-snap-align: start;
      }
    

      `}
      </style>

      <div
        className="rolescroll w-full py-6 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/images/Role_Bg.png')",
        }}
      >
        <section className="rolepanel copy flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/04.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel beat flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/05.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel host flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/07.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel host2 flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/08.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel host3 flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/09.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel listen flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/10.png"></img>
            </div>
          </div>
        </section>

        <section className="rolepanel listen2 flex justify-center items-center w-full">
          <div
            className="py-4 rounded-2xl w-8/12 flex flex-col justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <div>
              <img className="w-full" src="/images/11.png"></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

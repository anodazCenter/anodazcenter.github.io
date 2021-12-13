import React from "react";

export default function index() {
 
  return (
    <>
      <style>
        {`
        .btn-shadow{
          box-shadow: 5px 20px 15px -2px rgba(0,0,0,0.5);
        }
        .ping-down-shadow{
          box-shadow: 0px 34px 34px 0px rgba(0,0,0,0.5);
        }

        .btn-hover:hover{
          background-color: #1f1f1f !important;
          border: solid 2px  #ffffff !important; 
        }
        `}
      </style>
      {/* navbar tailwind react */}
      <div
        className="h-screen w-full bg-cover bg-no-repeat bg-left-top  relative z-10 "
        style={{
          backgroundImage: "url('/images/BG.png')",
          backgroundColor: "#1d1d1d",
        }}
      >
        <img
          className="absolute  left-0 w-full
                    top-0        block
                    2xl:-top-4    2xl:block
                    xl:-top-4     xl:block
                    lg:-top-4     lg:block
                    md:-top-4     md:block
                    sm:top-0     sm:block
          "
          src="/images/Nav_bar.png"
          alt=""
        />
        {/* header */}
        <div className="relative w-full h-screen overflow-y-hidden ping-down-shadow">
          <img
            className=" absolute  -left-4   
                    top-10        w-1/2        hidden
                    2xl:top-10    2xl:w-1/2   2xl:block
                    xl:top-10     xl:w-1/2    xl:block
                    lg:top-16     lg:w-3/5    lg:block
                    md:top-64     md:w-full   md:hidden
                    sm:top-10     sm:w-3/4    sm:hidden
            "
            src="/images/kenshiro.png"
            alt=""
          />
          <div className="flex flex-wrap   mx-auto    
                pt-10       w-full
                2xl:pt-28   2xl:w-10/12
                xl:pt-20    xl:w-10/12
                lg:pt-20    lg:w-10/12
                md:pt-16    md:w-full
                sm:pt-16    sm:w-full
          ">
            <div className=" relative
                    w-1/2
                    2xl:w-1/2
                    xl:w-1/2
                    lg:w-1/2
                    md:w-full
                    sm:w-full
            " style={{
              overflowX: 'clip'
            }}>
              <img
                className="absolute   w-full 
                 top-0      right-0         hidden
                 2xl:top-0  2xl:right-0     2xl:block
                 xl:top-0   xl:right-0      xl:block
                 lg:top-0   lg:right-0      lg:block
                 md:top-72  md:-right-36    md:block
                 sm:top-24  sm:-right-48    sm:hidden
                "
                src="/images/02.png"
                alt=""
              />
            </div>

            <div className=" flex flex-col justify-start items-center 
                    pt-10       w-full
                    2xl:pt-32   2xl:w-1/2
                    xl:pt-16    xl:w-1/2
                    lg:pt-20    lg:w-1/2
                    md:pt-16    md:w-full
                    sm:pt-16    sm:w-full
            ">
              <img
                className="w-8/12 
                mb-2
                2xl:mb-8
                xl:mb-6
                lg:mb-6
                md:mb-6
                sm:mb-2
                "
                src="/images/RQ_TextLogo.png"
                alt=""
              />
              <p className="text-white px-8
                  text-xl         text-center
                  2xl:text-4xl    2xl:text-left
                  xl:text-2xl     xl:text-left
                  lg:text-xl      lg:text-left
                  md:text-3xl      md:text-center
                  sm:text-xl      sm:text-center
              ">
                Song rhythm, streaming, Social community networking
              </p>
            </div>
            <img
              className="absolute  left-0 w-full 
                      bottom-0
                      2xl:-bottom-24
                      xl:-bottom-20
                      lg:-bottom-12
                      md:bottom-0
                      sm:-bottom-0
              "
              src="/images/Ping_down_01.png"
              alt=""
            />
          </div>

          <div className="absolute  left-0 w-full flex justify-center  
                  bottom-20
                  2xl:bottom-16
                  xl:bottom-10
                  lg:bottom-10
                  md:bottom-10
                  sm:bottom-12
          ">
            <div className=" flex justify-around 
                      w-10/12        flex-col
                      2xl:w-10/12   2xl:flex-row
                      xl:w-11/12    xl:flex-row
                      lg:w-11/12    lg:flex-row
                      md:w-full     md:flex-row
                      sm:w-full     sm:flex-col
            ">
              <button
                className="btn-hover text-white  font-extralight   rounded-xl uppercase    btn-shadow  
                      text-2xl       py-2       px-4          w-3/4       mx-auto
                      2xl:text-5xl  2xl:py-4    2xl:px-12     2xl:w-1/4   2xl:mx-4
                      xl:text-3xl   xl:py-2     xl:px-12      xl:w-1/4    xl:mx-4
                      lg:text-xl   lg:py-2      lg:px-12      lg:w-1/4    lg:mx-4
                      md:text-xl   md:py-2      md:px-4       md:w-1/4    md:mx-4
                      sm:text-2xl   sm:py-2     sm:px-4       sm:w-3/4    sm:mx-auto
                "
                style={{
                  backgroundColor: "#101010",
                  border: 'solid 2px transparent' 
                }}
                type="button"
              >
                Whitelist
              </button>
              <button
                className="btn-hover text-white  font-extralight   rounded-xl uppercase    btn-shadow 
                      text-2xl       py-2       px-4          w-3/4       mx-auto
                      2xl:text-5xl  2xl:py-4    2xl:px-12     2xl:w-1/4   2xl:mx-4
                      xl:text-3xl   xl:py-2     xl:px-12      xl:w-1/4    xl:mx-4
                      lg:text-xl   lg:py-2      lg:px-12      lg:w-1/4    lg:mx-4
                      md:text-xl   md:py-2      md:px-4       md:w-1/4    md:mx-4
                      sm:text-2xl   sm:py-2     sm:px-4       sm:w-3/4    sm:mx-auto
                "
                style={{
                  backgroundColor: "#101010",
                  border: 'solid 2px transparent' 
                }}
                type="button"
              >
                Whitepaper
              </button>
              <button
                className="btn-hover text-white  font-extralight   rounded-xl uppercase    btn-shadow 
                      text-2xl       py-2       px-4          w-3/4       mx-auto
                      2xl:text-5xl  2xl:py-4    2xl:px-12     2xl:w-1/4   2xl:mx-4
                      xl:text-3xl   xl:py-2     xl:px-12      xl:w-1/4    xl:mx-4
                      lg:text-xl   lg:py-2      lg:px-12      lg:w-1/4    lg:mx-4
                      md:text-xl   md:py-2      md:px-4       md:w-1/4    md:mx-4
                      sm:text-2xl   sm:py-2     sm:px-4       sm:w-3/4    sm:mx-auto
                "
                style={{
                  backgroundColor: "#101010",
                  border: 'solid 2px transparent' 
                }}
                type="button"
              >
                Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full relative "
        style={{
          backgroundColor: "#101010",
        }}
      >
        <img
          className="w-full absolute 
              top-0
              2xl:-top-10
              xl:-top-6
              lg:-top-6
              md:-top-4
              sm:top-0
          "
          src="/images/Ping_down_02.png"
          alt=""
        />
        <div className=" w-full flex flex-col justify-center items-center  text-white
              pt-24
              2xl:pt-48
              xl:pt-48
              lg:pt-36
              md:pt-24
              sm:pt-24
        ">
          <h1 className="font-bold  mb-6
                  text-5xl
                  2xl:text-7xl
                  xl:text-7xl
                  lg:text-5xl
                  md:text-5xl
                  sm:text-5xl
          ">Our Vision</h1>
          <p className="  text-center 
                text-lg         w-full        px-2
                2xl:text-3xl    2xl:w-1/2     2xl:px-4
                xl:text-3xl     xl:w-1/2      xl:px-4
                lg:text-2xl     lg:w-1/2      lg:px-4
                md:text-xl      md:w-full     md:px-4
                sm:text-xl      sm:w-full     sm:px-2
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis labore corporis aliquid id tempore delectus voluptatum
            fugit ratione voluptatibus incidunt. Repudiandae reprehenderit
            similique deserunt, unde illum explicabo rem officia assumenda.
          </p>
        </div>

        <div className="  flex  items-center  text-white mx-auto
                flex-col        justify-center        mt-24       w-10/12
                2xl:flex-row    2xl:justify-between   2xl:mt-56   2xl:w-8/12
                xl:flex-row     xl:justify-between    xl:mt-56    xl:w-8/12
                lg:flex-row     lg:justify-between    lg:mt-36    lg:w-10/12
                md:flex-col     md:justify-center     md:mt-36    md:w-10/12
                sm:flex-col     sm:justify-center     sm:mt-24    sm:w-10/12
        ">
          <div className="  mb-2 
                w-full
                2xl:w-1/2
                xl:w-1/2
                lg:w-1/2
                md:w-full
                sm:w-full
          ">
            <img src="/images/Object.png" alt="" />
          </div>

          <div className="   
                w-full      px-0
                2xl:w-1/2   2xl:px-8
                xl:w-1/2    xl:px-8
                lg:w-1/2    lg:px-8
                md:w-full   md:px-4
                sm:w-full   sm:px-0
          ">
            <h1 className="font-bold  mb-6 
                  text-center       text-3xl
                  2xl:text-right    2xl:text-5xl
                  xl:text-right     xl:text-5xl
                  lg:text-right     lg:text-3xl
                  md:text-center    md:text-3xl
                  sm:text-center    sm:text-3xl
            ">Listen Node</h1>
            <p className="  pr-4 
                  text-center       text-lg
                  2xl:text-left     2xl:text-2xl
                  xl:text-left      xl:text-2xl
                  lg:text-left      lg:text-2xl
                  md:text-center    md:text-xl
                  sm:text-center    sm:text-xl
            ">
              Users can enter the Listening Node to listen to music that Copyright holders, 
              Clubs, and Bands have published on Streami-fi by staking a specific amount of SMF to have it added to the Listening Node Playlist. 
              Streami-fi will pay listening users with SMF tokens.
            </p>
          </div>
        </div>

         <div className="  flex  items-center  text-white mx-auto
                flex-col        justify-center        mt-24       w-10/12
                2xl:flex-row    2xl:justify-between   2xl:mt-56   2xl:w-8/12
                xl:flex-row     xl:justify-between    xl:mt-56    xl:w-8/12
                lg:flex-row     lg:justify-between    lg:mt-36    lg:w-8/12
                md:flex-col     md:justify-center     md:mt-36    md:w-10/12
                sm:flex-col     sm:justify-center     sm:mt-24    sm:w-10/12
        ">

          <div className="
                  w-full      px-0
                  2xl:w-1/2   2xl:px-8
                  xl:w-1/2    xl:px-8
                  lg:w-1/2    lg:px-8
                  md:w-full   md:px-4
                  sm:w-full   sm:px-0
          ">
          <h1 className="font-bold  mb-6 
                   text-center       text-3xl
                   2xl:text-right    2xl:text-5xl
                   xl:text-right     xl:text-5xl
                   lg:text-right     lg:text-5xl
                   md:text-center    md:text-3xl
                   sm:text-center    sm:text-3xl
            ">braroncica</h1>
            <p className=" pr-4 
                 text-center       text-lg
                 2xl:text-left     2xl:text-2xl
                 xl:text-left      xl:text-2xl
                 lg:text-left      lg:text-2xl
                 md:text-center    md:text-xl
                 sm:text-center    sm:text-xl
            ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore corporis aliquid id tempore delectus
              voluptatum fugit ratione voluptatibus incidunt.
            </p>
          </div>
          <div className=" mt-2
               w-full
               2xl:w-1/2
               xl:w-1/2
               lg:w-1/2
               md:w-full
               sm:w-full
          ">
            <img src="/images/interface.jpg" alt="" />
          </div>
        </div>

        <div className=" w-10/12 flex justify-between items-center text-white mx-auto
                    mt-24    
                    2xl:mt-56
                    xl:mt-56 
                    lg:mt-36 
                    md:mt-36 
                    sm:mt-24 
        ">
          <img className="w-full" src="/images/Tokenomic.png" alt="" />
        </div>

        <div className="">
          <img className='w-full' src="/images/Nav_bar_down.png" alt="" />
        </div>
      </div>

      {/*  --------------------------------------------------------------------------------------------------- contact  sticky*/}
      <div className=" fixed   bottom-0 right-0 p-4  flex-col justify-end items-end z-50 
            hidden
            2xl:flex
            xl:flex
            lg:flex
            md:hidden
            sm:hidden
      
      ">
        {/* discord */}
        <img
          className="  cursor-pointer rounded-full btn-shadow btn-hover
                w-16
                2xl:w-16
                xl:w-10
                lg:w-10
                md:w-10
                sm:w-10
          "
          src="/images/discord.png"
          alt=""
        />
        {/* twitter */}
        <img
          className=" my-2 cursor-pointer rounded-full btn-shadow btn-hover
                  w-16
                  2xl:w-16
                  xl:w-10
                  lg:w-10
                  md:w-10
                  sm:w-10
          "
          src="/images/twitter.png"
          alt=""
        />
        {/* telegram */}
        <img
          className=" cursor-pointer rounded-full btn-shadow btn-hover
                  w-16
                  2xl:w-16
                  xl:w-10
                  lg:w-10
                  md:w-10
                  sm:w-10
          "
          src="/images/telegram.png"
          alt=""
        />
      </div>

    </>
  );
}

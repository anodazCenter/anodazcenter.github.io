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
        `}
      </style>
      {/* navbar tailwind react */}
      <div
        className="min-h-screen min-w-full bg-cover bg-no-repeat bg-left-top  relative z-10"
        style={{
          backgroundImage: "url('/images/BG.png')",
          backgroundColor: "#1d1d1d",
        }}
      >
        <img
          className="absolute -top-4 left-0 w-full"
          src="/images/Nav_bar.png"
          alt=""
        />

        {/* header */}
        <div className="relative w-full h-screen overflow-y-hidden ping-down-shadow">
          <img
            className=" absolute top-10 -left-4 w-1/2  "
            src="/images/kenshiro.png"
            alt=""
          />
          <div className="flex flex-wrap w-10/12  mx-auto pt-28   ">
            <div className="w-1/2 relative">
              <img
                className="absolute top-0 right-0 w-full "
                src="/images/02.png"
                alt=""
              />
            </div>
            <div className="w-1/2 flex flex-col justify-start items-center pt-32">
              <img
                className="w-8/12 mb-8"
                src="/images/RQ_TextLogo.png"
                alt=""
              />
              <p className="text-white text-4xl">
                Consequat dolore id in aliqua. Adipisicing consectetur officia
                ex quis reprehenderit aliqua elit.
              </p>
            </div>
            <img
              className="absolute -bottom-24 left-0 w-full "
              src="/images/Ping_down_01.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-16 left-0 w-full flex justify-center  ">
            <div className="w-10/12 flex justify-around">
              <button
                className=" text-white text-5xl font-extralight py-4 px-12 rounded-xl uppercase   mx-4 btn-shadow w-1/4"
                style={{
                  backgroundColor: "#101010",
                }}
                type="button"
              >
                Whitelist
              </button>
              <button
                className=" text-white text-5xl font-extralight py-4 px-12 rounded-xl uppercase w-1/4  mx-4 btn-shadow"
                style={{
                  backgroundColor: "#101010",
                }}
                type="button"
              >
                Whitepaper
              </button>
              <button
                className=" text-white text-5xl font-extralight py-4 px-12 rounded-xl uppercase  w-1/4 mx-4 btn-shadow "
                style={{
                  backgroundColor: "#101010",
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
          className="w-full absolute -top-10"
          src="/images/Ping_down_02.png"
          alt=""
        />
        <div className=" w-full flex flex-col justify-center items-center pt-48 text-white">
          <h1 className="font-bold text-7xl mb-6">Our Vision</h1>
          <p className="w-1/2 text-3xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis labore corporis aliquid id tempore delectus voluptatum
            fugit ratione voluptatibus incidunt. Repudiandae reprehenderit
            similique deserunt, unde illum explicabo rem officia assumenda.
          </p>
        </div>

        <div className=" w-8/12 flex justify-between items-center mt-56 text-white mx-auto">
          <div className="w-1/2   ">
            <img src="/images/Object.png" alt="" />
          </div>

          <div className="w-1/2 px-8  ">
            <h1 className="font-bold text-5xl mb-6 text-right">braroncica</h1>
            <p className=" text-2xl pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore corporis aliquid id tempore delectus
              voluptatum fugit ratione voluptatibus incidunt.
            </p>
          </div>
        </div>

        <div className=" w-8/12 flex justify-between items-start mt-56 text-white mx-auto">
          <div className="w-1/2 px-8  ">
            <h1 className="font-bold text-5xl mb-6 text-right">braroncica</h1>
            <p className=" text-2xl pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore corporis aliquid id tempore delectus
              voluptatum fugit ratione voluptatibus incidunt.
            </p>
          </div>
          <div className="w-1/2 ">
            <img src="/images/interface.jpg" alt="" />
          </div>
        </div>

        <div className=" w-10/12 flex justify-between items-center mt-16  text-white mx-auto">
          <img className="w-full" src="/images/Tokenomic.png" alt="" /> 
        </div>

        <div className="">
          <img className='w-full' src="/images/Nav_bar_down.png" alt="" />
        </div>
      </div>

      {/*  --------------------------------------------------------------------------------------------------- contact  sticky*/}
      <div className=" fixed   bottom-0 right-0 p-4  flex flex-col justify-end items-end z-50">
        {/* discord */}
        <img
          className="w-16  cursor-pointer rounded-full btn-shadow"
          src="/images/discord.png"
          alt=""
        />
        {/* twitter */}
        <img
          className="w-16 my-2 cursor-pointer rounded-full btn-shadow"
          src="/images/twitter.png"
          alt=""
        />
        {/* telegram */}
        <img
          className="w-16 cursor-pointer rounded-full btn-shadow"
          src="/images/telegram.png"
          alt=""
        />
      </div>
    </>
  );
}

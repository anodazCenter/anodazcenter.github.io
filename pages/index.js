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
        className="min-h-screen min-w-full bg-cover bg-no-repeat bg-left-top  relative"
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
          <div className="absolute bottom-16 left-0 w-full flex justify-center ">
            <button
              className=" text-white text-5xl font-extralight py-4 px-12 rounded-xl uppercase  w-96 mx-4 btn-shadow"
              style={{
                backgroundColor: "#1d1d1d",
              }}
              type="button"
            >
              Whitepaper
            </button>

            <button
              className=" text-white text-5xl font-extralight py-4 px-12 rounded-xl uppercase  w-96 mx-4 btn-shadow"
              style={{
                backgroundColor: "#1d1d1d",
              }}
              type="button"
            >
              Discord
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-screen relative " 
      style={{
        backgroundColor: '#1d1d1d',
        zIndex:'-10'
      }}
      ></div>

      {/*  --------------------------------------------------------------------------------------------------- contact  sticky*/}
      <div className=" fixed   bottom-0 right-0 p-4  flex flex-col justify-end items-end">
        {/* discord */}
        <img className="w-16" src="/images/discord.png" alt="" />
        {/* twitter */}
        <img className="w-16 my-2" src="/images/twitter.png" alt="" />
        {/* telegram */}
        <img className="w-16  " src="/images/telegram.png" alt="" />
      </div>
    </>
  );
}

import React, { useState } from "react";
import gsap from "gsap";

export default function test_role() {
  const [roleicon1, setroleicon1] = useState(true);
  const [roleicon2, setroleicon2] = useState(false);
  const [roleicon3, setroleicon3] = useState(false);
  const [roleicon4, setroleicon4] = useState(false);
  const [roleicon5, setroleicon5] = useState(false);
  const [host1, sethost1] = useState(true);
  const [host2, sethost2] = useState(false);
  const [host3, sethost3] = useState(false);
  const [lis1, setlis1] = useState(true);
  const [lis2, setlis2] = useState(false);

  const c1 = () => {
    setroleicon1(true);
    setroleicon2(false);
    setroleicon3(false);
    setroleicon4(false);
    setroleicon5(false);
  };
  const c2 = () => {
    setroleicon1(false);
    setroleicon2(true);
    setroleicon3(false);
    setroleicon4(false);
    setroleicon5(false);
  };
  const c3 = ({ currentTarget }) => {
    setroleicon1(false);
    setroleicon2(false);
    setroleicon3(true);
    setroleicon4(false);
    setroleicon5(false);
    sethost1(true);
    gsap.to(currentTarget.id, {
      duration: 0.5,
      opacity: 1,
      yPercent: 0,
    });
  };
  const c4 = () => {
    setroleicon1(false);
    setroleicon2(false);
    setroleicon3(false);
    setroleicon4(true);
    setlis1(true);
    setroleicon5(false);
  };
  const c5 = ({}) => {
    setroleicon1(false);
    setroleicon2(false);
    setroleicon3(false);
    setroleicon4(false);
    setroleicon5(true);
  };
  const gohost1 = () => {
    sethost1(true);
    sethost2(false);
    sethost3(false);
  };
  const gohost2 = () => {
    sethost1(false);
    sethost2(true);
    sethost3(false);
  };
  const gohost3 = () => {
    sethost1(false);
    sethost2(false);
    sethost3(true);
  };
  const golis1 = () => {
    setlis1(true);
    setlis2(false);
  };
  const golis2 = () => {
    setlis1(false);
    setlis2(true);
  };

  return (
    <>
      <div
        className="w-full h-full 
      px-0
      2xl:px-12
      xl:px-12
      lg:px-8
      md:px-4
      sm:px-4 
       "
      >
        <div
          className="w-full   text-white text-5xl font-bold"
          style={{ height: "80vh" }}
        >
          <div
            id="role_nav"
            className=" flex justify-around items-center mx-auto
            w-full
            2xl:w-10/12
            xl:w-10/12
            lg:w-10/12
            md:w-full
            sm:w-full
            "
          >
            <div
              id="#copy_right"
              className=" relative  flex flex-col justify-end items-center cursor-pointer
              w-20        h-20
              2xl:w-32    2xl:h-32
              xl:w-32     xl:h-32
              lg:w-24     lg:h-24
              md:w-20     md:h-20
              sm:w-20     sm:h-20
              "
              onClick={c1}
            >
              {roleicon1 ? (
                <>
                  <img
                    className="absolute top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_01.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                   hidden
                   2xl:block
                   xl:block
                   lg:hidden
                   md:hidden
                   sm:hidden
                  "
                  >
                    Copy Right
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className="absolute  top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_01_D.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                    "
                    style={{ color: "#7a7a7a" }}
                  >
                    Copy Right
                  </h3>
                </>
              )}
            </div>

            <div
              id="#beat_creater"
              className=" relative flex flex-col justify-end items-center cursor-pointer 
              w-20        h-20
              2xl:w-32    2xl:h-32
              xl:w-32     xl:h-32
              lg:w-24     lg:h-24
              md:w-20     md:h-20
              sm:w-20     sm:h-20
              "
              onClick={c2}
            >
              {roleicon2 ? (
                <>
                  <img
                    className="absolute top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_02.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                   hidden
                   2xl:block
                   xl:block
                   lg:hidden
                   md:hidden
                   sm:hidden
                  "
                  >
                    Beat Creater
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className="absolute  top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_02_D.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                    "
                    style={{ color: "#7a7a7a" }}
                  >
                    Beat Creater
                  </h3>
                </>
              )}
            </div>

            <div
              id="#host_room1"
              className=" relative flex flex-col justify-end items-center cursor-pointer 
              w-20        h-20
              2xl:w-32    2xl:h-32
              xl:w-32     xl:h-32
              lg:w-24     lg:h-24
              md:w-20     md:h-20
              sm:w-20     sm:h-20
              "
              onClick={c3}
            >
              {roleicon3 ? (
                <>
                  <img
                    className="absolute top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_03.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm
                   hidden
                   2xl:block
                   xl:block
                   lg:hidden
                   md:hidden
                   sm:hidden
                  "
                  >
                    Host Room
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className="absolute  top-0  
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_03_D.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                    "
                    style={{ color: "#7a7a7a" }}
                  >
                    Host Room
                  </h3>
                </>
              )}
            </div>

            <div
              id="#listen_pool1"
              className=" relative flex flex-col justify-end items-center cursor-pointer 
              w-20        h-20
              2xl:w-32    2xl:h-32
              xl:w-32     xl:h-32
              lg:w-24     lg:h-24
              md:w-20     md:h-20
              sm:w-20     sm:h-20
              "
              onClick={c4}
            >
              {roleicon4 ? (
                <>
                  <img
                    className="absolute top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_04.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                   hidden
                   2xl:block
                   xl:block
                   lg:hidden
                   md:hidden
                   sm:hidden
                  "
                  >
                    Listen Pool
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className="absolute  top-0  
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_04_D.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                    "
                    style={{ color: "#7a7a7a" }}
                  >
                    Listen Pool
                  </h3>
                </>
              )}
            </div>

            <div
              id="#sponser"
              className=" relative flex flex-col justify-end items-center cursor-pointer  
              w-20        h-20
              2xl:w-32    2xl:h-32
              xl:w-32     xl:h-32
              lg:w-24     lg:h-24
              md:w-20     md:h-20
              sm:w-20     sm:h-20
              "
              onClick={c5}
            >
              {roleicon5 ? (
                <>
                  <img
                    className="absolute top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_05.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm 
                   hidden
                   2xl:block
                   xl:block
                   lg:hidden
                   md:hidden
                   sm:hidden
                  "
                  >
                    Sponser
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className="absolute  top-0 
                    w-16        h-16
                    2xl:w-24    2xl:h-24
                    xl:w-24     xl:h-24
                    lg:w-20     lg:h-20
                    md:w-16     md:h-16
                    sm:w-16     sm:h-16
                    "
                    src="/images/C_05_D.png"
                    alt=""
                  />
                  <h3
                    className=" uppercase text-sm
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                    "
                    style={{ color: "#7a7a7a" }}
                  >
                    Sponser
                  </h3>
                </>
              )}
            </div>
          </div>
          <div
            className="   flex flex-col justify-between items-center mx-auto 
                  w-full         px-0         h-5/6        py-4
                  2xl:w-10/12    2xl:px-12    2xl:h-4/5
                  xl:w-10/12     xl:px-12     xl:h-4/5
                  lg:w-full      lg:px-8      lg:h-5/6
                  md:w-full      md:px-4      md:h-5/6
                  sm:w-full      sm:px-4      sm:h-5/6
          "
          >
            <div
              className="relative  h-full 
                        w-10/12
                        2xl:w-10/12
                        xl:w-10/12 
                        lg:w-full 
                        md:w-full 
                        sm:w-full 
            "
            >
              {/* Copy */}
              {roleicon1 ? (
                <div
                  id="copy_right"
                  className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    className="h-full 
                          hidden
                          2xl:block
                          xl:block
                          lg:hidden
                          md:hidden
                          sm:hidden
                  "
                    src="/images/Copy.png"
                    alt=""
                  />
                  <div
                    className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                  >
                    <h1
                      className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                      style={{ color: "rgb(255,132,164)" }}
                    >
                      Copy Right
                    </h1>
                    <p
                      className=" pl-8 font-extralight
                            text-base
                            2xl:text-xl
                            xl:text-xl
                            lg:text-2xl
                            md:text-xl
                            sm:text-xl
                    "
                    >
                      Users will hold the copyright for their non-fungible once
                      their token passes KYC confirmations the token can proceed
                      to be minted, sold and distributed within the NFT market
                      the copywriter will receive residuals for mint circulation
                      and play times.
                    </p>
                  </div>

                  {/* <div className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center items-center px-2">
                        <img
                          className="w-12 h-12 transform rotate-180 cursor-pointer"
                          src="/images/slidebtn.png"
                          alt=""
                        />
                      </div>

                      <div className="text-7xl text-white absolute top-0 right-0 h-full flex justify-center items-center px-2">
                        <img
                          className="w-12 h-12  cursor-pointer"
                          src="/images/slidebtn.png"
                          alt=""
                        />
                      </div> */}
                </div>
              ) : (
                <></>
              )}

              {roleicon2 ? (
                <div
                  id="beat_creater"
                  className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail   "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    className="h-full
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                  "
                    src="/images/Beat.png"
                    alt=""
                  />

                  <div
                    className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                  >
                    <h1
                      className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                      style={{ color: "rgb(255,132,164)" }}
                    >
                      Beat Creater
                    </h1>
                    <p
                      className=" pl-8 font-extralight
                            text-base
                            2xl:text-xl
                            xl:text-xl
                            lg:text-2xl
                            md:text-xl
                            sm:text-xl
                    "
                    >
                      This section is for users that have purchased a copywriter
                      nft and wish to add beats (arrow keys) to the song to make
                      alternative ways to play songs, which can be played by
                      other users in game. These new beats after KYC
                      confirmation will be added to song lists. Beat creators
                      will receive residuals based on play times, likes, &
                      shares.
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {roleicon3 ? (
                host1 ? (
                  <div
                    id="host_room1"
                    className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      className="h-full
                      hidden
                      2xl:block
                      xl:block
                      lg:hidden
                      md:hidden
                      sm:hidden
                    "
                      src="/images/Host_01.png"
                      alt=""
                    />
                    <div
                      className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                    >
                      <h1
                        className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Host Room
                      </h1>
                      <p
                        className="  font-extralight
                        text-base     px-4
                        2xl:text-xl   2xl:px-12
                        xl:text-xl    xl:px-12
                        lg:text-2xl   lg:px-12
                        md:text-xl    md:px-12
                        sm:text-xl    sm:px-8
                    "
                      >
                        Users and club members/bands that hold our currency can
                        exchange currency to create lobby rooms. Room hosts will
                        gain 5-10% fee from all trades happening within the
                        room.
                      </p>
                    </div>

                    {/* <div className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center items-center px-2">
                  <img
                    className="w-12 h-12 transform rotate-180 cursor-pointer"
                    src="/images/slidebtn.png"
                    alt=""
                  />
                </div> */}

                    <div
                      className="text-7xl text-white absolute top-0 right-0 h-full flex justify-center px-2 py-4
                     items-end        
                     2xl:items-center
                     xl:items-center
                     lg:items-center
                     md:items-center
                     sm:items-end
                    "
                    >
                      <img
                        onClick={gohost2}
                        className="  cursor-pointer
                          w-10        h-10
                          2xl:w-16    2xl:h-16
                          xl:w-16     xl:h-16
                          lg:w-14     lg:h-14
                          md:w-12     md:h-12
                          sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>
                  </div>
                ) : host2 ? (
                  <div
                    id="host_room1"
                    className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      className="h-full
                      hidden
                      2xl:block
                      xl:block
                      lg:hidden
                      md:hidden
                      sm:hidden
                    "
                      src="/images/Host_02.png"
                      alt=""
                    />
                    <div
                      className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                    >
                      <h1
                        className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Host Room
                      </h1>
                      <h1
                        className=" mb-4 w-full text-center
                            text-2xl
                            2xl:text-4xl
                            xl:text-4xl
                            lg:text-4xl
                            md:text-2xl
                            sm:text-2xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Host Rights
                      </h1>
                      <p
                        className="  font-extralight
                            text-base     px-4
                            2xl:text-xl   2xl:px-12
                            xl:text-xl    xl:px-12
                            lg:text-2xl   lg:px-12
                            md:text-xl    md:px-12
                            sm:text-xl    sm:px-8
                    "
                      >
                        • Room entry fee <br /> Typically rooms are free to
                        enter but for private or exclusive rooms.<br/>
                        • song choices <br />
                        The host will decide which songs.<br/>
                        • Users management. <br />
                        Hosts can report, kick or mute players.
                      </p>
                    </div>

                    <div
                      className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center  px-2 py-4
                     items-end
                     2xl:items-center
                     xl:items-center
                     lg:items-center
                     md:items-center
                     sm:items-end
                    "
                    >
                      <img
                        onClick={gohost1}
                        className=" transform rotate-180 cursor-pointer
                          w-10        h-10
                          2xl:w-16    2xl:h-16
                          xl:w-16     xl:h-16
                          lg:w-14     lg:h-14
                          md:w-12     md:h-12
                          sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>

                    <div
                      className="text-7xl text-white absolute top-0 right-0 h-full  justify-center  px-2 py-4
                          hidden       items-end
                          2xl:flex     2xl:items-center
                          xl:flex      xl:items-center
                          lg:hidden    lg:items-center
                          md:hidden    md:items-center
                          sm:hidden    sm:items-end
                    "
                    >
                      <img
                        onClick={gohost3}
                        className="  cursor-pointer
                        w-10        h-10
                        2xl:w-16    2xl:h-16
                        xl:w-16     xl:h-16
                        lg:w-14     lg:h-14
                        md:w-12     md:h-12
                        sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>
                  </div>
                ) : host3 ? (
                  <div
                    id="host_room1"
                    className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      className="h-full
                      hidden
                      2xl:block
                      xl:block
                      lg:hidden
                      md:hidden
                      sm:hidden
                    "
                      src="/images/Host_03.png"
                      alt=""
                    />

                    <div
                      className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center  px-2 py-4
                     items-end
                     2xl:items-center
                     xl:items-center
                     lg:items-center
                     md:items-center
                     sm:items-end
                    "
                    >
                      <img
                        onClick={gohost2}
                        className=" transform rotate-180 cursor-pointer
                          w-10        h-10
                          2xl:w-16    2xl:h-16
                          xl:w-16     xl:h-16
                          lg:w-14     lg:h-14
                          md:w-12     md:h-12
                          sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}

              {roleicon4 ? (
                lis1 ? (
                  <div
                    id="host_room1"
                    className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      className="h-full
                      hidden
                      2xl:block
                      xl:block
                      lg:hidden
                      md:hidden
                      sm:hidden
                    "
                      src="/images/lis_01.png"
                      alt=""
                    />

                    <div
                      className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                    >
                      <h1
                        className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Listen Pool
                      </h1>
                      <p
                        className=" font-extralight
                        text-base     px-4
                        2xl:text-xl   2xl:px-12
                        xl:text-xl    xl:px-12
                        lg:text-2xl   lg:px-12
                        md:text-xl    md:px-12
                        sm:text-xl    sm:px-8
                    "
                      >
                        Listening pools are rooms created by hosts/clubs/bands
                        that have set a RHY money pool that will be divided and
                        shared.
                      </p>
                      <h1
                        className=" mt-9
                          px-4        text-xl
                          2xl:px-12   2xl:text-5xl
                          xl:px-12    xl:text-5xl
                          lg:px-12    lg:text-4xl
                          md:px-12    md:text-2xl
                          sm:px-8     sm:text-2xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Party Club / Band
                      </h1>

                      <p
                        className="  font-extralight
                          text-base     px-4
                          2xl:text-xl   2xl:px-12
                          xl:text-xl    xl:px-12
                          lg:text-2xl   lg:px-12
                          md:text-xl    md:px-12
                          sm:text-xl    sm:px-8
                    "
                      >
                        A club and band system where players can join up
                      </p>
                    </div>

                    {/* <div className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center items-center px-2">
                  <img
                    className="w-12 h-12 transform rotate-180 cursor-pointer"
                    src="/images/slidebtn.png"
                    alt=""
                  />
                </div> */}

                    <div
                      className="text-7xl text-white absolute top-0 right-0 h-full flex justify-center  px-2 py-4
                     items-end
                     2xl:items-center
                     xl:items-center
                     lg:items-center
                     md:items-center
                     sm:items-end
                    "
                    >
                      <img
                        onClick={golis2}
                        className="  cursor-pointer
                          w-10        h-10
                          2xl:w-16    2xl:h-16
                          xl:w-16     xl:h-16
                          lg:w-14     lg:h-14
                          md:w-12     md:h-12
                          sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>
                  </div>
                ) : lis2 ? (
                  <div
                    id="host_room1"
                    className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      className="h-full
                      hidden
                      2xl:block
                      xl:block
                      lg:hidden
                      md:hidden
                      sm:hidden
                    "
                      src="/images/lis_02.png"
                      alt=""
                    />
                    <div
                      className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                    >
                      <h1
                        className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Listen Pool
                      </h1>

                      <h1
                        className=" mt-9
                        px-4        text-xl
                        2xl:px-12   2xl:text-5xl
                        xl:px-12    xl:text-5xl
                        lg:px-12    lg:text-4xl
                        md:px-12    md:text-2xl
                        sm:px-8     sm:text-2xl
                    "
                        style={{ color: "rgb(255,132,164)" }}
                      >
                        Audience / Supporter
                      </h1>

                      <p
                        className="  font-extralight
                        text-base     px-4
                        2xl:text-xl   2xl:px-12
                        xl:text-xl    xl:px-12
                        lg:text-2xl   lg:px-12
                        md:text-xl    md:px-12
                        sm:text-xl    sm:px-8
                    "
                      >
                        Users who don't wish to create content can just join the
                        audience and gain the Rhyquiem coins from time spent in
                        game.
                      </p>
                    </div>

                    <div
                      className="text-7xl text-white absolute top-0 left-0 h-full flex justify-center  px-2 py-4
                              items-end
                              2xl:items-center
                              xl:items-center
                              lg:items-center
                              md:items-center
                              sm:items-end
                    "
                    >
                      <img
                        onClick={golis1}
                        className=" transform rotate-180 cursor-pointer
                          w-10        h-10
                          2xl:w-16    2xl:h-16
                          xl:w-16     xl:h-16
                          lg:w-14     lg:h-14
                          md:w-12     md:h-12
                          sm:w-12     sm:h-12
                        "
                        src="/images/slidebtn.png"
                        alt=""
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}

              {roleicon5 ? (
                <div
                  id="copy_right"
                  className="p-4 rounded-2xl  flex flex-col justify-center items-center absolute w-full h-full roledetail  "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    className="h-full
                    hidden
                    2xl:block
                    xl:block
                    lg:hidden
                    md:hidden
                    sm:hidden
                  "
                    src="/images/Sponser.png"
                    alt=""
                  />
                  <div
                    className=" w-full  h-full
                          block
                          2xl:hidden
                          xl:hidden
                          lg:block
                          md:block
                          sm:block
                  "
                  >
                    <h1
                      className=" mb-8
                            text-3xl
                            2xl:text-5xl
                            xl:text-5xl
                            lg:text-5xl
                            md:text-4xl
                            sm:text-3xl
                    "
                      style={{ color: "rgb(255,132,164)" }}
                    >
                      Sponser
                    </h1>
                    <p
                      className=" pl-8 font-extralight
                            text-base
                            2xl:text-xl
                            xl:text-xl
                            lg:text-2xl
                            md:text-xl
                            sm:text-xl
                    "
                    >
                      We will have multiple advertisements packages for Clients
                      to promote campaigns, events, and products.
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

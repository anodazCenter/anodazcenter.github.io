import gsap from "gsap";
import React from "react";


export default function test_role() {
    const roleDetail = ({currentTarget}) =>{
        gsap.to(currentTarget.id,{
            xPercent: 120,
            fontSize: 72
        });
    };
  return (
    <>
      <div className="w-10/12 h-full px-24 flex justify-center items-center">
        <div className="w-5/12 pr-4  text-white text-5xl font-bold">
          <div className="w-full p-4 border-4 border-white rounded-2xl">
            <div id='#Copyright' className='py-2 cursor-pointer' onClick={roleDetail}>
              <h1>Copyright</h1>
            </div>
            <div className='py-2'>
              <h1>Beat Creater</h1>
            </div>
            <div className='py-2'>
              <h1>Host Room</h1>
            </div>
            <div className='py-2'>
              <h1>Listen Pool</h1>
            </div>
          </div>
        </div>
        <div className="w-7/12"></div>
      </div>
    </>
  );
}

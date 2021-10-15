import React from "react";
import gsap from "gsap";

export default function tokendetail() {
  return (
    <>
      <div
        id="reward_pool"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#f9d801" }}>
          Reward pool
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          RHY ที่จะจ่ายให้ในกิจกรรมต่างๆ
        </p>
      </div>

      <div
        id="Play_to_Earn"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#f69125" }}>
          Play to Earn
        </h1>
        <p className=" text-2xl font-bold text-white pl-6">
          RHY ที่จะจ่ายให้ในการเล่น
        </p>
        <ul className="list-disc pl-12 text-white font-bold text-xl">
          <li>
            Copyright
            <p>
              จะได้โดยนับจากจำนวนครั้งที่เพลงที่มีสิทธิ์ Copyright อยู่ถูกเล่นไป
            </p>
          </li>
          <li>
            Beat Creation
            <p>
              จะได้โดยนับจากจำนวนครั้งที่เพลงที่สร้างถูกเล่นไป และได้จากยอด Like
              Share เพลงที่สร้าง
            </p>
          </li>
          <li>
            Player
            <p>เวลาที่เล่นไปเมื่อถึงระดับนึงจะถูกจ่ายเป็น RHY</p>
          </li>
        </ul>
      </div>

      <div
        id="Public_Sale"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#f05f96" }}>
          Public Sale
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          ระดมทุนสร้าง Rhyquiem Project ในแต่ละเฟส
        </p>
      </div>

      <div
        id="Private_Sale"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#745ea7" }}>
          Private Sale
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          ระดมทุนสร้าง Rhyquiem Project ในแต่ละเฟส
        </p>
      </div>

      <div
        id="Copyright_Holder"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#0481c4" }}>
          Copyright Holder
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          แจกให้กับผู้ถิอ Copyright ที่เข้าร่วม Project เพื่อสร้าง Listen pool
        </p>
      </div>

      <div
        id="Party_team"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#2aa8e2" }}>
          3rd Party team
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          แจกให้กับผู้ช่วยสร้าง Project Rhyquiem และ partner
        </p>
      </div>

      <div
        id="Core_team"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#75c5ac" }}>
          Core team
        </h1>
        <p className=" text-xl font-bold text-white pl-6">สำหรับทีมงาน</p>
      </div>

      <div
        id="Ecosystem_Fund"
        className="tokendetail absolute h-full w-full flex flex-col justify-start opacity-0"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#cee52e" }}>
          Ecosystem Fund
        </h1>
        <p className=" text-xl font-bold text-white pl-6">
          เพื่อรักษาสถาพคล่องของ Project
        </p>
      </div>
    </>
  );
}

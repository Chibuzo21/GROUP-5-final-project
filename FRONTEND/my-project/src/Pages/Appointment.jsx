import React from "react";
import Pic from "../assets/Pic.svg";
import { IoLocationOutline } from "react-icons/io5";

function Appointment() {
  return (
    <>
      <main className="w-full h-full justify-center items-center flex flex-col">
        <section className="w-full h-[354px] bg-[#D1E8D0] flex items-center justify-center ">
          <div className="h-[45vh]  grid justify-items-center">
            <h1 className="text-[72px] font-semibold h-[18vh]">
              Book an <span className="text-[#206E30]">Appointment</span>
            </h1>
            <div className="flex justify-center h-[10vh]">
              <img src={Pic} className="h-[10vh]" />
            </div>
            <p className="text-[25px] font-normal">
              Find the right care at the right time
            </p>
          </div>
        </section>
        <section
          className="w-[1224.58px] h-[1345.76px] 
         border-black border-2"
        >
          <div className="h-[20vh]">
            <p className="font-medium text-xl h-[5vh]">Enter your Location</p>
            <div className="relative flex items-center">
              <span className="absolute text-[#A7A7B9] px-5 text-lg">
                <IoLocationOutline />
              </span>
              <input
                type="text"
                placeholder="City, State"
                className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] w-[40vw]
              h-[10vh] px-10"
              />
            </div>
          </div>
          <div>
            <p className="font-medium text-xl h-[5vh]">
              Select or Enter the Hospital Name
            </p>
            <input
              type="text"
              placeholder="Type hospital name"
              className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] w-[40vw]
              h-[10vh] px-6"
            />
            <span>
              <dropd />
            </span>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}

export default Appointment;

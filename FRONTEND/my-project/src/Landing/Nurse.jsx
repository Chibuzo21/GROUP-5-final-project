import React from "react";
import girl from "../assets/Nurse.jpg";
import Alvisdra from "../assets/Alvisdra.png";
import Drug from "../assets/Drug.png";
import FMC from "../assets/FMC.png";
import Gosab from "../assets/Gosab.png";
import Medicare from "../assets/Medicare.png";
import Otema from "../assets/Otema.png";
import Stork from "../assets/stork.png";
import Med from "../assets/MedicalCare.png";
import { useNavigate } from "react-router-dom";
function Nurse() {
  const navigate = useNavigate();
  return (
    <>
      <main className="h-full py-8 md:py-12 w-[100%]  ">
        <div
          className=" no-scrollbar
        xl:overflow-x-hidden  justify-start items-center lg:justify-center
        overflow-x-auto flex    flex-row "
        >
          <img
            src={Gosab}
            alt=""
            className="sm:h-[22vh] h-1/3 w-1/3  sm:w-auto"
          />
          <img
            src={Drug}
            alt=""
            className="sm:h-[19vh] h-1/3 w-1/3  sm:w-auto"
          />
          <img
            src={Medicare}
            alt=""
            className="sm:h-[22vh] h-1/3 w-1/3  sm:w-auto"
          />
          <img
            src={Stork}
            alt=""
            className="sm:h-[22vh] h-1/3 w-1/3  sm:w-auto"
          />
          <img
            src={Otema}
            alt=""
            className="sm:h-[20vh] h-1/4 w-1/4   sm:w-auto"
          />
          <img
            src={Med}
            alt=""
            className="sm:h-[19vh] h-1/5 w-1/5   sm:w-auto"
          />
          <img
            src={Alvisdra}
            alt=""
            className="sm:h-[20vh] h-1/3 w-1/3  sm:w-auto"
          />
          <img
            src={FMC}
            alt=""
            className=" sm:h-[13vh]  lg:w-[14vw]  h-1/3 w-1/3 "
          />
        </div>
        <div
          className="flex md:flex-row flex-col  justify-center items-center
             "
        >
          <div
            className=" flex flex-col 
            justify-center md:w-3/4 px-4 md:px-8 lg:px-16
         items-center  
           text-center lg:text-start lg:items-start"
          >
            <p className="sm:text-[28px] lg:text-[32px] text-[26px] font-bold mb-4">
              ABOUT US
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6  ">
              CareKonect simplifies health management with personalized advice,
              tailored recommendations, and 24/7 support for booking
              appointments and answering health questions. Enjoy a seamless,
              proactive, and secure healthcare experience with CareKonect.
            </p>
            <div className="">
              <button
                onClick={() => {
                  navigate("/About");
                }}
                className="bg-[#206E30] rounded-md 
                  text-white py-5 mb-4 px-12 font-medium text-lg md:text-xl lg:text-2xl"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img src={girl} className="w-3/4 h-auto mx-auto " />
          </div>
        </div>
      </main>
    </>
  );
}

export default Nurse;

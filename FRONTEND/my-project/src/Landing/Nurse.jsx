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
      <main className="h-[100vh] w-full ">
        <div className="sm:h-[30vh] h-0 justify-start flex sm:w-[95vw] w-0 flex-row gap-3">
          <img src={Gosab} alt="" className="w-[13vw] h-[22vh]" />
          <img src={Drug} alt="" className="h-[19vh]" />
          <img src={Medicare} alt="" className="h-[22vh]" />
          <img src={Stork} alt="" className="h-[22vh]" />
          <img src={Otema} alt="" className="h-[20vh]" />
          <img src={Med} alt="" className="h-[19vh]" />
          <img src={Alvisdra} alt="" className="h-[23vh]" />
          <img src={FMC} alt="" className="h-[14vh] pt-10 w-[14vw]" />
        </div>
        <div
          className="flex sm:flex-row flex-col sm:gap-2 gap-4 justify-center items-center 
        sm:h-[50vh] h-[95vh] w-screen sm:justify-evenly"
        >
          <div
            className="sm:w-[44vw] w-[98vw] flex flex-col sm:gap-4 gap-8 justify-center
          sm:h-[50vh] h-[96vh] items-center sm:items-start"
          >
            <p className="sm:text-[32px] text-[26px] font-bold">ABOUT US</p>
            <p className=" sm:text-[20px] text-[19px] text-gray-700 text-center sm:text-left">
              CareKonect simplifies health management with personalized advice,
              tailored recommendations, and 24/7 support for booking
              appointments and answering health questions. Enjoy a seamless,
              proactive, and secure healthcare experience with CareKonect.
            </p>
            <button
              onClick={() => {
                navigate("/About");
              }}
              className="bg-[#206E30] rounded-md sm:text-[22.5px] text-[19px]
                font-semibold text-white sm:h-[63px] h-[58px] w-[270px] sm:w-[321.4px]"
            >
              Learn More
            </button>
          </div>
          <div className="sm:w-[34vw] sm:h-[30vh] w-[85vw] h-[40vh]">
            <img src={girl} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Nurse;

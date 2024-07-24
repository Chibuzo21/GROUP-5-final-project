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
      <main className="lg:h-[110vh] h-[110vh] sm:h-[160vh] w-full  ">
        <div
          className="lg:h-[30vh] sm:h-[20vh]
        lg:overflow-x-hidden h-0 justify-start 
        sm:overflow-x-auto flex sm:w-[95vw] w-0 flex-row gap-3"
        >
          <img src={Gosab} alt="" className="lg:w-[13vw] lg:h-[22vh] " />
          <img src={Drug} alt="" className="lg:h-[19vh]" />
          <img src={Medicare} alt="" className="lg:h-[22vh]" />
          <img src={Stork} alt="" className="lg:h-[22vh]" />
          <img src={Otema} alt="" className="lg:h-[20vh]" />
          <img src={Med} alt="" className="h-[19vh]" />
          <img src={Alvisdra} alt="" className="lg:h-[23vh]" />
          <img
            src={FMC}
            alt=""
            className="lg:h-[14vh] sm:h-[15vh] lg:pt-10 lg:w-[14vw] sm:pt-10"
          />
        </div>
        <div
          className="flex lg:flex-row flex-col lg:gap-2 gap-4 justify-center items-center 
        lg:h-[50vh] sm:h-[140vh] sm:gap-0 h-[78vh]   w-screen lg:justify-evenly"
        >
          <div
            className="lg:w-[44vw] sm:w-[90vw] w-[98vw] flex flex-col sm:gap-9 gap-8 lg:gap-4
            justify-center 0
          lg:h-[50vh]  sm:h-[80vh] h-[55vh] items-center sm:items-center 
           text-center lg:text-start"
          >
            <p className="sm:text-[52px] lg:text-[32px] text-[26px] font-bold w-full">
              ABOUT US
            </p>
            <p
              className=" lg:text-[20px] sm:text-3xl sm:text-center lg:text-start
            text-[19px] text-gray-700  w-[90vw] lg:w-fit sm:w-[90vw]"
            >
              CareKonect simplifies health management with personalized advice,
              tailored recommendations, and 24/7 support for booking
              appointments and answering health questions. Enjoy a seamless,
              proactive, and secure healthcare experience with CareKonect.
            </p>
            <div className="w-full">
              <button
                onClick={() => {
                  navigate("/About");
                }}
                className="bg-[#206E30] rounded-md lg:text-[22.5px] text-[19px] sm:text-[35px]
                font-semibold text-white lg:h-[63px] h-[58px] w-[270px] lg:w-[321.4px] sm:w-[60vw] sm:h-[10vh]"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-[34vw] sm:h-[70vh] lg:h-[30vh] w-[85vw] h-[10vh]">
            <img src={girl} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Nurse;

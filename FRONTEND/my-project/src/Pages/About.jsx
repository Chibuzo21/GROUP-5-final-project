import React from "react";
import Offer from "../Landing/Offer";
import Mission from "../Landing/Mission";
import girl from "../assets/Nurse.jpg";
import Book from "../assets/Book.jpg";
import OurTeam from "../Landing/OurTeam";

function About() {
  return (
    <>
      <main className="overflow-x-hidden">
        <div
          className="md:h-[610px] h-[59vh] 
           relative bg-cover bg-center w-screen grid content-center justify-items-start text-white text-6xl font-bold"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 0, 
    rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.5) 100%), url(${Book})`,
          }}
        >
          <p className="p-20 ">ABOUT US</p>
        </div>
        <div className="flex  h-[70vh] w-screen justify-evenly">
          <div className="w-[34vw] h-[30vh]">
            <img src={girl} />
          </div>
          <div className="w-[44vw] flex flex-col gap-4 justify-center  h-[50vh]">
            <p className="text-[32px] font-bold">Welcome to CareKonect</p>
            <p className="text-[20px] text-gray-700">
              CareKonect simplifies health management with personalized advice,
              tailored recommendations, and 24/7 support for booking
              appointments and answering health questions. Enjoy a seamless,
              proactive, and secure healthcare experience with CareKonect.
            </p>
            <button
              className="bg-[#206E30] rounded-md text-[22.5px]
                font-semibold text-white h-[63px] w-[321.4px]"
            >
              Learn More
            </button>
          </div>
        </div>
        <Offer />
        <OurTeam />
        <Mission />
      </main>
    </>
  );
}

export default About;

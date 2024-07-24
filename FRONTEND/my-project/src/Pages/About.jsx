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
          className="lg:h-[610px] h-[87vh] sm:h-[88vh]
           relative bg-cover bg-center w-screen grid content-center 
           justify-items-start text-white text-6xl font-bold"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 0, 
    rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.5) 100%), url(${Book})`,
          }}
        >
          <p className="lg:p-20 p-10 sm:p-12 ">ABOUT US</p>
        </div>
        <div
          className="flex lg:flex-row flex-col-reverse 
        sm:h-[120vh] h-[100vh] lg:h-[90vh] w-screen justify-evenly items-center"
        >
          <div className="lg:w-[34vw] sm:h-[60vh] lg:h-[60vh] w-[85vw] h-[21vh]">
            <img src={girl} />
          </div>
          <div className="lg:w-[44vw] sm:w-[90vw] w-[80vw] flex flex-col gap-4 justify-center h-[10vh]  sm:h-[50vh]">
            <p className="lg:text-[32px] text-[32px] sm:text-[38px] font-bold">
              Welcome to CareKonect
            </p>
            <p className="text-[20px] sm:text-[34px] lg:text-[20px] text-gray-700">
              CareKonect simplifies health management with personalized advice,
              tailored recommendations, and 24/7 support for booking
              appointments and answering health questions. Enjoy a seamless,
              proactive, and secure healthcare experience with CareKonect.
            </p>
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

import React from "react";
import Offer from "../Landing/Offer";
import Mission from "../Landing/Mission";
import girl from "../assets/Nurse.jpg";
import Book from "../assets/Book.jpg";
import OurTeam from "../Landing/OurTeam";

function About() {
  return (
    <>
      <main className="w-[100%] h-full ">
        <div
          className="h-screen
           relative bg-cover bg-center w-screen grid content-center 
           justify-items-start text-white sm:text-6xl text-4xl font-bold"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 0, 
    rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.5) 100%), url(${Book})`,
          }}
        >
          <p className="lg:p-20 p-10 sm:p-12 ">ABOUT US</p>
        </div>
        <div
          className="flex md:flex-row py-12 flex-col w-[90%]  mx-auto
         items-center justify-center"
        >
          <div className=" w-[48%] mb-2  ">
            <img src={girl} className="md:w-[90%] w-[100%] h-auto  " />
          </div>
          <div
            className=" flex flex-col 
            justify-center md:w-[62%] 
         items-center  
           text-center lg:text-start lg:items-start"
          >
            <p className="lg:text-[32px] mb-2 text-[28px] md:text-[30px] font-bold">
              Welcome to CareKonect
            </p>
            <p className="text-[20px] lg:leading-[36px] md:text-[20px] lg:text-[24px] text-gray-700">
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

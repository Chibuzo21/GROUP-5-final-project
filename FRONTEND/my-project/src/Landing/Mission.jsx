import React from "react";
import Hands from "../assets/hands.jpg";
import Doc from "../assets/Doc.jpg";
import Four from "../assets/four.jpg";
import Doctors from "../assets/doctors.jpg";

function Mission() {
  return (
    <main
      className="flex md:flex-row py-9 md:py-10 h-full flex-col-reverse 
    w-screen justify-center items-center"
    >
      <section
        className="flex  flex-col  justify-center items-center
       sm:flex-row md:gap-5 sm:gap-1  px-6 md:w-2/4 lg:w-2/4  "
      >
        <div className="flex flex-col md:gap-5  gap-5  ">
          <img
            src={Hands}
            alt=""
            className="w-3/4 md:w-full lg:w-[253px] h-auto mx-auto "
          />
          <img
            src={Doctors}
            alt=""
            className="w-3/4 md:w-full lg:w-[253px] h-auto mx-auto"
          />
        </div>
        <div className="flex flex-col gap-6 pt-12">
          <img
            src={Doc}
            alt=""
            className="w-3/4 md:w-full lg:w-[253px] h-auto mx-auto"
          />
          <img
            src={Four}
            alt=""
            className="w-3/4 md:w-full lg:w-[253px] h-auto mx-auto"
          />
        </div>
      </section>
      <section
        className="   md:w-2/5 text-center xl:px-0 md:text-start
       flex flex-col justify-center  w-11/12 px-1 md:px-4  md:pt-8
        items-center lg:items-start"
      >
        <p className="xl:text-4xl text-2xl  lg:text-3xl xl:mb-4 mb-2  font-bold">
          OUR MISSION
        </p>

        <p
          className="xl:text-4xl lg:text-2xl sm:text-2xl 
           text-2xl text-center lg:text-start mb-2
            font-semibold text-[#206E30] xl:mb-4   "
        >
          CareKonect: Connecting You to Better Health
        </p>

        <p
          className="text-base  md:text-base mb-6 md:leading-[20px] lg:text-[20px]
           lg:leading-[32px] 
         "
        >
          At CareKonect, our mission is to simplify and enhance healthcare
          access for everyone. We strive to connect patients with healthcare
          providers through a seamless, user-friendly platform, ensuring timely
          and efficient appointment scheduling, prescription management, and
          secure access to health records. Our commitment is to empower
          individuals to take control of their health with ease and confidence,
          fostering a healthier and more connected community.
        </p>
        <button
          className=" rounded-md bg-[#206E30] text-xl lg:text-xl font-medium
           text-white  md:text-base py-3 px-16 mb-4 "
        >
          Learn More
        </button>
      </section>
    </main>
  );
}

export default Mission;

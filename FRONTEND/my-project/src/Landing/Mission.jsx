import React from "react";
import Hands from "../assets/hands.jpg";
import Doc from "../assets/Doc.jpg";
import Four from "../assets/four.jpg";
import Doctors from "../assets/doctors.jpg";

function Mission() {
  return (
    <main
      className="flex lg:flex-row sm:flex-col-reverse flex-col-reverse 
     lg:h-[130vh] sm:h-[340vh] h-[260vh] w-screen justify-center items-center"
    >
      <section
        className="flex h-fit flex-col sm:w-[97vw] justify-center items-center
       lg:flex-row lg:gap-5 gap-0 lg:w-[47vw] w-[80vw] "
      >
        <div className="flex flex-col lg:gap-5 gap-5 relative ">
          <img
            src={Hands}
            alt=""
            className="lg:w-[264px] sm:w-[630px] w-[380px] h-[316px] sm:h-[526px] lg:h-[316px]"
          />
          <img
            src={Doctors}
            alt=""
            className="lg:w-[263px] sm:w-[630px] w-[380px] h-[316px] sm:h-[526px] lg:h-[316px]"
          />
        </div>
        <div className="flex flex-col gap-6 pt-12">
          <img
            src={Doc}
            alt=""
            className="lg:w-[264px] sm:w-[630px] w-[380px] h-[316px] sm:h-[526px] lg:h-[316px]"
          />
          <img
            src={Four}
            alt=""
            className="lg:w-[264px] sm:w-[630px] w-[380px] h-[316px] sm:h-[526px] lg:h-[316px]"
          />
        </div>
      </section>
      <section
        className="lg:w-[45.1vw]
       w-[90vw] flex flex-col justify-center sm:h-[200vh]
        items-center lg:items-start h-[120vh] lg:h-fit"
      >
        <p
          className="lg:text-4xl sm:h-[10vh] h-[9vh] sm:text-[52px] 
        text-2xl text-center sm:text-start font-bold"
        >
          OUR MISSION
        </p>

        <p
          className="sm:text-4xl 
           text-xl text-center lg:text-start sm:h-[12vh] lg:w-fit
            font-semibold text-[#206E30] h-[10vh] lg:h-[14vh] sm:w-[80vw] "
        >
          CareKonect: Connecting You to Better Health
        </p>

        <p
          className="sm:text-3xl lg:text-start text-[17px] 
           text-gray-800 w-[360px] text-center lg:text-[20px]
          sm:w-[729px] lg:h-[256px] h-[320px] sm:h-[50vh] lg:leading-[32px] lg:w-[629px]
         sm:leading-[45px] leading-[26px]"
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
          className="lg:w-[21vw] w-[63vw] rounded-md bg-[#206E30] text-xl lg:text-xl font-medium
           text-white lg:h-[9vh] h-[7vh] sm:h-[10vh] sm:w-[60vw] sm:text-[35px] "
        >
          Learn More
        </button>
      </section>
    </main>
  );
}

export default Mission;

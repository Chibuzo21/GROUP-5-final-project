import React from "react";

function Props({ title, text, icon }) {
  return (
    <main>
      <div
        className="flex flex-col  items-center justify-center 
      w-[70vw] lg:w-[27vw] lg:h-[53vh] h-[40vh] sm:h-[76vh] sm:w-full"
      >
        <div
          className="lg:h-[86px] lg:w-[86px] h-[55px] w-[55px] sm:h-[15vh] sm:w-[18vw]  
        lg:text-5xl text-[#206E30] sm:text-7xl flex justify-center items-center
         bg-[#BDF7C9] rounded-full relative top-5  z-10"
        >
          <img src={icon} className="lg:w-fit lg:h-fit w-[8vw] h-[7vh]" />
        </div>
        <div
          className="lg:w-[339px] w-[320px] lg:h-[272px] h-[230px] bg-white
         shadow-xl flex flex-col justify-center items-center sm:w-[85vw] sm:h-[50vh]"
        >
          <div
            className="w-[291px] lg:w-[291px] sm:h-[23vh] sm:w-[691px] lg:h-[110px] 
          h-[17vh] grid justify-items-center"
          >
            <p className="text-[20px] sm:text-[40px] lg:text-[20px] font-semibold">
              {title}
            </p>
            <p
              className="lg:w-[15vw] w-[60vw] h-[72px] text-[#343A40]
               text-[18px] lg:text-[16px] sm:text-[30px] sm:w-[60vw]
               leading-[24px] sm:leading-[44px] lg:leading-[24px] lg:h-[72px] sm:h-[10vh]
         text-center"
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Props;

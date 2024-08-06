import React from "react";

function Props({ title, text, icon }) {
  return (
    <main>
      <div
        className="flex flex-col  items-center justify-center 
      "
      >
        <div
          className="lg:h-[66px] lg:w-[66px] h-[55px] w-[55px] md:h-[8vh] md:w-[10vw]  
        lg:text-2xl text-[#206E30] md:text-3xl flex justify-center items-center
         bg-[#BDF7C9] rounded-full relative top-5  z-10"
        >
          <img src={icon} className="h-1/2 " />
        </div>
        <div
          className="bg-white
         shadow-xl flex flex-col justify-center items-center "
        >
          <div
            className=" py-12 xl:px-9 lg:px-9 md:px-8 px-3
          grid justify-items-center"
          >
            <p className="text-[20px] md:text-[17px] lg:text-[20px] mb-3 font-semibold">
              {title}
            </p>
            <p
              className=" text-[#343A40] md:text-[16px] max-w-[65vw]
               text-[16px] lg:text-[16px] md:max-w-[36vw] lg:max-w-[22vw] lg:max-h-[11vh]
               leading-[24px] md:leading-[30px] lg:leading-[26px] mb-5 md:max-h-[10vh]
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

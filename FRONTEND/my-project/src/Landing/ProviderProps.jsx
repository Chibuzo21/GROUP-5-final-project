import React from "react";

function Props({ title, text, icon }) {
  return (
    <main>
      <div className="flex flex-col  items-center justify-center w-[27vw] h-[53vh]">
        <div className="h-[86px] w-[86px] text-5xl text-[#206E30] flex justify-center items-center bg-[#BDF7C9] rounded-full relative top-5  z-10">
          <img src={icon} />
        </div>
        <div className="w-[339px] h-[272px] bg-white shadow-xl flex flex-col justify-center items-center">
          <div className="w-[291px] h-[110px] grid justify-items-center">
            <p className="text-[20px] font-semibold">{title}</p>
            <p
              className="w-[15vw] h-[72px] text-[#343A40] text-[16px] leading-[24px]
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

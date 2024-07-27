import React from "react";

function Chatprops({ image, text, name, time, num }) {
  return (
    <>
      <section className="h-[15vh] cursor-pointer">
        <div
          className="flex justify-center items-center bg-[#F0F0F0] w-[50vw] rounded-lg
        h-[12vh]"
        >
          <div className="w-[5vw]">
            <img src={image} className="h-[9vh] w-[4vw] z-50 relative" />
          </div>
          <div className="w-[37vw]">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-[#3D3D3D] text-md">{text}</p>
          </div>
          <div className="grid justify-items-end">
            <p className="text-[#206E30] font-medium text-md">{time}</p>
            <p className="text-white text-md bg-[#0B903C] flex justify-center items-center rounded-full w-[2vw] h-[4vh]">
              {num}
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Chatprops;

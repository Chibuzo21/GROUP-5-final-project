import React from "react";
function Chatprops({ image, text, name, time, num }) {
  return (
    <>
      <section className="mb-3 w-full md:w-[80%] cursor-pointer">
        <div className="flex items-center bg-[#F0F0F0] p-2 md:p-4 rounded-lg">
          <div className="flex-shrink-0 px-1">
            <img
              src={image}
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover "
            />
          </div>
          <div className="flex justify-between items-center w-full ">
            <div className="">
              <p className="text-base md:text-lg font-semibold">{name}</p>
              <p className="text-[#3D3D3D] max-w-[50vw] text-sm md:text-base truncate">
                {text}
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-[#206E30] font-medium md:min-w-[5vw] min-w-[10vw] text-sm md:text-base">
                {time}
              </p>
              <p
                className="text-white text-xs md:text-sm  lg:text-md bg-[#0B903C]
                 flex justify-center mr-4
items-center rounded-full h-6 w-6 md:h-8 md:w-8"
              >
                {num}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Chatprops;

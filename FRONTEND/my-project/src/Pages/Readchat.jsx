import React from "react";
function Readchat({ image, name, text, time }) {
  return (
    <section className="mb-3 w-full md:w-[80%]  cursor-pointer">
      <div className="flex items-center bg-[#F0F0F0] p-2 md:p-4 rounded-lg">
        <div className="flex-shrink-0 px-1">
          <img
            src={image}
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover"
          />
        </div>
        <div className="flex justify-between w-full ">
          <div>
            <p className="text-base md:text-lg font-semibold">{name}</p>
            <p className="text-[#3D3D3D] text-xs max-w-[50vw]  md:text-base truncate">
              {text}
            </p>
          </div>
          <div className="">
            <p className="text-[#206E30] font-medium text-sm min-w-[10vw] md:min-w-[5vw] md:text-base">
              {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Readchat;

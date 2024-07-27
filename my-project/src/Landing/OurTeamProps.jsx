import React from "react";

function Props({ profile, name, position, bio }) {
  return (
    <div className="bg-white shadow-xl w-[375px] h-[258px] flex flex-col px-9 gap-3 justify-center rounded-2xl">
      <div className=" flex items-center mx-hy w-[72px] h-[72px] p-15 rounded-full">
        <span
          className="  text-5xl  
        "
        >
          <img src={profile} alt="" srcset="" />
        </span>
      </div>
      <p className="text-[20px] font-semibold">{name}</p>
      <p className="text-[20px] font-semibold">{position}</p>
      <p className="text-[#343A40] text-[18px] font-semibold w-[295px] leading-[24px] h-[72px]">
        {bio}
      </p>
    </div>
  );
}

export default Props;

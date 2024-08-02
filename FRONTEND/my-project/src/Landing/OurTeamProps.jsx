import React from "react";

function Props({ profile, name, position, bio }) {
  return (
    <div
      className="bg-white shadow-xl py-8 md:w-full sm:w-[80%]
    flex flex-col px-6 gap-3 justify-center rounded-2xl "
    >
      <div className=" flex items-center p-15 rounded-full">
        <span
          className="  text-5xl  
        "
        >
          <img src={profile} alt="" srcset="" />
        </span>
      </div>
      <p className="text-[20px] sm:text-[20px] md:text-[20px] font-semibold">
        {name}
      </p>
      <p className="text-[20px] sm:text-[20px] md:text-[20px]   font-semibold">
        {position}
      </p>
      <p
        className="text-[#343A40] sm:text-[18px] md:text-[18px]  md:w-full
       text-[18px] font-semibold lg:leading-[24px] "
      >
        {bio}
      </p>
    </div>
  );
}

export default Props;

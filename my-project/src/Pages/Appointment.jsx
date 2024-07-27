import React, { useEffect, useState } from "react";
import Pic from "../assets/Pic.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Phone from "/phone.svg";
import MyClock from "../Clock";
import MyCalendar from "../Calendar";

import { MdOutlineChat } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("");
  const [active, setActive] = useState(null);
  const [bg, setbg] = useState("");
  const [BtnText, setBtnText] = useState(false);
  const Book = () => {
    setbg("opacity-60");
    setBtnText(true);
    setTimeout(() => {
      navigate("/Successful");
    }, 2000);
  };
  const onclick = (index) => {
    setActive(index);
  };
  const handleChange = (event) => {
    setVisible("hidden");
  };
  const videoclick = () => {
    navigate("/Video");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <>
      <main className="w-full h-full ">
        <section className="w-full h-[354px] bg-[#D1E8D0] flex items-center justify-center ">
          <div className="h-[45vh]  grid justify-items-center">
            <h1 className="text-[72px] font-semibold h-[18vh]">
              Book an <span className="text-[#206E30]">Appointment</span>
            </h1>
            <div className="flex justify-center h-[10vh]">
              <img src={Pic} className="h-[10vh]" />
            </div>
            <p className="text-[25px] font-normal">
              Find the right care at the right time
            </p>
          </div>
        </section>
        <section
          className="w-full h-[1101px] flex justify-center items-center bg-[url('/Female.jpg')]  bg-center bg-no-repeat 
        "
        >
          <section
            className="w-[1170.58px] h-[1039.76px]
         "
          >
            <div className="h-[20vh]">
              <p className="font-medium text-xl h-[5vh]">Enter your Location</p>
              <div className="relative flex items-center">
                <span
                  className={`absolute text-[#A7A7B9] px-5 text-lg ${visible}`}
                >
                  <IoLocationOutline />
                </span>
                <input
                  type="text"
                  onFocus={handleChange}
                  placeholder="City, State"
                  className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] w-[40vw]
              h-[10vh] px-10"
                />
              </div>
            </div>
            <div className="h-[20vh]">
              <p className="font-medium text-xl h-[5vh]">
                Select or Enter the Hospital Name
              </p>
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="Type hospital name"
                  className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] w-[40vw]
                h-[10vh] px-6"
                />
                <span className="text-lg text-[#A7A7B9] absolute right-[57%]">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className="h-[27vh]">
              <p className="font-medium text-xl h-[5vh]">Choose Category</p>
              <div className="flex  flex-row gap-3 items-center w-[45vw] flex-wrap">
                {[
                  "General ",
                  "Pediatrics ",
                  "Cardiology ",
                  "Psychology",
                  "Orthopedist",
                  "Dietitian",
                  "Dentist",
                ].map((category, index) => (
                  <button
                    key={index}
                    onClick={() => onclick(index)}
                    className={` w-[7vw] rounded-xl h-[8vh] shadow-lg ${
                      active === index
                        ? "bg-[#16A362] text-white"
                        : "bg-[#F3F7FA] text-[#A7A7B9]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex h-[73vh] justify-between w-[65vw]">
              <MyCalendar />
              <MyClock />
            </div>
            <div className="flex justify-center items-center h-[29vh]">
              <button
                className={`bg-[#16A362] text-white text-xl
               font-semibold h-[8vh] rounded-md w-[19vw] ${bg}`}
                onClick={Book}
              >
                {BtnText ? "loading..." : "Book appointment"}
              </button>
            </div>
          </section>
        </section>
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(93, 217, 160, 0.4) 1.02%, rgba(66, 169, 110, 0.4) 42.83%, rgba(32, 110, 48, 0.4) 95.09%)",
          }}
          className="w-full h-[272px] flex justify-center items-center"
        >
          <p className="text-[58px] font-bold w-[60vw]">
            Would you prefer{" "}
            <span className="text-[#206E30] ">a virtual consultation?</span>
          </p>
        </div>
        <section className="flex justify-center items-center h-[488px] w-[77vw]">
          <div className="h-[60vh] w-[36vw] ">
            <img src={Phone} className="h-[59vh] w-[36vw]" />
          </div>
          <div className="h-[50vh]  w-[30vw]  ">
            <div className=" flex h-[20vh] flex-col items-center justify-center">
              <p
                className="text-6xl flex justify-center
                 items-center cursor-pointer"
              >
                <BiVideoPlus className="w-[6vw]" />
                <span className="text-3xl font-bold">Video Call</span>
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center h-[30vh]  ">
              <div className=" flex justify-between items-center w-[15vw] h-[30vh] ">
                <span className="w-[4vw]">
                  <MdOutlineChat className=" text-6xl w-[4vw] " />
                </span>
                <span className="text-3xl font-bold w-[10vw]">Chat</span>
              </div>
              <button
                onClick={videoclick}
                className="w-[11vw] relative 
                left-[33%] 
                text-white font-medium text-lg bg-[#343A40] h-[10vh] rounded-md"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Appointment;

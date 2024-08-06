import React, { useEffect, useState } from "react";
import Pic from "../../assets/Pic.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Phone from "/phone.svg";
import MyClock from "../../Clock";
import MyCalendar from "../../Calendar";
import Success from "/success.png";

import { MdOutlineChat } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("");
  const [active, setActive] = useState(null);
  const [bg, setbg] = useState("");
  const [alert, setAlert] = useState(false);
  const [BtnText, setBtnText] = useState(false);
  const Book = () => {
    setbg("opacity-60");
    setBtnText(true);
    setTimeout(() => {
      setAlert(true);
    }, 2000);
  };
  const onclick = (index) => {
    setActive(index);
  };
  const handleChange = (event) => {
    setVisible("hidden");
  };
  const videoclick = () => {
    navigate("/Payment");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <>
      <main
        className={`  ${
          alert ? "overflow-y-hidden h-[88vh] fixed" : "overflow-visible h-full"
        }`}
      >
        <section
          className="w-full py-8 md:py-12 bg-[#D1E8D0] flex items-center 
        justify-center "
        >
          <div className="  grid justify-items-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Book an <span className="text-[#206E30]">Appointment</span>
            </h1>
            <div className="flex justify-center my-4 ">
              <img src={Pic} className="h-auto md:w-2/3 w-1/3 sm:w-1/2" />
            </div>
            <p className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mx-auto">
              Find the right care at the right time
            </p>
          </div>
        </section>
        <section
          className="w-full py-12 flex justify-center items-center bg-[url('/Female.jpg')]  bg-center bg-no-repeat 
        "
        >
          <section
            className="w-4/5
         "
          >
            <div className="h-[20vh]">
              <p className="font-medium text-base sm:text-lg md:text-xl h-[5vh]">
                Enter your Location
              </p>
              <div className="relative flex text-sm md:text-base items-center">
                <span
                  className={`absolute text-[#A7A7B9] px-5 text-base sm:text-lg md:text-xl ${visible}`}
                >
                  <IoLocationOutline />
                </span>
                <input
                  type="text"
                  onFocus={handleChange}
                  placeholder="City, State"
                  className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] 
           px-12  w-9/12 md:py-6 py-4"
                />
              </div>
            </div>
            <div className="h-[20vh]">
              <p className="font-medium text-base sm:text-lg md:text-xl h-[5vh]">
                Select or Enter the Hospital Name
              </p>
              <div className="flex items-center text-sm md:text-base ">
                <input
                  type="text"
                  placeholder="Type hospital name"
                  className=" text-[#A7A7B9] shadow-lg bg-[#F3F7FA] px-12  w-9/12 md:py-6 py-4"
                />
                <span className="text-base sm:text-lg md:text-xl text-[#A7A7B9] absolute right-[35%]">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className=" mb-5 ">
              <p className="font-medium text-base sm:text-lg md:text-xl h-[5vh]">
                Choose Category
              </p>
              <div
                className="flex text-sm md:text-base   flex-row gap-2 items-center 
              md:w-7/12 w-4/5 flex-wrap"
              >
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
                    className={` px-3  rounded-xl py-3 shadow-lg ${
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
            <div
              className="flex md:flex-row flex-col 
            py-8 gap-10 md:gap-0 justify-between xl:w-3/4 md:w-[100%]"
            >
              <MyCalendar />
              <MyClock />
            </div>
            <div className="flex justify-center items-center ">
              <button
                className={`bg-[#16A362] text-white md:text-xl text-base
                font-semibold h-[8vh] rounded-md md:min-w-[19vw] md:px-7 px-6 py-2 ${bg}`}
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
          className="w-full py-12  flex justify-center items-center"
        >
          <p
            className="lg:text-[58px] md:text-[50px] text-[30px] sm:text-[40px]  
          font-bold w-4/5"
          >
            Would you prefer{" "}
            <span className="text-[#206E30] ">a virtual consultation?</span>
          </p>
        </div>
        <section className="flex flex-col md:flex-row justify-center items-center py-10  w-[77vw]">
          <div className=" md:w-1/2 w-3/4 ">
            <img src={Phone} className=" " />
          </div>
          <div className="  w-1/2  ">
            <div className=" flex flex-col items-center justify-center py-7">
              <p
                className="lg:text-6xl text-4xl flex justify-center
                 items-center cursor-pointer"
              >
                <BiVideoPlus className="w-[8vw]" />
                <span className="lg:text-3xl text-2xl font-bold">
                  Video Call
                </span>
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center  ">
              <div className=" flex justify-center items-center mb-5  ">
                <span className="md:w-[5vw] lg:w-[6vw] w-[7vw]">
                  <MdOutlineChat className=" lg:text-6xl md:text-3xl text-2xl " />
                </span>
                <span className="lg:text-3xl text-2xl font-bold w-[10vw]">
                  Chat
                </span>
              </div>
              <button
                onClick={videoclick}
                className=" relative 
                md:left-[33%] 
                text-white font-medium md:text-lg text-sm bg-[#343A40] py-3 px-9 rounded-md"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
        {alert && (
          <section
            onClick={() => {
              setAlert(false);
              setBtnText(false);
              setbg("opacity-100");
            }}
            className=" w-screen fixed z-50 top-0 h-screen bg-black/80 flex justify-center items-center"
          >
            <div
              src={Success}
              className=" h-[75vh] leading-[40px] text-3xl font-medium flex flex-col justify-center items-center text-[#206E30] w-[62vw] shadow-xl rounded-xl bg-gray-300 cursor-pointer "
            >
              <p>You've succesfully booked your appointment.</p>
              <p>Please proceed to the hospital without delay.</p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Appointment;

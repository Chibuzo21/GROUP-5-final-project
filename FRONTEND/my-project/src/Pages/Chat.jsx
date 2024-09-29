import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Nurse1 from "/Nurse1.svg";
import Nurse2 from "/Nurseblue.png";
import Nurse3 from "/Manblack.png";
import Nurse4 from "/lady.png";
import Nurse5 from "/Frame 12452.png";
import Nurse6 from "/blueman.png";
import Nurse7 from "/oga.png";
import Nurse8 from "/unsplash_pTrhfmj2jDA.png";
import Props from "./Imageprops";
import Chatprops from "./Chatprops";
import Readchat from "./Readchat";
import { useNavigate } from "react-router-dom";

function Chat() {
  const [visible, setVisible] = useState(true);
  const handleChange = () => {
    setVisible(false);
  };
  const navigate = useNavigate();
  return (
    <main className="flex flex-col justify-center items-center px-4 md:px-8 w-full">
      <section className="w-full md:w-[90%] flex flex-col text-center py-6 md:py-12">
        <span
          className="text-3xl  cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <IoIosArrowBack />
        </span>
        <p className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold mb-5">
          Chat with a <span className="text-[#206E30]">Doctor</span>
        </p>
        <p className="text-[#206E30] lg:text-4xl md:text-2xl text-xl font-semibold mb-7">
          Messages
        </p>
        <div className="relative">
          {visible && (
            <span
              className="text-[#657964] py-1 top-[8px] sm:top-[25.5%] px-4
            absolute  font-medium"
            >
              <CiSearch />
            </span>
          )}
          <input
            type="text"
            placeholder="Search a Doctor"
            onChange={handleChange}
            className="bg-[#F0F0F0] outline-none  pl-10 font-medium rounded-md
placeholder:text-[#657964] md:text-base text-sm w-full md:w-[70vw] py-2 md:py-3"
          />
        </div>
      </section>
      <section className="w-full md:w-[80%]   mb-6">
        <p className="md:text-2xl  text-lg mb-2 font-medium">Active Now</p>
        <div className="flex flex-wrap justify-center gap-4 w-3/4 px-2 lg:w-full">
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Jane");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse1} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Nurse2");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse2} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Nurse3");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse3} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Nurse4");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse4} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Susan");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse5} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/John");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse6} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Philip");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse7} />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Will");
              }, 1000);
            }}
            className="cursor-pointer"
          >
            <Props image={Nurse8} />
          </div>
        </div>
      </section>
      <section className="w-full md:w-[80%] lg:w-[60%]">
        <p className="md:text-2xl text-lg font-medium mb-2">Message</p>
        <div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Jane");
              }, 1000);
            }}
          >
            <Chatprops
              image={Nurse1}
              name="Dr Jane Doe"
              text="Make sure to take your medication."
              time="12:40 AM"
              num="2"
            />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/John");
              }, 1000);
            }}
          >
            <Readchat
              image={Nurse6}
              name="Dr John Smith"
              text="Visit the hospital if you notice any changes."
              time="4:40 PM"
            />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Philip");
              }, 1000);
            }}
          >
            <Readchat
              image={Nurse7}
              name="Dr Philip Banks"
              text="Your test results are out."
              time="2:40 PM"
            />
          </div>

          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Susan");
              }, 1000);
            }}
          >
            <Chatprops
              image={Nurse5}
              name="Dr. Susan"
              text="Get well soon."
              time="3:42 AM"
              num="1"
            />
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                navigate("/Will");
              }, 1000);
            }}
          >
            <Chatprops
              image={Nurse8}
              name="Dr Will Smith"
              text="Make sure to take your medication."
              time="12:40 AM"
              num="2"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chat;

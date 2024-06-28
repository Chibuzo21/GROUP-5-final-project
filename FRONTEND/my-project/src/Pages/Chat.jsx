import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Nurse1 from "/Nurse1.svg";
import Nurse2 from "/Nurseblue.png";
import Nurse3 from "/Manblack.png";
import Nurse4 from "/Frame 12451.png";
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
    <main className="h-[150vh] flex flex-col justify-center items-center w-full">
      <section className="w-fit flex flex-col text-center h-[36vh]">
        <p className="text-6xl font-semibold h-[13vh]">
          Chat with a <span className="text-[#206E30]">Doctor</span>
        </p>
        <p className="text-[#206E30] text-4xl font-semibold h-[11vh]">
          Messages
        </p>
        <div className=" relative">
          {visible && (
            <span
              className={`text-[#657964] py-1 top-[25.5%]  absolute px-4 font-medium `}
            >
              <CiSearch />
            </span>
          )}
          <input
            type="text"
            placeholder="Search a Doctor"
            onChange={handleChange}
            className="bg-[#F0F0F0] outline-none px-10 rounded-md
             placeholder:text-[#657964] text-md w-[50vw] h-[8vh]"
          />
        </div>
      </section>
      <section className="w-[50vw] h-[20vh] ">
        <p className="text-2xl font-medium h-[7vh]">Active Now</p>
        <div className="flex justify-between w-[50vw] ">
          <Props image={Nurse1} />
          <Props image={Nurse2} />
          <Props image={Nurse3} />
          <Props image={Nurse4} /> <Props image={Nurse5} />
          <Props image={Nurse6} />
          <Props image={Nurse7} />
          <Props image={Nurse8} />
        </div>
      </section>
      <section className="w-[50vw]">
        <p className="text-2xl font-medium h-[9vh]">Message</p>
        <div className="">
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
            />{" "}
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
              name="Dr Philp Banks"
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

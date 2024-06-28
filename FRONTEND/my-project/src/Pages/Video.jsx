import React, { useState } from "react";
import Header from "../Components/Header";
import { BiVideoPlus } from "react-icons/bi";
import Old from "/old.jpg";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "../Components/Footer";

function Video() {
  const [showMark, setShowmark] = useState(false);
  const icon = () => {
    setShowmark(!showMark);
  };
  return (
    <>
      <main className="h-full">
        <Header />
        <section className="w-full h-[354px] bg-[#D1E8D0] flex items-center justify-center ">
          <div className="  grid justify-items-center">
            <h1 className="text-[65px] font-semibold h-[18vh]">
              Video Call <span className="text-[#206E30]">Consultation</span>
            </h1>
            <div className="flex justify-center text-7xl text-[#206E30]">
              <BiVideoPlus className=" " />
            </div>
            <p className="text-[21px] font-normal w-[42vw] text-center">
              Connect with a healthcare professional from the comfort of your
              home
            </p>
          </div>
        </section>
        <section className="flex justify-center items-center w-full h-[1338px]">
          <section className="w-[1170.58px] h-[1189.76px]">
            <div className="flex justify-center h-[45vh]">
              <div className="w-[45vw]">
                <p className="text-4xl font-medium h-[8vh]">
                  Consultation Details
                </p>
                <p className=" h-[14vh] leading-[28px] w-[36vw] text-md">
                  During your videocall consultation, you will have a one-on-one
                  session with a healthcare provider to discuss your health
                  concerns and recieve professional advice.
                </p>
                <p className=" text-[#206E30] text-3xl font-medium ">
                  Consultation Fee: #20,000 per session
                </p>
              </div>
              <div>
                <img src={Old} alt="" srcset="" className="h-[39vh] w-[20vw]" />
              </div>
            </div>
            <div
              className="bg-[url('/bro.jpg')] flex justify-center items-center
              bg-center bg-no-repeat w-[1200.58px] h-[939px]"
            >
              <div className="h-[116vh] w-[45vw] bg-[#D8E2D9] rounded-md grid content-center justify-items-center">
                <p className="text-center text-[#206E30] text-[32px] font-medium h-[12vh]">
                  Payment Method
                </p>
                <div>
                  <div className="h-[15vh]">
                    <p className="font-medium h-[4.3vh]">Card Number</p>
                    <input
                      type="text"
                      placeholder="xxxx xxxx xxxx xxxx"
                      className="bg-white text-[#A7A7B9] rounded-lg w-[38vw] h-[9vh] px-3"
                    />
                  </div>
                  <div className="h-[15vh]">
                    <p className="font-medium h-[4.3vh]">Card Holder Name</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="bg-white text-[#A7A7B9] rounded-lg w-[38vw] h-[9vh] px-3"
                    />
                  </div>
                  <div className="h-[15vh]">
                    <p className="font-medium h-[4.3vh]">Expiry Date</p>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="bg-white text-[#A7A7B9] rounded-lg w-[38vw] h-[9vh] px-3"
                    />
                  </div>
                  <div className="h-[11vh]">
                    <p className="font-medium h-[4.3vh]">CVV</p>
                    <input
                      type="text"
                      placeholder="123"
                      className="bg-white text-[#A7A7B9] rounded-lg w-[38vw] h-[9vh] px-3"
                    />
                  </div>
                  <div className="flex space-x-2 items-center h-[12vh]">
                    <button
                      onClick={icon}
                      className="border-[1px] border-gray-400 rounded-sm h-[2.8vh] w-[1.4vw]"
                    >
                      <span
                        style={{ display: showMark ? "flex" : "none" }}
                        className="text-gray-600"
                        required
                      >
                        <IoMdCheckmark />
                      </span>
                    </button>
                    <p>Save Card for future use</p>
                  </div>
                  <div className="grid content-center justify-items-center">
                    <p className="text-[#206E30] h-[7vh] text-lg font-medium">
                      Your information is secure and encrypted.
                    </p>
                    <button
                      className="bg-[#16A362] text-xl font-medium
                     text-white h-[9vh] w-[11vw] rounded-md"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Video;

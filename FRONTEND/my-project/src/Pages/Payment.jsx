import React, { useState } from "react";
import Header from "../Components/Header";
import { BiVideoPlus } from "react-icons/bi";
import Old from "/old.jpg";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "../Components/Footer";
import { FiShare } from "react-icons/fi";
import { GoThumbsup } from "react-icons/go";
import { MdOutlinePrint } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [showMark, setShowmark] = useState(false);
  const [alert, setAlert] = useState(false);
  const icon = () => {
    setShowmark(!showMark);
  };
  const navigate = useNavigate();
  return (
    <>
      <main
        className={`${
          alert
            ? "overflow-y-hidden h-[88vh] fixed"
            : "overflow-visible min-h-screen"
        }`}
      >
        <section
          className=" bg-[#D1E8D0] flex items-center h-[60vh] md:h-[60vh] lg:h-[75vh]
        justify-center py-8 md:py-15"
        >
          <div className="grid justify-items-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Video Call <span className="text-[#206E30]">Consultation</span>
            </h1>
            <BiVideoPlus className="text-5xl sm:text-7xl md:text-8xl text-[#206E30] my-2" />
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-[80%]
             md:w-[60%] lg:w-[80%] mx-auto"
            >
              Connect with a healthcare professional from the comfort of your
              home
            </p>
          </div>
        </section>
        <section
          className="flex flex-col md:flex-row items-center 
        justify-center py-8 md:py-16"
        >
          <div className="md:w-1/2 text-center md:text-left px-4 md:px-8 lg:px-16">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Consultation Details
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              During your videocall consultation, you will have a one-on-one
              session with a healthcare provider to discuss your health concerns
              and receive professional advice.
            </p>
            <p className="text-2xl sm:text-3xl text-[#206E30] font-medium">
              Consultation Fee: #20,000 per session
            </p>
          </div>
          <div className="mt-8 md:mt-0 ">
            <img
              src={Old}
              alt="Consultation"
              className="w-3/4 md:w-full h-auto mx-auto"
            />
          </div>
        </section>
        <section className="flex justify-center items-center py-8 md:py-16">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-[#D8E2D9] rounded-md p-4 md:p-8 shadow-lg">
            <p className="text-center text-[#206E30] text-2xl md:text-3xl font-medium mb-4">
              Payment Method
            </p>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="w-full bg-white text-[#A7A7B9] rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white text-[#A7A7B9] rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-white text-[#A7A7B9] rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-white text-[#A7A7B9] rounded-lg p-3"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={icon}
                  className="border border-gray-400 rounded w-6 h-6 flex items-center justify-center"
                >
                  {showMark && <IoMdCheckmark className="text-gray-600" />}
                </button>
                <p>Save Card for future use</p>
              </div>
              <p className="text-[#206E30] text-center text-lg md:text-xl font-medium my-4">
                Your information is secure and encrypted.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setAlert(true)}
                  className="bg-[#16A362] text-white text-lg font-medium 
                  py-2 px-6 rounded-md"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {alert && (
          <section
            className="fixed top-0 z-50 bg-black bg-opacity-90 flex h-screen w-screen
          justify-center items-center"
          >
            <div
              className="bg-[#EDF2E8] sm:p-8 p-2 rounded-xl shadow-lg w-11/12 
            md:w-3/3 lg:w-1/2"
            >
              <h2 className="sm:text-4xl text-2xl font-semibold text-center mb-4">
                Thank You for Your Payment!
              </h2>
              <div className="flex justify-center mb-4">
                <GoThumbsup className="text-[#206E30] text-6xl" />
              </div>
              <p className="text-center sm:text-lg text-sm font-medium mb-4">
                Your payment has been successfully processed. You are now ready
                to start your video consultation.
              </p>
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => navigate("/Chat")}
                  className="bg-[#16A362] hover:bg-green-700
                   text-white text-lg font-bold py-2 px-6 rounded-lg"
                >
                  Start Virtual Consultation
                </button>
              </div>
              <div className="text-center sm:text-lg text-sm">
                <p className="mb-2">
                  <span className="text-[#206E30]">Support:</span> If you have
                  any questions or encounter any issues, please contact our
                  support team at:
                </p>
                <p className="text-[#206E30]">
                  Customer Support: support@carekonect.com
                </p>
              </div>
              <div
                className="flex justify-between sm:text-xl text-md text-[#206E30]
               font-medium mt-8"
              >
                <p className="flex items-center">
                  <MdOutlinePrint className="mr-1" /> Print
                </p>
                <p className="flex items-center">
                  <FiShare className="mr-1" /> Share
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Payment;

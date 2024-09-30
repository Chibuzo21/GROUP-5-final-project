import React from "react";
import Logo from "../assets/logo.png";

import { SiAdobe } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Footer() {
  return (
    <>
      <main
        className=" w-full sm:py-7 py-2
    bg-gradient-to-b from-[#76B282] to-[#206E30] flex flex-col justify-center px-2 "
      >
        <section
          className=" md:flex justify-center align-center  text-white w-[100%] text-sm  py-2 px-2
        sm:text-[13px] text-[8px] sm:mb-6 mb-3 "
        >
          <div className="flex md:flex-col md:w-[30%]  w-[100%] gap-2 align-center  ">
            <img src={Logo} alt="" className="sm:w-[224px] w-[35%]  " />
            <p>About us</p>
            <p>Our team</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <section className="flex sm:flex-row flex-col sm:gap-2  lg:w-[60%] w-[100%] align-center justify-between ">
            <div className="flex md:flex-col gap-2 ">
              <p className=" sm:font-medium  sm:text-[15px] text-[10px] sm:mb-3">
                Search By
              </p>
              <p>Specialty</p>
              <p>City</p>
              <p>Insurance</p>
              <p>Hospital</p>
              <p>Center</p>
            </div>

            <div className="flex sm:flex-col ">
              <p className="sm:font-medium font-normal sm:text-[15px] text-[10px] sm:mb-3 mr-5 sm:mr-0 ">
                Are you A Doctor?{" "}
              </p>
              <p>Join CareKonect</p>
            </div>

            <div className="flex md:flex-col sm:gap-2 justify-between ">
              <p className=" sm:font-medium sm:text-[15px] text-[10px] sm:mb-3">
                Need Help?
              </p>
              <p>Medical library</p>
              <p>Contact us</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
              <p>Doctor's privacy policy</p>
            </div>
          </section>
        </section>

        <div className="border-t m-auto border-white w-full sm:w-[88vw] sm:py-2"></div>
        <section className=" flex justify-center align-center">
          <div
            className="flex w-full  sm:w-[94%] sm:flex-row flex-col justify-between sm:text-[13px] 
          lg:text-sm text-[9px] "
          >
            <div className="flex  justify-between align-center sm:w-[40%] lg:w-[35%] w-[70%] mb-2 sm:mb-0 ">
              <div className="text-white font-medium items-center justify-between lg:w-[5.5vw] flex ">
                <span className="sm:text-xl text-[10px]">
                  {" "}
                  <SiAdobe />
                </span>
                <span className="sm:text-sm text-[9px]">Adobe</span>
              </div>
              <div className="flex text-white items-center ">
                <span className="sm:text-xl text-[10px]">
                  <MdCopyright />
                </span>
                <p className="text-gray-300">
                  2024 Adobe Inc. All rights reserved.
                </p>
              </div>
            </div>
            <div
              className="flex justify-between lg:w-[47vw] sm:w-[58%] sm:text-[13px] text-white lg:text-sm
             text-[9px]"
            >
              <div className="flex items-center justify-center">
                <span>English</span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
              <p>Privacy</p>
              <p>Community</p>
              <p>Do not sell or share my personal information</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Footer;

import React from "react";
import Logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Footer() {
  return (
    <>
      <main
        className=" w-full h-[462px]
    bg-gradient-to-b from-[#76B282] to-[#206E30] flex flex-col justify-center px-14 "
      >
        <section className=" flex text-white w-[1240px] h-[341px] text-[16px] font-normal">
          <div className="flex flex-col gap-5 w-[27vw]">
            <img src={Logo} alt="" className="w-[224px] h-[53px]" />
            <p>About us</p>
            <p>Our team</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <section className="flex flex-row gap-14 w-[848px] ">
            <div className="flex flex-col gap-5">
              <p className="h-[7vh] font-medium text-[20px]">Search By</p>
              <p>Specialty</p>
              <p>City</p>
              <p>Insurance</p>
              <p>Hospital</p>
              <p>Center</p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="h-[7vh] font-medium text-[20px]">
                Are you A Doctor?{" "}
              </p>
              <p>Join CareKonect</p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="h-[7vh] font-medium text-[20px]">Need Help?</p>
              <p>Medical library</p>
              <p>Contact us</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
              <p>Doctor's privacy policy</p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="h-[7vh] font-medium text-[20px]">Social</p>
              <div className="flex flex-row gap-1">
                <div
                  className="text-[#206E30] bg-[#BEBEBE] h-[3.4vh] w-[1.7vw]
 flex items-center justify-center rounded-3xl"
                >
                  <FaInstagram />
                </div>
                <p>Instagram</p>
              </div>

              <div className="flex flex-row gap-1">
                <div
                  className="text-black bg-[#BEBEBE] h-[3.4vh] w-[1.7vw]
 flex items-center justify-center rounded-3xl"
                >
                  <FaTwitter />
                </div>
                <p>Twitter</p>
              </div>
              <div className="flex flex-row gap-1">
                <div
                  className="text-[#2e9743] bg-[#BEBEBE] h-[3.4vh] w-[1.7vw]
 flex items-center justify-center rounded-3xl"
                >
                  <FaFacebookF />
                </div>
                <p>Facebook</p>
              </div>
              <div className="flex flex-row gap-1">
                <div
                  className="
 flex items-center justify-center rounded-3xl"
                >
                  <FaLinkedinIn />
                </div>
                <p>LinkedIn</p>
              </div>
            </div>
          </section>
        </section>

        <div className="border-t border-white w-[90vw] h-[6vh]"></div>
        <section>
          <div className="flex w-[90vw] justify-between text-sm ">
            <div className="flex justify-between w-[27vw]">
              <div className="text-white font-medium items-center justify-between w-[5.5vw] flex ">
                <span className="text-xl">
                  {" "}
                  <SiAdobe />
                </span>
                <span>Adobe</span>
              </div>
              <div className="flex text-white items-center ">
                <span className="text-xl">
                  <MdCopyright />
                </span>
                <p className="text-gray-300">
                  2024 Adobe Inc. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex justify-between w-[47vw] text-white">
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

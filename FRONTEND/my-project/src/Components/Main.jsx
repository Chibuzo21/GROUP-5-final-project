import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Context } from "../Context";

function Main() {
  const { setNamewidth, Navwidth, setnavwidth, viewNav, setViewnav } =
    useContext(Context);

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    console.log("im active");
    setShowPopup(!showPopup);
  };
  const showlogout = () => {
    setShowPopup(true);
  };

  const divRef = useRef();
  useEffect(() => {
    const handleOutsideclick = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        console.log("e work");
        togglePopup();
      }
    };
    document.addEventListener("click", handleOutsideclick);
    return () => {
      document.removeEventListener("click", handleOutsideclick);
    };
  }, []);

  return (
    <>
      <Header toggle={showlogout} />
      <section className="relative">
        {console.log("showPopup:", showPopup)}
        {showPopup && (
          <div
            onClick={togglePopup}
            className=" h-[100vh]
          flex justify-center items-center fixed bg-black/60 z-50 inset-0 "
          >
            <div
              ref={divRef}
              className="bg-[#EDF2E8]  rounded-xl shadow-lg w-11/12 
            md:w-2/3 lg:w-3/4 py-12 h-3/4 grid gap-3 "
            >
              <p className="text-center text-gray-900 font-medium text-xl sm:text-3xl mb-6">
                Are you sure you want to log out?
              </p>
              <div className="flex flex-col gap-3 items-center text-white text-md sm:text-xl">
                <button
                  onClick={() => {
                    setTimeout(() => {
                      setNamewidth("hidden");
                      setnavwidth("w-[270px]");
                      setViewnav(!viewNav);
                      togglePopup();
                    }, 800);
                  }}
                  className="bg-red-700 py-3 px-5 w-3/4 rounded-md  "
                >
                  Yes, Logout
                </button>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      togglePopup();
                    }, 800);
                  }}
                  className=" bg-[#206E30] py-3 px-5 w-3/4 rounded-md "
                >
                  No, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Main;

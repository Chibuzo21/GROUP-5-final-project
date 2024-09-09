import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import { MdMenu } from "react-icons/md";
import { Context } from "../Context";
import { useState, useEffect, useContext } from "react";

function Header({ toggle }) {
  const [stickyHeader, setStickyheader] = useState("static");
  const { viewNav, name, width, setWidth, nameWidth, logo, Navwidth } =
    useContext(Context);

  const [togglemenu, settogglemenu] = useState("h-0");
  useEffect(() => {
    const handlescrollHeader = () => {
      const scroll = window.scrollY;

      setStickyheader(scroll > 100 ? "fixed" : "md:static fixed");
    };
    window.addEventListener("scroll", handlescrollHeader);
    //cleanup function
    return () => window.removeEventListener("scroll", handlescrollHeader);
  }, []);
  const handleclick = () => {
    togglemenu === "h-0"
      ? settogglemenu("h-[100vh] overflow-y-hidden  fixed")
      : settogglemenu("h-0");
    // width === "lg:w-[60vw] sm:w-[67vw] md:w-[70vw] hidden"
    //   ? setWidth("w-screen")
    //   : setWidth("lg:w-[60vw] sm:w-[67vw] md:w-[70vw] hidden");

    // width === "sm:w-[78vw] hidden"
    //   ? setWidth("w-screen")
    //   : setWidth("sm:w-[78vw] hidden");

    if (width === "lg:w-[60vw]  md:w-[60vw] md:flex hidden") {
      setWidth("w-screen");
    } else if (width === "md:w-[78vw] md:flex hidden ") {
      setWidth("w-screen");
    } else {
      setWidth("lg:w-[60vw]  md:w-[60vw] md:flex hidden");
    }
  };
  const close = () => {
    setWidth("md:flex hidden lg:w-[60vw]  md:w-[70vw]");
  };

  return (
    <>
      <main
        className={` flex ${stickyHeader} z-40 md:justify-center  justify-around
         items-center h-[10vh]  w-screen 
         bg-white sm:w-full  shadow-md overflow-x-hidden`}
      >
        <div className={`lg:w-[22vw] md:w-[23vw] w-[30vw]`}>
          <img
            src={Logo}
            alt=""
            className=" lg:h-[39.51px]  md:h-[35px] md:w-[138px] lg:w-[167px]
            h-[40px] w-[190px] sm:w-[170px]"
          />
        </div>

        <div
          className={`flex md:flex-row flex-col md:static md:top-0
             top-12 md:bg-white 
             bg-black/100 ${togglemenu} md:z-0 z-50  justify-start items-center
             md:items-center md:justify-between   ${width}  md:text-sm sm:text-xl
              xl:text-[20px] lg:text-lg
              md:gap-0 gap-8 
        font-medium md:text-[#979B98] text-white overflow-x-hidden md:h-[54px] `}
        >
          <p
            className={`${nameWidth} md:text-gray-700 text-blue-300 font-semibold 
            italic`}
          >
            {name}
          </p>
          <NavLink to="/" className="pt-10 md:pt-0" onClick={close}>
            Home
          </NavLink>
          <NavLink to="/About" onClick={close}>
            About
          </NavLink>
          <div className={`${nameWidth}`}>
            <NavLink onClick={close} to="/Payment">
              Virtual Consultation
            </NavLink>
          </div>
          <NavLink onClick={close} to="/Contact">
            Contact us
          </NavLink>
          <div
            className={`${Navwidth} md:flex-row flex-col md:gap-0 gap-7 flex 
            justify-between items-center sm:text-xl md:text-[14px] text-[16px] 
             
            font-medium `}
          >
            {!viewNav && (
              <NavLink
                onClick={close}
                to="/Signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md"
                    : "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
                }
              >
                <button className="lg:py-2 py-1 md:py-1 px-9 lg:px-9 md:px-5">
                  Sign Up
                </button>
              </NavLink>
            )}
            {!viewNav && (
              <NavLink
                onClick={close}
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md"
                    : "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
                }
              >
                {" "}
                <button className=" lg:py-2 px-11 py-1  md:py-1 lg:px-9 md:px-5">
                  Login
                </button>
              </NavLink>
            )}
          </div>
          <div className={`${nameWidth}`}>
            <NavLink>
              <button
                onClick={toggle}
                className=" py-2 md:py-1 px-9 md:px-2 text-white
                 bg-red-500 border-red-500 border-[1px] rounded-md
                  lg:rounded-md md:rounded-sm"
              >
                Log out
              </button>
            </NavLink>
          </div>
        </div>
        <button
          onClick={handleclick}
          className="rounded-md text-2xl md:hidden
   p-3 shadow-md hover:opacity-50"
        >
          <MdMenu />
        </button>
      </main>
    </>
  );
}

export default Header;

import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import { MdMenu } from "react-icons/md";
import { Context } from "../Context";
import { useState, useEffect, useContext } from "react";

function Header() {
  const [stickyHeader, setStickyheader] = useState("static");
  const { viewNav } = useContext(Context);
  const { name } = useContext(Context);
  const { width, setwidth } = useContext(Context);
  const { nameWidth, setNamewidth } = useContext(Context);
  const { logo, setLogo } = useContext(Context);
  const { Navwidth, setnavwidth } = useContext(Context);

  const [togglemenu, settogglemenu] = useState("h-0");
  useEffect(() => {
    const handlescrollHeader = () => {
      const scroll = window.scrollY;
      const fixed = scroll > 100 ? "fixed" : "static";
      setStickyheader(fixed);
    };
    window.addEventListener("scroll", handlescrollHeader);
    //cleanup function
    return () => window.removeEventListener("scroll", handlescrollHeader);
  }, []);
  const handleclick = () => {
    togglemenu === "h-0" ? settogglemenu("h-[68vh]") : settogglemenu("h-0");
  };

  return (
    <>
      <main
        className={` flex ${stickyHeader} z-40 sm:justify-center justify-around
         items-center h-[12vh] w-screen
         bg-white sm:w-full  shadow-md overflow-x-hidden`}
      >
        <div className={`${logo}`}>
          <img
            src={Logo}
            alt=""
            className=" sm:h-[39.51px] sm:w-[167px] h-[40px] w-[190px]"
          />
        </div>

        <div
          className={`flex sm:flex-row flex-col sm:static sm:top-0  top-20 sm:bg-white
             bg-gray-800 ${togglemenu} sm:z-0 z-50 absolute justify-start items-center
             sm:items-center sm:justify-between   ${width}  text-[20px] sm:gap-0 gap-8
        font-medium sm:text-[#979B98] text-white overflow-x-hidden sm:h-[54px] `}
        >
          <p className={`${nameWidth} text-gray-700 font-semibold italic`}>
            {name}
          </p>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Carekonect">CareKonect For Doctors</NavLink>
          <NavLink to="/Contact">Contact us</NavLink>

          <div
            className={`${Navwidth} sm:flex-row flex-col sm:gap-0 gap-8 flex 
            justify-between items-center sm:text-[16px] text-[18px] 
            font-medium `}
          >
            {!viewNav && (
              <NavLink
                to="/Signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md"
                    : "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
                }
              >
                <button className="sm:h-[44px] h-[37px] sm:w-[122px] w-[150px]">
                  Sign Up
                </button>
              </NavLink>
            )}
            {!viewNav && (
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md"
                    : "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
                }
              >
                {" "}
                <button className=" sm:h-[44px] h-[37px] sm:w-[122px] w-[150px]">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
        <button
          onClick={handleclick}
          className="rounded-md text-2xl sm:hidden
   p-3 shadow-md hover:opacity-50"
        >
          <MdMenu />
        </button>
      </main>
    </>
  );
}

export default Header;

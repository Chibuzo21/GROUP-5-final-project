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
  const { logo, setLogo } = useContext(Context);
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

  return (
    <>
      <main
        className={` flex ${stickyHeader} z-40 justify-center items-center h-[12vh] static bg-white w-full shadow-md`}
      >
        <div className={`${logo}`}>
          <img src={Logo} alt="" className=" h-[39.51px] w-[167px]" />
        </div>

        <div
          className={`flex items-center justify-between  ${width} h-[54px] text-[20px]
        font-medium text-[#979B98] `}
        >
          <p>{name}</p>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Carekonect">CareKonect For Doctors</NavLink>
          <NavLink to="/Contact">Contact us</NavLink>

          <div
            className="w-[270px] flex justify-between items-center text-[16px] 
            font-medium "
          >
            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md"
                  : "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
              }
            >
              <button className="h-[44px] w-[122px]">Sign Up</button>
            </NavLink>
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
                <button className=" h-[44px] w-[122px]">Login</button>
              </NavLink>
            )}
          </div>
        </div>
        <button
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

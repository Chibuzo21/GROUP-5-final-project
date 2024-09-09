import React, { useContext, useState } from "react";
import Medical from "../assets/Medical.png";
import { FcGoogle } from "react-icons/fc";
import { IoIosCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import Header from "../Components/Header";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Login() {
  const [showMark, setshowMark] = useState(false);
  const { setViewnav } = useContext(Context);
  const { setName } = useContext(Context);
  const { setWidth } = useContext(Context);

  const { Navwidth, setnavwidth } = useContext(Context);
  const { setNamewidth } = useContext(Context);
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [Passworderror, setPassworderror] = useState(false);
  const [passwordIcon, setPasswordicon] = useState(<IoEyeOutline />);
  const [Passtype, setPasstype] = useState("password");

  const ValidateUsername = (username) => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailpattern.test(username) || username.length >= 4;
  };

  const Validatepassword = (password) => {
    return password.length >= 5;
  };
  const showPassword = () => {
    if (Passtype === "password") {
      setPasstype("text");
      setPasswordicon(<IoEyeOffOutline />);
    } else {
      setPasstype("password");
      setPasswordicon(<IoEyeOutline />);
    }
  };
  const handleclick = (event) => {
    event.preventDefault;
    if (!ValidateUsername(username)) {
      setError(true);
      setViewnav(false);
      setName(null);
    }
    if (!Validatepassword(password)) {
      setPassworderror(true);
      setViewnav(false);
      setName(null);
    }
    if (ValidateUsername(username) && Validatepassword(password)) {
      setTimeout(() => {
        navigate("/");
        setViewnav(true);
        setName(username);
        setWidth("md:w-[78vw] md:flex hidden");

        setnavwidth("hidden");
        setNamewidth("flex");
      }, 600);
    }
  };
  const handleinput = (event) => {
    setusername(event.target.value);
    setError(false);
  };
  const passinput = (event) => {
    setPassword(event.target.value);
    setPassworderror(false);
  };
  const icon = () => {
    setshowMark(!showMark);
  };

  const signbtn = () => {
    navigate("/Signup");
  };

  return (
    <>
      {" "}
      <main
        className="flex md:flex-row flex-col w-screen items-center justify-center 
        md:h-full h-screen
   "
      >
        <div className=" md:mt-0 lg:w-[40%] md:w-[50%] hidden md:flex  lg:m-10">
          <img
            src={Medical}
            className="md:h-full md:w-full h-[70vh]"
          />
        </div>

        <section
          className=" md:w-[46%] w-[85%] flex flex-col justify-center items-center
          "
        >
          <p className="text-center text-2xl lg:text-[38px] font-semibold mb-2">
            LOGIN
          </p>
          <div className="  flex flex-col static px-10 w-full">
            <div>
              <p className="font-medium md:text-[17px] lg:text-[20px] sm:text-2xl text-xl">
                Email or Username
              </p>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={username}
                onChange={handleinput}
                required
                className="border-gray-300 border-[1px] md:w-full xl:w-[570px]
                 outline-[#206E30] lg:h-[51px] px-2 py-1 w-full
            lg:text-[16px] text-[15px] rounded-sm"
              />

              {error && (
                <p className="text-red-700 text-sm">
                  Please enter a valid email or username
                </p>
              )}
            </div>

            <div className=" relative">
              <p className="font-medium md:text-[17px] lg:text-[20px] sm:text-2xl text-xl">Password</p>
              <input
                type={Passtype}
                placeholder="Enter your password"
                value={password}
                onChange={passinput}
                required
                className="border-gray-300 outline-[#206E30] 
                border-[1px] md:w-full xl:w-[570px] lg:h-[51px] py-1
            px-2 text-[15px] rounded-sm w-full"
              />
              <button
                onClick={showPassword}
                className="lg:text-xl md:text-md  absolute lg:top-10  md:bottom-7  top-10 right-5
                lg:bottom-0 lg:right-16 md:right-5"
              >
                {passwordIcon}
              </button>

              {Passworderror && (
                <p className="text-red-700 text-sm">
                  Password must be atleast 5 characters long
                </p>
              )}
            </div>

            <div className="flex items-center flex-row lg:gap-2 gap-3 px-1">
              <button
                onClick={icon}
                className="rounded-sm lg:h-[3vh] h-[2.8vh] sm:w-[2vw] lg:w-[1.5vw] text-2xl 
            flex justify-center items-center border-[#206E30] border-[1px] w-[4vw]"
              >
                <span
                  style={{ display: showMark ? "flex" : "none" }}
                  className="text-[#206E30]"
                >
                  {" "}
                  <IoIosCheckmark />
                </span>
              </button>
              <p className="text-[#535353] font-medium lg:text-[20px] md:text-lg text-md">
                Remember Me
              </p>
            </div>
          </div>
          <div className="flex h-[243px]  w-full justify-center items-center flex-col  lg:gap-2  gap-4">
            <button
              className="text-white bg-[#206E30] md:py-2 lg:py-4 lg:w-1/2 md:w-3/5 rounded-md 
              lg:text-[20px] text-md py-2 w-3/5"
              onClick={handleclick}
            >
              Login
            </button>
            <div className="flex justify-center items-center">
              <span className="border-b bg-gray-800 md:w-[14vw] w-[18vw] lg:w-[9vw]"></span>
              <p className="text-gray-500 lg:text-md text-sm">or</p>
              <span className="border-b bg-gray-800 lg:w-[9vw] w-[18vw] md:w-[14vw]"></span>
            </div>
            <button
              className="text-gray-700 ] rounded-md 
          md:py-2 lg:py-4 lg:w-1/2 md:w-3/5 py-2 w-3/5
          lg:text-[20px] md:text-md text-sm border-[#A2A3A2] font-medium border-[1px] flex-row gap-2
           flex items-center justify-center"
            >
              <span className="text-[14px] text-[#353635]">
                <FcGoogle />
              </span>
              Login with Google
            </button>
            <p className="font-medium md:text-[14px] md:text-xl text-sm">
              Don't have an account?{" "}
              <span className="text-green-700 cursor-pointer" onClick={signbtn}>
                Sign Up
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default Login;

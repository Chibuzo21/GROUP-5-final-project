import React, { useContext, useState } from "react";
import Medical from "../assets/Medical.png";
import { FcGoogle } from "react-icons/fc";
import { IoIosCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

function Body() {
  const [showMark, setshowMark] = useState(false);
  const { viewNav, setViewnav } = useContext(Context);
  const { name, setName } = useContext(Context);
  const { width, setWidth } = useContext(Context);
  const { logo, setLogo } = useContext(Context);
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [Passworderror, setPassworderror] = useState(false);

  const handleclick = (e) => {
    e.preventDefault();
    setViewnav(true);
    setName(username);
    setWidth("w-[78vw]");
    setLogo(" w-[14vw]");
    username.trim() === "" ? setError(true) : navigate("/");
    password.trim() === "" ? setPassworderror(true) : navigate("/");
    username;
  };
  const handleinput = (event) => {
    setusername(event.target.value);
  };
  const passinput = (event) => {
    setPassword(event.target.value);
  };
  const icon = () => {
    setshowMark(!showMark);
  };

  const signbtn = () => {
    navigate("/Signup");
  };
  return (
    <main
      className="grid md:flex w-full justify-center items-center md:h-full h-[188vh] 
    flex-row "
    >
      <div className="w-[560px]">
        <img
          src={Medical}
          className="md:w-[500px] w-[89vw] md:h-[455px] h-[74vh]"
        />
      </div>

      <section
        className="md:h-[86vh] h-[88vh] md:w-[609px] flex flex-col justify-center
         w-[80vw]"
      >
        <p className="text-center text-5xl md:text-[48px] font-semibold lg:h-[10vh] h-[9vh]">
          LOGIN
        </p>
        <div className=" md:h-[213px] w-[609px] flex flex-col h-[37vh] static">
          <div>
            <p className="font-medium md:text-[24px] text-4xl">
              Email or Username
            </p>
            <input
              type="text"
              placeholder="Enter your email or username"
              value={username}
              onChange={handleinput}
              className="border-gray-300 border-[1px] w-[560px] outline-none h-[51px] px-2 
            lg:text-[16px] text-2xl rounded-sm"
            />
          </div>

          {error && (
            <p className="text-red-700 text-sm">Please enter a valid name</p>
          )}

          <div>
            <p className="font-medium md:text-[24px] text-4xl">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={passinput}
              className="border-gray-300 outline-none border-[1px] w-[560px] h-[51px] 
            px-2 md:text-[16px] text-2xl rounded-sm"
            />
            {Passworderror && (
              <p className="text-red-700 text-sm">Please enter your password</p>
            )}
          </div>

          <div className="flex items-center flex-row lg:gap-2 gap-3 px-1">
            <button
              onClick={icon}
              className="rounded-sm lg:h-[3vh] h-[2.8vh] w-[3vw] lg:w-[1.5vw] text-2xl 
            flex justify-center items-center border-[#206E30] border-[1px]"
            >
              <span
                style={{ display: showMark ? "flex" : "none" }}
                className="text-[#206E30]"
              >
                {" "}
                <IoIosCheckmark />
              </span>
            </button>
            <p className="text-[#535353] font-medium md:text-[20px] text-3xl">
              Remember Me
            </p>
          </div>
        </div>
        <div className="flex h-[243px] w-inherent justify-center items-center flex-col  lg:gap-2  gap-4">
          <button
            className="text-white bg-[#206E30] w-[42vw] md:w-[344px] 
          h-[6vh] md:h-[62px] rounded-md md:text-[20px] text-3xl"
            onClick={handleclick}
          >
            Login
          </button>
          <div className="flex justify-center items-center">
            <span className="border-b bg-gray-800 w-[14vw] lg:w-[9vw]"></span>
            <p className="text-gray-500 lg:text-md text-sm">or</p>
            <span className="border-b bg-gray-800 lg:w-[9vw] w-[14vw]"></span>
          </div>
          <button
            className="text-gray-700 lg:w-[23vw] w-[42vw] rounded-md 
          md:h-[44px] h-[6vh] 
          lg:text-sm text-2xl border-[#A2A3A2] font-medium border-[1px] flex-row gap-2
           flex items-center justify-center"
          >
            <span className="text-[14px] text-[#353635]">
              <FcGoogle />
            </span>
            Login with Google
          </button>
          <p className="font-medium md:text-[14px] text-xl">
            Don't have an account?{" "}
            <span className="text-green-700 cursor-pointer" onClick={signbtn}>
              Sign Up
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Body;

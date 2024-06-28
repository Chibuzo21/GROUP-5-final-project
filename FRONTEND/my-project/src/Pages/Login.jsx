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
  const { setLogo } = useContext(Context);
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
        setWidth("w-[78vw]");
        setLogo(" w-[19vw]");
        setnavwidth("w-0");
        setNamewidth("w-[15vw]");
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
      <Header />
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
          className="md:h-[88vh] h-[88vh] md:w-[609px] flex flex-col justify-center
         w-[80vw]"
        >
          <p className="text-center text-5xl md:text-[48px] font-semibold md:h-[8vh] h-[9vh]">
            LOGIN
          </p>
          <div className=" md:h-[230px] w-[609px] flex flex-col h-[37vh] static">
            <div>
              <p className="font-medium md:text-[24px] text-4xl">
                Email or Username
              </p>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={username}
                onChange={handleinput}
                required
                className="border-gray-300 border-[1px] w-[570px] outline-[#206E30] h-[51px] px-2 
            lg:text-[16px] text-2xl rounded-sm"
              />

              {error && (
                <p className="text-red-700 text-sm">
                  Please enter a valid email or username
                </p>
              )}
            </div>

            <div>
              <p className="font-medium md:text-[24px] text-4xl">Password</p>
              <input
                type={Passtype}
                placeholder="Enter your password"
                value={password}
                onChange={passinput}
                required
                className="border-gray-300 outline-[#206E30] border-[1px] w-[570px] h-[51px] 
            px-2 md:text-[16px] text-2xl rounded-sm"
              />
              <button
                onClick={showPassword}
                className="text-xl relative top-1 right-20 "
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
          <div className="flex h-[243px] w-full justify-center items-center flex-col  lg:gap-2  gap-4">
            <button
              className="text-white bg-[#206E30] w-[42vw] md:w-[300px] 
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
              className="text-gray-700 md:w-[300px] w-[42vw] rounded-md 
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
    </>
  );
}
export default Login;

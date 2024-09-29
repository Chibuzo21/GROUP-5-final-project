import { IoMdCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import carekonect from "../assets/carekonect.jpg";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Header from "../Components/Header";

function Signup() {
  const { setViewnav } = useContext(Context);
  const { setName } = useContext(Context);

  const { setLogo } = useContext(Context);
  const { setnavwidth } = useContext(Context);
  const { setNamewidth } = useContext(Context);
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [Passworderror, setPassworderror] = useState(false);
  const [passwordIcon, setPasswordicon] = useState(<IoEyeOutline />);
  const [newpasswordIcon, setnewPasswordIcon] = useState(<IoEyeOutline />);
  const [Passtype, setPasstype] = useState("password");
  const [newPasstype, setnewPasstype] = useState("password");
  const [showMark, setShowmark] = useState(false);
  const [newPasserror, setNewpasserror] = useState(false);
  const icon = () => {
    setShowmark(!showMark);
  };
  const ValidateUsername = (username) => {
    return username.length >= 4;
  };
  const ValidateEmail = (email) => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailpattern.test(email);
  };
  const ValidatePassword = (password) => {
    return password.length >= 5;
  };
  const ValidatenewPassword = (newpassword) => {
    return newpassword === password;
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
  const shownewPassword = () => {
    if (newPasstype === "password") {
      setnewPasstype("text");
      setnewPasswordIcon(<IoEyeOffOutline />);
    } else {
      setnewPasstype("password");
      setnewPasswordIcon(<IoEyeOutline />);
    }
  };
  const handleclick = (e) => {
    e.preventDefault();

    if (!ValidateEmail(email)) {
      setEmailerror(true);
    }
    if (!ValidatenewPassword(newpassword)) {
      setNewpasserror(true);
    }
    if (!ValidateUsername(username)) {
      setError(true);
    }
    if (!ValidatePassword(password)) {
      setPassworderror(true);
    }

    if (
      ValidateUsername(username) &&
      ValidatePassword(password) &&
      ValidateEmail(email) &&
      ValidatenewPassword(newpassword)
    ) {
      setTimeout(() => {
        navigate("/");
        setViewnav(true);
        setName(username);
        setnavwidth("hidden");
        setNamewidth(true);
        localStorage.setItem("username", username);
        localStorage.setItem("isLoggedin", "true");
      }, 600);
      setIsLoggedin(true);
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
  const emailInput = (event) => {
    setEmail(event.target.value);
    setEmailerror(false);
  };
  const newinput = (event) => {
    setnewPassword(event.target.value);
    setNewpasserror(false);
  };
  const logbtn = () => {
    navigate("/Login");
  };

  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly lg:h-[120vh] md:h-[70vh]  py-3 lg:py-4">
        <section className=" md:flex  md:w-[43%]   xl:w-[42%] hidden h-3/4 lg:h-5/6 lg:py-2">
          <img
            className="rounded-md w-full  lg:h-[78vh] md:h-[60vh] "
            src={carekonect}
            alt="image"
          />
        </section>
        <section className="  md:w-[50%] w-[85%]  flex flex-col h-3/4 md:py-3 lg:py-0 lg:h-full">
          <div className="">
            <p className=" font-semibold text-2xl md:text-4xl lg:text-[38px] text-center">
              SIGNUP
            </p>
          </div>
          <div className=" w-full grid gap-5">
            <div className="  ">
              <div>
                <p className="font-medium lg:text-[20px] text-[17px]">
                  Username
                </p>
                <input
                  className="w-full py-3 px-2 outline-[#206E30] border-[1px] border-gray-300
                   rounded-sm"
                  type="text"
                  value={username}
                  onChange={handleinput}
                  required
                  placeholder="Enter your username"
                />
                {error && (
                  <p className="text-red-700 text-sm">
                    Please enter a valid username
                  </p>
                )}
              </div>
              <div>
                <p className="font-medium text-[17px] lg:text-[20px]">Email</p>
                <input
                  className="w-full py-3 px-2  outline-[#206E30] border-[1px] border-gray-300 rounded-sm"
                  type="text"
                  placeholder="Enter your email adress"
                  required
                  onChange={emailInput}
                  value={email}
                />
                {emailerror && (
                  <p className="text-red-700 text-sm">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <div className="relative">
                <p className="font-medium text-[17px] lg:text-[20px]">
                  Password
                </p>
                <input
                  className="w-full px-2 py-3 outline-[#206E30] border-[1px] border-gray-300 rounded-sm"
                  type={Passtype}
                  value={password}
                  onChange={passinput}
                  required
                  placeholder="Create a password"
                />
                <button
                  onClick={showPassword}
                  className="text-xl absolute top-[50%] right-[5%] "
                >
                  {passwordIcon}
                </button>
                {Passworderror && (
                  <p className="text-red-700 text-sm">
                    Password must be atleast 5 characters long
                  </p>
                )}
              </div>
              <div className="h-[13vh] relative">
                <p className="font-medium text-[17px] lg:text-[20px]">
                  Confirm password
                </p>
                <input
                  className="w-full px-2 py-3 outline-[#206E30] border-[1px]
                 border-gray-300 rounded-sm"
                  type={newPasstype}
                  value={newpassword}
                  onChange={newinput}
                  required
                  placeholder="Re-enter password"
                />
                <button
                  onClick={shownewPassword}
                  className="text-xl absolute sm:top-[30%] lg:top-[50%] top-[50%] right-[5%] "
                >
                  {newpasswordIcon}
                </button>
                {newPasserror && (
                  <p className="text-red-700 text-sm">
                    This password does not match your previous one
                  </p>
                )}
              </div>
              <div className="flex space-x-2  items-center lg:py-3">
                <button
                  className="border-[1px] border-[#206E30] rounded-sm h-[2.8vh] w-[1.4vw] md:w-[4vw] lg:w-[1.4vw]"
                  onClick={icon}
                >
                  <span
                    style={{ display: showMark ? "flex" : "none" }}
                    className="text-[#206E30]"
                    required
                  >
                    <IoMdCheckmark />
                  </span>
                </button>
                <p className="text-[#535353] font-medium">
                  I agree to the terms and conditions
                </p>
              </div>
            </div>
            <div className=" md:h-full h-[173px]">
              <div className="w-full flex items-center justify-center flex-col gap-1">
                <button
                  onClick={handleclick}
                  className="text-white bg-[#206E30] md:py-2 lg:py-4 lg:w-1/2 md:w-3/5 rounded-md 
              lg:text-[20px] text-md py-2 w-3/5"
                >
                  Sign Up
                </button>
                <div className="flex items-center justify-center space-x-2">
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
                  <FcGoogle className="w-8 h-6" />
                  <span className="text-[14px] text-[#353635]">
                    Sign up with Google
                  </span>
                </button>
                <div className="flex items-center justify-center space-x-1 font-medium md:text-[13px] lg:text-[14px] text-sm">
                  <p className="">Already have an account?</p>
                  <span
                    className="text-green-800 cursor-pointer"
                    onClick={logbtn}
                  >
                    Log in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;

import Header from "../Components/Header";
import { IoMdCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import carekonect from "../assets/carekonect.jpg";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Signup() {
  const { setViewnav } = useContext(Context);
  const { setName } = useContext(Context);
  const { setWidth } = useContext(Context);
  const { setLogo } = useContext(Context);
  const { setnavwidth } = useContext(Context);
  const { setNamewidth } = useContext(Context);
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
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
      <div className="flex items-center justify-center w-full h-[88vh] ">
        <section className="flex items-center justify-center w-[580px]">
          <img
            className="rounded-md w-[500px] h-[70vh]"
            src={carekonect}
            alt="image"
          />
        </section>
        <section className="  w-[609px]  h-[88vh] flex flex-col items-start">
          <div className="flex  h-[9vh] w-full">
            <p className="w-full font-semibold flex items-center justify-center text-[38px]">
              SIGNUP
            </p>
          </div>
          <div className="h-[79vh] w-full">
            <div className="h-[55.4vh]">
              <div>
                <p className="font-medium md:text-[20px]">Username</p>
                <input
                  className="w-[40vw] h-[5vh] px-2 outline-[#206E30] border-[1px] border-gray-300 rounded-sm"
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
                <p className="font-medium md:text-[20px]">Email</p>
                <input
                  className="w-[40vw] px-2 h-[5vh] outline-[#206E30] border-[1px] border-gray-300 rounded-sm"
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
              <div>
                <p className="font-medium md:text-[20px]">Password</p>
                <input
                  className="w-[40vw] px-2 h-[5vh] outline-[#206E30] border-[1px] border-gray-300 rounded-sm"
                  type={Passtype}
                  value={password}
                  onChange={passinput}
                  required
                  placeholder="Create a password"
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
              <div className="h-[13vh]">
                <p className="font-medium md:text-[20px]">Confirm password</p>
                <input
                  className="w-[40vw] px-2 h-[5vh] outline-[#206E30] border-[1px]
                 border-gray-300 rounded-sm"
                  type={newPasstype}
                  value={newpassword}
                  onChange={newinput}
                  required
                  placeholder="Re-enter password"
                />
                <button
                  onClick={shownewPassword}
                  className="text-xl relative  top-1 right-20 "
                >
                  {newpasswordIcon}
                </button>
                {newPasserror && (
                  <p className="text-red-700 text-sm">
                    This password does not match your previous one
                  </p>
                )}
              </div>
              <div className="flex space-x-2  items-center">
                <button
                  className="border-[1px] border-[#206E30] rounded-sm h-[2.8vh] w-[1.4vw]"
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
            <div className="h-[22vh] ">
              <div className="w-[40vw] flex items-center justify-center flex-col gap-1">
                <button
                  onClick={handleclick}
                  className="bg-green-800 rounded-md w-72 h-[6vh] text-white md:text-[17px]"
                >
                  Sign Up
                </button>
                <div className="flex items-center justify-center space-x-2">
                  <div className="border-[1px] border-gray-200 w-[9vw] h-0"></div>
                  <small>or</small>
                  <div className="border-[1px] border-gray-200 w-[9vw] h-0"></div>
                </div>
                <button className="flex items-center justify-center space-x-1 rounded-md w-72 h-10 border-[1px] border-black">
                  <FcGoogle className="w-8 h-6" />
                  <small>Sign up with Google</small>
                </button>
                <div className="flex items-center justify-center space-x-1">
                  <p className="flex font-bold">Already have an account?</p>
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
      </div>
    </>
  );
}

export default Signup;

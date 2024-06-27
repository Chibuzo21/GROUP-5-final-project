import Header from "../Components/Header"
import { IoMdCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import carekonect from "../assets/carekonect.jpg";
import { SlScreenDesktop } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";

function Signup() {
  return (
   <main classname="h-full">  
    <Header />
    <div className="flex items-center justify-center w-[98vw] h-[88vh] overflow-hidden">
      <section className="flex items-center justify-end h-[90vh] w-1/2">
        <img
          className="rounded-md w-[40vw] h-[70vh]"
          src={carekonect}
          alt="image"
        />
      </section>
      <section className="flex items-start justify-center flex-col h-[90vh] w-1/2  ">
        <div className="flex items-start justify-center flex-col h-[90vh] w-full ml-5">
          <strong className="w-full flex items-center justify-center text-3xl">
            SIGNUP
          </strong>
          <div className="h-[70vh] w-full flex justify-center flex-col gap-2">
            <div>
              <p className="font-bold">Last Name</p>
              <input
                className="w-[40vw] h-[5vh] border-[1px] border-gray-300 rounded-sm"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <p className="font-bold">First Name</p>
              <input
                className="w-[40vw] h-[5vh] border-[1px] border-gray-300 rounded-sm"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <p className="font-bold">Password</p>
              <input
                className="w-[40vw] h-[5vh] border-[1px] border-gray-300 rounded-sm"
                type="text"
                placeholder="Create a password"
              />
            </div>
            <div>
              <p className="font-bold">Confirm password</p>
              <input
                className="w-[40vw] h-[5vh] border-[1px] border-gray-300 rounded-sm"
                type="text"
                placeholder="Re-enter password"
              />
            </div>
            <div className="flex space-x-2">
              <button className="border-[2px] border-gray-400 rounded-md">
                <IoMdCheckmark />
              </button>
              <small className="text-gray-400">
                I agree to the terms and conditions
              </small>
            </div>
            <div className="w-[40vw] flex items-center justify-center flex-col gap-2">
              <button className="bg-green-800 rounded-md w-72 h-10 text-white">
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
                <a className="text-green-800" href="">
                  Log in
                </a>
              </div>
              <div>
                <SlScreenDesktop />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
                </main>
  );
}

export default Signup;

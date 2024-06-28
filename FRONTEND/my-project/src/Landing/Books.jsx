import React, { useState } from "react";
import Book from "../assets/Book.jpg";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Books({ error, setError }) {
  const [btnText, setBtnText] = useState(false);
  const [bg, setBg] = useState("");

  const handleclick = () => {
    setBtnText(true);
    setTimeout(() => {
      setError(true);
      setBtnText(false);
    }, 1000);
  };
  const navigate = useNavigate();
  const Logbtn = () => {
    setBg("opacity-60");
    setTimeout(() => {
      navigate("/Signup");
    }, 800);
  };
  const cancel = () => {
    setError(false);
  };
  return (
    <>
      <main
        className="sm:h-[640px] h-[87vh] relative bg-cover bg-center w-screen grid content-center justify-items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, 
    rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.9) 100%),url(${Book})`,
        }}
      >
        <section
          className="flex justify-center text-center items-center flex-col
         sm:h-[295px] sm:gap-4 gap-7"
        >
          <p className="sm:text-6xl text-4xl font-medium text-[#16A362]">
            Book Healthcare
          </p>
          <p className="text-white sm:text-6xl text-4xl font-medium  ">
            <span className="text-[#16A362]">Appointments</span> with Ease
          </p>
          <p className="text-white sm:text-2xl text-lg font-normal sm:h-[8vh] h-[10vh]">
            Connecting you with the right healthcare professionals quickly and
            conveniently
          </p>
          <button
            className="text-white w-[272px] h-[56px]  f
        ont-bold sm:text-xl text-lg bg-[#16A362] disabled:opacity-50 rounded-md"
            disabled={btnText}
            onClick={handleclick}
          >
            {btnText ? "loading..." : "Book an appointment"}
          </button>
        </section>
        {error && (
          <section className="w-screen h-screen flex justify-center items-center fixed bg-black/60 z-50 top-0">
            <section
              className="bg-gray-300 flex justify-center items-center flex-col 
      sm:h-[475px] h-[460px] rounded-3xl sm:w-[843px] w-[360px] font-semibold z-40 shadow-xl
        bottom-28  sm:text-[19px] text-[18px] "
            >
              <div className="sm:h-[20vh] h-[15vh]">
                <span
                  className="sm:w-[90.35px] w-[70px] h-[70px] sm:h-[90.35px] text-[#D02F2F] 
                  sm:text-7xl text-5xl bg-gray-200 rounded-full 
        flex items-center justify-center cursor-pointer"
                  onClick={cancel}
                >
                  <RxCross2 />
                </span>
              </div>
              <p className="h-[6vh]">Oops, You Are Not Logged In!</p>
              <p className="text-gray-600 sm:w-[719px] w-[323px] text-center h-[25vh] sm:h-[20vh]">
                To book an appointment, Please sign up or log in to your
                CareKonect account. This helps us provide you with personalized
                healthcare services and ensure a seamless booking experience.{" "}
              </p>
              <button
                onClick={Logbtn}
                className={`h-[41.42px] w-[202.83px] bg-[#16A362] text-sm
         text-white ${bg}`}
              >
                SIGN UP
              </button>
            </section>
          </section>
        )}
      </main>
    </>
  );
}

export default Books;

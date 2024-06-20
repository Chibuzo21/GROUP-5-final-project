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
      navigate("/Login");
    }, 800);
  };
  const cancel = () => {
    setError(false);
  };
  return (
    <>
      <main
        className="md:h-[640px] h-[79vh] relative bg-cover bg-center w-screen grid content-center justify-items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, 
    rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.9) 100%),url(${Book})`,
        }}
      >
        <section className="flex justify-center items-center flex-col h-[295px] gap-4 ">
          <p className="text-6xl font-medium text-[#16A362]">Book Healthcare</p>
          <p className="text-white text-6xl font-medium ">
            <span className="text-[#16A362]">Appointments</span> with Ease
          </p>
          <p className="text-white text-2xl font-normal h-[8vh]">
            Connecting you with the right healthcare professionals quickly and
            conveniently
          </p>
          <button
            className="text-white w-[272px] h-[56px]  f
        ont-bold text-xl bg-[#16A362] disabled:opacity-50 rounded-md"
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
      h-[475px] rounded-3xl w-[843px] font-semibold z-40 shadow-xl  bottom-28  text-[19px] "
            >
              <div className="h-[20vh]">
                <span
                  className="w-[90.35px]  h-[90.35px] text-[#D02F2F] text-7xl bg-gray-200 rounded-full 
        flex items-center justify-center cursor-pointer"
                  onClick={cancel}
                >
                  <RxCross2 />
                </span>
              </div>
              <p className="h-[6vh]">Oops, You Are Not Logged In!</p>
              <p className="text-gray-600 w-[719px] text-center h-[20vh]">
                To book an appointment, Please sign up or log in to your
                CareKonect account. This helps us provide you with personalized
                healthcare services and ensure a seamless booking experience.{" "}
              </p>
              <button
                onClick={Logbtn}
                className={`h-[41.42px] w-[202.83px] bg-[#16A362] text-sm
         text-white ${bg}`}
              >
                GO TO LOGIN PAGE
              </button>
            </section>
          </section>
        )}
      </main>
    </>
  );
}

export default Books;

import React, { useContext, useState } from "react";
import Book from "../assets/Book.jpg";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

function Books({ error, setError }) {
  const [btnText, setBtnText] = useState(false);
  const [bg, setBg] = useState("");
  const { nameWidth, setNamewidth } = useContext(Context);

  const handleclick = () => {
    setBtnText(true);
    if (nameWidth === "hidden") {
      setTimeout(() => {
        setError(true);
        setBtnText(false);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/x");
      }, 1000);
    }
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
        className="py-8 md:py-12 h-screen relative bg-cover bg-center w-screen grid 
        content-center justify-items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, 
    rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.9) 100%),url(${Book})`,
        }}
      >
        <section
          className="flex justify-center text-center items-center flex-col
          md:gap-5 gap-5 lg:gap-6"
        >
          <p className="lg:text-6xl md:text-5xl text-4xl font-medium text-[#16A362]">
            Book Healthcare
          </p>
          <p className="text-white md:text-5xl lg:text-6xl text-4xl font-medium  ">
            <span className="text-[#16A362]">Appointments</span> with Ease
          </p>
          <p
            className="text-white ] 
          md:text-xl lg:text-2xl text-lg font-normal sm:h-[8vh] w-[80%] mb-2"
          >
            Connecting you with the right healthcare professionals quickly and
            conveniently
          </p>
          <button
            className="text-white py-4 md:px-4 px-8 md:text-lg md:min-w-[20vw]
               font-bold lg:text-xl text-lg bg-[#16A362] disabled:opacity-50 rounded-md"
            disabled={btnText}
            onClick={handleclick}
          >
            {btnText ? "loading..." : "Book an appointment"}
          </button>
        </section>
        {error && (
          <section
            className="w-screen h-screen 
          flex justify-center items-center fixed bg-black/60 z-50 top-0"
          >
            <section
              className="bg-gray-300 flex justify-center items-center flex-col 
      lg:h-[475px] h-[420px] rounded-3xl lg:w-[843px] w-[390px] font-semibold 
      z-40 shadow-xl sm:h-[70vh] sm:w-[90vw]
        bottom-28  lg:text-[19px] text-[18px] sm:text-[28px] "
            >
              <div className="lg:h-[20vh] sm:h-[22vh] h-[15vh]">
                <span
                  className="lg:w-[90.35px] w-[70px] h-[70px] lg:h-[90.35px] text-[#D02F2F] 
                  lg:text-7xl sm:text-8xl text-5xl bg-gray-200 rounded-full sm:h-[140px]
sm:w-[140px]        flex items-center justify-center cursor-pointer"
                  onClick={cancel}
                >
                  <RxCross2 />
                </span>
              </div>
              <p className="h-[6vh] lg:h-[6vh] sm:h-[8vh] ">
                Oops, You Are Not Logged In!
              </p>
              <p
                className="text-gray-600 sm:w-[570px] lg:w-[719px] w-[323px] 
              text-center sm:h-[27vh] h-[25vh] lg:h-[20vh]"
              >
                To book an appointment, Please sign up or log in to your
                CareKonect account. This helps us provide you with personalized
                healthcare services and ensure a seamless booking experience.{" "}
              </p>
              <button
                onClick={Logbtn}
                className={`h-[41.42px] w-[202.83px] lg:h-[41.42px] sm:h-[7vh] sm:w-[40vw] 
                  lg:w-[202.83px] bg-[#16A362] text-sm lg:text-sm sm:text-xl
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

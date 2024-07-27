import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Nurseblue from "/Nurseblue.png";

const Nurse2 = () => {
  const [messages, setMessages] = useState([
    { text: "I'm all ears.", sender: "doctor" },
    { text: "Visit the hospital if you notice any changes.", sender: "doctor" },
    { text: "Hello Dr. Philip", sender: "user" },
    { text: "I have a complaint", sender: "user" },
    { text: "I'm all ears.", sender: "doctor" },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm all ears.", sender: "doctor" },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className=" w-[50vw] bg-white shadow-lg rounded-lg">
          <div
            className="flex items-center  p-4 bg-[#206E30] w-[50vw] h-[15vh]
           text-white rounded-t-lg"
          >
            <div
              className="text-3xl  cursor-pointer "
              onClick={() => {
                navigate("/Chat");
              }}
            >
              <IoIosArrowBack />
            </div>
            <div className="flex items-center w-[33vw] justify-center">
              <div className="w-[6vw] h-[9vh]">
                {" "}
                <div className="w-[4vw] h-[5vh] rounded-full">
                  <img src={Nurseblue} alt="" srcset="" />
                </div>
              </div>
              <div className=" w-[18vw]">
                <h2 className="text-2xl font-semibold ">Dr. Philip Banks</h2>
                <p className="text-lg">Online</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[22vw]">
              <span className="text-3xl w-[5vw] cursor-pointer ">
                <MdOutlineLocalPhone />
              </span>
              <span className="text-3xl cursor-pointer">
                <MdOutlineVideocam />
              </span>
            </div>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto h-96">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex justify-${
                  msg.sender === "user" ? "end" : "start"
                }`}
              >
                <div
                  className={`${
                    msg.sender === "user"
                      ? "bg-[#206E30] text-white"
                      : "bg-gray-200"
                  } p-3 rounded-lg h-[9vh] `}
                >
                  <p className="text-xl">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 text-2xl">
                <span>
                  <IoCameraOutline />
                </span>
              </button>
              <input
                type="text"
                className="w-full border rounded-full p-2"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="bg-[#206E30] text-white p-2 rounded-full"
                onClick={sendMessage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.293l3.293 3.293-1.414 1.414L11 10.414V15H9v-4.586l-1.879 1.879-1.414-1.414L9 6.707V4h2v2.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nurse2;

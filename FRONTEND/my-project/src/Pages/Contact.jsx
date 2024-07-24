import { MdOutlineMailOutline } from "react-icons/md";
import Frame from "../assets/Frame.jpg";
import { FiPhone } from "react-icons/fi";
import { FaqData } from "./FaqData";
import { VscAdd } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const FAQitem = ({ isOpen, faq, onClick }) => (
  <div className="h-fit w-[48vw] ">
    <div className="flex w-full items-center justify-between h-[10vh]">
      <p className="font-semibold text-lg">{faq.question}</p>
      <button onClick={onClick} className="text-2xl font-bold ">
        {isOpen ? <RxCross1 /> : <VscAdd />}
      </button>
    </div>
    {isOpen && <div className="leading-[32px]">{faq.answer}</div>}
    <div className="border-t border-black w-[48vw] h-[6vh]"></div>
  </div>
);

function Contact() {
  const [name, setName] = useState("");
  const [emailerror, setEmailerror] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const ValidateEmail = (email) => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailpattern.test(email);
  };
  const sendMessage = (e) => {
    // e.preventDefault();
    if (!ValidateEmail(email)) {
      setEmailerror(true);
    }
    if (name.length < 5) {
      setError(true);
    }
  };
  const [openIndex, setOpenindex] = useState(null);
  const handleToggle = (index) => {
    setOpenindex(openIndex === index ? null : index);
  };
  return (
    <main className="overflow-x-hidden">
      <section
        className="h-[65vh] w-screen"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <div
          className="text-white h-full w-[50vw] flex items-center justify-center 
        text-[56px] leading-[67.77px] font-bold"
        >
          CONTACT US
        </div>
      </section>
      <section className="h-[150vh] w-[100vw] flex items-center justify-center">
        <div className="h-[794px] w-[1240px] flex items-center justify-center">
          <div className="h-[794px] w-1/2 flex items-start justify-center flex-col gap-1">
            <h1 className="text-5xl font-bold h-[58px] w-[293px]">
              Get In Touch
            </h1>
            <div className=" h-[30vh] w-[30vw] gap-2">
              <p className="h-[10vh]">
                Feel free to contact us and we'll get back <br /> to you as soon
                as we can.
              </p>

              <p>
                We're here to help you with any questions <br /> or support you
                need.
              </p>
            </div>
          </div>
          <div className="h-full w-1/2 flex items-center justify-center">
            <div className="h-full w-full flex items-center justify-center rounded-xl bg-gray-400 gap-3">
              <div className="w-[43vw] h-[90vh] grid ">
                <div>
                  {" "}
                  <p className="font-bold text-2xl">Name</p>
                  <input
                    className="w-[43vw] h-[10vh] border-[1px] border-gray-300 rounded-md p-4"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setError(false);
                    }}
                    required
                  />
                  {error && (
                    <p className="text-sm text-red-600">
                      name must be atleast 5 characters long
                    </p>
                  )}
                </div>
                <div className="">
                  <p className="font-bold text-2xl h-[8vh]">Email Address</p>
                  <input
                    className="w-[43vw] h-[10vh] border-[1px] border-gray-300 rounded-md p-4"
                    type="text"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailerror(false);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                  {emailerror && (
                    <p className="text-sm text-red-600">
                      Invalid email address
                    </p>
                  )}
                </div>
                <p className="font-bold text-2xl">Leave a Message</p>
                <textarea
                  className="w-[43vw] h-[25vh] border-[1px] border-gray-300 rounded-md p-4"
                  type="text"
                  placeholder="Message"
                  required
                />
                <div className="flex items-center justify-end">
                  <button
                    onClick={sendMessage}
                    className="w-[15vw] h-[8vh] text-white bg-green-700 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" w-full h-[430px] flex justify-center items-center
       bg-gradient-to-b from-[#5DD9A0] via-[#42A96E] to-[#206E30] flex-row gap-10"
      >
        <div
          className="bg-white w-[366px] h-[287px] rounded-lg flex 
        justify-center items-start flex-col  px-5"
        >
          <span className="text-[#206E30] text-[10vh] text-left h-[14vh]">
            <MdOutlineMailOutline />
          </span>
          <p className="text-md font-bold h-[6vh] ">Email:</p>
          <div className="grid gap-2 font-normal">
            <p>General inquiries: info@CareKonect.com</p>
            <p>Customer Support: support@CareKonect.com</p>
            <p>Patnerships: patnerships@CareKonect.com</p>
          </div>
        </div>
        <div
          className="bg-white w-[366px] h-[287px] rounded-lg flex 
        justify-center items-start flex-col  px-5"
        >
          <span className="text-[#206E30] text-[10vh] text-left h-[14vh]">
            <FiPhone />
          </span>
          <p className="text-md font-bold h-[6vh] ">Phone:</p>
          <div className="grid gap-2 font-normal">
            <p>Main Line: 1-800-123-4567</p>
            <p>Customer Support: 1-800-765-4321</p>
          </div>
        </div>
        <div></div>
      </section>
      <section className="flex justify-center items-center h-[790px] ">
        <section className="flex h-[640px] w-[1140px]">
          <section className="h-[60vh] w-[38vw]">
            <p className="text-[#206E30] h-[3vh]">Got Questions?</p>
            <p className="text-[48px] text-[#343A40] w-[40vw] h-[26vh] font-bold">
              Frequently Asked Questions
            </p>
            <p className="text-[#206E30] text-[16px] w-[32vw] h-[12vh] ">
              Still have questions that aren't covered? visit our help desk
              today and get the answers you need.
            </p>
            <button className="bg-[#16A362] text-white h-[59px] w-[304px] rounded-lg">
              Contact our Help Desk
            </button>
          </section>
          <section className="w-[50vw] h-[70vh]">
            {FaqData.map((faq, index) => (
              <FAQitem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
export default Contact;

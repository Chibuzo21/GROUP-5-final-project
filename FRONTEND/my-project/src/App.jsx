import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/contact/Contact";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Carekonect from "./Pages/Carekonect";
import "./App.css";
import { useRef, useState } from "react";
import { Context } from "./Context";

import Appointment from "./Pages/Appointment/Appointment";
import Payment from "./Pages/Payment";
import Chat from "./Pages/Chat";
import John from "./Pages/Privatechats/John";
import Jane from "./Pages/Privatechats/Jane";
import Will from "./Pages/Privatechats/Will";
import Susan from "./Pages/Privatechats/Susan";
import Philip from "./Pages/Privatechats/Philip";

import Nurse2 from "./Pages/Privatechats/Nurse2";
import Nurse3 from "./Pages/Privatechats/Nurse3";
import Nurse4 from "./Pages/Privatechats/Nurse4";
function App() {
  const [viewNav, setViewnav] = useState(false);
  const [name, setName] = useState();
  const [nameWidth, setNamewidth] = useState("hidden");
  const [width, setWidth] = useState("lg:w-[60vw]  md:w-[60vw] md:flex hidden");
  const [Navwidth, setnavwidth] = useState(
    "w-[290px] sm:w-[189px] md:w-[190px] lg:w-[290px]"
  );

  return (
    <>
      <section className=" overflow-x-hidden">
        <Context.Provider
          value={{
            viewNav,
            setViewnav,
            name,
            setName,
            width,
            setWidth,

            Navwidth,
            setnavwidth,
            nameWidth,
            setNamewidth,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Carekonect" element={<Carekonect />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/x" element={<Appointment />} />
              <Route path="/Payment" element={<Payment />} />
              <Route
                path="/Login"
                element={<Login viewNav={viewNav} setViewnav={setViewnav} />}
              />
              <Route path="/Signup" element={<Signup />} />
            </Route>

            <Route path="/Chat" element={<Chat />} />
            <Route path="/Jane" element={<Jane />} />
            <Route path="/John" element={<John />} />
            <Route path="/Philip" element={<Philip />} />
            <Route path="/Susan" element={<Susan />} />
            <Route path="/Will" element={<Will />} />

            <Route path="/Nurse3" element={<Nurse3 />} />
            <Route path="/Nurse2" element={<Nurse2 />} />
            <Route path="/Nurse4" element={<Nurse4 />} />
          </Routes>
        </Context.Provider>
      </section>
    </>
  );
}

export default App;

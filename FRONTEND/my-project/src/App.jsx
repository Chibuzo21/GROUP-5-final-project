
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Carekonect from "./Pages/Carekonect";
import "./App.css";
import { useState } from "react";
import { Context } from "./Context";
import Successful from "./Pages/Successful";
import Appointment from "./Pages/Appointment";
import Video from "./Pages/Video";

function App() {
  const [viewNav, setViewnav] = useState(false);
  const [name, setName] = useState();
  const [nameWidth, setNamewidth] = useState("w-0");
  const [width, setWidth] = useState("sm:w-[72vw] w-full");
  const [Navwidth, setnavwidth] = useState("w-[270px]");


   const [logo, setLogo] = useState("sm:w-[17vw] w-[35vw]");

  return (
    <>
      <main className="h-screen flex justify-center items-center bg-light-gray">
        {/* <Context.Provider
          value={{
            viewNav,
            setViewnav,
            name,
            setName,
            width,
            setWidth,
            logo,
            setLogo,
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
              <Route path="/x" element={<PaymentConfirmation />} />
            </Route>
            <Route
              path="/Login"
              element={<Login viewNav={viewNav} setViewnav={setViewnav} />}
            />
            <Route path="/Successful" element={<Successful />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Context.Provider> */}
        <PaymentConfirmation />
      </main>
    </>
  );
}

export default App;

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

function App() {
  const [viewNav, setViewnav] = useState(false);
  const [name, setName] = useState("");
  const [width, setWidth] = useState("sm:w-[72vw] w-full");

  const [logo, setLogo] = useState("sm:w-[17vw] w-[35vw]");

  return (
    <>
      <main>
        <Context.Provider
          value={{
            viewNav,
            setViewnav,
            name,
            setName,
            width,
            setWidth,
            logo,
            setLogo,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Carekonect" element={<Carekonect />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/x" element={<Appointment />} />
            </Route>
            <Route
              path="/Login"
              element={<Login viewNav={viewNav} setViewnav={setViewnav} />}
            />
            <Route path="/Successful" element={<Successful />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Context.Provider>
      </main>
    </>
  );
}

export default App;

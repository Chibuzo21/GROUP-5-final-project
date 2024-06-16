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

function App() {
  const [viewNav, setViewnav] = useState(false);
  const [name, setName] = useState("");
  const [width, setWidth] = useState("w-[72vw]");

  const [logo, setLogo] = useState("w-[17vw]");

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
              <Route
                path="/Login"
                element={<Login viewNav={viewNav} setViewnav={setViewnav} />}
              />
              <Route path="/Signup" element={<Signup />} />
            </Route>
          </Routes>
        </Context.Provider>
      </main>
    </>
  );
}

export default App;


import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Contact from "./Pages/Contact"
import Main from "./Components/Main"
import {Routes,Route} from "react-router-dom"
import Carekonect from "./Pages/Carekonect"
import './App.css'

function App() {
  

  return (
    <>
     <main>
     <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Carekonect" element={<Carekonect/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Route>
     </Routes>
      
      </main> 
    </>
  )
}

export default App

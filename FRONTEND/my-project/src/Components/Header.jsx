
import Logo from "../assets/logo.png"
import { NavLink} from 'react-router-dom'
import "../App.css"
import { MdMenu } from "react-icons/md"


function Header() {
 
  return (
    <main className='flex h-[12vh] max-w-full  md:px-0 px-14  shadow-md md:justify-start justify-between items-center'>
        <div className='md:px-14'>
     <img src={Logo} alt=""  className='md:w-[12vw] w-[24vw]  md:h-[6vh] h-[5vh]' />
        </div>
      
        <div className='absolute md:static flex flex-row gap-12 items-center text-xl
         font-normal overflow-hidden
         text-gray-400 justify-center md:w-[70vw] w-[0vw] '>
          <NavLink to="/">Home</NavLink>  
          <NavLink to="/About">About</NavLink>
            <NavLink to="/Carekonect">CareKonect For Doctors</NavLink>
            <NavLink to="/Contact">Contact us</NavLink>
           
            
            <div className='flex justify-between items-center flex-row gap-4'>
            <NavLink to="/Signup" className={({isActive})=> isActive
            ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md" :
             "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
            }
             ><button  
            className="py-2 px-10 text-md">
                Sign Up</button></NavLink>
            <NavLink to ="/Login" className={({isActive})=> isActive
            ? "text-white bg-[#206E30] border-[#206E30] border-[1px] rounded-md" :
             "text-[#206E30] bg-white border-[#206E30] border-[1px] rounded-md"
            }
            > <button  className="text-md 
              py-2 px-10">
                Login</button></NavLink>
        </div>
            </div>
            <button className='rounded-md text-2xl md:hidden
   p-3 shadow-md hover:opacity-50'><MdMenu/></button>
    </main>
  )
}

export default Header
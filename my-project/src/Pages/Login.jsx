import React, { useState } from 'react'
import Medical from "../assets/Medical.png"
import {FcGoogle} from "react-icons/fc"
import { IoIosCheckmark } from 'react-icons/io';

function Body() {
  const [showMark, setshowMark]= useState(false);
   
  const icon =()=>{
    setshowMark(!showMark)
  }
  return (
    <main className='grid lg:flex justify-center items-center lg:h-[88vh] h-[188vh] flex-row lg:gap-8'>
        <div className='h-[74vh] lg:h-[60vh] flex justify-center'>
            <img src={Medical} className='xl:w-[30vw] w-[89vw] lg:h-[60vh] h-[74vh]'  />
        </div>
     
        <section className='lg:h-[72vh] h-[88vh] lg:w-[32vw] w-[80vw]'>
          <p className='text-center text-5xl lg:text-4xl font-semibold lg:h-[12vh] h-[9vh]'>LOGIN</p>
          <div className='grid lg:h-[28vh] h-[37vh] lg:gap-2 static'>
          <div>
            <p className='font-medium lg:text-xl text-4xl'>Email or Username</p>
            <input type="text" placeholder='Enter your email or username'
            className='border-gray-300 border-[1px] w-full outline-none lg:py-2 py-4 px-2 
            lg:text-sm text-2xl rounded-sm'  />
          </div>
          <div>
          <p className='font-medium lg:text-xl text-4xl'>Password</p>
            <input type='password' placeholder='Enter your password'
            className='border-gray-300 outline-none border-[1px] w-full lg:py-2 py-4 
            px-2 lg:text-sm text-2xl rounded-sm'/>
          </div>
        
        <div className='flex items-center flex-row lg:gap-2 gap-3 px-1'>
            <button onClick={icon} 
            className='rounded-sm lg:h-[3vh] h-[2.8vh] w-[3vw] lg:w-[1.5vw] text-4xl flex justify-center items-center border-gray-600 border-[1px]'>
              <span style={{display:showMark?"flex":"none"}} > <IoIosCheckmark/>
                </span>
            </button>
            <p className='text-gray-600 font-medium lg:text-sm text-3xl'>Remember Me</p>
        </div>
        </div>
        <div className='flex justify-center items-center flex-col py-4 lg:gap-2  gap-4'>
          <button
          className='text-white bg-green-700 w-[42vw] lg:w-[23vw] 
          h-[6vh] lg:h-[8vh] rounded-md lg:text-sm text-3xl'>Login</button>
          <div className='flex justify-center items-center'>
            <span className='border-b bg-gray-800 w-[14vw] lg:w-[9vw]'></span>
            <p className='text-gray-500 lg:text-md text-sm'>or</p>
            <span className='border-b bg-gray-800 lg:w-[9vw] w-[14vw]'></span>
          </div>
          <button 
          className='text-gray-700 lg:w-[23vw] w-[42vw] rounded-md lg:h-[7vh] h-[6vh] 
          lg:text-sm text-2xl border-gray-400 font-medium border-[1px] flex-row gap-2 flex items-center justify-center'>
            <span className='text-3xl'><FcGoogle/></span>Login with Google
            </button>
          <p className='font-medium lg:text-sm text-xl'>Don't have an account? <span className='text-green-700'> Sign Up</span></p>

        </div>
        </section>

    </main>
  )
}

export default Body
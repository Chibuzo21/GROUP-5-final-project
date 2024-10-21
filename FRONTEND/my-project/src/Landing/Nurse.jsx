import React from 'react'
import girl from "../assets/Nurse.jpg"
import Alvisdra from "../assets/Alvisdra.png"
import Drug from "../assets/Drug.png"
import FMC from "../assets/FMC.png"
import Gosab from "../assets/Gosab.png"
import Medicare from "../assets/Medicare.png"
import Otema from "../assets/Otema.png"
import Stork from "../assets/stork.png"
import Med from "../assets/MedicalCare.png"

function Nurse() {
  return (
    <>
    <main className='h-[100vh] w-full '>
        <div className='h-[30vh] justify-start flex w-[95vw] flex-row gap-3'>
          <img src={Gosab} alt="" className='w-[13vw] h-[22vh]' />
          <img src={Drug} alt="" className='h-[19vh]'/>
          <img src={Medicare} alt="" className='h-[22vh]' />
          <img src={Stork} alt=""  className='h-[22vh]'/>
          <img src={Otema} alt=""  className='h-[20vh]'/>
          <img src={Med} alt="" className='h-[19vh]' />
          <img src={Alvisdra} alt="" className='h-[23vh]' />
          <img src={FMC} alt="" className='h-[14vh] pt-10 w-[14vw]'/>
        </div>
        <div className='flex  h-[50vh] w-screen justify-evenly'>
            <div className='w-[44vw] flex flex-col gap-4 justify-center  h-[50vh]'>
                <p className='text-[32px] font-bold'>ABOUT US</p>
                <p className='text-[20px] text-gray-700'>CareKonect simplifies health management with personalized advice,
                tailored recommendations, and 24/7 support for booking 
                appointments and answering health questions. 
                Enjoy a seamless, proactive, and secure healthcare 
                experience with CareKonect.</p>
                <button className='bg-[#206E30] rounded-md text-[22.5px]
                font-semibold text-white h-[63px] w-[321.4px]'>Learn More</button>
            </div>
            <div className='w-[34vw] h-[30vh]'><img src={girl} /></div>
        </div>
    </main>
    </>
  )
}

export default Nurse
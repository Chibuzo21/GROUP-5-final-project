import React from 'react'
import Hands from "../assets/hands.jpg"
import Doc from "../assets/Doc.jpg"
import Four from "../assets/four.jpg"
import Doctors from "../assets/doctors.jpg"

function Mission() {
  return (
   <main className='flex  h-full w-full justify-center items-center'>
    <section className='flex h-fit flex-row gap-5 w-[44vw] py-10'>
      <div className='flex flex-col gap-5 w-[18vw] relative h-[49vh] '>
        <img src={Hands} alt="" className='w-full h-full object-contain' />
        <img src={Doctors} alt="" className='w-full h-full' />
      </div>
      <div className='flex flex-col gap-6 pt-12 h-'>
        <img src={Doc} alt="" className='w-[18vw] h-[49vh]'  />
        <img src={Four} alt="" className='w-[18vw] h-[49vh]' />
      </div>
    </section>
    <section className='w-[51vw] h-fit'>
      <p className='text-4xl h-[9vh] font-bold'>OUR MISSION</p>
     <div>
       <p
      className='text-4xl font-semibold text-green-900 h-[14vh]'>
        CareKonect: Connecting You to Better Health 
      </p> </div>
      <p className='text-2xl  text-gray-700 w-[51vw] h-[48vh] leading-normal'>
        At CareKonect, our mission is to simplify and
         enhance healthcare access for everyone. We strive to connect patients with 
         healthcare providers through a seamless, user-friendly platform, ensuring timely 
         and efficient appointment scheduling, prescription management, and secure access 
          to health records. Our commitment is to empower individuals to take control of their 
          health with ease and confidence, fostering a healthier and more connected community.
          </p>
          <button className='w-[21vw] rounded-md bg-green-800 text-xl font-medium
           text-white h-[9vh]'>Learn More</button>
    </section>
   </main>
  )
}

export default Mission
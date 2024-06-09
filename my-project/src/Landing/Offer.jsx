import React from 'react'
import { MdOutlinePersonalInjury } from 'react-icons/md'
import { PiCalendarCheckBold } from 'react-icons/pi'
import { RiHandHeartFill } from 'react-icons/ri'

function Offer() {
  return (
   <main className='h-[75vh] w-[100vw] 
   bg-gradient-to-b from-green-300 via-green-700 to-green-950
    flex flex-col gap-14 p-16 '
  >
    <strong className='text-5xl text-left'>What We Offer</strong>
    <section className='flex flex-row gap-16 w-[90vw]'>
      <div className='bg-white w-[25vw] h-[39vh] px-9 justify-center flex flex-col gap-4 rounded-2xl'>
        <span 
        className='text-3xl text-green-800 bg-green-200  w-[3.5vw] py-4 px-4 rounded-full
        '><RiHandHeartFill/></span>
<p className='text-2xl font-semibold'>ALL YOUR HEALTHCARE NEEDS</p>
<p className='text-gray-600 text-xl font-medium w-[20vw]'>Search for and book a doctor's appointment,either in-clinic, or a teleconsultation</p>
      </div>
      <div className='bg-white w-[25vw] h-[39vh] px-9 justify-center flex flex-col gap-4 rounded-2xl'>
        <span 
        className='text-3xl text-green-800 bg-green-200  w-[3.5vw] py-4 px-4 rounded-full
        '><MdOutlinePersonalInjury/></span>
<p className='text-2xl font-semibold'>VERIFIED PATIENTS REVIEWS</p>
<p className='text-gray-600 text-xl font-medium w-[20vw]'>
  Doctor ratings are from patients who booked and visited the doctor through CareKonect</p>
      </div>
      <div className='bg-white w-[25vw] h-[39vh]
       px-9 justify-center flex flex-col gap-4 rounded-2xl'>
        <span 
        className='text-3xl text-green-800 bg-green-200  w-[3.5vw] py-4 px-4 rounded-full
        '><PiCalendarCheckBold/></span>
<p className='text-2xl font-semibold'>YOUR BOOKING IS CONFIRMED</p>
<p className='text-gray-600 text-xl font-medium w-[20vw]'>
Your booking is automatically confirmed, as the doctor specifies his 
working hours and is notified of the booking details</p>
      </div>
    </section>
    </main>
  )
}

export default Offer
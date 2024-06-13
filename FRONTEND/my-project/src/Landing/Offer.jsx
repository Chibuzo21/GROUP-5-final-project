import React from 'react'
import { MdOutlinePersonalInjury } from 'react-icons/md'
import { PiCalendarCheckBold } from 'react-icons/pi'
import { RiHandHeartFill } from 'react-icons/ri'
import Props from './OfferProps'

function Offer() {
  return (
   <main className='h-[75vh] w-[100vw] 
   bg-gradient-to-b from-[#5DD9A0] via-[#42A96E] to-[#206E30]
    flex flex-col gap-14 p-16 '
  >
    <strong className='text-5xl text-left'>What We Offer</strong>
    <section className='flex flex-row gap-16 w-[90vw]'>
     <Props title="ALL YOUR HEALTHCARE NEEDS"
      text="Search for and book a doctor's appointment,either in-clinic, or a teleconsultation" 
      icon={<RiHandHeartFill/>}/>
       <Props title="VERIFIED PATIENTS REVIEWS"
      text="Doctor ratings are from patients who booked and visited the doctor through 
      CareKonect" 
      icon={<MdOutlinePersonalInjury/>}/>
       <Props title="YOUR BOOKING IS CONFIRMED"
      text="Your booking is automatically confirmed, as the doctor specifies his working 
      hours and is notified of the booking details" 
      icon={<PiCalendarCheckBold/>}/>
         </section>
    </main>
  )
}

export default Offer
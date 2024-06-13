import React from 'react'
import Book from "../assets/Book.jpg"

function Books() {
  return (
   <>
   <main className='md:h-[88vh] h-[79vh] bg-cover bg-center w-screen'
    style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, 
    rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.9) 100%),url(${Book})`}}>
      <section className='flex justify-center items-center flex-col h-[86vh] gap-4 '>
        <p className='text-6xl font-medium text-[#16A362]'>Book Healthcare</p>
        <p className='text-white text-6xl font-medium '>
          <span className='text-[#16A362]'>Appointments</span> with Ease</p>
        <p className='text-white text-2xl font-normal'>Connecting you with the right healthcare professionals quickly and conveniently</p>
        <button className='text-white w-[20vw] h-[8vh]  font-bold text-xl bg-[#16A362] py-2 px-4 rounded-md'>Book an appointment</button>
      </section>

   </main>
   </>
  )
}

export default Books
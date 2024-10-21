

function Props({text, title, icon}) {
  return (
    <main>
 <div className='bg-white w-[375px] h-[258px] flex flex-col px-9 gap-3 justify-center rounded-2xl'>
       <div className=' bg-green-200  w-[52px] h-[52px] p-3 rounded-full'>
         <span 
        className='text-3xl text-green-800
        '>{icon}</span>
        </div>
<p className='text-[20px] font-semibold'>{title}</p>
<p className='text-[#343A40] text-[16px] font-medium w-[295px] leading-[24px] h-[72px]'>
    {text}</p>
      </div>
    </main>
  )
}

export default Props
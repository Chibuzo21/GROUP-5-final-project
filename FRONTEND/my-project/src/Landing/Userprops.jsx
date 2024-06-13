


function Props({text,name,image,job}) {
  return (
    <main>
        <section className='w-[358px] flex-row flex justify-center items-center h-[264.84px] bg-white p relative rounded-lg chief shadow-sm'>
<p className='text-[20px] leading-[32px] h-[128px] w-[336px] text-center'>{text}</p>
<div className='flex'>
    <img src={image} alt="" />
    <div>
        <p className='text-[#5DD9A0]'>{name}</p>
        <p>{job}</p>
    </div>
</div>
</section>
    </main>
  )
}

export default Props



function Props({text,name,image,job}) {
  return (
    <main>
        <section className='w-[357px] flex flex-col justify-center items-center h-[264.84px]
         bg-white  relative rounded-lg chief shadow-sm'>
          <div className=" h-[200.84px]">
<p className='text-[20px] leading-[32px] h-[148px] w-[320px] '>{text}</p>
<div className='flex h-[45.04px] w-[11vw] justify-between items-center'>
    <img src={image} alt="" className="w-[45.04px] h-[45.04px]"/>
    <div>
        <p className='text-[#5DD9A0]'>{name}</p>
        <p>{job}</p>
    </div>
</div>
          </div>
</section>
    </main>
  )
}

export default Props
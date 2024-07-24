function Props({ text, title, icon }) {
  return (
    <main>
      <div
        className="bg-white lg:w-[375px] sm:w-[84vw] w-[360px] 
        lg:h-[258px] sm:h-[40vh] h-[240px] px-9 sm:px-12
      flex flex-col lg:px-9 gap-3 justify-center rounded-2xl"
      >
        <div
          className=" bg-green-200 w-[40px] flex items-center justify-center
          h-[40px] sm:h-[80px] sm:w-[80px] lg:w-[52px] lg:h-[52px] p-3 
        rounded-full"
        >
          <span
            className="lg:text-3xl sm:text-5xl text-xl text-green-800
        "
          >
            {icon}
          </span>
        </div>
        <p className="lg:text-[20px] sm:text-[35px] text-[18px] font-semibold">
          {title}
        </p>
        <p
          className="text-[#343A40] text-[18px] lg:text-[18px] 
          sm:text-[30px] font-medium 
          w-[300px] lg:w-[295px] sm:w-[70vw] 
        lg:leading-[24px] "
        >
          {text}
        </p>
      </div>
    </main>
  );
}

export default Props;

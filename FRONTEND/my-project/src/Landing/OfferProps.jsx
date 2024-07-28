function Props({ text, title, icon }) {
  return (
    <main>
      <div
        className="bg-white  
       px-4 sm:px-6 md:px-2 md:py-4 py-5 md:min-h-[43vh]
      flex flex-col lg:px-4 xl:px-9 gap-3 justify-center rounded-2xl"
      >
        <div
          className=" bg-green-200 w-[40px] flex items-center justify-center
          h-[40px] sm:py-6 sm:px-6 lg:w-[52px] lg:h-[52px] p-3 
        rounded-full"
        >
          <span
            className="lg:text-3xl text-2xl sm:text-2xl md:text-3xl text-green-800
        "
          >
            {icon}
          </span>
        </div>
        <p className="lg:text-[20px]  text-[18px] font-semibold">{title}</p>
        <p
          className="text-[#343A40] text-[18px] lg:text-[18px] 
           font-medium 
          lg:max-w-[295px] 
          
        lg:leading-[24px]  "
        >
          {text}
        </p>
      </div>
    </main>
  );
}

export default Props;

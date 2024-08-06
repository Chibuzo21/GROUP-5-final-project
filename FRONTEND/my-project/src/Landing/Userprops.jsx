function Props({ text, name, image, job }) {
  return (
    <main>
      <section
        className="flex flex-col justify-center items-center
         lg:py-6 lg:px-2 xl:px-5 md:py-8 md:px-3 px-3 py-4
        
         bg-white  relative rounded-lg chief sm:shadow-sm"
      >
        <div className=" ">
          <p
            className="lg:text-[20px] text-[18px] lg:leading-[32px] sm:w-[60vw] w-[70vw]
             lg:max-w-[298px] mb-4 md:max-w-[213px] md:text-[15px] md:leading-[23px] sm:mb-5 md:mb-3  "
          >
            {text}
          </p>
          <div className="flex  w-[37%] sm:w-[35%] md:w-[62%] lg:w-[68%] justify-between items-center">
            <img
              src={image}
              alt=""
              className="sm:w-[45.04px] sm:h-[45.04px] w-[44px] h-[44px]"
            />
            <div className="lg:text-lg md:text-sm text-sm">
              <p className="text-[#5DD9A0]">{name}</p>
              <p>{job}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Props;

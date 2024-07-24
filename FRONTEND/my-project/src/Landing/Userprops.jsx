function Props({ text, name, image, job }) {
  return (
    <main>
      <section
        className="lg:w-[357px] w-[350px] flex flex-col justify-center items-center 
        h-[230px] lg:h-[264.84px] sm:w-[72vw] sm:h-[38vh]
         bg-white  relative rounded-lg chief sm:shadow-sm"
      >
        <div className=" lg:h-[200.84px] sm:h-[30vh]  h-[148px] sm:w-fit w-[80vw]">
          <p
            className="lg:text-[20px] text-[18px] lg:leading-[32px] sm:h-[23vh]
           lg:h-[148px] h-[100px] lg:w-[320px] w-[320px] sm:w-[60vw] sm:text-[30px] sm:leading-[43px] *: "
          >
            {text}
          </p>
          <div className="flex h-[10vh] lg:h-[45.04px] sm:h-[70px] sm:w-[26vw] lg:w-[11vw] w-[33vw]  justify-between items-center">
            <img
              src={image}
              alt=""
              className="sm:w-[45.04px] sm:h-[45.04px] w-[44px] h-[44px]"
            />
            <div className="lg:text-lg sm:text-2xl text-sm">
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

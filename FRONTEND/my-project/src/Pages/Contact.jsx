import Frame from "../assets/Frame.jpg";

function Contact() {
  return (
    <body>
      <section
        className="h-[65vh] w-screen"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <div className="text-white h-full w-[50vw] flex items-center justify-center text-[56px] leading-[67.77px] font-bold">
          CONTACT US
        </div>
      </section>
      <section className="h-[150vh] w-[100vw] flex items-center justify-center">
        <div className="h-[794px] w-[1240px] flex items-center justify-center">
          <div className="h-[794px] w-1/2 flex items-start justify-center flex-col gap-1">
            <h1 className="text-5xl font-bold h-[58px] w-[293px]">
              Get In Touch
            </h1>
            <div className=" h-[20vh] w-[30vw] gap-2">
              <p>
                Feel free to contact us and we'll get back <br /> to you as soon
                as we can.
              </p>

              <p>
                We're here to help you with any questions <br /> or support you
                need.
              </p>
            </div>
          </div>
          <div className="h-full w-1/2 flex items-center justify-center">
            <div className="h-full w-full flex items-center justify-center rounded-xl bg-gray-400 gap-3">
              <div className="w-[43vw] h-[90vh] grid ">
                <p className="font-bold text-2xl">Name</p>
                <input
                  className="w-[43vw] h-[10vh] border-[1px] border-gray-300 rounded-md p-4"
                  type="text"
                  placeholder="Enter your name"
                />
                <p className="font-bold text-2xl">Email Address</p>
                <input
                  className="w-[43vw] h-[10vh] border-[1px] border-gray-300 rounded-md p-4"
                  type="text"
                  placeholder="Enter your email"
                />
                <p className="font-bold text-2xl">Leave a Message</p>
                <textarea
                  className="w-[43vw] h-[25vh] border-[1px] border-gray-300 rounded-md p-4"
                  type="text"
                  placeholder="Message"
                />
                <div className="flex items-center justify-end">
                  <button className="w-[15vw] h-[8vh] text-white bg-green-700 rounded-md">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
export default Contact;

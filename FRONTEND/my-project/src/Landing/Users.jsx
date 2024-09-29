import White from "/white.jpg";
import Man from "/man .jpg";
import Suit from "/suit.jpg";
import Props from "./Userprops";

function Users() {
  return (
    <>
      <main className=" w-screen flex justify-center items-center h-[130%]">
        <section
          className="w-full xl:w-11/12 h-[100%] py-10 flex sm:py-10 flex-col items-center
         bg-gray-200"
        >
          <div className="   flex flex-col justify-center items-center ">
            <p className="lg:text-[36px] sm:text-[32px] text-[22px] font-bold mb-7 ">
              WHAT OUR USERS SAY
            </p>
            <div
              className="flex md:flex-row xl:gap-7 lg:gap-3 md:gap-2 gap-12 
              justify-between md:items-start items-center flex-col sm:justify-between
      "
            >
              <Props
                text="CareKonect made booking my doctor's appointment so easy and stress free. 
I found the perfect specialist in minutes"
                image={White}
                name="John Doe"
                job="HR Manager"
              />
              <section
                className=" flex flex-col justify-center px-3 py-4
                 items-center lg:py-6 lg:px-2 xl:px-5 md:py-7 md:px-2 
         bg-white  relative rounded-lg chief shadow-sm"
              >
                <div className=" ">
                  <p
                    className="lg:text-[20px] md:max-w-[220px] text-[18px] lg:leading-[32px] 
                    lg:max-w-[318px] w-[70vw] mb-4
                    md:text-[16px] md:mb-3 sm:w-[60vw] sm:mb-5 "
                  >
                    Using CareKonect has streamlined my appointment scheduling
                    process, allowing me to focus more on patient care
                  </p>
                  <div className="flex w-[70%] sm:w-[46%] md:w-[82%] lg:w-[72%]  justify-between items-center">
                    <img
                      src={Suit}
                      alt=""
                      className="lg:w-[45.04px] lg:h-[45.04px] md:h-[45px] md:w-[45px]  w-[44px] h-[44px]"
                    />
                    <div className="md:text-sm lg:text-lg text-sm w-[69%] py-1">
                      <p className="text-[#5DD9A0]">Dr. John M.</p>
                      <p>General Practitioner</p>
                    </div>
                  </div>
                </div>
              </section>
              <Props
                text="Thanks to CareKonect, I no longer have to wait on hold to schedule my visits.
 It's a game changer for managing my healthcare"
                image={Man}
                name="Michael B."
                job="HR Manager"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Users;

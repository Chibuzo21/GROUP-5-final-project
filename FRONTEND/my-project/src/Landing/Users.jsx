import White from "/white.jpg";
import Man from "/man .jpg";
import Suit from "/suit.jpg";
import Props from "./Userprops";

function Users() {
  return (
    <>
      <main className="lg:h-[90vh] sm:h-[100vh] h-[150vh] w-screen flex justify-center items-center">
        <section className="h-[1002px] lg:w-fit sm:overflow-x-auto  sm:h-[700px] lg:h-[515px] w-[1239px] bg-gray-200">
          <div className="sm:h-[364px] h-[950px]  sm:w-[300vw] lg:w-fit  w-[1192px] flex flex-col justify-center items-center ">
            <p className="lg:text-[36px] sm:text-[52px] text-[22px] font-bold  sm:h-[12vh] h-[10vh]">
              WHAT OUR USERS SAY
            </p>
            <div
              className="flex sm:flex-row sm:w-[240vw] lg:w-[1192px]
              justify-between sm:items-start items-center flex-col sm:justify-evenly
             h-[107vh] w-[1192px] sm:h-[19vh] "
            >
              <Props
                text="CareKonect made booking my doctor's appointment so easy and stress free. 
I found the perfect specialist in minutes"
                image={White}
                name="John Doe"
                job="HR Manager"
              />
              <section
                className="lg:w-[357px] w-[350px] flex flex-col justify-center
                 items-center sm:w-[72vw] sm:h-[38vh]
                 lg:h-[264.84px] h-[230px]
         bg-white  relative rounded-lg chief shadow-sm"
              >
                <div className=" lg:h-[200.84px] sm:h-[30vh] h-[168px] sm:w-fit w-[80vw]">
                  <p
                    className="lg:text-[20px] text-[18px] lg:leading-[32px] h-[120px]
                     lg:h-[148px] sm:h-[23vh]
                   lg:w-[320px] sm:w-[60vw] w-[330px] sm:text-[30px] sm:leading-[43px]  "
                  >
                    Using CareKonect has streamlined my appointment scheduling
                    process, allowing me to focus more on patient care
                  </p>
                  <div className="flex h-[45.04px] sm:w-[39vw] lg:w-[15vw] w-[46vw] justify-between items-center">
                    <img
                      src={Suit}
                      alt=""
                      className="lg:w-[45.04px] lg:h-[45.04px] sm:h-[70px] sm:w-[70px]  w-[44px] h-[44px]"
                    />
                    <div className="sm:text-2xl lg:text-lg text-sm">
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

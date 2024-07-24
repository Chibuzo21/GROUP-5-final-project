import React from "react";
import Props from "./ProviderProps";

import image from "../assets/Group.svg";
import vector from "../assets/Vector.svg";

function Provide() {
  return (
    <main
      className="lg:w-[1440px] w-[100vw] lg:h-[922px] h-[200vh] flex justify-center
       items-center sm:h-[335vh]
 bg-gradient-to-b from-white to-[#EFF4F3]"
    >
      <section className="h-[190vh] lg:h-fit sm:h-full">
        <p className="font-bold lg:text-[32px] sm:text-[52px]  text-[32px] sm:h-[13vh] h-[10vh] text-center">
          WE PROVIDE
        </p>
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-8 sm:gap-0">
          <Props
            title="TELEMEDICINE"
            icon={image}
            text="CareKonect: Consult doctors, get prescriptions, and access advice from home."
          />

          <Props
            title="APPOINTMENT SCHEDULE"
            icon={image}
            text="CareKonect simplifies healthcare appointments, offering quick booking, 
real-time slots and instant confirmations."
          />

          <Props
            title="PRESCRIPTION MANAGEMENT"
            icon={vector}
            text="CareKonect: Digital prescription management for easy tracking and refils."
          />

          <Props
            title="HEALTH RECORDS"
            icon={image}
            text="
CareKonect: Securely manage, access, and share your health records."
          />
        </section>
      </section>
    </main>
  );
}

export default Provide;

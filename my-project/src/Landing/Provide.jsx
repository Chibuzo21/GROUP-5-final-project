import React from "react";
import Props from "./ProviderProps";

import image from "../assets/Group.svg";
import vector from "../assets/Vector.svg";

function Provide() {
  return (
    <main
      className="w-[1440px] h-[922px] flex justify-center items-center 
 bg-gradient-to-b from-white to-[#EFF4F3]"
    >
      <section>
        <p className="font-bold text-[32px] h-[13vh] text-center">WE PROVIDE</p>
        <section className="grid grid-cols-2 gap-8">
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
CareKonect: Securely manage, access , and share your health records."
          />
        </section>
      </section>
    </main>
  );
}

export default Provide;

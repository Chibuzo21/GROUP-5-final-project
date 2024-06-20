import React from 'react'
import Props from "./OurTeamProps";
import Fboy from "/fboy.jpg"
import Fgirl from "/fgirl.jpg"
import Fman from "/fman.jpg"

function OurTeam() {
  return (
    <main
      className="h-[75vh] w-[100vw] 
   bg-gradient-to-b from-[#5DD9A0] via-[#42A96E] to-[#206E30]
    flex flex-col gap-14 p-16 "
    >
      <div className= "text-center">
        <strong className="text-5xl text-center">MEET THE TEAM</strong>
        <p>Get to know the dedicated professionals behind carekonect</p>
      </div>
      <section className="flex flex-row gap-16 w-[90vw]">
        <Props
          name="ALL YOUR HEALTHCARE NEEDS"
          position="Position:CEO"
          profile={<Fboy />}
          bio = ""
        />
        <Props
          title="VERIFIED PATIENTS REVIEWS"
          text="Doctor ratings are from patients who booked and visited the doctor through 
      CareKonect"
          profile={<Fgirl />}
        />
        <Props
          title="YOUR BOOKING IS CONFIRMED"
          text="Your booking is automatically confirmed, as the doctor specifies his working 
      hours and is notified of the booking details"
          profile={<Fman />}
        />
      </section>
    </main>
  );
}

export default OurTeam

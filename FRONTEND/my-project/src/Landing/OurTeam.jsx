import React from 'react'
import Props from "./OurTeamProps";
import Fboy from "/fboy.jpg"
import Fgirl from "/fgirl.jpg"
import Fman from "../assets/fman.jpg"

function OurTeam() {
  return (
    <main
      className="h-[75vh] w-[100vw] 
   bg-gradient-to-b from-[#5DD9A0] via-[#42A96E] to-[#206E30]
    flex flex-col gap-14 p-16 "
    >
      <div className="text-center">
        <strong className="text-5xl text-center">MEET THE TEAM</strong>
        <p>Get to know the dedicated professionals behind carekonect</p>
      </div>
      <section className="flex flex-row gap-16 w-[90vw]">
        <Props
          name="NAME: Anthony Okeke"
          position="Position: CEO"
          profile={Fboy}
          bio="BIO: Anthony leads the company with the vision to make healthcare accessible"
        />
        <Props
          name="Name: Ukaegbu Heritage"
          position=" Position: CEO"
          bio="BIO: Heritage heads our tech team, ensuring our platform is cutting edge"
          profile={Fgirl}
        />
        <Props
          name="Ukaegu Chibuzor"
          position="Position: COO"
          bio="Bio: Chibuzor overseas operations to ensure smooth functioning"
          profile={Fman}
        />
      </section>
    </main>
  );
}

export default OurTeam

import React from "react";
import Props from "./OurTeamProps";
import Fboy from "/fboy.jpg";
import Fgirl from "/fgirl.jpg";
import Fman from "../assets/fman.jpg";

function OurTeam() {
  return (
    <main
      className="lg:h-[75vh] sm:h-full h-[170vh] w-[100vw] sm:w-[100vw]
   
    flex flex-col sm:gap-14 sm:p-15 p-7"
    >
      <div className="text-center">
        <p className="sm:text-5xl text-3xl text-center h-[8vh] lg:h-[13vh] font-semibold">
          MEET THE TEAM
        </p>
        <p className="text-lg sm:text-3xl lg:text-lg font-medium sm:h-fit h-[15vh] ">
          Get to know the dedicated professionals behind carekonect
        </p>
      </div>
      <section
        className="flex flex-col sm:justify-center sm:items-center 
      lg:flex-row gap-16 w-[90vw]"
      >
        <Props
          name="Name: Okeke Anthony"
          position="Position: CEO"
          profile={Fboy}
          bio="Bio: Anthony leads the company with the vision to make healthcare accessible"
        />
        <Props
          name="Name: Ukaegbu Heritage"
          position=" Position: CEO"
          bio="Bio: Heritage heads our tech team, ensuring our platform is cutting edge"
          profile={Fgirl}
        />
        <Props
          name="Hart Rejoice"
          position="Position: COO"
          bio="Bio: Rejoice overseas operations to ensure smooth functioning"
          profile={Fman}
        />
      </section>
    </main>
  );
}

export default OurTeam;

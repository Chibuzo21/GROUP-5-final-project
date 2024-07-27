import React from "react";
import Props from "./OurTeamProps";
import Fboy from "/fboy.jpg";
import Fgirl from "/fgirl.jpg";
import Fman from "../assets/fman.jpg";

function OurTeam() {
  return (
    <main
      className="h-[75vh] w-[100vw]
   
    flex flex-col gap-14 p-16 "
    >
      <div className="text-center">
        <p className="text-5xl text-center h-[10vh] font-semibold">
          MEET THE TEAM
        </p>
        <p className="text-lg font-medium">
          Get to know the dedicated professionals behind carekonect
        </p>
      </div>
      <section className="flex flex-row gap-16 w-[90vw]">
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

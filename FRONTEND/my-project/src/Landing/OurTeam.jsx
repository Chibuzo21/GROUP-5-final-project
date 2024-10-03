import React from "react";
import Props from "./OurTeamProps";
import Fboy from "/fboy.jpg";
import Fgirl from "/fgirl.jpg";
import Fman from "../assets/fman.jpg";



function OurTeam() {
  return (
    <main
      className="
   
    flex flex-col sm:gap-10 sm:p-15 p-7"
    >
      <div className="text-center">
        <p className="lg:text-5xl text-3xl text-center mb-5 font-semibold">
          MEET THE TEAM
        </p>
        <p className="text-lg md:text-2xl lg:text-lg font-medium ">
          Get to know the dedicated professionals behind carekonect
        </p>
      </div>
      <section
        className="flex flex-col sm:justify-center sm:items-center 
      md:flex-row gap-16 "
      >
        <Props
          name="Name: Ukaegbu Chibuzo"
          position="Position: CEO"
          profile={Fboy}
          bio="Bio: Chibuzo leads the company with the vision to make healthcare accessible"
        />
        <Props
          name="Name: Ukaegbu Heritage"
          position=" Position: CEO"
          bio="Bio: Heritage heads our tech team, ensuring our platform is cutting edge"
          profile={Fgirl}
        />
        <Props
          name="Name: Hart Rejoice"
          position="Position: CEO"
          bio="Bio: Rejoice overseas operations to ensure smooth functioning"
          profile={Fgirl}
        />
        <Props
          name="Name: NWANKWO IFEANYI OGBONNAYA"
          position="Position: CEO"
          bio="Bio: IFEANYI overseas the documentation of this site"
          profile={Fman}
        />
      </section>
    </main>
  );
}

export default OurTeam;

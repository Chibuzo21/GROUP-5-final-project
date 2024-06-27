import React from "react";
import Header from "../Components/Header";

function Successful() {
  return (
    <main className="h-[100vh]">
      <Header />
      <div
        className="text-[#206E30] flex flex-col justify-center items-center w-full
      bg-[url(success.png)] bg-center bg-no-repeat h-[88vh] text-3xl font-medium "
      >
        <p>You've succesfully booked your appointment.</p>
        <p>Please proceed to the hospital without delay.</p>
      </div>
    </main>
  );
}

export default Successful;

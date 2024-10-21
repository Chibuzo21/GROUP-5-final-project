import { useState } from "react";
import Book from "../Landing/Books";
import Nurse from "../Landing/Nurse";
import Offer from "../Landing/Offer";
import Provide from "../Landing/Provide";
import Users from "../Landing/Users";
import Mission from "../Landing/Mission";

function Home() {
  const [error, setError] = useState(false);

  return (
    <main
      className={`max-w-full overflow-x-hidden  ${
        error ? "overflow-hidden h-[88vh]" : "overflow-visible h-full"
      }`}
    >
      <Book error={error} setError={setError} />
      <Nurse />
      <Offer />
      <Mission />
      <Users />
      <Provide />
    </main>
  );
}

export default Home;

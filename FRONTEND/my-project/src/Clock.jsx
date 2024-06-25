import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";

function MyClock() {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main>
        <p className="font-medium text-xl h-[7vh]">Select Time</p>
        <div className="myclock grid gap-10 content-center justify-items-center rounded-lg shadow-md border-[#BCE6CE] border-2 h-[65vh] p-2 w-[28vw] ">
          <Clock value={value} />
          <TimePicker
            onChange={setTime}
            value={time}
            disableClock={true}
            format="h:mm a"
          />
        </div>
      </main>
    </>
  );
}

export default MyClock;

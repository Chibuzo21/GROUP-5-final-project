import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";

const MyBookingComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <p className="font-medium text-xl h-[7vh]">Select Date</p>
      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-lg shadow-md border-[#BCE6CE] border-2 h-[65vh] p-2 w-[28vw]"
      />
    </div>
  );
};

export default MyBookingComponent;

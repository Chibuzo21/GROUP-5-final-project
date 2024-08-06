import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";

const MyBookingComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mb-4 md:mb-0">
      <p className="font-medium text-base sm:text-lg md:text-xl">Select Date</p>
      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-lg shadow-md border-[#BCE6CE] border-2 "
      />
    </div>
  );
};

export default MyBookingComponent;

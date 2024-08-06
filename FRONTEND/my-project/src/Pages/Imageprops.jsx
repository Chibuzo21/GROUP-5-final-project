import React from "react";

function Props({ image }) {
  return (
    <div className="">
      <img
        src={image}
        className="h-12 w-12 md:h-16  md:w-16 lg:h-20 lg:w-20 rounded-full object cover  "
      />
    </div>
  );
}

export default Props;

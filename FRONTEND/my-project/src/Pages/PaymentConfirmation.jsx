import React from "react";
import { GoThumbsup } from "react-icons/go";

const on = {
  click: (e) => console.log("Button clicked!", e),
  mouseOver: (e) => console.log("Button hovered!", e),
};

function PaymentConfirmation() {
  return (
    <div className="w-full  ">
      <div className="flex flex-col w-full bg-white h-[50vh] ">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Thank You for Your Payment!
        </h2>
        <div className="flex justify-center mb-4">
          <GoThumbsup className="text-[#206E30] text-4xl h-[90px] w-[90px]" />
        </div>
        <p className="font-inter text-sm font-medium leading-[18px] text-center mb-2">
          Your payment has been successfully processed. You are now ready to
          start your video consultation.
        </p>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            name="start-video-call"
            onClick={on.click}
            onMouseOver={on.mouseOver}
            className="bg-[#16A362] hover:bg-green-700 text-white text-lg font-bold py-5 px-9 rounded-lg cursor-pointer"
          >
            Start Virtual Consultation
          </button>
        </div>
      </div>

      <div className="mt-4  w-[100vw] grid content-center justify-items-center">
        <div className="font-medium">
          <p className="text-black w-[37vw] h-[10vh] ">
            <span className="text-[#206E30] ">Support:</span> If you have any
            questions or encounter any issues, please contact our support team
            at:
          </p>
          <p className="text-[#206E30] w-[50vw] ">
            Customer Support: support@carekonect.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;

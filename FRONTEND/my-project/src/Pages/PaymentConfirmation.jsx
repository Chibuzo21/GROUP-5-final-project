import { GoThumbsup } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function PaymentConfirmation() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center flex-col h-[100vh] bg-[#EDF2E8] ">
      <div className="flex flex-col w-full  h-[50vh] ">
        <h2 className="text-5xl font-semibold mb-4 text-center">
          Thank You for Your Payment!
        </h2>
        <div className="flex justify-center mb-4">
          <GoThumbsup className="text-[#206E30] text-4xl h-[90px] w-[90px]" />
        </div>
        <p className="font-inter text-md font-medium leading-[18px] text-center mb-2">
          Your payment has been successfully processed. You are now ready to
          start your video consultation.
        </p>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            name="start-video-call"
            onClick={() => {
              setTimeout(() => {
                navigate("/Chat");
              }, 1000);
            }}
            className="bg-[#16A362] hover:bg-green-700 text-white text-lg font-bold py-5 px-9 rounded-lg cursor-pointer"
          >
            Start Virtual Consultation
          </button>
        </div>
      </div>

      <div className="mt-4  w-[100vw] grid content-center justify-items-center">
        <div className="font-medium">
          <p className="text-black w-[49vw] h-[10vh] text-xl ">
            <span className="text-[#206E30] ">Support:</span> If you have any
            questions or encounter any issues, please contact our support team
            at:
          </p>
          <p className="text-[#206E30] w-[50vw] text-xl ">
            Customer Support: support@carekonect.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;

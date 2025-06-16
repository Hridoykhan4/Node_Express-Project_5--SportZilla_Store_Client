import Lottie from "lottie-react";
import animeLion from "../assets/lottie-lion.json";

const LottiePrac = () => {
  return (
    <div className="flex w-32 h-32 mx-auto justify-center items-center ">
      <div className="">
        {" "}
        {/* Adjust size here */}
        <Lottie animationData={animeLion} loop={true} />
      </div>
    </div>
  );
};

export default LottiePrac;

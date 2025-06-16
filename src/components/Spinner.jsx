import spinImage from "../assets/img3.jpg";
const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center h-40 w-40 mx-auto">
      <div className="absolute animate-spin rounded-full h-36 w-36 border-[6px] border-t-transparent border-r-orange-500 border-b-transparent border-l-red-600 shadow-md shadow-orange-300"></div>

      <img
        src={spinImage}
        alt="Loading"
        className="rounded-full h-28 w-28 z-10 border-4 border-white shadow-lg"
      />
    </div>
  );
};

export default Spinner;

import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ShowEquipment from "../components/ShowEquipment";
import { Typewriter } from "react-simple-typewriter";
import LottiePrac from "../components/LottiePrac";

const Home = () => {
  const highestRatedProducts = useLoaderData();

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Slider */}
      <Slider />

      {/* Lottie Practice */}
      <section className="mt-4">
        <LottiePrac></LottiePrac>
      </section>  


      {/* Products Section with Typewriter */}
      <div className="mb-10 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          <Typewriter
            words={highestRatedProducts.map((p) => p.itemName)}
            loop={0}
            cursor
            cursorStyle="|"
            cursorBlinking={true}
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={1200}
          />
        </h2>
        <p className="text-gray-500 dark:text-gray-300">
          Check out our highest rated sports products selected just for you.
        </p>
      </div>




      {/* Product Grid */}
      <div className="grid mt-10 max-w-7xl pb-5 mx-auto px-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highestRatedProducts?.map((item) => (
          <ShowEquipment key={item._id} equipment={item} />
        ))}
      </div>

  


    </div>
  );
};

export default Home;

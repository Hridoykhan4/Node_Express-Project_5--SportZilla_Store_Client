import { FaChevronRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ShowEquipment = ({ equipment }) => {
  const { image, itemName, category, price, rating, stockStatus, _id } =
    equipment;

  return (
    <Fade cascade damping={0.1} triggerOnce={false}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform hover:scale-[1.02] group">
        {/* Image */}
        <img
          src={image}
          alt={itemName}
          className="w-full h-52 object-cover group-hover:brightness-105 transition duration-300"
        />

        {/* Card Content */}
        <div className="p-5 text-gray-800 dark:text-gray-200">
          {/* Title and Category */}
          <h2 className="text-xl font-bold">{itemName}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {category}
          </p>

          {/* Price and Rating */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              ৳ {price}
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              <FaStar className="text-sm" />
              <span className="text-sm font-medium">{rating}</span>
            </span>
          </div>

          {/* Stock Status */}
          <div className="mb-4">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stockStatus === "In Stock"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              {stockStatus}
            </span>
          </div>

          {/* Show Details Button */}
          <Link
            to={`/details/${_id}`}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 rounded-md transition-all"
          >
            Show Details <FaChevronRight />
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default ShowEquipment;

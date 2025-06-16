import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const EquipmentDetails = () => {
  const equipment = useLoaderData();

  const {
    image,
    itemName,
    category,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    description,
    name,
    email,
  } = equipment;

  return (
    <div className=" flex items-center justify-center bg-base-100 px-4 py-3">
      <div className="max-w-4xl w-full shadow-xl rounded-2xl bg-base-200 overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 bg-base-100">
          <img
            src={image}
            alt={itemName}
            className="w-full h-full object-contain p-6"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary">{itemName}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              Category: <span className="font-medium">{category}</span>
            </p>

            <div className="flex items-center gap-2 mb-3">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">{rating}</span>
            </div>

            <p className="text-lg font-semibold text-accent mb-2">
              Price: ${price}
            </p>

            <p className="mb-2">
              <span className="font-medium">Customization:</span>{" "}
              {customization}
            </p>
            <p className="mb-2">
              <span className="font-medium">Processing Time:</span>{" "}
              {processingTime}
            </p>

            <p className="mb-2">
              <span className="font-medium">Stock Status:</span>{" "}
              <span
                className={`badge ${
                  stockStatus === "In Stock" ? "badge-success" : "badge-error"
                }`}
              >
                {stockStatus}
              </span>
            </p>

            <p className="mb-4">{description}</p>
          </div>

          <div className="mt-4 border-t border-base-300 pt-4">
            <h4 className="font-bold mb-1">Seller Info</h4>
            <p>
              <span className="font-medium">Name:</span> {name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;

import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useAuthValue from "../hooks/useAuthValue";
import toast from "react-hot-toast";

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  const { user } = useAuthValue();
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

  const handleAddToCart = async () => {
    try {
      const res = await fetch(
        `https://sports-zilla-server.vercel.app/cartItems/searchQuery?email=${user.email}&title=${equipment.itemName}`
      );
      const data = await res.json();

      if (data.exists) {
        toast("⚠️ Item already in cart!", {
          icon: "🛑",
          style: {
            background: "#f97316",
            color: "#fff",
            border: "2px solid #fff",
          },
        });
        return; 
      }

      const finalItems = {
        image,
        itemName,
        category,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        description,
        email: user?.email,
        name: user?.displayName,
        addedAt: new Date().toISOString(),
      };

      const postRes = await fetch(`https://sports-zilla-server.vercel.app/cartItems`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(finalItems),
      });

      const result = await postRes.json();

      if (result.insertedId) {
        toast.success("🔥 Added to Cart!", {
          icon: "🛒",
          style: {
            background: "#dc2626",
            color: "#fff",
            border: "2px solid #facc15",
          },
          position: "top-right",
        });
      }
    } catch (err) {
      toast.error("❌ Failed to add to cart!", {
        style: {
          background: "#1f2937",
          color: "#fff",
        },
      });
      console.error(err);
    }
  };

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

          <div className="mt-2 border-t border-base-300 pt-4">
            <h4 className="font-bold mb-1">Seller Info</h4>
            <p>
              <span className="font-medium">Name:</span> {name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {email}
            </p>
          </div>

          <div>
            <button
              onClick={handleAddToCart}
              className="btn px-6 py-3 bg-gradient-to-r from-yellow-500 via-red-600 to-orange-500 text-white font-bold rounded-full shadow-lg animate-pulse hover:scale-105 transition-all duration-300 hover:shadow-xl hover:from-orange-500 hover:to-red-700"
            >
              🔥 Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;

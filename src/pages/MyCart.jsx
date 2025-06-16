import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const MyCart = () => {
  const cartItems = useLoaderData();
  const [cart, setCart] = useState(cartItems);

  const handleRemove = (id) => {
    fetch(`https://sports-zilla-server.vercel.app/cartItems/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const updatedCart = cart.filter((item) => item._id !== id);
          setCart(updatedCart);

          toast.success("🗑️ Item removed from your cart!", {
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
            },
            iconTheme: {
              primary: "#ff4d4f",
              secondary: "#fff",
            },
          });
        }
      })
      .catch(() => {
        toast.error("❌ Failed to remove item. Try again.");
      });
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  if (cart.length === 0) {
    return (
      <div className=" flex items-center justify-center">
        <p className="text-2xl font-semibold ">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Cart</h2>

      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center gap-6 border rounded-xl shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.itemName}
              className="w-full md:w-40 h-40 object-cover rounded-lg"
            />

            <div className="flex-1 space-y-1">
              <h3 className="text-xl font-semibold">{item.itemName}</h3>
              <p className="text-gray-600 dark:text-white">
                {item.description}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {item.category}
              </p>
              <p>
                <span className="font-semibold">Customization:</span>{" "}
                {item.customization}
              </p>
              <p className="flex items-center gap-1">
                <span className="font-semibold">Rating:</span>
                {item.rating}
                <FaStar className="text-yellow-400" />
              </p>
              <p>
                <span className="font-semibold">Processing Time:</span>{" "}
                {item.processingTime}
              </p>
              <p>
                <span className="font-semibold text-green-600">
                  Stock Status:
                </span>{" "}
                {item.stockStatus}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-xl font-bold text-blue-600">৳{item.price}</p>
              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-2"
              >
                <FaTrashAlt /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <p className="text-2xl font-bold">Total: ৳{total}</p>
      </div>
    </div>
  );
};

export default MyCart;

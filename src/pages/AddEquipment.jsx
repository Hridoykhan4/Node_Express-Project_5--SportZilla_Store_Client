import { useState } from "react";
// import toast from "react-hot-toast";
import useAuthValue from "../hooks/useAuthValue";
import toast from "react-hot-toast";

const AddEquipment = () => {
  const { user } = useAuthValue();
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    sellerName: "",
    sellerEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/equipment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        name: user?.displayName || "Guest",
        email: user?.email || "anonymous@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("🔥 Equipment added successfully!", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#1f1f1f",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 0 10px #f97316",
          },
          iconTheme: {
            primary: "#f97316",
            secondary: "#ffffff",
          },
        });
        setFormData({});
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to add equipment. Try again!", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#dc2626",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl mt-10 transition-colors duration-300">
      <h2 className="text-3xl font-extrabold text-center text-green-600 dark:text-green-400 mb-6">
        Add Equipment{" "}
        <span className="text-gray-600 dark:text-gray-300">
          | SportZilla Store
        </span>
      </h2>


     
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Cricket, Fitness)"
          value={formData.category || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={formData.price || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="number"
          name="rating"
          step="0.1"
          max="5"
          placeholder="Rating (1-5)"
          value={formData.rating || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="text"
          name="customization"
          placeholder="Customization (e.g., Bat with grip)"
          value={formData.customization || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          name="processingTime"
          placeholder="Processing Time (e.g., 2-4 days)"
          value={formData.processingTime || ""}
          onChange={handleChange}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        />

        <select
          name="stockStatus"
          value={formData.stockStatus || ""}
          onChange={handleChange}
          className="select select-bordered w-full dark:bg-gray-800 dark:text-white"
          required
        >
          <option value="">Select Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Limited Stock">Limited Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description || ""}
          onChange={handleChange}
          className="textarea textarea-bordered md:col-span-2 h-24 dark:bg-gray-800 dark:text-white"
          required
        />

        <button
          type="submit"
          className="btn md:col-span-2 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 font-semibold"
        >
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default AddEquipment;

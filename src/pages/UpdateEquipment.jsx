import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthValue from "../hooks/useAuthValue";

const UpdateEquipment = () => {
  const { user } = useAuthValue();
  const equipment = useLoaderData();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: equipment.image,
      itemName: equipment.itemName,
      category: equipment.category,
      description: equipment.description,
      price: equipment.price,
      rating: equipment.rating,
      customization: equipment.customization,
      processingTime: equipment.processingTime,
      stockStatus: equipment.stockStatus,
    },
  });

  const onSubmit = (data) => {
    fetch(`https://sports-zilla-server.vercel.app/equipment/${equipment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        name: user?.displayName || "Guest",
        email: user?.email || "anonymous@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("🔥 Equipment updated successfully!", {
            position: "bottom-right",
            style: {
              borderRadius: "10px",
              background: "#1f1f1f",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 0 10px #f97316",
            },
          });
        } else {
          toast.error("Not any update found. Please try again.", {
            position: "bottom-right",
            style: {
              background: "#dc2626",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
            },
          });
        }
      })
      .catch(() => {
        toast.error("❌ Failed to update equipment!", {
          position: "bottom-right",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6">
        Update Equipment{" "}
        <span className="text-gray-600 dark:text-gray-300">
          | SportZilla Store
        </span>
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          placeholder="Image URL"
          {...register("image", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          placeholder="Item Name"
          {...register("itemName", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="number"
          step="0.1"
          max="5"
          placeholder="Rating (1-5)"
          {...register("rating", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          placeholder="Customization"
          {...register("customization")}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          placeholder="Processing Time"
          {...register("processingTime", { required: true })}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />

        <select
          {...register("stockStatus", { required: true })}
          className="select select-bordered w-full dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Limited Stock">Limited Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="textarea textarea-bordered md:col-span-2 h-24 dark:bg-gray-800 dark:text-white"
        />

        <button
          type="submit"
          className="btn md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold"
        >
          Update Equipment
        </button>
      </form>
    </div>
  );
};

export default UpdateEquipment;

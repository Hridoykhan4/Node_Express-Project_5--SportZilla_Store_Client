import { useEffect, useState } from "react";
import useAuthValue from "../hooks/useAuthValue";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const MyEquipments = () => {
  const { user } = useAuthValue();
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myEquipments/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setEquipments(data);
          }
        });
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const res = await fetch(`http://localhost:5000/equipments/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result?.deletedCount > 0) {
        setEquipments(equipments.filter((item) => item._id !== id));
        alert("Item deleted successfully!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Equipment List ({equipments.length})
      </h2>

      {equipments.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No equipment found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card bg-base-200 shadow-xl border border-base-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={equipment.image}
                  alt={equipment.itemName}
                  className="rounded-xl h-48 object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg text-primary">
                  {equipment.itemName}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Category: {equipment.category}
                </p>
                <p className="font-semibold text-accent">
                  Price: ${equipment.price}
                </p>
                <p>Stock: {equipment.stockStatus}</p>

                <div className="flex gap-3 mt-4">
                  <Link
                    to={`/updateEquipment/${equipment._id}`}
                    className="btn btn-sm btn-info text-white flex items-center gap-1"
                  >
                    <FaEdit /> Update
                  </Link>

                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="btn btn-sm btn-error text-white flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipments;

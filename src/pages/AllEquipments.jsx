import { useLoaderData } from "react-router-dom";
import ShowEquipment from "../components/ShowEquipment";

const AllEquipments = () => {
  const allEquipments = useLoaderData();

  if (!allEquipments || allEquipments.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        No equipment data found.
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        All Equipments
      </h1>
      <div className="grid overflow-hidden gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allEquipments.map((item) => (
          <ShowEquipment key={item._id} equipment={item} />
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;

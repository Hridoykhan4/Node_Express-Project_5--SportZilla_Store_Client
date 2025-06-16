import { useLoaderData } from "react-router-dom";
import ShowEquipment from "../components/ShowEquipment";
import { useEffect, useState } from "react";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [sortBy, setSortBy] = useState("Sort By All");
  const [equipments, setEquipments] = useState(loadedEquipments);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch(`https://sports-zilla-server.vercel.app/equipments?searchBy=${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
      });
  }, [userInput]);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);

    let sorted = [...equipments];

    if (value === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = [...loadedEquipments];
    }

    setEquipments(sorted);
  };

  if (!userInput && (!equipments || equipments.length === 0)) {
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
      <div className="flex my-6 items-center flex-col sm:flex-row gap-3 justify-end">
        <div className="form-control">
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            name="userInput"
            id="userInput"
            placeholder="Type here..."
            className="input input-bordered w-full max-w-sm"
          />
        </div>

        <select
          onChange={handleSort}
          className="select select-bordered w-52 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 font-medium shadow-md hover:shadow-lg transition duration-200"
        >
          <option value={"Sort By All"}>{sortBy}</option>
          <option value="lowToHigh">Price (Low to High)</option>
          <option value="highToLow">Price (High to Low)</option>
        </select>
      </div>

      <div className="grid overflow-hidden gap-6 md:grid-cols-2 lg:grid-cols-3">
        {equipments.map((item) => (
          <ShowEquipment key={item._id} equipment={item} />
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllEquipments from "../pages/AllEquipments";
import AddEquipment from "../pages/AddEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import MyEquipments from "../pages/MyEquipments";
import Register from "../pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/equipmentsRated`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch(`http://localhost:5000/equipments`),
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/details/:id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "/myEquipments",
        element: <MyEquipments></MyEquipments>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default Router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllEquipments from "../pages/AllEquipments";
import AddEquipment from "../pages/AddEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import MyEquipments from "../pages/MyEquipments";
import Register from "../pages/Register";
import UpdateEquipment from "../pages/UpdateEquipment";
import MyCart from "../pages/MyCart";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://sports-zilla-server.vercel.app/equipmentsRated`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch(`https://sports-zilla-server.vercel.app/equipments`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://sports-zilla-server.vercel.app/cartItems`),
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <EquipmentDetails></EquipmentDetails>,
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://sports-zilla-server.vercel.app/equipments/${params.id}`),
      },
      {
        path: "/myEquipments",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateEquipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sports-zilla-server.vercel.app/equipments/${params.id}`),
      },
    ],
  },
]);

export default Router;

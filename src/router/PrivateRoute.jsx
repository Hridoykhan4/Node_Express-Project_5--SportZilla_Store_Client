import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuthValue from "../hooks/useAuthValue";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthValue();

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

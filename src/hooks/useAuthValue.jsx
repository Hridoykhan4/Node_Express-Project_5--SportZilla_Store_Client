import { useContext } from "react";
import AuthContexts from "../Contexts/AuthContexts";

const useAuthValue = () => {
    const all = useContext(AuthContexts);
    return all
};

export default useAuthValue;
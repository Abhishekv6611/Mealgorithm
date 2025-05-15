// hooks/useUserContext.jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Not UserContexts

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-96 w-[90%]">
        <div className="w-28 h-28 border-8 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <p className="text-2xl font-bold text-pink-400">Loading ...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;

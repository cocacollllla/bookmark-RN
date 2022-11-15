import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  console.log("원래안떠?");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

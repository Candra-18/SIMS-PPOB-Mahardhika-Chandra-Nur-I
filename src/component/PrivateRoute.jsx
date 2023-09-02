import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "services";

export { PrivateRoute };

function PrivateRoute() {
  const auth = useSelector((x) => x.auth?.value?.token);
  const token = localStorage.getItem("tokenjwt");

  if (!token) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }
  return <Outlet />;
}

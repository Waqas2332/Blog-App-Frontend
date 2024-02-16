import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function PrivateRoute() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
}

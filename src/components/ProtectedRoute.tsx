import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdmin } from "@/hooks/useAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  if (!isAdmin()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;



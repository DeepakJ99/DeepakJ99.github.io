import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string; // optional: if not passed, any logged-in user is allowed
}
export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  console.log(`Logged in user is ${user?.username} with role ${user?.role}`)
  const location = useLocation();
  if(isLoading){
    return <Loader />
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }


  return children;
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return children;
  }
  return <Navigate to="/" />;
}

export default ProtectedRoute;

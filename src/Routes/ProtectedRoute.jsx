import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !token) {
      navigate("/", { replace: true });
    }
  }, [loading, token, navigate]);

  if (loading || !token) return null;

  return <>{children}</>;
}

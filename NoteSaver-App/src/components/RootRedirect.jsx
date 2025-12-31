import { Navigate } from "react-router-dom";

export default function RootRedirect() {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!token) return null;

  return (
    <nav className="flex gap-6 px-6 py-4 border-b">
      <Link to="/">Home</Link>
      <Link to="/pastes">Paste</Link>
      <button onClick={logout} className="text-red-500">
        Logout
      </button>
    </nav>
  );
}

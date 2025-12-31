import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import RootRedirect from "./components/RootRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />, // 👈 decides login or home
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <div className="flex flex-col">
          <Navbar />
          <Home />
        </div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pastes",
    element: (
      <ProtectedRoute>
        <div className="flex flex-col">
          <Navbar />
          <Paste />
        </div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <ProtectedRoute>
        <div className="flex flex-col">
          <Navbar />
          <ViewPaste />
        </div>
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

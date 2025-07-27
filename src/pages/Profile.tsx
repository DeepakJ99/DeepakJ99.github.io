// pages/Profile.tsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  if(!user){
    navigate("/login")
    return;
  }
  return (
    <div className="max-w-sm sm:max-w-md mx-auto mt-16 sm:mt-20 p-4 sm:p-6 shadow-md rounded-lg dark:bg-zinc-900 bg-white text-center">
    <h1 className="text-xl sm:text-2xl font-bold mb-4">Welcome, {user.username}</h1>
    <button
      onClick={handleLogout}
      className="bg-blue-500 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded transition text-sm sm:text-base"
    >
      Logout
    </button>
  </div>

  );
}

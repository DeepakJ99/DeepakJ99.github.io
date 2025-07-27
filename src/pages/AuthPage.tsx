import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import API from "../api";
import { type AuthResponse } from "../types";
import { useAuth } from "../context/AuthContext";

export default function AuthPage({ title = "Login" }) {
  const {user} = useAuth()
  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useAuth(); 
  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as { from?: string })?.from || "/profile";
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    const uri = "/auth/" + title.toLowerCase();
    console.log(uri)
    try {
      const res = await API.post<AuthResponse>(uri, formData);
      await login(res.data.access_token);
      navigate(from);
    } catch (err: any) {
      alert(err.response?.data?.detail || "Login/Register failed");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-16 sm:mt-20 p-6 sm:p-8 shadow-md rounded-xl dark:border dark:border-zinc-700">
    <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800">{title}</h2>

    <form onSubmit={handleAuth} className="flex flex-col justify-center items-center space-y-5">
      <div className="w-full">
        <label className="block mb-1 text-sm font-medium bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800">Username</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-stone-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800"
          placeholder="Enter username"
          required
        />
      </div>

      <div className="w-full">
        <label className="block mb-1 text-sm font-medium bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-stone-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800"
          placeholder="Enter password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white font-semibold rounded-md hover:bg-blue-700 transition bg-blue-600"
      >
        {title}
      </button>
    </form>

    {title === "Login" && (
      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>
    )}
    {title === "Register" && (
      <p className="mt-4 text-sm text-center text-gray-600">
        Already registered?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
    )}
  </div>

  );
}

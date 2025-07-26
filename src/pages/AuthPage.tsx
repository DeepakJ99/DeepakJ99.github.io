import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../api";
import { type AuthResponse } from "../types";
import { useAuth } from "../context/AuthContext"; // 👈 import global auth hook
import Breadcrumbs from "../Components/Breadcrumb";

export default function AuthPage({ title = "Login" }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useAuth(); // 👈 access login() function from context
  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as { from?: Location })?.from?.pathname || "/profile";
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault(); // 👈 prevent form from reloading page
    const uri = "/auth/" + title.toLowerCase(); // 👈 match /login or /register
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
    <div className="w-full max-w-md mx-auto mt-20 p-8 bg-white shadow-md rounded-xl border border-gray-200">
      <Breadcrumbs/>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">{title}</h2>

      <form onSubmit={handleAuth} className="flex flex-col justify-center items-center space-y-5">
        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          {title}
        </button>
      </form>

      {title === "Login" && (
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      )}
      {title === "Register" && (
        <p className="mt-4 text-sm text-center text-gray-600">
          Already registered?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      )}
    </div>
  );
}

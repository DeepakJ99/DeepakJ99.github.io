// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import API from "../api";
import AxiosAuthSync from "./AxiosAuthSync";

interface User {
  id: number;
  username: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean | true;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async ()=>{
      if (token) {
        try{
          const authHeader =  `Bearer ${token}`
          console.log(authHeader)
          const res = await API.get("/auth/me", {
            headers: {
              Authorization: authHeader
            }
          })
          console.log("User is "+res.data.username)
          setUser(res.data)
        }
        catch(err){
          setUser(null)
        }
        setIsLoading(false)
      }
    }
    fetchUser()
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user , token, login, logout, isLoading }}>
      <AxiosAuthSync />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};

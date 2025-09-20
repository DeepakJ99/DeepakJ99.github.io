import { useEffect } from "react";
import API from "../api";
import { useAuth } from "./AuthContext";

export default function AxiosAuthSync() {
  const { token } = useAuth();

  useEffect(() => {
    const interceptor = API.interceptors.request.use((config) => {
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Cleanup interceptor when component unmounts
    return () => {
      API.interceptors.request.eject(interceptor);
    };
  }, [token]);

  return null; // No UI
}

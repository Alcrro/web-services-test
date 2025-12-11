import { getSession } from "@/shared/utils/getSession";
import { JWTTokenServices } from "@/services/token/JWTToken";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API;
// Create a server-side axios instance
const api = axios.create({
  baseURL: `${API}/api`,
});

// Helper to refresh access token
const refreshAccessToken = async () => {
  const res = await axios.post(
    `${API}/api/auth/refresh`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  const data = res.data;

  if (!data.token) throw new Error("Failed to refresh token");

  // Optional: update browser cookie via NextResponse if needed
  // res.cookies.set({ name: "accessToken", value: data.token, ... })

  return data.token; // Use this token directly for server requests
};

// Axios interceptor
api.interceptors.request.use(
  async (config) => {
    let token = await getSession(); // server-side

    if (token) {
      const jwtServices = new JWTTokenServices();
      const isValid = jwtServices.verifyToken(token);

      // If expired, refresh token
      if (isValid.status === "expired" || isValid.status === "invalid") {
        console.log("Interceptor: token expired, refreshing...");
        token = await refreshAccessToken(); // get new token directly
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

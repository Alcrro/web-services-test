import axios from "axios";
import { getRefreshToken, getSession } from "@/shared/utils/getSession";
import { JWTTokenServices } from "@/services/token/JWTToken";

const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

// Create SSR-safe axios instance
const api = axios.create({
  baseURL: `${API}/api`,
  withCredentials: true, // IMPORTANT
});

// Prevent infinite loop on refresh
let isRefreshing = false;
let refreshQueue: ((token: string) => void)[] = [];

// Handle refresh call
const refreshAccessToken = async () => {
  let refreshToken = await getRefreshToken(); // may be null if outside request context
  console.log(refreshToken);

  const res = await axios.post(
    `${API}/api/auth/refresh`,
    {},
    {
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  if (!res.data?.token) {
    throw new Error("Failed to refresh token");
  }

  return res.data.token;
};

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  async (config) => {
    let token = await getSession(); // may be null if outside request context
    console.log({ token });

    // We have token → validate it
    const jwtServices = new JWTTokenServices();
    const isValid = jwtServices.verifyToken(token as string);

    // No token: try refresh
    if (!token || isValid.status !== "valid") {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newToken = await refreshAccessToken();
          isRefreshing = false;
          refreshQueue.forEach((resolve) => resolve(newToken));
          refreshQueue = [];
          config.headers.Authorization = `Bearer ${newToken}`;

          return config;
        } catch (err) {
          isRefreshing = false;
          refreshQueue = [];
          throw err;
        }
      }

      return new Promise((resolve) => {
        refreshQueue.push((_newToken) => {
          config.headers.Authorization = `Bearer newToken`;
          resolve(config);
        });
      });
    }

    // Token valid → attach it
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

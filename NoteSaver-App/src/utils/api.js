export const API_URL = import.meta.env.VITE_API_URL; // or your deployed backend URL

export const getToken = () => localStorage.getItem("token");

export const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

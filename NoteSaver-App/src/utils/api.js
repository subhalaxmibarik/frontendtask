export const API_URL = "https://frontendtask-4.onrender.com/api"; // or your deployed backend URL

export const getToken = () => localStorage.getItem("token");

export const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

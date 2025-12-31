export const API_URL = "http://localhost:5000/api"; // or your deployed backend URL

export const getToken = () => localStorage.getItem("token");

export const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

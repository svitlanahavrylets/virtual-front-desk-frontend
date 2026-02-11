import axios from "axios";
import type { Task } from "../types";

// const API_URL = "https://virtual-front-desk-backend-production.up.railway.app/";
const API_URL = "https://virtual-front-desk-backend-0z60.onrender.com";
// const API_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
});

export const getSessionToken = async () => {
  const existingToken = sessionStorage.getItem("sessionToken");

  if (existingToken) {
    return existingToken;
  }
  const res = await api.get("/sessions");
  const token = res.data.token;
  sessionStorage.setItem("sessionToken", token);
  return token;
};

export const getTasks = async (): Promise<Task[]> => {
  const token = await getSessionToken();
  const res = await api.get("/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const submitAnswer = async (
  taskId: number,
  optionId: number,
): Promise<{ correct: boolean }> => {
  const token = await getSessionToken();
  const res = await api.post(
    `/answers/${taskId}`,
    { optionId },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return res.data;
};

import axios from "axios";
import type { Task } from "../types";

const API_URL = "https://virtual-front-desk-backend-production.up.railway.app/";

export const api = axios.create({
  baseURL: API_URL,
});

export const getSessionToken = async () => {
  try {
    const res = await api.post("/sessions");
    return res.data.sessionToken;
  } catch (error) {
    console.error("Failed to get session token:", error);
    throw error;
  }
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

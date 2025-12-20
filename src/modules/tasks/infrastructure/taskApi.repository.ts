import axios from "axios";
import {
  CreateTaskDTO,
  ITask,
  UpdateTaskDTO,
} from "../domain/types/task.types";
import api from "@/lib/axiosAccessTokenInterceptor";

export class TaskApi {
  private readonly API_URL: string =
    process.env.NEXT_PUBLIC_API || "http://localhost:3000";
  constructor() {}

  async getTasks(accessToken: string | null): Promise<ITask[] | null> {
    const response = await api.get(`${this.API_URL}/api/services/tasks`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.data) return null;
    return response.data;
  }
  async getTask(id: string, accessToken: string): Promise<ITask> {
    const response = await axios.get(
      `${this.API_URL}/api/services/tasks/${id}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  }

  async createTask(data: CreateTaskDTO, accessToken: string): Promise<ITask> {
    const response = await axios.post(
      `${this.API_URL}/api/services/tasks`,
      data,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  }

  async updateTask(
    id: string,
    data: UpdateTaskDTO,
    accessToken: string
  ): Promise<ITask> {
    const response = await axios.put(
      `${this.API_URL}/api/services/tasks/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  }

  async deleteTask(
    id: string,
    accessToken: string
  ): Promise<{ success: boolean }> {
    const response = await axios.delete(
      `${this.API_URL}/api/services/tasks/${id}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  }
}

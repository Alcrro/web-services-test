import api from "@/lib/axiosAccessTokenInterceptor";
import { IFiltersTasks, ITask } from "@/modules/tasks/domain/types/task.types";
import { configureParams } from "@/services/api/services/servicesApi";
import { useQuery } from "@tanstack/react-query";

const API = process.env.NEXT_PUBLIC_API;

export function useTaskQuery(
  searchParams: IFiltersTasks,
  initialData: { data: ITask[] | null }
) {
  const url = new URL(`${API}/api/services/tasks`);

  const urlConfigured = configureParams(searchParams, url);

  return useQuery({
    queryKey: ["tasks", searchParams],
    queryFn: async () => await api.get(`${urlConfigured}`.toString()),
    // staleTime: 1000 * 60,
    initialData,
    refetchOnWindowFocus: true,
  });
}

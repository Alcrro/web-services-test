import TasksList from "./TasksList";
import { getSession } from "@/shared/utils/getSession";
import { TaskApi } from "@/modules/tasks/infrastructure/taskApi.repository";

const Tasks = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) => {
  const url = new URLSearchParams(searchParams as Record<string, string>);
  url.append("filters", "order");
  url.append("value", "order");

  const token = await getSession();
  if (!token) return;
  const taskApi = new TaskApi();
  const tasks = await taskApi.getTasks(token);
  return <TasksList searchParams={searchParams} tasks={tasks} />;
};

export default Tasks;

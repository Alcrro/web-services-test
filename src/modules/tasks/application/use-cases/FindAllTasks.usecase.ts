import { TaskRepository } from "../../domain/task.repository.interface";
import { IFiltersTasks } from "../../domain/types/task.types";

export class FindAllTasks {
  constructor(private readonly tasksRepo: TaskRepository) {}

  async execute(options: IFiltersTasks) {
    const tasks = await this.tasksRepo.findAll(options);

    return tasks;
  }
}

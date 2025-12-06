import { TaskRepository } from "../domain/task.repository.interface";
import { IFiltersTasks, ITask } from "../domain/types/task.types";
import { PrismaClient } from "@prisma/client";
import {
  taskMapperDocToDom,
  taskMapperPartialDomToDoc,
  transformOrderItemIntoTask,
} from "./task.mapper";
import { buildPrismaFilters } from "@/shared/utils/filters/buildPrismaFilters";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private readonly db: PrismaClient) {}
  async create(item: ITask): Promise<ITask> {
    try {
      const itemData = transformOrderItemIntoTask(item);
      const result = await this.db.task.create({
        data: itemData,
      });

      return taskMapperDocToDom(result);
    } catch (error) {
      console.log(error);

      throw new Error("Internal db error!");
    }
  }
  async findOne(taskId: string): Promise<ITask | null> {
    try {
      const result = await this.db.task.findUnique({
        where: { id: taskId },
        include: { order: true },
      });

      if (!result) return null;
      return taskMapperDocToDom(result);
    } catch (error) {
      console.log(error);

      throw new Error("Internal db error");
    }
  }
  async findAll(opt: IFiltersTasks): Promise<ITask[]> {
    try {
      const { filters } = opt || {};

      const prismaFilter = buildPrismaFilters<ITask>(filters, "task");

      const result = await this.db.task.findMany({
        where: prismaFilter,
        include: { order: true },
      });

      return result.map(taskMapperDocToDom);
    } catch (error) {
      console.log(error);

      throw new Error("Internal db error");
    }
  }
  async update(taskId: string, task: Partial<ITask>): Promise<ITask> {
    try {
      const data = taskMapperPartialDomToDoc(task);
      const result = await this.db.task.update({
        where: { id: taskId },
        data,
        include: { order: true },
      });

      return taskMapperDocToDom(result);
    } catch (error) {
      console.log(error);

      throw new Error("internal db error");
    }
  }
}

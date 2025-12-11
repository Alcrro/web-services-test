import { IFilters } from "@/modules/globals/types/types.ts";
import type { IUser } from "../../../auth/domain/auth.types.ts";
import type {
  IServiceOrder,
  IServiceOrderItem,
} from "../../../orders/domain/types/order.types.ts";

export interface ITask {
  id?: string;
  title: string;
  status: TaskStatusType;
  orderItemId?: string;
  orderItem?: IServiceOrderItem;
  orderId?: string;
  order?: IServiceOrder;
  assigneeId?: number;
  assignee?: IUser;
  githubIssueId?: number;
  githubUrl?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export const TaskStatus = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
  TESTED: "TESTED",
} as const;

export type TaskStatusType = (typeof TaskStatus)[keyof typeof TaskStatus];

export type IFiltersTasks = IFilters<ITask>;

export const TaskStatusMapperIcons = {
  NOT_STARTED: "not started",
  IN_PROGRESS: "in progress",
  TESTED: "tested",
  DONE: "done",
} as const;

export const TaskStatusMapperFilters = {
  "not-started": "NOT_STARTED",
  "in-progress": "IN_PROGRESS",
  test: "TESTED",
  done: "DONE",
} as const;

export const TaskStatusMapperFrontendURL = {
  all: "all",
  "not-started": "not started",
  "in-progress": "in progress",
  test: "tested",
  done: "done",
} as const;

export interface CreateTaskDTO {
  title: string;
  description?: string;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  completed?: boolean;
}

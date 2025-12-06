import { TaskRepository } from "../../domain/task.repository.interface";
import { IFiltersTasks, ITask } from "../../domain/types/task.types";
import { UserRepository } from "@/modules/users/domain/user.repository.interface";
import { ClientRepository } from "@/modules/clients/domain/client.repository.interface";
import { IFilterOption } from "@/modules/globals/types/types";

export class FindTasksByOrder {
  constructor(
    private readonly taskRepo: TaskRepository,
    private readonly userRepo: UserRepository,
    private readonly clientRepo: ClientRepository
  ) {}

  async execute(userId: string, options?: IFiltersTasks): Promise<ITask[]> {
    // return this.taskRepo.(orderId);

    console.log({ options });

    const orders = await this.ensureClient(userId);

    if (!orders || orders.length === 0)
      throw new Error("You dont have orders yet");
    // 2️⃣ Collect all order IDs
    const orderIds = orders.map((o) => o.id);

    // 3️⃣ Query tasks filtered by order IDs + optional filters
    const tasks = await this.taskRepo.findAll({
      ...options,
      filters: {
        ...options?.filters,
        orderId: orderIds, // taskRepo should handle array of IDs
      } as IFilterOption<ITask>,
    });

    return tasks;
  }

  async ensureClient(userId: string) {
    const user = await this.userRepo.findOne(userId);

    if (!user) throw new Error("User not found");

    if (!user.clientId)
      throw new Error("Client isn't associate with account yet!");

    const client = await this.clientRepo.findById(user.clientId);

    return client?.orders;
  }
}

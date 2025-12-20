import { IFiltersServiceOrders, IServiceOrder } from "./types/order.types";

export interface OrderRepository {
  create(order: IServiceOrder): Promise<IServiceOrder>;
  findById(orderId: string): Promise<IServiceOrder>;
  getAll(
    options?: IFiltersServiceOrders
  ): Promise<{ data: IServiceOrder[]; total: number }>;
}

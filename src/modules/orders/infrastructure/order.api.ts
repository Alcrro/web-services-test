import { BaseAPI } from "@/infrastructure/api/BaseAPI";
import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "../domain/types/order.types";
import { configureParams } from "@/services/api/services/servicesApi";
import { IMetaPagination } from "@/modules/globals/types/types";

export class OrdersAPI extends BaseAPI {
  protected BASE_PATH = "/api/services/orders";

  async createOrder(order: Partial<IServiceOrder>): Promise<Response> {
    return this.request("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...order }),
    });
  }

  async findAllOrders<T>(
    options: IFiltersServiceOrders
  ): Promise<{ data: T[]; meta: IMetaPagination }> {
    const urlConfigured = configureParams<IServiceOrder>(options);

    return this.request(`${urlConfigured}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });
  }

  async getByIdServiceOrder(
    id: string
  ): Promise<IServiceOrder & { extraFeaturesTotal: number }> {
    return this.request(`/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });
  }
}

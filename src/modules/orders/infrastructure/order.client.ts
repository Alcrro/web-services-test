import { IMetaPagination } from "@/modules/globals/types/types";
import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "../domain/types/order.types";
import { OrdersAPI } from "./order.api";
import { IServiceOrderTable } from "@/modules/services/domain/types/service.types";
import { ordersTableMapper } from "./servicecOrderMapper.client";

const ordersAPI = new OrdersAPI();
export async function fetchTableOrders(
  options: IFiltersServiceOrders
): Promise<{ data: IServiceOrderTable[]; meta: IMetaPagination }> {
  const result = await ordersAPI.findAllOrders<
    IServiceOrder & { extraFeaturesTotalPrice: number }
  >(options);

  return {
    data: result.data.map(ordersTableMapper),
    meta: result.meta,
  };
}

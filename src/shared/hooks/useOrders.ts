"use client";
// hooks/useOrders.ts
import { useQuery } from "@tanstack/react-query";
import type { IFilters, IMetaPagination } from "@/modules/globals/types/types";
import { getServiceOrder } from "@/services/api/services/servicesApi";
import {
  IFiltersServiceOrders,
  statusMapper,
  type IServiceOrder,
  type IServiceOrderStatus,
} from "@/modules/orders/domain/types/order.types";
import { IServiceOrderTable } from "@/modules/services/domain/types/service.types";

export function useOrders(
  params: IFiltersServiceOrders,
  initialData?: { data: IServiceOrderTable[]; meta: IMetaPagination }
) {
  return useQuery<{ data: IServiceOrderTable[]; meta: IMetaPagination }, Error>(
    {
      queryKey: ["orders", params],
      queryFn: async () => {
        const result = await fetchOrders(params);
        if (!result) throw new Error("Failed to fetch orders"); // TS și React Query gestionează

        return { data: result.data as IServiceOrderTable[], meta: result.meta };
      },
      staleTime: 1000 * 60,
      initialData,
      placeholderData: (previousData) => previousData,
    }
  );
}

const fetchOrders = async (
  params: IFiltersServiceOrders
): Promise<{ data: IServiceOrderTable[]; meta: IFilters<IServiceOrder> }> => {
  const result = await getServiceOrder(params);

  return { meta: result.meta, data: result.data.map(ordersTableMapper) };
};

export function ordersTableMapper(
  order: IServiceOrder & { extraFeaturesTotalPrice: number }
): IServiceOrderTable {
  return {
    id: order.id,
    orderNo: order.orderNo,
    projectName: order.projectName ?? "no Name",
    serviceName: order.service?.name ?? "no Name",
    clientName: order.client?.name ?? "no Name",
    uniqueServiceId: order.service?.uniqueId ?? "",
    status: serviceOrderStatusMapper(order.status) ?? "new",
    initialPrice: Number(order.initialPrice),
    requirements: order.requirements ?? "",
    totalPrice: order.totalPrice,
    extraFeaturesTotalPrice: order.extraFeaturesTotalPrice,
    createdAt: new Date(order.createdAt).toLocaleDateString(),
    includedFeatures:
      order.items?.filter((item) => item.type === "STANDARD") ?? [],
    extraFeatures:
      order.items?.filter((item) => item.type !== "STANDARD") ?? [],
    items: order.items?.length
      ? order.items.map((item) => ({
          id: item.id,
          name: item.name,
          type: item.type || "OTHER",
          quantity: item.quantity,
          unitPrice: item.unitPrice ?? 0,
          showPrice: item.showPrice,
          orderId:
            typeof item.order === "object" ? item.order.id : item.order ?? "",
          createdAt: item.createdAt,
        }))
      : undefined,
  };
}

function serviceOrderStatusMapper(status: IServiceOrderStatus) {
  return statusMapper[status];
}

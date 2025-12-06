import { IServiceOrderTableProps } from "@/modules/orders/components/OrdersTable";

import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "@/modules/orders/domain/types/order.types";
import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";
import { ordersTableMapper } from "@/modules/orders/infrastructure/serviceOrderMapper";
import { getServiceOrder } from "@/services/api/services/servicesApi";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import React from "react";
import MyOrderCard from "../MyOrderCard";

const ActiveProjects = async ({
  params = [],
  searchParams = {},
}: {
  params?: string[];
  searchParams?: Record<string, string | string[]>;
}) => {
  const searchPar = new URLSearchParams(searchParams.toString());

  // copiem valorile existente (dacă există)

  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => searchPar.append(key, v));
    } else if (value !== undefined && value !== null) {
      searchPar.set(key, value);
    }
  });

  const ifExist = params.some((s) => s.includes("active"));

  if (ifExist) {
    searchPar.set("filters", "status"); // numele câmpului
    searchPar.set("value", "in-progress"); // valoarea }
  }

  const options: IFiltersServiceOrders = mapSearchParamsOptions<IServiceOrder>(
    Object.fromEntries(searchPar.entries())
  );

  const orders = await getDataCachedFromDB<
    IServiceOrderTableProps,
    IFiltersServiceOrders
  >(getServiceOrder, "orders", 60, { ...options });

  const { data } = orders;

  const tableOrders = data.map(ordersTableMapper);
  //   console.log(tableOrders);

  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tableOrders.map((order) => (
        <MyOrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default ActiveProjects;

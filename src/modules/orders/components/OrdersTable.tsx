import { FC } from "react";
import DefaultTableClient from "../../../components/organisms/OrdersTableClient";
import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "@/modules/orders/domain/types/order.types";
import { IFilters } from "@/modules/globals/types/types";
import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";
import { OrdersAction } from "../application/orders.action";

export type IServiceOrderTableProps = {
  data: (IServiceOrder & {
    extraFeaturesTotalPrice: number;
  })[];
  meta: IFilters<IServiceOrder>;
};

interface PageProps {
  searchParams?: Record<string, string | string[]>;
}

const OrdersTable: FC<PageProps> = async ({ searchParams = {} }) => {
  const options: IFiltersServiceOrders =
    mapSearchParamsOptions<IServiceOrder>(searchParams);

  const ordersAction = new OrdersAction();

  const orders = await ordersAction.getAllTableOrders(options);

  const { data, meta } = orders;

  return (
    <DefaultTableClient initialData={data} meta={meta} params={searchParams} />
  );
};

export default OrdersTable;
